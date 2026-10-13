import React, { useState, useEffect } from 'react';
import { 
  FileSearch, 
  Satellite, 
  GitCompare, 
  ShieldAlert, 
  Binary, 
  Play, 
  RotateCcw, 
  CheckCircle, 
  Terminal, 
  Cpu, 
  Sparkles
} from 'lucide-react';
import { AI_AGENTS_CONFIG } from '../data/mockData';

export default function AgentPipelineTracker({ currentCase, onCompleteAudit }) {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(null); // 0, 1, 2, 3, 4
  const [completedSteps, setCompletedSteps] = useState([0, 1, 2, 3, 4]); // default completed for initial case
  const [selectedAgentId, setSelectedAgentId] = useState("extractor");
  const [logs, setLogs] = useState([
    { time: "14:32:01", agent: "Extractor", msg: `Ingested ${currentCase?.reportTitle || 'disclosure'}. Extracted 3 quantitative metrics with temporal boundaries.` },
    { time: "14:32:05", agent: "Telemetry", msg: "Queried EPA Green Power Partnership & EIA Form 860 monthly electric generator inventories." },
    { time: "14:32:10", agent: "Cross-Verifier", msg: "Correlated reported metrics against federal filings. Strictly preserved facility-specific PPA sourcing." },
    { time: "14:32:14", agent: "Risk Assessor", msg: "Triage completed: Evaluated under RE100 technical criteria and EU Green Claims Directive." },
    { time: "14:32:18", agent: "Notary", msg: "Computed SHA-256 canonical evidence bundle digest. Audit committed to Polygon Amoy Block #19842104." }
  ]);

  useEffect(() => {
    if (currentCase) {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      setLogs([
        { time: timeStr, agent: "Extractor", msg: `Ingested ${currentCase.reportTitle || currentCase.companyName}. Extracted ${currentCase.claims?.length || 1} quantitative commitment(s) with operational boundaries.` },
        { time: timeStr, agent: "Telemetry", msg: `Queried EPA Green Power Partnership & EIA Form 860 databases for ${currentCase.companyName}.` },
        { time: timeStr, agent: "Cross-Verifier", msg: `Triage verdict: ${currentCase.claims?.[0]?.verdict || 'SUPPORTED'} (${currentCase.verificationScore}/100 score). Preserved facility-specific sourcing.` },
        { time: timeStr, agent: "Risk Assessor", msg: `Risk classification: ${currentCase.greenwashingRisk || 'LOW'} risk profile (${currentCase.riskScore || 14}/100 regulatory exposure).` },
        { time: timeStr, agent: "Notary", msg: `SHA-256 evidence fingerprint: ${(currentCase.blockchainRecord?.merkleRoot || '0x4ca1...8b193').slice(0, 20)}... Committed to Block #${currentCase.blockchainRecord?.blockNumber || 19842104}.` }
      ]);
    }
  }, [currentCase?.id]);

  const agentIcons = {
    FileSearch: <FileSearch size={20} />,
    Satellite: <Satellite size={20} />,
    GitCompare: <GitCompare size={20} />,
    ShieldAlert: <ShieldAlert size={20} />,
    Binary: <Binary size={20} />
  };

  const agentDetails = {
    extractor: {
      model: "Terra-NLP (LLM Semantic Parser & Boundary Tagger)",
      focus: "Extracts quantitative promises, baseline shifting, and boundaries (Scope 1, 2, 3).",
      promptSpec: "System Mandate: Parse sustainability disclosures for testable targets (e.g. '% renewable electricity', 'net zero', 'emissions abatement'). Detect hedging phrases like 'strives to' or 'aims to'.",
      sampleOutput: `Extracted target metrics for ${currentCase?.companyName || 'Target'}. Identified operational scope: Global Data Centers & Campuses.`
    },
    retriever: {
      model: "Official Registry & Telemetry Ingestion Hub",
      focus: "Pulls federal ground-truth data from EPA Green Power Partnership, EIA Form 860, and Copernicus Sentinel telemetry.",
      promptSpec: "Execute distributed queries against EPA GPP Partner Filings, EIA Monthly Generator Inventory, and EnergyTag Granular Certificate registries.",
      sampleOutput: `Retrieved EPA partner filing and grid interconnection records for contracted generation assets.`
    },
    verifier: {
      model: "Empirical Discrepancy & Verification Matrix",
      focus: "Compares reported assertions with empirical measurements. Evaluates RE100 additionality and facility-specific PPAs.",
      promptSpec: "Calculate delta variance: |Reported - Observed|. If data is absent in federal registries, strictly output INSUFFICIENT EVIDENCE without defamatory accusation.",
      sampleOutput: `Claim #1: Corroborated by verified federal filings. Facility-specific sourcing preserved.`
    },
    scorer: {
      model: "Regulatory Greenwashing Risk Model",
      focus: "Scores 5 risk dimensions against EU Green Claims Directive (2024/825), US SEC rules, and ISO 14068-1.",
      promptSpec: "Synthesize empirical delta, EAC retirement permanence, and consumer deception potential into 0-100 risk index.",
      sampleOutput: `Greenwashing Risk Index: ${currentCase?.riskScore || 12}/100 (${currentCase?.greenwashingRisk || 'LOW'} RISK PROFILE).`
    },
    notary: {
      model: "Cryptographic Merkle Inscription Engine",
      focus: "Computes SHA-256 evidence digests, constructs Merkle tree proofs, and registers tamper-evident proofs on Polygon.",
      promptSpec: "Digest canonical claim text, source URLs, retrieval timestamps, and verdict into deterministic SHA-256 evidence bundle hash.",
      sampleOutput: `Merkle Root: ${currentCase?.blockchainRecord?.merkleRoot || '0x4ca1...8b193'} committed to Polygon testnet.`
    }
  };

  const runSwarmInvestigation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCompletedSteps([]);
    setActiveStep(0);
    setLogs([]);

    const steps = [
      { step: 0, agent: "Extractor", msg: `Ingesting ${currentCase?.reportTitle || 'disclosure'}. Segmenting clauses and targets...`, delay: 1000 },
      { step: 1, agent: "Telemetry", msg: "Querying EPA Green Power Partnership & EIA Form 860 databases...", delay: 2200 },
      { step: 2, agent: "Cross-Verifier", msg: "Running empirical delta verification against federal ground-truth data...", delay: 3500 },
      { step: 3, agent: "Risk Assessor", msg: "Modeling greenwashing risk vectors across 5 regulatory dimensions...", delay: 4800 },
      { step: 4, agent: "Notary", msg: "Generating SHA-256 evidence fingerprint & inscribing to blockchain ledger...", delay: 6000 }
    ];

    steps.forEach(({ step, agent, msg, delay }) => {
      setTimeout(() => {
        setActiveStep(step);
        setSelectedAgentId(AI_AGENTS_CONFIG[step].id);
        setCompletedSteps(prev => [...prev, step]);
        const now = new Date();
        const timeStr = now.toTimeString().split(' ')[0];
        setLogs(prev => [...prev, { time: timeStr, agent, msg }]);

        if (step === 4) {
          setTimeout(() => {
            setIsRunning(false);
            if (onCompleteAudit) onCompleteAudit();
          }, 1000);
        }
      }, delay);
    });
  };

  return (
    <div className="agents-view animate-fade-in">
      {/* Top Banner */}
      <div className="agents-header glass-surface">
        <div className="agents-header-text">
          <div className="badge-science font-mono">
            <Sparkles size={14} className="text-cyan" />
            <span>AUTONOMOUS MULTI-AGENT CLIMATE FORENSICS</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">Multi-Agent Investigation Swarm</h2>
          <p className="text-xs text-slate-600 mt-1 max-w-3xl leading-relaxed">
            TerraLens deploys five specialized AI agents that collaborate to extract claims, query independent satellite telemetry and federal registries, verify empirical deviations, and notarize findings onto the blockchain.
          </p>
        </div>

        <div className="agents-actions">
          <button 
            className="btn btn-primary"
            onClick={runSwarmInvestigation}
            disabled={isRunning}
          >
            {isRunning ? (
              <>
                <RotateCcw className="animate-spin" size={16} />
                <span>Swarm Running ({activeStep !== null ? activeStep + 1 : 0}/5)...</span>
              </>
            ) : (
              <>
                <Play size={16} />
                <span>Trigger Live Swarm Audit</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Agents Stepper / Pipeline Grid */}
      <div className="agents-grid">
        {AI_AGENTS_CONFIG.map((agent, index) => {
          const isActive = activeStep === index && isRunning;
          const isDone = completedSteps.includes(index);
          const isSelected = selectedAgentId === agent.id;

          return (
            <div 
              key={agent.id}
              className={`agent-card glass-surface ${isActive ? 'agent-active' : ''} ${isDone ? 'agent-done' : ''} ${isSelected ? 'agent-selected' : ''}`}
              onClick={() => setSelectedAgentId(agent.id)}
            >
              <div className="agent-card-top">
                <div className={`agent-icon-box ${isActive ? 'pulsing' : ''}`}>
                  {agentIcons[agent.icon] || <Cpu size={20} />}
                </div>
                <div className="agent-step-badge font-mono text-xs">
                  {isDone ? (
                    <span className="text-emerald flex items-center gap-1 font-bold">
                      <CheckCircle size={14} /> Step {index + 1}
                    </span>
                  ) : isActive ? (
                    <span className="text-cyan animate-pulse font-bold">Running...</span>
                  ) : (
                    <span>Step {index + 1}</span>
                  )}
                </div>
              </div>

              <h3 className="agent-name font-bold text-slate-900 text-sm mt-2">{agent.name}</h3>
              <p className="agent-role font-mono text-xs text-sky-700">{agent.role}</p>
              <p className="agent-desc text-xs text-slate-600 mt-1">{agent.description}</p>

              <div className="agent-card-footer font-mono text-xs mt-3">
                <span className={`status-indicator-tag ${isDone ? 'done' : isActive ? 'active' : 'idle'}`}>
                  {isDone ? "VERIFIED" : isActive ? "PROCESSING" : "READY"}
                </span>
                <span className="agent-inspect-text text-slate-500">Inspect Details →</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep Inspection Panel for Selected Agent & Live Terminal Log */}
      <div className="agent-details-split">
        {/* Selected Agent Inspector */}
        <div className="agent-inspector glass-surface">
          <div className="inspector-header">
            <Cpu size={18} className="text-emerald" />
            <h4 className="inspector-title font-bold text-slate-900 text-sm">
              Agent Specifications: {AI_AGENTS_CONFIG.find(a => a.id === selectedAgentId)?.name}
            </h4>
          </div>

          {agentDetails[selectedAgentId] && (
            <div className="inspector-content font-sans">
              <div className="inspector-field">
                <span className="field-label font-mono text-xs text-slate-500">AI Engine / Architecture</span>
                <span className="field-value font-mono text-xs text-slate-800">{agentDetails[selectedAgentId].model}</span>
              </div>
              <div className="inspector-field">
                <span className="field-label font-mono text-xs text-slate-500">Operational Mandate</span>
                <p className="field-desc text-xs text-slate-700">{agentDetails[selectedAgentId].focus}</p>
              </div>
              <div className="inspector-field">
                <span className="field-label font-mono text-xs text-slate-500">System Reasoning Prompt</span>
                <pre className="prompt-box font-mono text-xs">{agentDetails[selectedAgentId].promptSpec}</pre>
              </div>
              <div className="inspector-field">
                <span className="field-label font-mono text-xs text-slate-500">Latest Execution Telemetry</span>
                <div className="output-box font-mono text-xs">{agentDetails[selectedAgentId].sampleOutput}</div>
              </div>
            </div>
          )}
        </div>

        {/* Live Terminal Log Stream */}
        <div className="terminal-log-panel glass-surface">
          <div className="terminal-header">
            <div className="terminal-header-left">
              <Terminal size={16} className="text-cyan" />
              <span className="terminal-title font-mono text-xs font-bold text-slate-800">
                Real-Time Swarm Execution Stream
              </span>
            </div>
            <div className="terminal-status font-mono text-xs">
              <span className="pulse-dot emerald"></span>
              <span>SYNCHRONIZED</span>
            </div>
          </div>

          <div className="terminal-console font-mono text-xs">
            {logs.length === 0 ? (
              <div className="terminal-empty">Awaiting swarm execution trigger...</div>
            ) : (
              logs.map((log, idx) => (
                <div key={idx} className="terminal-line animate-fade-in">
                  <span className="terminal-timestamp text-slate-400">[{log.time}]</span>
                  <span className="terminal-agent text-emerald font-bold">[{log.agent}]:</span>
                  <span className="terminal-text text-slate-700">{log.msg}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
