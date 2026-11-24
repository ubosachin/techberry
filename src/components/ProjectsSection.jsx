import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ProjectsSection({ navigate }) {
  const { projects } = siteData;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#f4f4f6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span className="text-xs font-semibold text-gray-700 tracking-wide font-sans">
              Our Projects
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#23123b] tracking-tight font-sans mb-4">
            AI in Action
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans">
            From workflow automation to intelligent reporting, discover how AOVIX transforms business operations.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 font-sans cursor-pointer ${
                activeTab === idx
                  ? 'bg-purple-900 text-white shadow-lg shadow-purple-900/30 scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300 hover:text-purple-900 shadow-sm'
              }`}
            >
              {proj.title}
            </button>
          ))}
        </div>

        {/* Featured Project Display Card */}
        <div className="relative rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold mb-4 border border-purple-100">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Workflow Automation</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a102a] font-sans mb-4 leading-tight">
                  {projects[activeTab].title}
                </h3>

                <p className="text-base text-gray-600 leading-relaxed font-sans mb-8">
                  {projects[activeTab].desc}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <button
                  onClick={() => {
                    navigate('/contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm transition-all shadow-md shadow-purple-600/30 hover:gap-3"
                >
                  <span>Build This Workflow</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-7 bg-gray-50 border-t lg:border-t-0 lg:border-l border-gray-100 p-4 sm:p-8 flex items-center justify-center min-h-[350px] sm:min-h-[460px]">
              <div className="w-full h-full rounded-2xl overflow-hidden border border-gray-200/60 shadow-inner group">
                <img
                  src={projects[activeTab].image}
                  alt={projects[activeTab].title}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
