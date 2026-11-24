import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function CTASection({ navigate }) {
  const { cta } = siteData;

  return (
    <section className="py-24 sm:py-32 bg-[#100422] relative overflow-hidden text-center text-white">
      {/* Background radial cosmic glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/25 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-purple-300" />
          <span className="text-xs font-semibold tracking-wider uppercase text-purple-200">
            Start Your Journey
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-sans mb-6 max-w-2xl leading-tight">
          {cta.title}
        </h2>

        <p className="text-base sm:text-lg text-purple-200/80 leading-relaxed font-sans mb-10 max-w-2xl">
          {cta.subtitle}
        </p>

        <button
          onClick={() => {
            navigate('/contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group relative px-8 py-4 rounded-full text-base font-semibold text-white transition-all duration-300 shadow-[0_0_35px_rgba(153,69,255,0.45)] hover:shadow-[0_0_50px_rgba(153,69,255,0.7)] flex items-center gap-2"
          style={{
            background: 'linear-gradient(135deg, #9945FF 0%, #7928CA 100%)',
          }}
        >
          <span>{cta.buttonText}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
