import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Cpu, Database, Bot, ShieldCheck, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function AIIntegrationSection({ navigate }) {
  const { aiIntegration } = siteData;
  const [activePillar, setActivePillar] = useState(0);

  const pillarIcons = [
    <Cpu className="w-5 h-5 text-purple-400" />,
    <Database className="w-5 h-5 text-indigo-400" />,
    <Bot className="w-5 h-5 text-pink-400" />,
    <ShieldCheck className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <section className="relative py-24 bg-[#080511] border-b border-purple-950/60 overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{aiIntegration.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {aiIntegration.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            {aiIntegration.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid / Interactive Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiIntegration.pillars.map((pillar, idx) => {
            const isActive = activePillar === idx;
            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setActivePillar(idx)}
                className={`relative rounded-3xl p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-gradient-to-b from-purple-900/30 to-[#120a24] border-purple-500/50 shadow-[0_10px_35px_rgba(156,98,250,0.2)] -translate-y-1.5'
                    : 'bg-[#0f091c]/70 hover:bg-[#130b22] border-white/5 hover:border-purple-500/20'
                } border backdrop-blur-xl`}
              >
                <div>
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                      {pillarIcons[idx]}
                    </div>
                    <span className="text-xs font-mono font-bold text-purple-400/60">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                {/* Tech Tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/[0.04] text-purple-200/90 border border-purple-400/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Architecture Callout Banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#180931] to-purple-950/40 border border-purple-500/25 p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full Stack Sovereignty</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Ready to deploy custom AI tailored to your organizational data?
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-gray-300">
              We conduct a comprehensive 360° AI Readiness Assessment of your data schemas, security perimeters, and workflow opportunities with zero risk.
            </p>
          </div>

          <button
            onClick={() => {
              navigate('/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold text-sm shadow-[0_4px_20px_rgba(147,51,234,0.4)] hover:shadow-[0_6px_28px_rgba(147,51,234,0.6)] transition-all flex-shrink-0 group cursor-pointer"
          >
            <span>Schedule AI Discovery Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
