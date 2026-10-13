import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Fingerprint, 
  ShieldAlert, 
  Database, 
  Copy, 
  Check
} from 'lucide-react';

export default function ClaimCard({ claim, index }) {
  const [isExpanded, setIsExpanded] = useState(index === 0);
  const [copiedHash, setCopiedHash] = useState(false);

  const getVerdictBadge = (verdict) => {
    switch (verdict) {
      case 'SUPPORTED':
        return (
          <span className="badge-status supported">
            <CheckCircle2 size={14} />
            <span>Supported</span>
          </span>
        );
      case 'CONTRADICTED':
        return (
          <span className="badge-status contradicted">
            <XCircle size={14} />
            <span>Contradicted</span>
          </span>
        );
      case 'INSUFFICIENT EVIDENCE':
      default:
        return (
          <span className="badge-status insufficient">
            <AlertTriangle size={14} />
            <span>Insufficient Evidence</span>
          </span>
        );
    }
  };

  const copyHash = (hash) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <div className={`claim-card glass-panel ${claim.verdict.toLowerCase()}-accent`}>
      {/* Top Header of Claim Card */}
      <div className="claim-card-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="claim-meta-row">
          <div className="claim-tags">
            <span className="claim-index font-mono">Claim #{index + 1}</span>
            <span className="claim-category">{claim.category}</span>
            <span className="claim-page-ref font-mono">{claim.pageReference}</span>
          </div>
          <div className="verdict-wrapper">
            {getVerdictBadge(claim.verdict)}
            <div className="expand-trigger">
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
          </div>
        </div>

        {/* Claim text quote */}
        <blockquote className="claim-quote">
          "{claim.claimText}"
        </blockquote>

        {/* Quick summary comparison strip */}
        <div className="metrics-strip">
          <div className="metric-box claimed">
            <span className="metric-label">Reported Claim</span>
            <span className="metric-val">{claim.claimMetrics.claimed}</span>
          </div>
          <div className="metric-arrow">→</div>
          <div className={`metric-box verified ${claim.verdict.toLowerCase()}`}>
            <span className="metric-label">Independent Ground-Truth</span>
            <span className="metric-val">{claim.claimMetrics.verified}</span>
          </div>
          <div className="confidence-pill">
            <span className="confidence-label">AI Confidence</span>
            <span className="confidence-num font-mono">{claim.confidence}%</span>
          </div>
        </div>
      </div>

      {/* Expandable Forensic Dossier */}
      {isExpanded && (
        <div className="claim-expanded-dossier animate-fade-in">
          {/* Section: Ground Truth Sources */}
          <div className="dossier-section">
            <div className="dossier-section-title">
              <Database size={15} className="text-cyan" />
              <span>Independent Telemetry & Counter-Evidence Sources</span>
            </div>

            <div className="evidence-sources-grid">
              {claim.evidenceSources.map((source, sIdx) => (
                <div key={sIdx} className="evidence-source-card">
                  <div className="source-header">
                    <span className="source-name">{source.name}</span>
                    <span className="source-type-pill">{source.type}</span>
                  </div>
                  <p className="source-finding">{source.finding}</p>
                  <div className="source-footer">
                    <span className="reliability-tag font-mono">
                      Reliability Score: {source.reliability}%
                    </span>
                    <a 
                      href={source.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="source-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Inspect Registry</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: AI Agent Forensic Inconsistency Mechanism */}
          <div className="dossier-section">
            <div className="dossier-section-title">
              <ShieldAlert size={15} className="text-amber" />
              <span>AI Agent Inconsistency Forensic Assessment</span>
            </div>
            
            <div className="forensic-box">
              <div className="forensic-row">
                <span className="forensic-key">Detection Pattern:</span>
                <span className="forensic-val highlight-bold">{claim.agentAnalysis.inconsistencyType}</span>
              </div>
              <div className="forensic-row">
                <span className="forensic-key">Greenwashing Mechanism:</span>
                <span className="forensic-val">{claim.agentAnalysis.mechanism}</span>
              </div>
              <div className="forensic-row warning-row">
                <span className="forensic-key">Regulatory Scrutiny:</span>
                <span className="forensic-val text-amber-bright">{claim.agentAnalysis.regulatoryWarning}</span>
              </div>
            </div>
          </div>

          {/* Section: Cryptographic Fingerprint */}
          <div className="fingerprint-bar font-mono">
            <div className="fingerprint-left">
              <Fingerprint size={16} className="text-violet" />
              <span className="fingerprint-label">SHA-256 Proof Fingerprint:</span>
              <span className="fingerprint-code">{claim.evidenceFingerprint}</span>
            </div>
            <button 
              className="copy-hash-btn"
              onClick={() => copyHash(claim.evidenceFingerprint)}
              title="Copy cryptographic proof hash"
            >
              {copiedHash ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
              <span>{copiedHash ? "Copied" : "Copy Hash"}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
