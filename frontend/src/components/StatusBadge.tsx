import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import { VerificationStatus } from '@/types';

interface StatusBadgeProps {
  status: VerificationStatus;
  size?: 'sm' | 'md' | 'lg';
  showDescription?: boolean;
}

export default function StatusBadge({ status, size = 'md', showDescription = false }: StatusBadgeProps) {
  const getBadgeConfig = () => {
    switch (status) {
      case 'Supported':
        return {
          icon: <CheckCircle2 className="shrink-0" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />,
          label: 'Supported',
          classes: 'badge-status-supported text-emerald-300 border-emerald-500/40 bg-emerald-500/10',
          desc: 'Available reliable public evidence corroborates the reported assertion.'
        };
      case 'Contradicted':
        return {
          icon: <XCircle className="shrink-0" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />,
          label: 'Contradicted',
          classes: 'badge-status-contradicted text-rose-300 border-rose-500/40 bg-rose-500/10',
          desc: 'Reliable public evidence or physical telemetry directly conflicts with the reported assertion.'
        };
      case 'Insufficient Evidence':
      default:
        return {
          icon: <AlertTriangle className="shrink-0" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />,
          label: 'Insufficient Evidence',
          classes: 'badge-status-insufficient text-amber-300 border-amber-500/40 bg-amber-500/10',
          desc: 'There is not enough reliable public evidence to reach a conclusion. Company is not assumed guilty.'
        };
    }
  };

  const config = getBadgeConfig();

  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5 gap-1.5',
    md: 'text-xs px-3 py-1 gap-2 font-bold',
    lg: 'text-sm px-4 py-2 gap-2.5 font-extrabold tracking-wide'
  }[size];

  return (
    <div className="inline-flex flex-col">
      <span className={`inline-flex items-center rounded-full border font-mono uppercase tracking-wider ${config.classes} ${sizeClasses}`}>
        {config.icon}
        <span>{config.label}</span>
      </span>
      {showDescription && (
        <p className="text-[11px] text-slate-400 mt-1 font-sans">
          {config.desc}
        </p>
      )}
    </div>
  );
}
