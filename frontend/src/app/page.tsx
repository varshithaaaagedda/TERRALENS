import React from 'react';
import Link from 'next/link';
import { 
  Globe2, 
  Search, 
  ShieldCheck, 
  Cpu, 
  Binary, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ExternalLink,
  Satellite,
  Database,
  Lock,
  Sparkles
} from 'lucide-react';
import StatusBadge from '@/components/StatusBadge';
import { SEED_AUDITS } from '@/lib/api';

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Ambience */}
      <div className="atmosphere-glow-1"></div>
      <div className="atmosphere-glow-2"></div>
      <div className="absolute inset-0 grid-bg-overlay pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
        {/* Platform Identity Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono mb-8 backdrop-blur-md">
          <span className="beacon-dot beacon-dot-emerald"></span>
          <span>AI-POWERED CLIMATE INTELLIGENCE</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
          See Beyond <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Sustainability Claims.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          An autonomous AI climate intelligence platform that investigates corporate environmental claims, cross-checks independent public registries and satellite telemetry, and records tamper-evident audit proofs on the blockchain.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-base transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 group"
          >
            <Sparkles size={18} />
            <span>Launch Investigation</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/history"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0b1320]/80 hover:bg-[#111e31] border border-white/10 text-white font-bold text-base transition-all flex items-center justify-center gap-2"
          >
            <Binary size={18} className="text-violet-400" />
            <span>Explore On-Chain Audits</span>
          </Link>
        </div>

        {/* Live Metrics Ticker */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="glass-panel p-4 text-center">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400">100%</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Source-Attributed Evidence</div>
          </div>
          <div className="glass-panel p-4 text-center">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-cyan-400">4 Agents</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Autonomous AI Pipeline</div>
          </div>
          <div className="glass-panel p-4 text-center">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-violet-400">Polygon L2</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Tamper-Evident Testnet</div>
          </div>
          <div className="glass-panel p-4 text-center">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-amber-400">0 Hallucinations</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Strict Insufficient-Evidence Rule</div>
          </div>
        </div>
      </section>

      {/* The 3-Way Triage Standard Section */}
      <section className="relative z-10 py-20 bg-[#070e17]/80 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase mb-2">
              Rigorous Objective Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              The Three-Way Verification Standard
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              TerraLens never invents evidence or labels a company as greenwashing solely because data is absent. We strictly triage every claim into three empirical categories:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Supported Card */}
            <div className="glass-panel p-8 border-emerald-500/30 hover:border-emerald-500/60 transition-all flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6">
                <CheckCircle2 size={24} />
              </div>
              <div className="mb-3">
                <StatusBadge status="Supported" size="lg" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Empirically Corroborated</h3>
              <p className="text-slate-400 text-xs leading-relaxed flex-1">
                Reliable public records, certified EAC retirements, or EIA-registered PPA facilities directly confirm the reported metrics and boundaries.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-emerald-300">
                Example: Microsoft Corporation (EPA GPP & EIA Form 860 Verified)
              </div>
            </div>

            {/* Contradicted Card */}
            <div className="glass-panel p-8 border-rose-500/30 hover:border-rose-500/60 transition-all flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/40 flex items-center justify-center text-rose-400 mb-6">
                <XCircle size={24} />
              </div>
              <div className="mb-3">
                <StatusBadge status="Contradicted" size="lg" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Disputed by Reliable Evidence</h3>
              <p className="text-slate-400 text-xs leading-relaxed flex-1">
                Verified public sensor registries or physical utility billing conflict directly with the claim (e.g. claiming 100% renewable power with 85% fossil grid draw).
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-rose-300">
                Example: AeroGlobal SkyWays (14.2% verified vs 100% claimed)
              </div>
            </div>

            {/* Insufficient Evidence Card */}
            <div className="glass-panel p-8 border-amber-500/30 hover:border-amber-500/60 transition-all flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-6">
                <AlertTriangle size={24} />
              </div>
              <div className="mb-3">
                <StatusBadge status="Insufficient Evidence" size="lg" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Ethical Data Vacuum Standard</h3>
              <p className="text-slate-400 text-xs leading-relaxed flex-1">
                There is not enough reliable public evidence in federal repositories to reach a definitive verdict. The company is never assumed guilty of greenwashing.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-amber-300">
                Example: Veritas EcoLogistics (No federal EAC filings found)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Agent Architecture Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase mb-2">
              Autonomous Collaboration
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              The 4-Agent Investigation Pipeline
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Each specialized agent performs a discrete, verifiable task with prompt isolation and strict schema validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass-panel p-6">
              <div className="text-xs font-mono text-emerald-400 font-bold mb-2">AGENT 1</div>
              <h4 className="text-base font-bold text-white mb-2">Claim Extraction</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Parses raw assertions, extracts quantitative targets, timelines, and detects rhetorical hedging phrases like "strives to" or "aims to".
              </p>
            </div>

            <div className="glass-panel p-6">
              <div className="text-xs font-mono text-cyan-400 font-bold mb-2">AGENT 2</div>
              <h4 className="text-base font-bold text-white mb-2">Evidence Research</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Queries EPA Green Power Partnership, EIA Form 860, and RE100 registries. Records exact source URLs and retrieval timestamps.
              </p>
            </div>

            <div className="glass-panel p-6">
              <div className="text-xs font-mono text-amber-400 font-bold mb-2">AGENT 3</div>
              <h4 className="text-base font-bold text-white mb-2">Verification Engine</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Compares claims against empirical ground truth. Strictly avoids regional grid fallacies and scores discrepancy variance.
              </p>
            </div>

            <div className="glass-panel p-6">
              <div className="text-xs font-mono text-violet-400 font-bold mb-2">AGENT 4</div>
              <h4 className="text-base font-bold text-white mb-2">Blockchain Notary</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Computes canonical SHA-256 evidence bundle digests and records immutable proofs on the Polygon Amoy testnet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Audits Showcase */}
      <section className="relative z-10 py-16 bg-[#070e17]/60 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Recent Verified Corporate Audits</h3>
              <p className="text-xs text-slate-400 mt-1">Cross-referenced against federal energy databases</p>
            </div>
            <Link href="/history" className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 font-mono">
              <span>View Full On-Chain Ledger</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SEED_AUDITS.map((audit) => (
              <Link
                key={audit.audit_id}
                href={`/report/${audit.audit_id}`}
                className="glass-panel glass-panel-hover p-6 block group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-400 font-bold">
                    {audit.reporting_period} Audit
                  </span>
                  <StatusBadge status={audit.verification.status} size="sm" />
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                  {audit.company_name}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                  "{audit.original_claim}"
                </p>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Block #{audit.blockchain_proof.block_number}</span>
                  <span className="text-emerald-400 group-hover:underline">Inspect Proof →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
