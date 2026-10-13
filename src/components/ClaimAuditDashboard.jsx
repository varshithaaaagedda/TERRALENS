import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  Sparkles, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Binary, 
  Send,
  RefreshCw,
  Satellite
} from 'lucide-react';
import ClaimCard from './ClaimCard';
import { AUDIT_CASES } from '../data/mockData';

export default function ClaimAuditDashboard({ 
  currentCase, 
  setCurrentCase, 
  onRunAudit,
  onOpenReportModal 
}) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [customClaimInput, setCustomClaimInput] = useState('');
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [isAnalyzingCustom, setIsAnalyzingCustom] = useState(false);

  // Filter claims
  const filteredClaims = currentCase.claims.filter(claim => {
    if (activeFilter === 'ALL') return true;
    return claim.verdict === activeFilter;
  });

  const supportedCount = currentCase.claims.filter(c => c.verdict === 'SUPPORTED').length;
  const contradictedCount = currentCase.claims.filter(c => c.verdict === 'CONTRADICTED').length;
  const insufficientCount = currentCase.claims.filter(c => c.verdict === 'INSUFFICIENT EVIDENCE').length;

  const handleCustomAnalyze = (e) => {
    e.preventDefault();
    if (!customClaimInput.trim()) return;

    setIsAnalyzingCustom(true);
    setTimeout(() => {
      // Create dynamically analyzed case
      const newCustomCase = {
        id: "custom-" + Date.now(),
        companyName: "Custom Entity Audit",
        ticker: "USER-INPUT",
        sector: "Cross-Sector Analysis",
        reportTitle: "User Submitted Sustainability Assertion",
        publicationDate: "Live Ingestion",
        reportPages: 1,
        verificationScore: 40,
        greenwashingRisk: "HIGH",
        riskScore: 75,
        summary: "Autonomous forensic investigation of user claim flagged potential phantom offset accounting and lack of empirical boundary coverage.",
        blockchainRecord: {
          blockNumber: 19842105,
          network: "TerraLens Climate Ledger (Polygon L2 Proof)",
          txHash: "0x" + Array.from({length: 64}, () => Math.floor(Math.random()*16).toString(16)).join(''),
          merkleRoot: "0x" + Array.from({length: 64}, () => Math.floor(Math.random()*16).toString(16)).join(''),
          timestamp: new Date().toISOString(),
          validatorCount: 18,
          status: "IMMUTABLE_VERIFIED"
        },
        riskDimensions: {
          offsetQuality: 85,
          scope3Coverage: 75,
          baselineIntegrity: 60,
          empiricalAlignment: 80,
          transparency: 70
        },
        claims: [
          {
            id: "custom-claim-1",
            claimText: customClaimInput,
            category: "Self-Reported Climate Assertion",
            pageReference: "Section 1.0 (Live Ingest)",
            verdict: "CONTRADICTED",
            confidence: 94,
            confidenceReason: "Counter-evidence from independent satellite sensors and registry verification shows significant deviation from reported claims.",
            claimMetrics: {
              claimed: customClaimInput.slice(0, 35) + "...",
              verified: "Disputed by independent telemetry"
            },
            evidenceSources: [
              {
                name: "Copernicus Atmosphere & Earth Observation Constellation",
                type: "Remote Sensing Telemetry",
                finding: "Geospatial telemetry detects ongoing point emissions conflicting with zero-carbon assertions.",
                reliability: 97,
                link: "https://sentinel.esa.int"
              },
              {
                name: "Global GHG Disclosures Forensic Model",
                type: "Registry Audit",
                finding: "Scope 3 emissions accounting omitted key category boundaries.",
                reliability: 92,
                link: "https://ghgprotocol.org"
              }
            ],
            agentAnalysis: {
              inconsistencyType: "Empirical Ground-Truth Discrepancy",
              mechanism: "Reliance on unverified desktop emission factors without sensor calibration.",
              regulatoryWarning: "Subject to verification under EU Green Claims Directive."
            },
            evidenceFingerprint: "sha256:" + Array.from({length: 64}, () => Math.floor(Math.random()*16).toString(16)).join('')
          }
        ]
      };

      setCurrentCase(newCustomCase);
      setIsAnalyzingCustom(false);
      setIsCustomMode(false);
      setCustomClaimInput('');
    }, 1500);
  };

  return (
    <div className="dashboard-content animate-fade-in">
      {/* Case Studies Quick Selector Bar */}
      <div className="selector-bar glass-panel">
        <div className="selector-left">
          <Building2 size={16} className="text-emerald" />
          <span className="selector-label">Investigate Case Study:</span>
          <div className="case-buttons">
            {AUDIT_CASES.map((item) => (
              <button
                key={item.id}
                className={`case-pill-btn ${currentCase.id === item.id ? 'active' : ''}`}
                onClick={() => setCurrentCase(item)}
              >
                <span className="case-name">{item.companyName}</span>
                <span className={`case-risk-tag ${item.greenwashingRisk.toLowerCase()}`}>
                  {item.greenwashingRisk}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="selector-right">
          <button 
            className="btn btn-secondary btn-sm"
            onClick={() => setIsCustomMode(!isCustomMode)}
          >
            <Sparkles size={14} className="text-cyan" />
            <span>{isCustomMode ? "Close Input" : "Audit Custom Claim"}</span>
          </button>
        </div>
      </div>

      {/* Custom Input Drawer */}
      {isCustomMode && (
        <div className="custom-input-card glass-panel animate-fade-in">
          <div className="custom-card-header">
            <div className="custom-title">
              <FileText size={18} className="text-cyan" />
              <span>Paste Custom Sustainability Claim / Report Excerpt</span>
            </div>
            <span className="custom-hint font-mono text-secondary text-sm">
              AI agents will analyze semantics, query telemetry, and generate cryptographic proof.
            </span>
          </div>

          <form onSubmit={handleCustomAnalyze}>
            <textarea
              className="custom-textarea"
              rows={3}
              placeholder="e.g. 'We achieved 100% carbon-neutral operations in 2024 through certified forest protection and eliminated 50% of direct Scope 1 emissions...'"
              value={customClaimInput}
              onChange={(e) => setCustomClaimInput(e.target.value)}
            />
            <div className="custom-actions">
              <div className="quick-presets">
                <span className="preset-label font-mono">Try Example:</span>
                <button
                  type="button"
                  className="preset-btn font-mono"
                  onClick={() => setCustomClaimInput("Achieved net-zero carbon logistics by investing $200M in forest conservation credits across Southeast Asia.")}
                >
                  "Net-zero logistics forest credits"
                </button>
                <button
                  type="button"
                  className="preset-btn font-mono"
                  onClick={() => setCustomClaimInput("Transitioned 100% of data center operations to 24/7 hourly matched carbon-free solar and wind energy.")}
                >
                  "24/7 Hourly carbon-free energy"
                </button>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isAnalyzingCustom || !customClaimInput.trim()}
              >
                {isAnalyzingCustom ? (
                  <>
                    <RefreshCw className="animate-spin" size={15} />
                    <span>Investigating with AI Swarm...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Run Live AI Investigation</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Audited Entity Hero Banner */}
      <div className="entity-hero-card glass-panel">
        <div className="entity-left">
          <div className="entity-meta-tags">
            <span className="sector-badge">{currentCase.sector}</span>
            <span className="ticker-badge font-mono">{currentCase.ticker}</span>
            <span className="pages-badge font-mono">{currentCase.reportPages} Pages Audited</span>
            <span className="date-badge font-mono">{currentCase.publicationDate}</span>
          </div>

          <h2 className="entity-name">{currentCase.companyName}</h2>
          <h3 className="report-title font-medium text-secondary">
            "{currentCase.reportTitle}"
          </h3>

          <p className="entity-summary">
            {currentCase.summary}
          </p>

          <div className="hero-button-row">
            <button className="btn btn-primary btn-sm" onClick={onRunAudit}>
              <Sparkles size={15} />
              <span>Re-run Swarm Verification</span>
            </button>
            <button className="btn btn-secondary btn-sm" onClick={onOpenReportModal}>
              <FileText size={15} className="text-emerald" />
              <span>View Executive Certificate</span>
            </button>
          </div>
        </div>

        {/* Entity Risk & Score Box */}
        <div className="entity-score-box">
          <div className="risk-indicator-group">
            <div className="risk-badge-big">
              <span className="risk-sub-label">GREENWASHING RISK</span>
              <span className={`risk-grade font-mono ${currentCase.greenwashingRisk === 'HIGH' ? 'text-red' : 'text-emerald'}`}>
                {currentCase.greenwashingRisk}
              </span>
              <span className="risk-score-sub font-mono">Index: {currentCase.riskScore}/100</span>
            </div>
          </div>

          <div className="claims-tally-row">
            <div className="tally-item contradicted">
              <span className="tally-num font-mono">{contradictedCount}</span>
              <span className="tally-label">Contradicted</span>
            </div>
            <div className="tally-item insufficient">
              <span className="tally-num font-mono">{insufficientCount}</span>
              <span className="tally-label">Insufficient</span>
            </div>
            <div className="tally-item supported">
              <span className="tally-num font-mono">{supportedCount}</span>
              <span className="tally-label">Supported</span>
            </div>
          </div>
        </div>
      </div>

      {/* Claims Filter and Section Title */}
      <div className="claims-section-header">
        <div className="section-title-wrap">
          <Search size={18} className="text-emerald" />
          <h3 className="section-heading">Detailed Claims Verification Dossier</h3>
          <span className="claims-count font-mono text-secondary">
            ({filteredClaims.length} of {currentCase.claims.length} Claims Displayed)
          </span>
        </div>

        {/* Filter Pills */}
        <div className="filter-pills">
          <button 
            className={`filter-btn ${activeFilter === 'ALL' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ALL')}
          >
            All Claims ({currentCase.claims.length})
          </button>
          <button 
            className={`filter-btn contradicted ${activeFilter === 'CONTRADICTED' ? 'active' : ''}`}
            onClick={() => setActiveFilter('CONTRADICTED')}
          >
            <XCircle size={14} />
            <span>Contradicted ({contradictedCount})</span>
          </button>
          <button 
            className={`filter-btn insufficient ${activeFilter === 'INSUFFICIENT EVIDENCE' ? 'active' : ''}`}
            onClick={() => setActiveFilter('INSUFFICIENT EVIDENCE')}
          >
            <AlertTriangle size={14} />
            <span>Insufficient Evidence ({insufficientCount})</span>
          </button>
          <button 
            className={`filter-btn supported ${activeFilter === 'SUPPORTED' ? 'active' : ''}`}
            onClick={() => setActiveFilter('SUPPORTED')}
          >
            <CheckCircle2 size={14} />
            <span>Supported ({supportedCount})</span>
          </button>
        </div>
      </div>

      {/* Claims List Cards */}
      <div className="claims-list">
        {filteredClaims.map((claim, index) => (
          <ClaimCard key={claim.id} claim={claim} index={index} />
        ))}
      </div>

      {/* Satellite Telemetry & Verification Trust Bar */}
      <div className="trust-footer-bar glass-panel font-mono">
        <div className="trust-item">
          <Satellite size={16} className="text-cyan" />
          <span>Independent Telemetry Sources: ESA Copernicus Sentinel-2/5P • NOAA VIIRS • EPA CAMD • EnergyTag</span>
        </div>
        <div className="trust-item">
          <Binary size={16} className="text-violet" />
          <span>Blockchain Integrity Root: {currentCase.blockchainRecord.merkleRoot.slice(0, 20)}...</span>
        </div>
      </div>
    </div>
  );
}
