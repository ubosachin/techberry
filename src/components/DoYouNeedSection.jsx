import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { HelpCircle, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';

export default function DoYouNeedSection({ navigate }) {
  const { doYouNeed } = siteData;
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="relative py-24 bg-[#080511] border-b border-purple-950/60 overflow-hidden">
      {/* Background lighting */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
            <span>{doYouNeed.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {doYouNeed.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400">
            {doYouNeed.subtitle}
          </p>
        </div>

        {/* 4 Interactive Accordion Cards */}
        <div className="space-y-4">
          {doYouNeed.scenarios.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-gradient-to-r from-purple-950/40 via-[#160b29] to-purple-950/40 border-purple-500/40 shadow-[0_8px_30px_rgba(156,98,250,0.15)]'
                    : 'bg-[#10091d]/70 hover:bg-[#140c24] border-white/5'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 font-bold text-xs flex-shrink-0">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                      {item.q}
                    </h3>
                  </div>
                  <div
                    className={`w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-purple-500/20 border-purple-500/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-purple-300" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-0 border-t border-white/5 animate-fadeIn">
                    <div className="mt-4 p-5 rounded-2xl bg-white/[0.02] border border-purple-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          navigate('/contact');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold whitespace-nowrap shadow-[0_2px_10px_rgba(147,51,234,0.3)] transition-all cursor-pointer flex-shrink-0"
                      >
                        <span>Fix This With Us</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
