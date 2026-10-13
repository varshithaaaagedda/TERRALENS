import React, { useState } from 'react';
import { 
  Globe2, 
  Search, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ArrowRight, 
  Satellite, 
  Database, 
  Lock, 
  Sparkles, 
  FileCheck2, 
  Scale, 
  Activity, 
  Compass, 
  Fingerprint, 
  ChevronRight
} from 'lucide-react';
import { AUDIT_CASES } from '../data/mockData';

export default function LandingPage({ 
  onStartInvestigation, 
  onExploreSample,
  onOpenReportModal 
}) {
  const [selectedPreviewCase, setSelectedPreviewCase] = useState(AUDIT_CASES[0] || null); // Microsoft
  const sampleCases = AUDIT_CASES.slice(0, 3); // Microsoft, Veritas, AeroGlobal

  return (
    <div className="landing-page-root animate-fade-in">
      {/* =========================================================================
          HERO VIEWPORT (Cinematic Dark Forest Background + Copernicus Telemetry)
         ========================================================================= */}
      <section className="hero-cinematic-viewport">
        {/* Ambient Atmospheric Glow & Orbital Horizon Backdrop */}
        <div className="hero-orbital-backdrop">
          <img 
            src="/hero-earth.jpg" 
            alt="Earth Atmospheric Telemetry - Copernicus Sentinel Observation" 
            className="hero-earth-image"
          />
          <div className="hero-orbital-overlay"></div>
          <div className="hero-geospatial-grid"></div>
        </div>

        <div className="container hero-content-relative">
          {/* Platform Identity Badge & Telemetry Live Ping */}
          <div className="hero-badge-row">
            <div className="platform-intel-tag font-mono">
              <span className="beacon-dot beacon-dot-emerald"></span>
              <span>AI-POWERED CLIMATE INTELLIGENCE</span>
            </div>
            <div className="telemetry-pill font-mono hidden-mobile">
              <Satellite size={13} className="text-cyan" />
              <span>COPERNICUS SENTINEL-5P & EPA GPP REGISTRY INTEGRATED</span>
            </div>
          </div>

          <div className="hero-grid-split">
            {/* Left Headline & Action Column */}
            <div className="hero-text-column">
              <h1 className="hero-main-headline">
                See Beyond <br />
                <span className="headline-gradient-text">
                  Sustainability Claims.
                </span>
              </h1>

              <p className="hero-description">
                An autonomous climate intelligence platform that investigates corporate environmental assertions. We extract quantifiable targets, cross-check official public energy registries and satellite telemetry, and commit tamper-evident cryptographic proofs to the blockchain.
              </p>

              {/* Primary Call-to-Actions */}
              <div className="hero-cta-group">
                <button 
                  className="btn btn-primary btn-hero-lg group"
                  onClick={onStartInvestigation}
                  id="hero-start-investigation-cta"
                >
                  <Search size={18} />
                  <span>Start an Investigation</span>
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </button>

                <button 
                  className="btn btn-hero-secondary btn-hero-lg"
                  onClick={() => onExploreSample('microsoft')}
                  id="hero-explore-sample-cta"
                >
                  <Sparkles size={18} className="text-cyan" />
                  <span>Explore a Sample Audit</span>
                </button>
              </div>

              {/* Scientific Principles Micro-Badges */}
              <div className="hero-commitments-bar font-mono">
                <div className="commitment-item">
                  <CheckCircle2 size={15} className="text-emerald" />
                  <span>0% Hallucinated Citations</span>
                </div>
                <div className="commitment-item">
                  <ShieldCheck size={15} className="text-cyan" />
                  <span>Strict Insufficient-Evidence Rule</span>
                </div>
                <div className="commitment-item">
                  <Lock size={15} className="text-violet" />
                  <span>Polygon L2 Verification</span>
                </div>
              </div>
            </div>

            {/* Right Column: Elegant Floating Evidence Status Preview Card */}
            <div className="hero-preview-column">
              <div className="evidence-preview-floating-card glass-forest animate-float">
                <div className="floating-card-header font-mono">
                  <div className="flex items-center gap-2">
                    <span className="status-live-dot"></span>
                    <span className="text-xs font-bold text-slate-300">LIVE REGISTRY CORROBORATION</span>
                  </div>
                  <span className="card-block-badge">BLOCK #{selectedPreviewCase?.blockchainRecord?.blockNumber || 19842104}</span>
                </div>

                <div className="floating-card-body">
                  <div className="preview-company-row">
                    <div>
                      <span className="preview-label font-mono">TARGET AUDIT</span>
                      <h4 className="preview-company-name">{selectedPreviewCase?.companyName}</h4>
                    </div>
                    <span className={`status-pill ${selectedPreviewCase?.claims[0]?.verdict.toLowerCase().replace(' ', '-')}`}>
                      {selectedPreviewCase?.claims[0]?.verdict === 'SUPPORTED' ? (
                        <CheckCircle2 size={13} />
                      ) : selectedPreviewCase?.claims[0]?.verdict === 'CONTRADICTED' ? (
                        <XCircle size={13} />
                      ) : (
                        <AlertTriangle size={13} />
                      )}
                      <span>{selectedPreviewCase?.claims[0]?.verdict}</span>
                    </span>
                  </div>

                  <blockquote className="preview-claim-quote">
                    "{selectedPreviewCase?.claims[0]?.claimText}"
                  </blockquote>

                  <div className="preview-evidence-strip">
                    <div className="preview-strip-col">
                      <span className="strip-label font-mono">Official Source:</span>
                      <span className="strip-val">{selectedPreviewCase?.claims[0]?.evidenceSources[0]?.name || 'EPA GPP Registry'}</span>
                    </div>
                    <div className="preview-strip-col text-right">
                      <span className="strip-label font-mono">Evidence Reliability:</span>
                      <span className="strip-val font-mono text-emerald font-bold">
                        {selectedPreviewCase?.claims[0]?.evidenceSources[0]?.reliability || 98}% Verified
                      </span>
                    </div>
                  </div>

                  <div className="preview-hash-row font-mono">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Fingerprint size={13} className="text-cyan" />
                      <span className="truncate max-w-[200px]">{selectedPreviewCase?.blockchainRecord?.merkleRoot || '0x4ca1...8b193'}</span>
                    </div>
                    <button 
                      className="preview-inspect-btn"
                      onClick={() => onExploreSample(selectedPreviewCase.id)}
                    >
                      <span>Inspect Dossier →</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE THREE-WAY VERIFICATION STANDARD (Rigorous Neutrality Section)
         ========================================================================= */}
      <section className="section-verification-standard">
        <div className="container">
          <div className="section-head text-center max-w-3xl mx-auto">
            <span className="section-eyebrow font-mono">EVIDENCE-BASED INTEGRITY</span>
            <h2 className="section-title">The Three-Way Verification Standard</h2>
            <p className="section-lead">
              TerraLens adheres to scientific neutrality. A company is <strong>never</strong> labeled guilty of greenwashing simply because public data is absent. We categorize every finding strictly across three empirical outcomes:
            </p>
          </div>

          <div className="standards-cards-grid">
            {/* Card 1: Supported */}
            <div className="standard-card border-supported">
              <div className="standard-card-icon icon-supported">
                <CheckCircle2 size={26} />
              </div>
              <div className="standard-status-badge supported font-mono">SUPPORTED</div>
              <h3 className="standard-card-heading">Empirically Corroborated</h3>
              <p className="standard-card-desc">
                Reliable public environmental registries, government generator inventories (EIA Form 860), or EnergyTag granular certificates directly substantiate reported operational boundaries and procurement volumes.
              </p>
              <div className="standard-card-example font-mono">
                <span className="example-label">Demonstration:</span>
                <span className="example-company">Microsoft Corporation (EPA GPP 26.45B kWh verified)</span>
              </div>
            </div>

            {/* Card 2: Contradicted */}
            <div className="standard-card border-contradicted">
              <div className="standard-card-icon icon-contradicted">
                <XCircle size={26} />
              </div>
              <div className="standard-status-badge contradicted font-mono">CONTRADICTED</div>
              <h3 className="standard-card-heading">Disputed by Ground-Truth</h3>
              <p className="standard-card-desc">
                Independent satellite observations (Copernicus Sentinel-2 canopy scans, NOAA VIIRS flaring radiometry) or official utility billing directly conflict with public commitments (e.g. claiming 100% clean power with 85% fossil grid draw).
              </p>
              <div className="standard-card-example font-mono">
                <span className="example-label">Demonstration:</span>
                <span className="example-company">AeroGlobal SkyWays (14.2% verified vs 100% claimed)</span>
              </div>
            </div>

            {/* Card 3: Insufficient Evidence */}
            <div className="standard-card border-insufficient">
              <div className="standard-card-icon icon-insufficient">
                <AlertTriangle size={26} />
              </div>
              <div className="standard-status-badge insufficient font-mono">INSUFFICIENT EVIDENCE</div>
              <h3 className="standard-card-heading">Ethical Data Vacuum Standard</h3>
              <p className="standard-card-desc">
                Official repositories lack filed documentation or verifiable certificates. TerraLens explicitly distinguishes incomplete data from fraudulent greenwashing, presenting transparent limitations without biased accusations.
              </p>
              <div className="standard-card-example font-mono">
                <span className="example-label">Demonstration:</span>
                <span className="example-company">Veritas EcoLogistics (Zero federal registry filings found)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WORKFLOW SECTION (Investigate → Verify → Record)
         ========================================================================= */}
      <section className="section-workflow">
        <div className="container">
          <div className="section-head text-center max-w-3xl mx-auto">
            <span className="section-eyebrow font-mono">SYSTEMATIC METHODOLOGY</span>
            <h2 className="section-title">Investigate → Verify → Record</h2>
            <p className="section-lead">
              Our automated architecture replaces subjective sentiment analysis with formal verification logic and cryptographic notarization.
            </p>
          </div>

          <div className="workflow-steps-flow">
            {/* Step 1: Investigate */}
            <div className="workflow-step-card">
              <div className="step-number-tag font-mono">01 / INVESTIGATE</div>
              <div className="step-icon-wrap text-emerald">
                <Search size={28} />
              </div>
              <h3 className="step-title">Autonomous Claim Extraction</h3>
              <p className="step-body">
                Natural language agents ingest corporate sustainability disclosures, segmenting verifiable targets, quantitative commitments, baseline dates, and detecting linguistic hedging like "aims to" or "strives towards".
              </p>
              <ul className="step-checks-list font-mono text-xs">
                <li>• Boundary Parsing (Scope 1, 2, 3)</li>
                <li>• Timeframe & Target Metric Tagging</li>
                <li>• Rhetorical Spin Identification</li>
              </ul>
            </div>

            <div className="workflow-connector">
              <ChevronRight size={28} />
            </div>

            {/* Step 2: Verify */}
            <div className="workflow-step-card">
              <div className="step-number-tag font-mono">02 / VERIFY</div>
              <div className="step-icon-wrap text-cyan">
                <Satellite size={28} />
              </div>
              <h3 className="step-title">Cross-Registry Telemetry</h3>
              <p className="step-body">
                TerraLens queries external repositories—EPA Green Power Partnership, EIA Form 860 Generator Interconnections, EnergyTag GCs, and Copernicus Sentinel telemetry—matching assertions against empirical observations.
              </p>
              <ul className="step-checks-list font-mono text-xs">
                <li>• Facility-Specific PPA Matching</li>
                <li>• Multispectral Satellite Sensors</li>
                <li>• RE100 Technical Criteria Checks</li>
              </ul>
            </div>

            <div className="workflow-connector">
              <ChevronRight size={28} />
            </div>

            {/* Step 3: Record */}
            <div className="workflow-step-card">
              <div className="step-number-tag font-mono">03 / RECORD</div>
              <div className="step-icon-wrap text-violet">
                <Lock size={28} />
              </div>
              <h3 className="step-title">Blockchain Proof Notarization</h3>
              <p className="step-body">
                Canonical evidence items, retrieval timestamps, and verdicts are synthesized into a SHA-256 Merkle tree root and inscribed to Polygon smart contracts for immutable, tamper-evident public auditing.
              </p>
              <ul className="step-checks-list font-mono text-xs">
                <li>• Deterministic Evidence Digest</li>
                <li>• Smart Contract Proof Registration</li>
                <li>• Revision Dispute Audit History</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EVIDENCE-BACKED SAMPLE AUDIT PREVIEW SECTION
         ========================================================================= */}
      <section className="section-sample-showcase">
        <div className="container">
          <div className="sample-showcase-card">
            <div className="showcase-top-bar">
              <div>
                <span className="font-mono text-xs text-emerald font-bold tracking-wider uppercase">
                  VERIFIED AUDIT DOSSIER DEMONSTRATION
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  Examine Real Corporate Forensic Case Studies
                </h3>
              </div>

              {/* Case selector tabs */}
              <div className="sample-selector-pills">
                {sampleCases.map((c) => (
                  <button
                    key={c.id}
                    className={`sample-pill-btn ${selectedPreviewCase?.id === c.id ? 'active' : ''}`}
                    onClick={() => setSelectedPreviewCase(c)}
                  >
                    <span>{c.companyName}</span>
                    <span className={`pill-verdict-dot ${c.claims[0]?.verdict.toLowerCase().replace(' ', '-')}`}></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected case breakdown */}
            <div className="showcase-content-grid">
              <div className="showcase-meta-pane">
                <div className="meta-box">
                  <span className="meta-title font-mono">Target Corporation</span>
                  <span className="meta-val font-bold text-slate-900">{selectedPreviewCase?.companyName}</span>
                  <span className="text-xs text-slate-500 font-mono">{selectedPreviewCase?.sector} • {selectedPreviewCase?.ticker}</span>
                </div>

                <div className="meta-box">
                  <span className="meta-title font-mono">Publication Title</span>
                  <span className="meta-val text-sm italic text-slate-700">"{selectedPreviewCase?.reportTitle}"</span>
                </div>

                <div className="meta-box">
                  <span className="meta-title font-mono">Overall Verification Index</span>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="font-mono text-2xl font-black text-slate-900">
                      {selectedPreviewCase?.verificationScore}/100
                    </span>
                    <span className={`risk-tag font-mono ${selectedPreviewCase?.greenwashingRisk.toLowerCase()}`}>
                      {selectedPreviewCase?.greenwashingRisk} RISK PROFILE
                    </span>
                  </div>
                </div>

                <button 
                  className="btn btn-primary w-full mt-4"
                  onClick={() => onExploreSample(selectedPreviewCase?.id)}
                >
                  <Search size={16} />
                  <span>Open Full Investigation Dossier</span>
                </button>
              </div>

              <div className="showcase-evidence-pane">
                <div className="evidence-pane-header">
                  <span className="font-mono text-xs font-bold text-slate-700">PRIMARY CLAIM ANALYSIS</span>
                  <span className={`verdict-tag font-mono ${selectedPreviewCase?.claims[0]?.verdict.toLowerCase().replace(' ', '-')}`}>
                    {selectedPreviewCase?.claims[0]?.verdict}
                  </span>
                </div>

                <div className="claim-quote-box">
                  "{selectedPreviewCase?.claims[0]?.claimText}"
                </div>

                <div className="comparison-metric-grid">
                  <div className="metric-compare-card reported">
                    <span className="font-mono text-xs text-slate-500">Self-Reported Claim</span>
                    <span className="font-semibold text-slate-800 text-sm mt-1">{selectedPreviewCase?.claims[0]?.claimMetrics.claimed}</span>
                  </div>
                  <div className="metric-compare-card verified">
                    <span className="font-mono text-xs text-sky-700">Independent Ground-Truth</span>
                    <span className="font-semibold text-slate-900 text-sm mt-1">{selectedPreviewCase?.claims[0]?.claimMetrics.verified}</span>
                  </div>
                </div>

                <div className="evidence-sources-preview-list">
                  <span className="text-xs font-mono font-bold text-slate-500">ATTRIBUTED EVIDENCE REPOSITORIES:</span>
                  {selectedPreviewCase?.claims[0]?.evidenceSources.map((source, sIdx) => (
                    <div key={sIdx} className="evidence-preview-row">
                      <div className="flex items-center gap-2">
                        <Database size={14} className="text-sky-600" />
                        <span className="text-xs font-semibold text-slate-800">{source.name}</span>
                      </div>
                      <span className="text-xs font-mono text-emerald-700 font-bold">{source.reliability}% Reliability</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY TRUSTWORTHY CLIMATE CLAIMS MATTER (Regulatory & Systemic Urgency)
         ========================================================================= */}
      <section className="section-regulatory-urgency">
        <div className="container">
          <div className="section-head text-center max-w-3xl mx-auto">
            <span className="section-eyebrow font-mono">GLOBAL REGULATORY ENFORCEMENT</span>
            <h2 className="section-title">Why Trustworthy Climate Claims Matter</h2>
            <p className="section-lead">
              The era of voluntary, unverified ESG marketing is ending. Capital markets, regulators, and consumers demand verifiable proof backed by empirical data.
            </p>
          </div>

          <div className="urgency-cards-grid">
            {/* Urgency 1: Legal Scrutiny */}
            <div className="urgency-card">
              <div className="urgency-icon text-cyan">
                <Scale size={24} />
              </div>
              <h4 className="urgency-heading">EU Green Claims Directive (2024/825)</h4>
              <p className="urgency-body">
                Bans unsubstantiated claims such as "climate neutral" or "100% green" relying on unbundled carbon offset compensations. Mandates independent pre-approval and strict empirical verification before advertising.
              </p>
              <div className="urgency-badge font-mono">FINES UP TO 4% ANNUAL TURNOVER</div>
            </div>

            {/* Urgency 2: SEC Disclosures */}
            <div className="urgency-card">
              <div className="urgency-icon text-amber">
                <Activity size={24} />
              </div>
              <h4 className="urgency-heading">US SEC Climate Disclosure Rules</h4>
              <p className="urgency-body">
                Requires public corporations to disclose material Scope 1 and Scope 2 emissions, substantiate transition plans, and detail carbon offset reliance with audited third-party attestation.
              </p>
              <div className="urgency-badge font-mono">FINANCIAL DISCLOSURE LIABILITY</div>
            </div>

            {/* Urgency 3: Capital Allocation */}
            <div className="urgency-card">
              <div className="urgency-icon text-emerald">
                <Compass size={24} />
              </div>
              <h4 className="urgency-heading">ISO 14068-1 Carbon Neutrality</h4>
              <p className="urgency-body">
                Replaces legacy PAS 2060 standards. Establishes a mandatory mitigation hierarchy: absolute on-site decarbonization must be proven before any offset instruments can be recognized.
              </p>
              <div className="urgency-badge font-mono">RIGID MITIGATION HIERARCHY</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CALL TO ACTION & FOOTER
         ========================================================================= */}
      <section className="section-final-cta">
        <div className="container">
          <div className="final-cta-card glass-forest">
            <h2 className="final-cta-headline">
              Ready to Investigate a Corporate Sustainability Claim?
            </h2>
            <p className="final-cta-subtitle">
              Paste any corporate sustainability report excerpt or company commitment into our multi-agent investigation workspace to inspect empirical ground truth.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <button 
                className="btn btn-primary btn-hero-lg"
                onClick={onStartInvestigation}
              >
                <Search size={18} />
                <span>Launch Investigation Workspace</span>
              </button>

              <button 
                className="btn btn-hero-secondary btn-hero-lg"
                onClick={() => onOpenReportModal(AUDIT_CASES[0])}
              >
                <FileCheck2 size={18} className="text-emerald" />
                <span>View Official Audit Certificate</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Climate Intelligence Footer */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-top-grid">
            <div className="footer-brand-pane">
              <div className="flex items-center gap-2">
                <Globe2 size={24} className="text-emerald" />
                <span className="font-bold text-lg text-slate-900 tracking-tight">TerraLens</span>
              </div>
              <p className="footer-tagline-text">
                See Beyond Sustainability Claims • Autonomous AI Climate Forensics & Blockchain Proofs.
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Enterprise climate forensics and verification platform. Strictly adheres to empirical neutrality and the facility-specific sourcing standard.
              </p>
            </div>

            <div className="footer-links-pane">
              <span className="footer-col-title font-mono">OFFICIAL REGISTRIES</span>
              <ul className="footer-links-list">
                <li><a href="https://www.epa.gov/greenpower" target="_blank" rel="noopener noreferrer">EPA Green Power Partnership (GPP)</a></li>
                <li><a href="https://www.eia.gov/electricity/data/eia860/" target="_blank" rel="noopener noreferrer">US EIA Form 860 Generator Inventory</a></li>
                <li><a href="https://climate.copernicus.eu/" target="_blank" rel="noopener noreferrer">Copernicus Climate Data Store</a></li>
                <li><a href="https://www.energytag.org" target="_blank" rel="noopener noreferrer">EnergyTag Granular Certificate Standard</a></li>
              </ul>
            </div>

            <div className="footer-links-pane">
              <span className="footer-col-title font-mono">VERIFICATION STANDARDS</span>
              <ul className="footer-links-list">
                <li><span className="text-slate-600">GHG Protocol Scope 2 Market-Based</span></li>
                <li><span className="text-slate-600">RE100 Technical Criteria 2024</span></li>
                <li><span className="text-slate-600">EU Green Claims Directive (2024/825)</span></li>
                <li><span className="text-slate-600">Polygon Amoy Testnet (Chain ID 80002)</span></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar font-mono text-xs text-slate-500">
            <div>© 2026 TerraLens • Enterprise Climate Intelligence Platform • Open Environmental Forensic Standards</div>
            <div className="flex items-center gap-4">
              <span>SHA-256 Merkle Provenance</span>
              <span>•</span>
              <span>Zero Hallucinations</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
