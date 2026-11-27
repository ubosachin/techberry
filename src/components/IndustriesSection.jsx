import React from 'react';
import { siteData } from '../data/siteData';
import { Landmark, Activity, ShoppingBag, Truck, Layers, GraduationCap, ArrowUpRight } from 'lucide-react';

export default function IndustriesSection({ navigate }) {
  const { industries } = siteData;

  const iconMap = {
    Landmark: <Landmark className="w-6 h-6 text-purple-400" />,
    Activity: <Activity className="w-6 h-6 text-pink-400" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-amber-400" />,
    Truck: <Truck className="w-6 h-6 text-emerald-400" />,
    Layers: <Layers className="w-6 h-6 text-cyan-400" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-indigo-400" />
  };

  return (
    <section className="relative py-24 bg-[#0a0715] border-b border-purple-950/60 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Domain Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Industries We Serve
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400">
              Purpose-built digital architectures engineered to solve complex operational challenges across critical global sectors.
            </p>
          </div>

          <button
            onClick={() => {
              navigate('/case-study');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors group cursor-pointer self-start md:self-auto"
          >
            <span>Read Industry Case Studies</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="group relative rounded-3xl p-7 bg-[#110a1f]/80 hover:bg-[#160d29] border border-white/5 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_36px_rgba(156,98,250,0.15)] hover:-translate-y-1"
            >
              <div>
                {/* Icon & Stat */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500/10 transition-all duration-300">
                    {iconMap[ind.icon]}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {ind.stats}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {ind.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {ind.desc}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500 group-hover:text-purple-400 transition-colors">
                  Explore Solutions
                </span>
                <div className="w-7 h-7 rounded-full bg-white/[0.04] group-hover:bg-purple-500/20 flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-purple-300 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
