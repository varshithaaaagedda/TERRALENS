'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Globe2, 
  Search, 
  History, 
  Info, 
  Binary, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Overview', icon: <Globe2 size={16} /> },
    { href: '/dashboard', label: 'Investigate Claims', icon: <Search size={16} /> },
    { href: '/history', label: 'Audit History', icon: <History size={16} /> },
    { href: '/about', label: 'Methodology & Tech', icon: <Info size={16} /> },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#050a0f]/85 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-950 via-[#07171d] to-[#0b1b2b] border border-emerald-500/40 flex items-center justify-center">
              <Globe2 className="w-5 h-5 text-emerald-400" />
              <div className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                TerraLens
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hidden sm:inline-block">
                AI-POWERED CLIMATE INTELLIGENCE
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium hidden sm:block">
              See Beyond Sustainability Claims.
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0b1320]/80 p-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg shadow-emerald-900/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Network & Quick Action */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
            <span className="beacon-dot beacon-dot-emerald"></span>
            <span>POLYGON AMOY TESTNET</span>
          </div>

          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-all shadow-md shadow-emerald-500/20"
          >
            <Sparkles size={14} />
            <span>Audit Claim</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
