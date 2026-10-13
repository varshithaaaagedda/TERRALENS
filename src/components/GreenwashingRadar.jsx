import React from 'react';
import { 
  BarChart3, 
  Scale, 
  ShieldAlert
} from 'lucide-react';
import { SECTOR_BENCHMARKS } from '../data/mockData';

export default function GreenwashingRadar({ currentCase }) {
  const riskDimensions = currentCase?.riskDimensions || {
    offsetQuality: 75,
    scope3Coverage: 80,
    baselineIntegrity: 65,
    empiricalAlignment: 85,
    transparency: 70
  };

  const getRiskColor = (score) => {
    if (score >= 70) return 'text-red';
    if (score >= 40) return 'text-amber';
    return 'text-emerald';
  };

  const getRiskBg = (score) => {
    if (score >= 70) return 'bg-red-bar';
    if (score >= 40) return 'bg-amber-bar';
    return 'bg-emerald-bar';
  };

  const dimensionsList = [
    {
      key: 'offsetQuality',
      title: 'Offset Quality & Additionality',
      desc: 'Risk from unbundled avoidance certificates, non-permanent forestry, or lack of direct carbon removal.',
      score: riskDimensions.offsetQuality,
      flaw: 'High reliance on paper forestry credits vulnerable to subsequent forest disturbances.'
    },
    {
      key: 'scope3Coverage',
      title: 'Scope 3 Boundary Completeness',
      desc: 'Completeness of upstream supply chain and downstream product use emissions.',
      score: riskDimensions.scope3Coverage,
      flaw: 'Major material lifecycle categories intentionally excluded from reported boundaries.'
    },
    {
      key: 'baselineIntegrity',
      title: 'Baseline Year Stability',
      desc: 'Assessment of whether comparison baseline years were shifted to exaggerate progress.',
      score: riskDimensions.baselineIntegrity,
      flaw: 'Comparison baseline selected during anomalous supply downturn.'
    },
    {
      key: 'empiricalAlignment',
      title: 'Satellite / Ground-Truth Alignment',
      desc: 'Discrepancy between company self-reported statements and independent satellite/sensor observation.',
      score: riskDimensions.empiricalAlignment,
      flaw: 'Empirical telemetry directly disputes reported abatement figures.'
    },
    {
      key: 'transparency',
      title: 'Rhetorical Spin & Hedging Wording',
      desc: 'Frequency of vague aspirational phrases ("striving towards", "aiming to") versus legally binding milestones.',
      score: riskDimensions.transparency,
      flaw: 'Non-binding intent framed as established operational reality.'
    }
  ];

  return (
    <div className="radar-view animate-fade-in">
      {/* Header Banner */}
      <div className="radar-hero glass-surface">
        <div className="radar-hero-left">
          <div className="badge-science font-mono">
            <ShieldAlert size={14} className="text-amber" />
            <span>GREENWASHING VULNERABILITY MODELING</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Forensic Risk Assessment: {currentCase?.companyName}
          </h2>
          <p className="text-xs text-slate-600 mt-1 max-w-3xl leading-relaxed">
            TerraLens calculates an aggregated greenwashing exposure profile across five forensic dimensions, benchmarking corporate promises against global regulatory enforcement frameworks (EU Green Claims Directive, US SEC, ISO 14068).
          </p>
        </div>

        <div className="overall-score-card">
          <div className="score-ring">
            <span className={`score-number font-mono ${getRiskColor(currentCase?.riskScore)}`}>
              {currentCase?.riskScore}/100
            </span>
            <span className="score-label font-mono">RISK INDEX</span>
          </div>
          <div className={`score-badge font-mono ${currentCase?.greenwashingRisk === 'HIGH' ? 'badge-high' : 'badge-low'}`}>
            {currentCase?.greenwashingRisk} RISK PROFILE
          </div>
        </div>
      </div>

      {/* 5 Dimensions Grid */}
      <div className="dimensions-grid">
        {dimensionsList.map((dim) => (
          <div key={dim.key} className="dimension-card glass-surface">
            <div className="dimension-card-top">
              <span className="dim-title font-bold text-slate-900 text-sm">{dim.title}</span>
              <span className={`dim-score font-mono ${getRiskColor(dim.score)}`}>
                {dim.score}% Risk
              </span>
            </div>

            <div className="risk-meter-track">
              <div 
                className={`risk-meter-fill ${getRiskBg(dim.score)}`} 
                style={{ width: `${dim.score}%` }}
              ></div>
            </div>

            <p className="dim-desc text-xs text-slate-600">{dim.desc}</p>
            <div className="dim-flaw-box font-sans">
              <span className="flaw-label font-mono">Agent Diagnostic:</span>
              <span className="flaw-text text-xs text-slate-800">{dim.flaw}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Cross-Sector Benchmarking Table */}
      <div className="sector-benchmarks-section glass-surface">
        <div className="sector-header">
          <div className="sector-header-left">
            <BarChart3 size={18} className="text-emerald" />
            <h3 className="text-base font-bold text-slate-900">Industry Sector Greenwashing Exposure Index</h3>
          </div>
          <span className="font-mono text-slate-500 text-xs">Cross-Indexed Across 840 Analyzed Filings</span>
        </div>

        <div className="table-responsive">
          <table className="benchmark-table font-sans">
            <thead>
              <tr className="font-mono text-xs">
                <th>Industry Sector</th>
                <th>Avg Risk Index</th>
                <th>Contradicted Claims</th>
                <th>Supported Claims</th>
                <th>Insufficient Evidence</th>
                <th>Prevalent Greenwashing Mechanism</th>
              </tr>
            </thead>
            <tbody>
              {SECTOR_BENCHMARKS.map((sec, idx) => (
                <tr key={idx} className="benchmark-row">
                  <td className="sector-name font-bold text-slate-900">{sec.sector}</td>
                  <td>
                    <span className={`font-mono font-bold ${getRiskColor(sec.avgRiskScore)}`}>
                      {sec.avgRiskScore}/100
                    </span>
                  </td>
                  <td>
                    <span className="contradicted-rate font-mono text-rose-600 font-bold">{sec.contradictedRate}</span>
                  </td>
                  <td>
                    <span className="supported-rate font-mono text-emerald font-bold">{sec.supportedRate}</span>
                  </td>
                  <td>
                    <span className="insufficient-rate font-mono text-amber font-bold">{sec.insufficientRate}</span>
                  </td>
                  <td className="loophole-col text-slate-600 text-xs">{sec.primaryLoophole}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Regulatory Alignment Matrix */}
      <div className="regulatory-frameworks-grid">
        <div className="framework-card glass-surface">
          <div className="framework-header">
            <Scale size={18} className="text-sky-600" />
            <span className="framework-title font-bold text-slate-900">EU Green Claims Directive (2024/825)</span>
          </div>
          <p className="framework-body text-xs text-slate-600">
            Strictly prohibits generic environmental claims like "climate neutral" or "carbon positive" based purely on unbundled carbon offset credit compensation. Requires verified third-party substantiation prior to marketing.
          </p>
          <div className="framework-tag compliant-no font-mono">
            Direct Scrutiny Trigger
          </div>
        </div>

        <div className="framework-card glass-surface">
          <div className="framework-header">
            <Scale size={18} className="text-amber" />
            <span className="framework-title font-bold text-slate-900">US SEC Climate Disclosures</span>
          </div>
          <p className="framework-body text-xs text-slate-600">
            Requires audited disclosure of material Scope 1 and Scope 2 emissions, and mandates disclosure of transition plan assumptions, carbon offsets reliance, and internal carbon prices.
          </p>
          <div className="framework-tag compliant-warning font-mono">
            High Materiality Discrepancy
          </div>
        </div>

        <div className="framework-card glass-surface">
          <div className="framework-header">
            <Scale size={18} className="text-emerald" />
            <span className="framework-title font-bold text-slate-900">ISO 14068-1 Carbon Neutrality</span>
          </div>
          <p className="framework-body text-xs text-slate-600">
            Replaces PAS 2060. Mandates continuous absolute emissions hierarchy: internal decarbonization must precede any offset usage, and offsets must transition towards permanent atmospheric removals.
          </p>
          <div className="framework-tag compliant-info font-mono">
            Hierarchy Compliance Check
          </div>
        </div>
      </div>
    </div>
  );
}
