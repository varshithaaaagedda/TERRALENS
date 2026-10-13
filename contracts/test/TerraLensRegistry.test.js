const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerraLensRegistry Smart Contract", function () {
  let TerraLensRegistry;
  let registry;
  let owner;
  let submitter;
  let unauthorizedUser;

  const sampleAuditId = ethers.keccak256(ethers.toUtf8Bytes("AUDIT-MICROSOFT-RENEWABLE-2024"));
  const sampleEvidenceHash = ethers.keccak256(ethers.toUtf8Bytes("EVIDENCE-BUNDLE-PAYLOAD-001"));
  const amendedEvidenceHash = ethers.keccak256(ethers.toUtf8Bytes("EVIDENCE-BUNDLE-PAYLOAD-002-CORRECTED"));
  const companyName = "Microsoft Corporation";

  // VerificationStatus: 0=None, 1=Supported, 2=Contradicted, 3=InsufficientEvidence
  const STATUS_SUPPORTED = 1;
  const STATUS_CONTRADICTED = 2;
  const STATUS_INSUFFICIENT = 3;

  beforeEach(async function () {
    [owner, submitter, unauthorizedUser] = await ethers.getSigners();
    TerraLensRegistry = await ethers.getContractFactory("TerraLensRegistry");
    registry = await TerraLensRegistry.deploy();
    await registry.waitForDeployment();

    // Authorize submitter
    await registry.setSubmitterAuthorization(submitter.address, true);
  });

  it("Should set deployer as initial owner and authorized submitter", async function () {
    expect(await registry.owner()).to.equal(owner.address);
    expect(await registry.authorizedSubmitters(owner.address)).to.be.true;
    expect(await registry.authorizedSubmitters(submitter.address)).to.be.true;
  });

  it("Should allow authorized submitter to register an audit proof", async function () {
    const tx = await registry.connect(submitter).registerAudit(
      sampleAuditId,
      sampleEvidenceHash,
      companyName,
      STATUS_SUPPORTED
    );

    await expect(tx)
      .to.emit(registry, "AuditRegistered")
      .withArgs(sampleAuditId, companyName, sampleEvidenceHash, STATUS_SUPPORTED, (val) => val > 0, submitter.address);

    const record = await registry.getAudit(sampleAuditId);
    expect(record.companyName).to.equal(companyName);
    expect(record.evidenceBundleHash).to.equal(sampleEvidenceHash);
    expect(record.status).to.equal(STATUS_SUPPORTED);
    expect(record.revision).to.equal(1);
    expect(record.exists).to.be.true;
  });

  it("Should reject audit registration from unauthorized caller", async function () {
    await expect(
      registry.connect(unauthorizedUser).registerAudit(
        sampleAuditId,
        sampleEvidenceHash,
        companyName,
        STATUS_SUPPORTED
      )
    ).to.be.revertedWith("TerraLens: caller is not authorized");
  });

  it("Should reject duplicate registration of same auditId (must use amendAudit)", async function () {
    await registry.connect(submitter).registerAudit(
      sampleAuditId,
      sampleEvidenceHash,
      companyName,
      STATUS_SUPPORTED
    );

    await expect(
      registry.connect(submitter).registerAudit(
        sampleAuditId,
        sampleEvidenceHash,
        companyName,
        STATUS_SUPPORTED
      )
    ).to.be.revertedWith("TerraLens: audit already exists, use amendAudit");
  });

  it("Should verify valid evidence hash matches registered on-chain fingerprint", async function () {
    await registry.connect(submitter).registerAudit(
      sampleAuditId,
      sampleEvidenceHash,
      companyName,
      STATUS_SUPPORTED
    );

    const isMatch = await registry.verifyEvidenceHash(sampleAuditId, sampleEvidenceHash);
    expect(isMatch).to.be.true;

    const fakeHash = ethers.keccak256(ethers.toUtf8Bytes("TAMPERED-PAYLOAD"));
    const isFakeMatch = await registry.verifyEvidenceHash(sampleAuditId, fakeHash);
    expect(isFakeMatch).to.be.false;
  });

  it("Should support audit amendments and retain historical versions without erasure", async function () {
    await registry.connect(submitter).registerAudit(
      sampleAuditId,
      sampleEvidenceHash,
      companyName,
      STATUS_SUPPORTED
    );

    // Now dispute / correct:
    const disputeReason = "Corrected with NREL hourly nodal telemetry proving 12% non-additionality in PJM region";
    await registry.connect(submitter).amendAudit(
      sampleAuditId,
      amendedEvidenceHash,
      STATUS_INSUFFICIENT,
      disputeReason
    );

    const latest = await registry.getAudit(sampleAuditId);
    expect(latest.revision).to.equal(2);
    expect(latest.status).to.equal(STATUS_INSUFFICIENT);
    expect(latest.evidenceBundleHash).to.equal(amendedEvidenceHash);
    expect(latest.previousEvidenceHash).to.equal(sampleEvidenceHash);
    expect(latest.amendmentReason).to.equal(disputeReason);

    // Verify history retained 2 records:
    const historyCount = await registry.getAuditHistoryCount(sampleAuditId);
    expect(historyCount).to.equal(2);

    const initialRevision = await registry.getAuditHistoryItem(sampleAuditId, 0);
    expect(initialRevision.revision).to.equal(1);
    expect(initialRevision.evidenceBundleHash).to.equal(sampleEvidenceHash);
  });
});
