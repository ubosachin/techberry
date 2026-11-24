import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ProcessSection({ navigate }) {
  const { processSteps } = siteData;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#eeeeef] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span className="text-xs font-semibold text-gray-700 tracking-wide font-sans">
              Process
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#23123b] tracking-tight font-sans mb-4">
            From Complexity to Clarity
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans">
            Our systematic three-step deployment methodology transforms complex enterprise challenges into smooth, autonomous digital operations.
          </p>
        </div>

        {/* Process Showcase Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Step Navigation & Details */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {processSteps.map((s, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? 'bg-white border-purple-300/80 shadow-[0_15px_35px_rgba(147,51,234,0.1)] scale-[1.02]'
                      : 'bg-white/60 hover:bg-white border-gray-200/70 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                        isActive
                          ? 'bg-purple-900 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {s.step}
                    </span>
                    <h3
                      className={`text-xl font-bold font-sans transition-colors ${
                        isActive ? 'text-[#1a102a]' : 'text-gray-700'
                      }`}
                    >
                      {s.name}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-13 font-sans">
                    {s.desc}
                  </p>
                </div>
              );
            })}

            <div className="pt-4 pl-2">
              <button
                onClick={() => {
                  navigate('/contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors group"
              >
                <span>Discuss Your Process With Our Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-black aspect-[4/3] sm:aspect-[16/10] group">
              <img
                src={processSteps[activeStep].image}
                alt={processSteps[activeStep].name}
                className="w-full h-full object-cover object-center filter brightness-95 transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Frosted Status Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400" />
                  <span className="text-xs sm:text-sm font-medium">
                    Step {activeStep + 1}: {processSteps[activeStep].name}
                  </span>
                </div>
                <span className="text-xs font-mono text-purple-300">Phase 0{activeStep + 1}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
