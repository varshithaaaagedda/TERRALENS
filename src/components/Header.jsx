import React from 'react';
import { 
  Globe2, 
  Binary, 
  Cpu, 
  Radar, 
  Search,
  FileCheck2,
  Compass
} from 'lucide-react';

export default function Header({ 
  activeTab, 
  setActiveTab, 
  onOpenReportModal, 
  currentCase,
  isBackendOnline
}) {
  return (
    <header className="header-wrapper">
      {/* Top Global Utility Bar */}
      <div className="header-utility-bar">
        <div className="container utility-inner font-mono text-xs">
          <div className="utility-left">
            <span className="beacon-dot beacon-dot-emerald"></span>
            <span>AI-POWERED CLIMATE INTELLIGENCE</span>
            <span className="utility-sep">•</span>
            <span className="text-slate-400">TELEMETRY: ESA COPERNICUS & NASA VIIRS</span>
          </div>

          <div className="utility-right">
            <span className="flex items-center gap-1.5">
              <span className={`pulse-dot ${isBackendOnline ? 'emerald' : 'cyan'}`}></span>
              <span>{isBackendOnline ? 'FASTAPI ENGINE ONLINE' : 'DEMO VERIFICATION READY'}</span>
            </span>
            <span className="utility-sep">•</span>
            <span className="text-slate-400">POLYGON AMOY TESTNET (80002)</span>
          </div>
        </div>
      </div>

      {/* Main Brand & Action Header */}
      <div className="header-main-bar">
        <div className="container header-inner">
          {/* Brand Identity */}
          <div className="brand-group" onClick={() => setActiveTab('landing')} style={{ cursor: 'pointer' }}>
            <div className="brand-logo-container">
              <div className="logo-glow"></div>
              <div className="logo-icon-box">
                <Globe2 className="logo-icon text-emerald" size={24} />
                <div className="logo-inner-dot"></div>
              </div>
            </div>
            <div>
              <div className="brand-title-row">
                <span className="brand-name">TerraLens</span>
                <span className="brand-badge font-mono">v2.6-FORENSICS</span>
              </div>
              <p className="brand-tagline">
                See Beyond Sustainability Claims.
              </p>
            </div>
          </div>

          {/* Quick Header Right Actions */}
          <div className="header-actions">
            <button 
              className="btn btn-header-investigate btn-sm"
              onClick={() => setActiveTab('workspace')}
            >
              <Search size={15} />
              <span>Investigate Claims</span>
            </button>

            <button 
              className="btn btn-secondary btn-sm"
              onClick={onOpenReportModal}
              title="Generate printable tamper-evident executive audit certificate"
            >
              <FileCheck2 size={15} className="text-emerald" />
              <span className="hidden-mobile">Official Certificate</span>
            </button>
          </div>
        </div>
      </div>

      {/* Primary Navigation Tabs */}
      <nav className="nav-bar-container">
        <div className="container nav-tabs-list">
          <button 
            className={`nav-tab-btn ${activeTab === 'landing' ? 'active' : ''}`}
            onClick={() => setActiveTab('landing')}
          >
            <Compass size={15} />
            <span>Platform Overview</span>
          </button>

          <button 
            className={`nav-tab-btn ${activeTab === 'workspace' ? 'active' : ''}`}
            onClick={() => setActiveTab('workspace')}
          >
            <Search size={15} />
            <span>Investigation Workspace</span>
            {currentCase && (
              <span className="tab-pill font-mono">{currentCase.claims.length} Claims</span>
            )}
          </button>

          <button 
            className={`nav-tab-btn ${activeTab === 'agents' ? 'active' : ''}`}
            onClick={() => setActiveTab('agents')}
          >
            <Cpu size={15} />
            <span>AI Multi-Agent Swarm</span>
            <span className="tab-status-dot"></span>
          </button>

          <button 
            className={`nav-tab-btn ${activeTab === 'ledger' ? 'active' : ''}`}
            onClick={() => setActiveTab('ledger')}
          >
            <Binary size={15} />
            <span>Blockchain Audit Trail</span>
            <span className="tab-badge-violet">Merkle Proofs</span>
          </button>

          <button 
            className={`nav-tab-btn ${activeTab === 'radar' ? 'active' : ''}`}
            onClick={() => setActiveTab('radar')}
          >
            <Radar size={15} />
            <span>Greenwashing Risk Radar</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
