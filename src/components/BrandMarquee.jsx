import React from 'react';
import { siteData } from '../data/siteData';

export default function BrandMarquee() {
  const { techStack } = siteData;
  // Double array for continuous seamless looping
  const marqueeItems = [...techStack, ...techStack];

  return (
    <section className="relative py-14 bg-[#f8f9fa] border-y border-gray-200 overflow-hidden" style={{ overflowX: 'clip' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500 font-sans">
          Powered by Modern Programming Languages & Technologies
        </p>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center" style={{ overflowX: 'clip' }}>
        {/* Left & Right gradient fade mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-10 sm:gap-14 animate-marquee whitespace-nowrap will-change-transform">
          {marqueeItems.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-200 group flex-shrink-0 cursor-default"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain filter group-hover:scale-110 transition-transform"
                loading="lazy"
              />
              <span className="text-sm font-semibold text-gray-800 font-sans group-hover:text-purple-700 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
