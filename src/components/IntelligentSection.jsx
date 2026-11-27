import React from 'react';
import { siteData } from '../data/siteData';
import { Cpu, Network, TrendingUp, ShieldCheck, Activity, Terminal } from 'lucide-react';

export default function IntelligentSection({ navigate }) {
  const { intelligentWorkflows } = siteData;

  const iconMap = {
    Cpu: <Cpu className="w-6 h-6 text-purple-400" />,
    Network: <Network className="w-6 h-6 text-pink-400" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-cyan-400" />
  };

  return (
    <section className="relative py-24 bg-[#0a0618] border-b border-purple-950/60 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Activity className="w-3.5 h-3.5 text-purple-400" />
            <span>{intelligentWorkflows.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {intelligentWorkflows.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400">
            {intelligentWorkflows.subtitle}
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {intelligentWorkflows.features.map((feat, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl p-8 bg-[#120a22]/80 hover:bg-[#160d2c] border border-white/5 hover:border-purple-500/30 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_40px_rgba(156,98,250,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                    {iconMap[feat.icon]}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Telemetry</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                  {feat.desc}
                </p>
              </div>

              {/* Terminal Code Snippet Preview */}
              <div className="rounded-2xl bg-black/50 border border-white/5 p-4 font-mono text-[11px] text-gray-400 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span className="text-purple-300">agent.dispatch</span>
                <span className="text-gray-500">→</span>
                <span className="text-gray-300 truncate">autonomous_handler(event, strict_guardrails=True)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
