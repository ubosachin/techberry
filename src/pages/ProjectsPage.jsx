import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Sparkles, ArrowRight, ExternalLink, Filter, Layers, CheckCircle2 } from 'lucide-react';

export default function ProjectsPage({ navigate }) {
  const { projects } = siteData;
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'AI & Automation', 'Enterprise SaaS', 'Data Intelligence', 'Conversational AI', 'HR Automation'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#07050d] text-white">
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-[#180828] to-[#07050d] overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Proven Enterprise Deliveries</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight font-sans mb-6 leading-tight">
            Our Work & Digital Products
          </h1>

          <p className="text-base sm:text-xl text-purple-200/80 leading-relaxed font-sans max-w-2xl">
            Explore a curated selection of autonomous AI platforms, high-performance web systems, and automation engines built by TechBerrys.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-[#0c0717] border-y border-purple-950/60 sticky top-20 z-30 backdrop-blur-md bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-purple-600 text-white shadow-[0_2px_12px_rgba(147,51,234,0.4)]'
                  : 'bg-white/[0.04] text-gray-300 hover:text-white hover:bg-white/[0.08] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="rounded-3xl bg-[#110a1f]/90 border border-white/10 hover:border-purple-500/40 overflow-hidden transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_45px_rgba(156,98,250,0.2)] flex flex-col justify-between group"
              >
                {/* Visual Image Preview */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/40">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#110a1f] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-purple-300 text-xs font-semibold">
                      {proj.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed mb-6">
                      {proj.desc}
                    </p>

                    {/* Metric Highlight */}
                    {proj.metrics && (
                      <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs sm:text-sm font-semibold mb-6">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span>Key Metric: {proj.metrics}</span>
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    {proj.stack && (
                      <div className="flex flex-wrap gap-2 mb-8">
                        {proj.stack.map((item) => (
                          <span
                            key={item}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-gray-300 border border-white/5"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <button
                      onClick={() => {
                        navigate('/contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex-1 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm shadow-[0_2px_10px_rgba(147,51,234,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Inquire About Similar Build</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        navigate('/case-study');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-4 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                    >
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0e071e] to-[#07050d] text-center border-t border-purple-950/60">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Have a Complex Engineering Problem?
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mb-8">
            Whether you need to scale an existing platform or architect an autonomous AI workflow from scratch, we have the team to make it happen.
          </p>
          <button
            onClick={() => {
              navigate('/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-[0_4px_24px_rgba(147,51,234,0.4)] transition-all cursor-pointer"
          >
            <span>Let's Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
