import React from 'react';
import Link from 'next/link';
import { Globe2, ShieldCheck, Binary, ExternalLink, Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04080e] relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Globe2 className="w-6 h-6 text-emerald-400" />
              <span className="text-xl font-black text-white">TerraLens</span>
            </div>
            <p className="text-emerald-400 font-semibold text-sm mb-3">
              See Beyond Sustainability Claims.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              An AI-powered climate intelligence platform investigating corporate environmental claims through independent public registries, empirical telemetry, and tamper-evident blockchain audit trails.
            </p>
          </div>

          {/* Registries */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-4">
              Integrated Data Registries
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="https://www.epa.gov/greenpower" target="_blank" rel="noreferrer" className="hover:text-emerald-300 flex items-center gap-1.5">
                  <span>EPA Green Power Partnership</span>
                  <ExternalLink size={10} />
                </a>
              </li>
              <li>
                <a href="https://www.eia.gov/electricity/data/eia860/" target="_blank" rel="noreferrer" className="hover:text-emerald-300 flex items-center gap-1.5">
                  <span>EIA Form 860 Generator Inventory</span>
                  <ExternalLink size={10} />
                </a>
              </li>
              <li>
                <a href="https://www.there100.org" target="_blank" rel="noreferrer" className="hover:text-emerald-300 flex items-center gap-1.5">
                  <span>RE100 Climate Group Disclosures</span>
                  <ExternalLink size={10} />
                </a>
              </li>
              <li>
                <a href="https://www.energytag.org" target="_blank" rel="noreferrer" className="hover:text-emerald-300 flex items-center gap-1.5">
                  <span>EnergyTag Granular Certificates</span>
                  <ExternalLink size={10} />
                </a>
              </li>
            </ul>
          </div>

          {/* Standards & Blockchain */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-4">
              Standards & Security
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>EU Green Claims Directive (2024/825)</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>US FTC Green Guides (16 CFR Part 260)</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <Binary size={14} className="text-violet-400" />
                <span>Polygon Amoy L2 Immutable Rollup</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <Binary size={14} className="text-violet-400" />
                <span>Keccak256 Cryptographic Digest</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 TerraLens. All empirical findings cross-referenced against official public registries.</p>
          <p className="font-mono text-[11px] text-emerald-400/80">
            Enterprise Edition • Contract: 0x5FbD...aa3
          </p>
        </div>
      </div>
    </footer>
  );
}
