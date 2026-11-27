import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Sparkles, CheckCircle2, ArrowRight, Layers, Cpu, Shield, Zap } from 'lucide-react';

export default function ServicesPage({ navigate }) {
  const { services } = siteData;
  const [selectedService, setSelectedService] = useState(null);

  const deliverySteps = [
    { num: "01", title: "Discovery & Blueprint", desc: "We audit your current systems, define business objectives, and architect a robust technical specification." },
    { num: "02", title: "Agile Development Sprints", desc: "Bi-weekly demo releases with continuous feedback, full test coverage, and transparent code reviews." },
    { num: "03", title: "Automated QA & Security", desc: "Rigorous penetration testing, multi-device responsiveness audits, and load stress testing." },
    { num: "04", title: "Deployment & Scale", desc: "Zero-downtime CI/CD rollout, real-time observability telemetry, and guaranteed SLAs." }
  ];

  return (
    <div className="min-h-screen bg-[#07050d] text-white">
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-[#180828] to-[#07050d] overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Full-Spectrum Capabilities</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight font-sans mb-6 leading-tight">
            Comprehensive Digital & AI Engineering Services
          </h1>

          <p className="text-base sm:text-xl text-purple-200/80 leading-relaxed font-sans max-w-2xl">
            From modern headless web applications and mobile apps to autonomous multi-agent AI pipelines and cloud security, we build solutions that deliver measurable commercial value.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="rounded-3xl p-8 sm:p-10 bg-[#100a1e]/90 hover:bg-[#150d26] border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_45px_rgba(156,98,250,0.2)] flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:bg-purple-500/20 transition-all">
                      <img
                        src={svc.icon}
                        alt={svc.title}
                        className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(147,51,234,0.3)]"
                      />
                    </div>
                    <span className="text-sm font-mono font-bold text-purple-400/80">
                      {svc.num}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {svc.desc}
                  </p>

                  {/* Feature Checklist */}
                  {svc.features && (
                    <div className="space-y-2.5 mb-8">
                      {svc.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Inquiry Button */}
                <button
                  onClick={() => {
                    navigate('/contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 rounded-full bg-white/[0.05] hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 border border-white/10 hover:border-transparent text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.2)] group-hover:shadow-[0_4px_20px_rgba(147,51,234,0.3)]"
                >
                  <span>Inquire About {svc.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Delivery Lifecycle */}
      <section className="py-20 bg-[#0a0616] border-y border-purple-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 block">
              How We Deliver
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our 4-Stage Production Engineering Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverySteps.map((step, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#120a22]/80 border border-white/5 hover:border-purple-500/30 transition-all duration-300"
              >
                <span className="text-3xl font-extrabold text-purple-400/80 font-mono block mb-4">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0e071e] to-[#07050d] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Need a Custom Architecture for Your Business?
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mb-8">
            Tell us about your requirements and let our senior solution architects draft an actionable technical proposal.
          </p>
          <button
            onClick={() => {
              navigate('/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-[0_4px_24px_rgba(147,51,234,0.4)] transition-all cursor-pointer"
          >
            <span>Book a Technical Discovery Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
