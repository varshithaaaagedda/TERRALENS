import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import InvestigationWorkspace from './components/InvestigationWorkspace';
import AgentPipelineTracker from './components/AgentPipelineTracker';
import BlockchainLedger from './components/BlockchainLedger';
import GreenwashingRadar from './components/GreenwashingRadar';
import ReportModal from './components/ReportModal';
import { AUDIT_CASES } from './data/mockData';
import { checkBackendHealth } from './services/api';
import './App.css';

export default function App() {
  const [currentCase, setCurrentCase] = useState(AUDIT_CASES[0]); // Default to Microsoft
  const [activeTab, setActiveTab] = useState('landing'); // 'landing' | 'workspace' | 'agents' | 'ledger' | 'radar'
  const [showReportModal, setShowReportModal] = useState(false);
  const [isBackendOnline, setIsBackendOnline] = useState(false);

  // Check backend connectivity on mount
  useEffect(() => {
    async function verifyHealth() {
      const health = await checkBackendHealth();
      setIsBackendOnline(health.isOnline);
    }
    verifyHealth();
  }, []);

  const handleStartInvestigation = () => {
    setActiveTab('workspace');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreSample = (caseId) => {
    const foundCase = AUDIT_CASES.find(c => c.id === caseId) || AUDIT_CASES[0];
    setCurrentCase(foundCase);
    setActiveTab('workspace');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCertificateModal = (targetCase = null) => {
    if (targetCase) {
      setCurrentCase(targetCase);
    }
    setShowReportModal(true);
  };

  return (
    <div className="app-root font-sans">
      {/* Top Global Navigation Bar & Telemetry Status Feed */}
      <Header 
        activeTab={activeTab === 'investigation' ? 'workspace' : activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenReportModal={() => handleOpenCertificateModal(currentCase)}
        currentCase={currentCase}
        isBackendOnline={isBackendOnline}
      />

      {/* Main Viewport Content Views */}
      <main className="main-content">
        {/* Landing Page (Platform Overview) */}
        {activeTab === 'landing' && (
          <LandingPage 
            onStartInvestigation={handleStartInvestigation}
            onExploreSample={handleExploreSample}
            onOpenReportModal={handleOpenCertificateModal}
          />
        )}

        {/* Investigation Workspace & Evidence Dossier */}
        {(activeTab === 'workspace' || activeTab === 'investigation') && (
          <div className="container py-8">
            <InvestigationWorkspace 
              currentCase={currentCase}
              setCurrentCase={setCurrentCase}
              onOpenReportModal={() => handleOpenCertificateModal(currentCase)}
              onNavigateToTab={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {/* Multi-Agent Swarm Tracker */}
        {activeTab === 'agents' && (
          <div className="container py-8">
            <AgentPipelineTracker 
              currentCase={currentCase}
              onCompleteAudit={() => {
                // Keep on tab or notify
              }}
            />
          </div>
        )}

        {/* Blockchain Ledger & Merkle Verification */}
        {activeTab === 'ledger' && (
          <div className="container py-8">
            <BlockchainLedger 
              currentCase={currentCase}
            />
          </div>
        )}

        {/* Greenwashing Risk Radar & Benchmarks */}
        {activeTab === 'radar' && (
          <div className="container py-8">
            <GreenwashingRadar 
              currentCase={currentCase}
            />
          </div>
        )}
      </main>

      {/* Executive Report / Certificate Modal */}
      {showReportModal && (
        <ReportModal 
          currentCase={currentCase}
          onClose={() => setShowReportModal(false)}
        />
      )}
    </div>
  );
}
