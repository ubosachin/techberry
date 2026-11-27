import React from 'react';
import { siteData } from '../data/siteData';
import { Sparkles, Shield, Rocket, Target, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutPage({ navigate }) {
  const { about, impactStats } = siteData;

  const coreValues = [
    {
      title: "Relentless Engineering Precision",
      desc: "We write clean, typed, modular code with sub-second performance budgets and zero tolerance for technical debt.",
      icon: <Target className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Transparent & Agile Partnership",
      desc: "Weekly demo sprints, direct Slack channels with engineers, and clear milestone-driven roadmap deliverables.",
      icon: <Users className="w-6 h-6 text-pink-400" />
    },
    {
      title: "Data Sovereignty & Security",
      desc: "Zero-trust architectures, strict role-based access, and complete privacy guardrails for all proprietary enterprise data.",
      icon: <Shield className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Measurable Commercial ROI",
      desc: "We measure success in hours saved, conversion rates multiplied, and operational costs slashed — not vanity metrics.",
      icon: <Award className="w-6 h-6 text-amber-400" />
    }
  ];

  const milestones = [
    { year: "2023", title: "Inception & Core Foundation", desc: "TechBerrys was founded with the mission of simplifying complex software engineering and making modern web solutions accessible." },
    { year: "2024", title: "Enterprise Scaling & Global Reach", desc: "Delivered 80+ high-traffic web applications, Shopify stores, and digital marketing funnels for clients in the US, Europe, and Asia." },
    { year: "2025", title: "Autonomous AI Lab Launch", desc: "Pioneered proprietary cognitive agent swarms, vector RAG pipelines, and automated intelligence integrations." },
    { year: "2026", title: "Full-Spectrum Intelligence", desc: "Now empowering over 100,000+ end-users with unified digital platforms, resilient cloud architectures, and autonomous workflows." }
  ];

  return (
    <div className="min-h-screen bg-[#07050d] text-white">
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-[#180828] to-[#07050d] overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Our Story & Mission</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight font-sans mb-6 leading-tight">
            Building Digital Experiences. Powering Business Growth.
          </h1>

          <p className="text-base sm:text-xl text-purple-200/80 leading-relaxed font-sans max-w-2xl">
            TechBerrys combines creative craftsmanship, bleeding-edge engineering, and autonomous AI to build digital solutions that simplify operations and drive exponential growth.
          </p>
        </div>
      </section>

      {/* Metrics Ribbon */}
      <section className="py-12 bg-[#0c0717] border-y border-purple-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-purple-400 tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
                  {stat.label}
                </span>
                <span className="text-[11px] text-gray-400 mt-0.5 block">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Narrative Section */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 block">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug mb-6">
                Technology should not just work — it should create lasting competitive advantages.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>{about.desc1}</p>
                <p>{about.desc2}</p>
                <p>{about.philosophy}</p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {about.avatars.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Team"
                      className="w-10 h-10 rounded-full border-2 border-purple-900 object-cover"
                    />
                  ))}
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">
                    {about.highlight}
                  </span>
                  <span className="text-xs text-gray-400">
                    {about.highlightLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 shadow-[0_20px_50px_rgba(156,98,250,0.25)]">
                <img
                  src={about.image}
                  alt="TechBerrys VR Experience"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="text-xs font-mono text-purple-300 uppercase tracking-wider block">
                      Engineering Culture
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      Where Human Craft Meets Machine Intelligence
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-[#0a0616] border-y border-purple-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 block">
              What Guides Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Core Engineering Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#120a22]/80 border border-white/5 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-5">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Journey */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 block">
              Our Evolution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Journey of TechBerrys
            </h2>
          </div>

          <div className="space-y-8">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all"
              >
                <div className="w-20 flex-shrink-0">
                  <span className="text-2xl font-extrabold text-purple-400 font-mono">
                    {m.year}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {m.desc}
                  </p>
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
            Ready to Build Your Next Breakthrough?
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mb-8">
            Let's discuss how TechBerrys can transform your digital presence, automate your workflows, and accelerate growth.
          </p>
          <button
            onClick={() => {
              navigate('/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-[0_4px_24px_rgba(147,51,234,0.4)] transition-all cursor-pointer"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
