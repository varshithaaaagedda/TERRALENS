// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title TerraLensRegistry
 * @dev Tamper-evident, append-only registry for corporate sustainability claim audit proofs.
 * Enterprise-grade on-chain audit registry for autonomous climate forensics.
 * Stores minimal on-chain cryptographic fingerprints, keeping detailed dossiers off-chain.
 */
contract TerraLensRegistry {
    enum VerificationStatus {
        None,
        Supported,
        Contradicted,
        InsufficientEvidence
    }

    struct AuditRecord {
        bytes32 auditId;
        bytes32 evidenceBundleHash;
        string companyName;
        uint256 timestamp;
        VerificationStatus status;
        address submitter;
        uint256 revision;
        bytes32 previousEvidenceHash;
        string amendmentReason;
        bool exists;
    }

    address public owner;
    mapping(address => bool) public authorizedSubmitters;

    // Current latest audit by ID
    mapping(bytes32 => AuditRecord) public audits;
    bytes32[] public auditIds;

    // Full revision history to handle disputes/corrections without erasing past records
    mapping(bytes32 => AuditRecord[]) public auditHistory;

    event AuditRegistered(
        bytes32 indexed auditId,
        string companyName,
        bytes32 indexed evidenceBundleHash,
        VerificationStatus status,
        uint256 timestamp,
        address indexed submitter
    );

    event AuditAmended(
        bytes32 indexed auditId,
        uint256 revision,
        bytes32 indexed newEvidenceHash,
        VerificationStatus newStatus,
        string amendmentReason,
        address indexed submitter
    );

    event SubmitterAuthorized(address indexed submitter, bool status);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    modifier onlyOwner() {
        require(msg.sender == owner, "TerraLens: caller is not the owner");
        _;
    }

    modifier onlyAuthorized() {
        require(msg.sender == owner || authorizedSubmitters[msg.sender], "TerraLens: caller is not authorized");
        _;
    }

    constructor() {
        owner = msg.sender;
        authorizedSubmitters[msg.sender] = true;
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "TerraLens: new owner is zero address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
        authorizedSubmitters[newOwner] = true;
    }

    function setSubmitterAuthorization(address submitter, bool authorized) external onlyOwner {
        require(submitter != address(0), "TerraLens: invalid address");
        authorizedSubmitters[submitter] = authorized;
        emit SubmitterAuthorized(submitter, authorized);
    }

    /**
     * @notice Register a newly completed sustainability audit proof
     * @param auditId Unique identifier derived from claim parameters
     * @param evidenceBundleHash SHA-256 or keccak256 digest of all verified evidence items
     * @param companyName Target company entity name
     * @param status Supported, Contradicted, or InsufficientEvidence
     */
    function registerAudit(
        bytes32 auditId,
        bytes32 evidenceBundleHash,
        string calldata companyName,
        VerificationStatus status
    ) external onlyAuthorized {
        require(auditId != bytes32(0), "TerraLens: invalid auditId");
        require(evidenceBundleHash != bytes32(0), "TerraLens: invalid evidence hash");
        require(bytes(companyName).length > 0, "TerraLens: empty company name");
        require(status != VerificationStatus.None, "TerraLens: status must be specified");
        require(!audits[auditId].exists, "TerraLens: audit already exists, use amendAudit");

        AuditRecord memory record = AuditRecord({
            auditId: auditId,
            evidenceBundleHash: evidenceBundleHash,
            companyName: companyName,
            timestamp: block.timestamp,
            status: status,
            submitter: msg.sender,
            revision: 1,
            previousEvidenceHash: bytes32(0),
            amendmentReason: "",
            exists: true
        });

        audits[auditId] = record;
        auditIds.push(auditId);
        auditHistory[auditId].push(record);

        emit AuditRegistered(
            auditId,
            companyName,
            evidenceBundleHash,
            status,
            block.timestamp,
            msg.sender
        );
    }

    /**
     * @notice Amend an existing audit upon disputed finding or corrected data
     * Appends new record to auditHistory without overwriting historical ledger
     */
    function amendAudit(
        bytes32 auditId,
        bytes32 newEvidenceHash,
        VerificationStatus newStatus,
        string calldata amendmentReason
    ) external onlyAuthorized {
        require(audits[auditId].exists, "TerraLens: audit does not exist");
        require(newEvidenceHash != bytes32(0), "TerraLens: invalid evidence hash");
        require(newStatus != VerificationStatus.None, "TerraLens: status required");
        require(bytes(amendmentReason).length > 0, "TerraLens: amendment reason required");

        AuditRecord storage current = audits[auditId];
        bytes32 prevHash = current.evidenceBundleHash;
        uint256 nextRev = current.revision + 1;

        AuditRecord memory updated = AuditRecord({
            auditId: auditId,
            evidenceBundleHash: newEvidenceHash,
            companyName: current.companyName,
            timestamp: block.timestamp,
            status: newStatus,
            submitter: msg.sender,
            revision: nextRev,
            previousEvidenceHash: prevHash,
            amendmentReason: amendmentReason,
            exists: true
        });

        audits[auditId] = updated;
        auditHistory[auditId].push(updated);

        emit AuditAmended(
            auditId,
            nextRev,
            newEvidenceHash,
            newStatus,
            amendmentReason,
            msg.sender
        );
    }

    /**
     * @notice Verify candidate evidence bundle hash against registered on-chain fingerprint
     */
    function verifyEvidenceHash(bytes32 auditId, bytes32 candidateHash) external view returns (bool) {
        if (!audits[auditId].exists) return false;
        return audits[auditId].evidenceBundleHash == candidateHash;
    }

    function getAudit(bytes32 auditId) external view returns (AuditRecord memory) {
        require(audits[auditId].exists, "TerraLens: audit does not exist");
        return audits[auditId];
    }

    function getAuditHistoryCount(bytes32 auditId) external view returns (uint256) {
        return auditHistory[auditId].length;
    }

    function getAuditHistoryItem(bytes32 auditId, uint256 index) external view returns (AuditRecord memory) {
        require(index < auditHistory[auditId].length, "TerraLens: index out of bounds");
        return auditHistory[auditId][index];
    }

    function getTotalAudits() external view returns (uint256) {
        return auditIds.length;
    }
}
