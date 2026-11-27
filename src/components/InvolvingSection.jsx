import React from 'react';
import { siteData } from '../data/siteData';
import { Users, Rocket, Zap, ArrowRight, Check } from 'lucide-react';

export default function InvolvingSection({ navigate }) {
  const { involving } = siteData;

  const modelIcons = [
    <Users className="w-6 h-6 text-purple-400" />,
    <Rocket className="w-6 h-6 text-pink-400" />,
    <Zap className="w-6 h-6 text-cyan-400" />
  ];

  return (
    <section className="relative py-24 bg-[#080512] border-b border-purple-950/60 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>{involving.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {involving.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400">
            {involving.subtitle}
          </p>
        </div>

        {/* 3 Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {involving.models.map((model, idx) => (
            <div
              key={model.id}
              className="relative rounded-3xl p-8 bg-[#100a1d]/90 hover:bg-[#140c26] border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_40px_rgba(156,98,250,0.2)] hover:-translate-y-1.5"
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    {modelIcons[idx]}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {model.commitment}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {model.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                  {model.desc}
                </p>

                {/* Best For Box */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-4 mb-6">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-purple-400/90 mb-1">
                    Ideal For:
                  </span>
                  <p className="text-xs text-gray-300">
                    {model.bestFor}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  navigate('/contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full mt-4 py-3 rounded-full bg-white/[0.06] hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 border border-white/10 hover:border-transparent text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 group-hover:shadow-[0_4px_16px_rgba(147,51,234,0.3)] transition-all cursor-pointer"
              >
                <span>Select Engagement Model</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
