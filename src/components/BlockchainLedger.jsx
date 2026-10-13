import React, { useState } from 'react';
import { 
  Binary, 
  ShieldCheck, 
  ShieldX, 
  CheckCircle2, 
  Lock, 
  Search, 
  Layers, 
  Cpu, 
  Hash, 
  RefreshCw, 
  GitBranch, 
  Copy, 
  Check
} from 'lucide-react';
import { LIVE_LEDGER_FEED } from '../data/mockData';
import { verifyAuditHash } from '../services/api';

export default function BlockchainLedger({ currentCase }) {
  const [testHash, setTestHash] = useState(currentCase?.blockchainRecord?.txHash || "");
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState({
    checked: true,
    isValid: true,
    block: currentCase?.blockchainRecord?.blockNumber || 19842104,
    timestamp: currentCase?.blockchainRecord?.timestamp || "2024-10-12T14:32:18Z",
    merkleRoot: currentCase?.blockchainRecord?.merkleRoot || "0x4ca170f3b0e2518e9a117d6b82ce994b7c631e50821c97a22ff5d5904ea8b193",
    validators: currentCase?.blockchainRecord?.validatorCount || 28
  });
  const [copiedTx, setCopiedTx] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!testHash.trim()) return;

    setIsVerifying(true);

    try {
      // Call backend API if possible
      const apiResult = await verifyAuditHash(currentCase?.id, testHash);
      if (apiResult) {
        setVerificationResult({
          checked: true,
          isValid: apiResult.is_valid,
          block: apiResult.block_number || 19842104,
          timestamp: new Date().toISOString(),
          merkleRoot: apiResult.registered_hash || currentCase?.blockchainRecord?.merkleRoot,
          validators: apiResult.is_valid ? 28 : 0
        });
      } else {
        // Fallback local verification
        const isMatched = testHash.toLowerCase() === (currentCase?.blockchainRecord?.txHash || "").toLowerCase() ||
                          testHash.toLowerCase() === (currentCase?.blockchainRecord?.merkleRoot || "").toLowerCase();

        setVerificationResult({
          checked: true,
          isValid: isMatched,
          block: isMatched ? currentCase?.blockchainRecord?.blockNumber || 19842104 : null,
          timestamp: isMatched ? currentCase?.blockchainRecord?.timestamp : null,
          merkleRoot: isMatched ? currentCase?.blockchainRecord?.merkleRoot : null,
          validators: isMatched ? 28 : 0
        });
      }
    } finally {
      setIsVerifying(false);
    }
  };

  const loadCaseHash = () => {
    if (currentCase?.blockchainRecord?.txHash) {
      setTestHash(currentCase.blockchainRecord.txHash);
      setVerificationResult({
        checked: true,
        isValid: true,
        block: currentCase.blockchainRecord.blockNumber,
        timestamp: currentCase.blockchainRecord.timestamp,
        merkleRoot: currentCase.blockchainRecord.merkleRoot,
        validators: currentCase.blockchainRecord.validatorCount
      });
    }
  };

  const loadTamperedHash = () => {
    const tampered = "0xdeadbeef99990000111122223333444455556666777788889999aaaabbbbcccc";
    setTestHash(tampered);
    setVerificationResult({
      checked: true,
      isValid: false,
      block: null,
      timestamp: null,
      merkleRoot: null,
      validators: 0
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedTx(true);
    setTimeout(() => setCopiedTx(false), 2000);
  };

  return (
    <div className="ledger-view animate-fade-in">
      {/* Overview Stat Cards */}
      <div className="ledger-stats-grid">
        <div className="stat-card glass-surface">
          <div className="stat-icon-wrapper text-violet">
            <Binary size={22} />
          </div>
          <div>
            <div className="stat-label font-mono">LEDGER PROTOCOL</div>
            <div className="stat-value">Polygon Amoy Testnet</div>
            <div className="stat-sub font-mono">Chain ID: 80002 • Solidity 0.8.20</div>
          </div>
        </div>

        <div className="stat-card glass-surface">
          <div className="stat-icon-wrapper text-emerald">
            <ShieldCheck size={22} />
          </div>
          <div>
            <div className="stat-label font-mono">VERIFIED AUDIT PROOFS</div>
            <div className="stat-value font-mono">14,291 Inscribed</div>
            <div className="stat-sub text-emerald font-mono">100% Cryptographic Integrity</div>
          </div>
        </div>

        <div className="stat-card glass-surface">
          <div className="stat-icon-wrapper text-cyan">
            <Cpu size={22} />
          </div>
          <div>
            <div className="stat-label font-mono">VALIDATOR QUORUM</div>
            <div className="stat-value font-mono">28 Node Quorum</div>
            <div className="stat-sub">Universities & Climate Research Labs</div>
          </div>
        </div>

        <div className="stat-card glass-surface">
          <div className="stat-icon-wrapper text-amber">
            <Lock size={22} />
          </div>
          <div>
            <div className="stat-label font-mono">APPEND-ONLY IMMUTABILITY</div>
            <div className="stat-value">SHA-256 Merkle</div>
            <div className="stat-sub font-mono">Historical revisions preserved</div>
          </div>
        </div>
      </div>

      {/* Interactive Cryptographic Verification Playground */}
      <div className="verifier-section glass-surface">
        <div className="verifier-header">
          <div className="verifier-title-group">
            <div className="badge-science font-mono">
              <Lock size={13} className="text-violet" />
              <span>INDEPENDENT VERIFICATION CONSOLE</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-1">Verify Audit Integrity & Merkle Fingerprint</h3>
            <p className="text-xs text-slate-600 mt-1">
              Validate any corporate sustainability audit hash against the decentralized ledger. Any post-publication tampering with claims, dates, or evidence will trigger an instant hash mismatch.
            </p>
          </div>

          <div className="quick-fill-buttons">
            <button className="btn btn-secondary btn-sm" onClick={loadCaseHash}>
              <CheckCircle2 size={14} className="text-emerald" />
              <span>Load Current Case Hash</span>
            </button>
            <button className="btn btn-secondary btn-sm" onClick={loadTamperedHash}>
              <ShieldX size={14} className="text-rose-600" />
              <span>Test Altered / Tampered Hash</span>
            </button>
          </div>
        </div>

        <form onSubmit={handleVerify} className="verify-input-form">
          <div className="input-group">
            <Hash size={18} className="input-icon text-violet" />
            <input 
              type="text" 
              className="hash-input font-mono"
              placeholder="Enter 0x Transaction Hash or SHA-256 Evidence Root..."
              value={testHash}
              onChange={(e) => setTestHash(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-blockchain" disabled={isVerifying}>
            {isVerifying ? (
              <RefreshCw size={16} className="animate-spin" />
            ) : (
              <Search size={16} />
            )}
            <span>Verify Proof</span>
          </button>
        </form>

        {/* Verification Result Banner */}
        {verificationResult.checked && (
          <div className={`verification-badge-box ${verificationResult.isValid ? 'valid-proof' : 'tampered-proof'} animate-fade-in`}>
            {verificationResult.isValid ? (
              <div className="proof-content">
                <div className="proof-icon-box text-emerald">
                  <ShieldCheck size={36} />
                </div>
                <div className="proof-details">
                  <div className="proof-status-row">
                    <span className="proof-status-title">CRYPTOGRAPHIC INTEGRITY CONFIRMED</span>
                    <span className="badge-status supported font-mono">VALID & UNALTERED</span>
                  </div>
                  <p className="proof-desc">
                    This audit report matches the cryptographic state root registered on-chain. No post-registration alteration or retrospective greenwashing has occurred.
                  </p>
                  <div className="proof-meta-grid font-mono text-xs">
                    <div>
                      <span className="meta-k">Block Height:</span>
                      <span className="meta-v">#{verificationResult.block}</span>
                    </div>
                    <div>
                      <span className="meta-k">Timestamp:</span>
                      <span className="meta-v">{verificationResult.timestamp}</span>
                    </div>
                    <div>
                      <span className="meta-k">Validator Quorum:</span>
                      <span className="meta-v">{verificationResult.validators}/28 Consenting</span>
                    </div>
                    <div>
                      <span className="meta-k">Merkle State Root:</span>
                      <div className="flex items-center gap-1">
                        <span className="meta-v truncate">{verificationResult.merkleRoot}</span>
                        {verificationResult.merkleRoot && (
                          <button 
                            onClick={() => copyToClipboard(verificationResult.merkleRoot)}
                            className="text-slate-400 hover:text-slate-600 cursor-pointer"
                            title="Copy Root"
                          >
                            {copiedTx ? <Check size={12} className="text-emerald" /> : <Copy size={12} />}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="proof-content">
                <div className="proof-icon-box text-rose-600">
                  <ShieldX size={36} />
                </div>
                <div className="proof-details">
                  <div className="proof-status-row">
                    <span className="proof-status-title text-rose-600">HASH MISMATCH / TAMPERING DETECTED</span>
                    <span className="badge-status contradicted font-mono">INVALID PROOF</span>
                  </div>
                  <p className="proof-desc">
                    The provided transaction or evidence digest does NOT correspond to any verified state transition in the TerraLens ledger. The underlying report or claim metadata appears altered or fabricated.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Visual Merkle Tree Diagram */}
        <div className="merkle-diagram-box">
          <div className="diagram-header font-mono">
            <GitBranch size={16} className="text-violet" />
            <span className="diagram-title">Hierarchical Merkle Evidence Tree Architecture</span>
          </div>
          
          <div className="merkle-tree-flow font-mono">
            <div className="tree-level level-root">
              <div className="tree-node root-node">
                <span className="node-type">BLOCK STATE ROOT</span>
                <span className="node-hash">{currentCase?.blockchainRecord?.merkleRoot?.slice(0, 24)}...</span>
              </div>
            </div>
            <div className="tree-connector">↕</div>
            <div className="tree-level level-branches">
              <div className="tree-node branch-node">
                <span className="node-type">BRANCH A: Satellite Telemetry</span>
                <span className="node-hash">0x78a1...3f9e</span>
              </div>
              <div className="tree-node branch-node">
                <span className="node-type">BRANCH B: Claims Verdicts</span>
                <span className="node-hash">0x992b...e41c</span>
              </div>
            </div>
            <div className="tree-connector">↕</div>
            <div className="tree-level level-leaves">
              <div className="tree-node leaf-node">
                <span className="node-type">LEAF: EPA GPP Registry</span>
                <span className="node-hash">sha256:d48e...94a0</span>
              </div>
              <div className="tree-node leaf-node">
                <span className="node-type">LEAF: EIA Form 860 Inventory</span>
                <span className="node-hash">sha256:88fb...21ba</span>
              </div>
              <div className="tree-node leaf-node">
                <span className="node-type">LEAF: RE100 Disclosures</span>
                <span className="node-hash">sha256:3261...8e52</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Ledger Inscriptions Table */}
      <div className="ledger-table-container glass-surface">
        <div className="table-header">
          <div className="table-title-group">
            <Layers size={18} className="text-sky-600" />
            <h3 className="text-base font-bold text-slate-900">Recent Immutable Audit Registrations</h3>
          </div>
          <span className="font-mono text-slate-500 text-xs">Streaming Live Polygon Testnet Blocks</span>
        </div>

        <div className="table-responsive">
          <table className="ledger-table font-sans">
            <thead>
              <tr className="font-mono text-xs">
                <th>Block #</th>
                <th>Audited Entity</th>
                <th>Target Assertion</th>
                <th>Audit Verdict</th>
                <th>Transaction Fingerprint</th>
                <th>Time</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {LIVE_LEDGER_FEED.map((entry, idx) => (
                <tr key={idx} className="ledger-row">
                  <td className="font-mono font-bold text-violet">#{entry.block}</td>
                  <td className="font-semibold text-slate-900">{entry.company}</td>
                  <td className="claim-snippet-col text-slate-600">"{entry.claimSnippet}"</td>
                  <td>
                    <span className={`badge-status ${entry.verdict.toLowerCase().replace(' ', '-')}`}>
                      {entry.verdict}
                    </span>
                  </td>
                  <td className="font-mono truncate-cell">{entry.fingerprint}</td>
                  <td className="text-slate-500 text-xs font-mono">{entry.timestamp}</td>
                  <td>
                    <span className="committed-tag font-mono">
                      <span className="pulse-dot emerald"></span>
                      <span>COMMITTED</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
