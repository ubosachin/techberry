import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function AboutSection({ navigate }) {
  const { about } = siteData;

  return (
    <section className="py-24 sm:py-32 bg-[#f5f5f7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Badge & Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span className="text-xs font-semibold text-gray-700 tracking-wide font-sans">
              {about.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#23123b] tracking-tight font-sans mb-6 leading-tight">
            {about.title}
          </h2>
        </div>

        {/* Content & Media Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Visual: Man with VR Headset */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-black border border-gray-200 shadow-2xl aspect-[4/3] group">
              <img
                src={about.image}
                alt="TechBerry Vision"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200/80 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#1a102a] font-sans block">
                    {about.highlight}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-gray-600 font-sans">
                    {about.highlightLabel}
                  </span>
                </div>

                {/* Avatar Stack Image */}
                <div className="w-28 h-10 flex items-center justify-end">
                  <img
                    src={about.avatarStack}
                    alt="Clients Reached"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-sans">
              {about.desc1}
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-sans">
              {about.desc2}
            </p>

            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
              <div className="flex items-center gap-1.5 mb-2 text-purple-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-purple-600 text-purple-600" />
                ))}
              </div>
              <p className="text-sm text-gray-600 italic font-sans">
                "{about.philosophy}"
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  navigate('/contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-900 hover:bg-purple-800 text-white font-medium text-sm transition-all shadow-md shadow-purple-900/30"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
