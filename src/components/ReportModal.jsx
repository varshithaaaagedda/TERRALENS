import React, { useState, useEffect } from 'react';
import { 
  X, 
  Printer, 
  ShieldCheck, 
  Copy, 
  Check, 
  QrCode, 
  Globe2
} from 'lucide-react';

export default function ReportModal({ currentCase, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!currentCase) return null;

  const supportedCount = currentCase.claims.filter(c => c.verdict === 'SUPPORTED').length;
  const contradictedCount = currentCase.claims.filter(c => c.verdict === 'CONTRADICTED').length;
  const insufficientCount = currentCase.claims.filter(c => c.verdict === 'INSUFFICIENT EVIDENCE').length;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCase.blockchainRecord.txHash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="report-modal-dialog animate-fade-in" onClick={(e) => e.stopPropagation()}>
        {/* Modal Controls (Hidden when printing) */}
        <div className="modal-top-bar no-print">
          <div className="modal-badge font-mono">
            <span className="pulse-dot emerald"></span>
            <span>OFFICIAL CLIMATE CLAIMS AUDIT CERTIFICATE</span>
          </div>
          <div className="modal-controls">
            <button className="btn btn-secondary btn-sm" onClick={handlePrint}>
              <Printer size={15} />
              <span>Print / Export PDF</span>
            </button>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close certificate">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Certificate Container Document */}
        <div className="certificate-body">
          {/* Certificate Header */}
          <div className="cert-header">
            <div className="cert-brand">
              <div className="flex items-center gap-2">
                <Globe2 size={24} className="text-emerald" />
                <span className="cert-logo-text">TERRALENS</span>
              </div>
              <span className="cert-subtext">INDEPENDENT CLIMATE INTELLIGENCE & FORENSIC PLATFORM</span>
            </div>
            <div className="cert-id-box font-mono">
              <span className="cert-id-label">CERTIFICATE ID:</span>
              <span className="cert-id-val">TL-{currentCase.id.toUpperCase()}-2026</span>
              <span className="text-[10px] text-slate-500">HASH: {currentCase.blockchainRecord.merkleRoot.slice(0, 18)}...</span>
            </div>
          </div>

          <div className="cert-divider"></div>

          {/* Certificate Main Statement */}
          <div className="cert-title-section">
            <h1 className="cert-main-title">Corporate Climate Assertions Audit Certificate</h1>
            <p className="cert-statement">
              This document certifies that the corporate sustainability assertions published in 
              <strong> "{currentCase.reportTitle}"</strong> have undergone autonomous multi-agent empirical verification against official public environmental registries (EPA Green Power Partnership, EIA Form 860) and independent satellite telemetry (ESA Copernicus & NOAA).
            </p>
          </div>

          {/* Audited Entity Metadata Grid */}
          <div className="cert-target-meta font-sans">
            <div className="meta-col">
              <span className="meta-label font-mono">Audited Organization</span>
              <span className="meta-value font-bold text-slate-900">{currentCase.companyName} ({currentCase.ticker})</span>
            </div>
            <div className="meta-col">
              <span className="meta-label font-mono">Industrial Sector</span>
              <span className="meta-value">{currentCase.sector}</span>
            </div>
            <div className="meta-col">
              <span className="meta-label font-mono">Audit Reporting Cycle</span>
              <span className="meta-value">{currentCase.publicationDate}</span>
            </div>
            <div className="meta-col">
              <span className="meta-label font-mono">Blockchain Finality</span>
              <span className="meta-value font-mono text-emerald-800 font-bold">
                Polygon L2 (Block #{currentCase.blockchainRecord.blockNumber})
              </span>
            </div>
          </div>

          {/* Verdict Score Summary Grid */}
          <div className="cert-summary-grid">
            <div className="cert-verdict-box supported">
              <span className="verdict-number font-mono">{supportedCount}</span>
              <span className="verdict-label">SUPPORTED</span>
              <span className="verdict-hint">Empirically Corroborated</span>
            </div>

            <div className="cert-verdict-box contradicted">
              <span className="verdict-number font-mono">{contradictedCount}</span>
              <span className="verdict-label">CONTRADICTED</span>
              <span className="verdict-hint">Disputed by Ground-Truth</span>
            </div>

            <div className="cert-verdict-box insufficient">
              <span className="verdict-number font-mono">{insufficientCount}</span>
              <span className="verdict-label">INSUFFICIENT EVIDENCE</span>
              <span className="verdict-hint">Ethical Data Vacuum Rule</span>
            </div>

            <div className="cert-verdict-box risk">
              <span className="verdict-number font-mono">{currentCase.verificationScore}/100</span>
              <span className="verdict-label">VERIFICATION SCORE</span>
              <span className="verdict-hint">{currentCase.greenwashingRisk} Risk Profile</span>
            </div>
          </div>

          {/* Executive Forensic Synthesis */}
          <div className="cert-findings-box">
            <h4 className="findings-title font-mono">EXECUTIVE FORENSIC SYNTHESIS</h4>
            <p className="findings-text">{currentCase.summary}</p>
          </div>

          {/* Detailed Claims Breakdown */}
          <div className="cert-claims-breakdown">
            <h4 className="claims-breakdown-title font-mono">DETAILED CLAIMS EVIDENCE AUDIT</h4>
            <div className="claims-cert-table-wrapper">
              <table className="cert-claims-table">
                <thead>
                  <tr>
                    <th>Claim #</th>
                    <th>Corporate Assertion</th>
                    <th>Attributed Sources</th>
                    <th>Status</th>
                    <th>Confidence</th>
                  </tr>
                </thead>
                <tbody>
                  {currentCase.claims.map((claim, idx) => (
                    <tr key={claim.id} className="cert-claim-row">
                      <td className="font-mono font-bold">0{idx + 1}</td>
                      <td>
                        <div className="font-medium text-slate-900 text-xs">"{claim.claimText}"</div>
                        <div className="text-[11px] text-slate-500 mt-1 font-mono">
                          Claimed: {claim.claimMetrics.claimed} • Verified: {claim.claimMetrics.verified}
                        </div>
                      </td>
                      <td>
                        {claim.evidenceSources.map((ev, sIdx) => (
                          <div key={sIdx} className="text-[11px] text-slate-700">
                            • {ev.name} ({ev.reliability}% rel.)
                          </div>
                        ))}
                      </td>
                      <td>
                        <span className={`cert-status-badge ${claim.verdict.toLowerCase().replace(' ', '-')}`}>
                          {claim.verdict}
                        </span>
                      </td>
                      <td className="font-mono font-bold text-xs">{claim.confidence}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Methodological Uncertainties & Caveats */}
          <div className="cert-uncertainties-box">
            <h5 className="font-mono text-xs font-bold text-slate-700">METHODOLOGICAL BOUNDARIES & UNCERTAINTIES</h5>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
              1. Facility-Specific Sourcing Rule: Grid average emissions factor is not applied to penalize facility-specific Power Purchase Agreements (PPAs) or verified EAC retirements conforming to RE100 technical criteria.
              <br />
              2. Annual vs Hourly Netting: Volumetric annual matching does not imply 24/7 hourly granular grid balancing unless explicitly verified by EnergyTag granular certificates.
              <br />
              3. Absence of Records: Missing external registry entries strictly resolve to Insufficient Evidence without defamatory greenwashing labels.
            </p>
          </div>

          {/* Cryptographic Ledger Verification Seal */}
          <div className="cert-blockchain-seal">
            <div className="seal-left">
              <div className="seal-badge-icon">
                <ShieldCheck size={32} className="text-emerald" />
              </div>
              <div>
                <div className="seal-title">Tamper-Evident Ledger Inscription</div>
                <div className="seal-subtitle font-mono text-slate-500 text-xs">
                  Settled on Polygon Amoy Testnet (Chain ID: 80002) • Merkle Evidence State Root
                </div>
                <div className="seal-hash-code font-mono text-xs text-slate-800 flex items-center gap-2">
                  <span>{currentCase.blockchainRecord.txHash}</span>
                  <button 
                    onClick={handleCopy} 
                    className="no-print bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-0.5 rounded text-[10px] inline-flex items-center gap-1 cursor-pointer border border-slate-300"
                    title="Copy Transaction Hash"
                  >
                    {copied ? <Check size={11} className="text-emerald" /> : <Copy size={11} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="seal-qr-box no-print">
              <div className="mock-qr-code">
                <QrCode size={48} className="text-emerald" />
                <span className="qr-label font-mono">AUDIT HASH</span>
              </div>
            </div>
          </div>

          {/* Signatures & Disclaimers */}
          <div className="cert-footer">
            <div className="cert-signature font-mono">
              <span className="sig-role">Multi-Agent Lead Notary:</span>
              <span className="sig-hash">SHA-256 Digest: {currentCase.blockchainRecord.merkleRoot.slice(0, 24)}...</span>
            </div>
            <div className="cert-timestamp font-mono">
              <span>Settlement: {currentCase.blockchainRecord.timestamp}</span>
              <span>•</span>
              <span>18 Independent Validators Consenting</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
