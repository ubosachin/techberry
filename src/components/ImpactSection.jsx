import React, { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';

export default function ImpactSection() {
  const { impactStats } = siteData;

  return (
    <section id="impact" className="py-20 sm:py-28 bg-[#f5f5f7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span className="text-xs font-semibold text-gray-700 tracking-wide font-sans">
              Our impact
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#23123b] tracking-tight font-sans mb-4">
            Measurable impact
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans">
            Real results from intelligent automation. Every workflow optimized, every hour put to better use.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-3xl bg-white/80 hover:bg-white backdrop-blur-md border border-gray-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(147,51,234,0.12)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/40 group-hover:via-purple-500/80 group-hover:to-indigo-500/40 rounded-full transition-all duration-300" />

              <div>
                <span className="text-4xl sm:text-5xl font-extrabold text-[#23123b] tracking-tight font-sans block mb-3 group-hover:text-purple-900 transition-colors">
                  {stat.value}
                </span>

                <h3 className="text-lg font-bold text-gray-900 font-sans mb-2">
                  {stat.label}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed font-sans">
                  {stat.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-purple-700 opacity-80 group-hover:opacity-100 transition-opacity">
                <span>Verified Metric</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
