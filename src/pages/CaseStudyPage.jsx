import React from 'react';
import { siteData } from '../data/siteData';
import { Sparkles, ArrowRight, CheckCircle2, TrendingUp, Clock, ShieldCheck } from 'lucide-react';

export default function CaseStudyPage({ navigate }) {
  const { caseStudies } = siteData;

  return (
    <div className="min-h-screen bg-[#07050d] text-white">
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-[#180828] to-[#07050d] overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Proven Engineering Case Studies</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight font-sans mb-6 leading-tight">
            Case Studies: Quantifiable Commercial Impact
          </h1>

          <p className="text-base sm:text-xl text-purple-200/80 leading-relaxed font-sans max-w-2xl">
            See how our tailored software architectures, headless storefronts, and autonomous AI agents unlocked millions in revenue and hundreds of hours in operational savings.
          </p>
        </div>
      </section>

      {/* Case Studies Deep Dive List */}
      <section className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {caseStudies.map((cs, idx) => (
            <article
              key={cs.id}
              className="rounded-3xl bg-[#100a1e]/90 border border-white/10 hover:border-purple-500/40 p-8 sm:p-12 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10 mb-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {cs.industry}
                  </span>
                  <span className="text-xs text-gray-400">
                    Client: <strong className="text-white">{cs.client}</strong>
                  </span>
                  <span className="text-xs text-gray-400">
                    Duration: <strong className="text-white">{cs.timeframe}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono block">
                      {cs.heroMetric}
                    </span>
                    <span className="text-[11px] text-gray-400">
                      {cs.heroMetricLabel}
                    </span>
                  </div>
                  <div className="text-right pl-6 border-l border-white/10">
                    <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono block">
                      {cs.secondaryMetric}
                    </span>
                    <span className="text-[11px] text-gray-400">
                      {cs.secondaryMetricLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Title & Overview */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
                {cs.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
                {cs.overview}
              </p>

              {/* Challenge vs Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-rose-500/20">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-2">
                    The Challenge & Bottlenecks
                  </span>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-purple-500/30">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-2">
                    The TechBerrys Solution & Architecture
                  </span>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {cs.solution}
                  </p>
                </div>
              </div>

              {/* Results Checklist */}
              <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Quantifiable Business Results
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cs.results.map((res, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-200">{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack & CTA */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-gray-400 mr-2">Technologies Used:</span>
                  {cs.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-purple-300 border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    navigate('/contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm shadow-[0_2px_12px_rgba(147,51,234,0.3)] transition-all cursor-pointer flex-shrink-0"
                >
                  <span>Request Similar Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0e071e] to-[#07050d] text-center border-t border-purple-950/60">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Achieve Measurable Impact on Your Roadmap
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mb-8">
            Schedule a 30-minute discovery session with our senior architects to identify where modern engineering and AI will deliver the highest ROI for your business.
          </p>
          <button
            onClick={() => {
              navigate('/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-[0_4px_24px_rgba(147,51,234,0.4)] transition-all cursor-pointer"
          >
            <span>Book a Discovery Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
