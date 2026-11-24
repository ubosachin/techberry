import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ServicesSection({ navigate }) {
  const { services } = siteData;

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#eeeeef] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span className="text-xs font-semibold text-gray-700 tracking-wide font-sans">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#23123b] tracking-tight font-sans mb-5 leading-tight">
            Technology Solutions Built Around Your Business
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans">
            From web and app development to AI automation, digital marketing, and cloud solutions, we deliver innovative technology services to help your business grow smarter and faster.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={() => {
                navigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative p-7 rounded-3xl bg-white border border-gray-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(147,51,234,0.12)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 cursor-pointer"
            >
              <div>
                {/* Top Row: Icon & Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 p-2.5 border border-purple-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-100/80 transition-all duration-300">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100 font-mono">
                    {service.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1a102a] font-sans mb-3 group-hover:text-purple-700 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed font-sans">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Action Hover indicator */}
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-purple-700 transition-colors">
                <span>Explore Solution</span>
                <div className="w-7 h-7 rounded-full bg-gray-50 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center transition-all duration-200">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
