import React from 'react';
import { siteData } from '../data/siteData';
import { ShieldCheck, Award, Sparkles } from 'lucide-react';

export default function TrustedBrands() {
  const { trustedBrands } = siteData;
  const brandsList = [...trustedBrands, ...trustedBrands];

  return (
    <section className="relative py-16 bg-[#0a0714] border-b border-purple-900/30 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Enterprise Proven</span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Trusted by Innovative Leaders & Fast-Growing Brands
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto">
          Over 100+ high-growth scaleups and enterprise teams rely on TechBerrys for mission-critical software, custom AI, and high-performance digital platforms.
        </p>
      </div>

      {/* Ticker Track */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left and right fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#0a0714] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#0a0714] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 sm:gap-8 animate-marquee whitespace-nowrap will-change-transform py-2">
          {brandsList.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.08] hover:border-purple-500/40 hover:bg-white/[0.06] transition-all duration-300 group flex-shrink-0 cursor-default shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            >
              <span className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                {brand.symbol}
              </span>
              <div className="text-left">
                <span className="text-sm font-bold tracking-wider text-gray-200 group-hover:text-purple-300 transition-colors uppercase">
                  {brand.logoText}
                </span>
                <span className="block text-[10px] text-gray-400 font-medium">
                  {brand.tier}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges Row */}
      <div className="max-w-4xl mx-auto mt-10 px-4 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>SOC2 & HIPAA Ready Architecture</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-400" />
          <span>99.9% Production Service Uptime</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
          <span>24/7 Dedicated Engineering Support</span>
        </div>
      </div>
    </section>
  );
}
