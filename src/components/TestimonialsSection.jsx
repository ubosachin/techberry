import React from 'react';
import { Star } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function TestimonialsSection() {
  const { testimonials } = siteData;

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#eeeeef] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span className="text-xs font-semibold text-gray-700 tracking-wide font-sans">
              Testimonial
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#23123b] tracking-tight font-sans mb-4">
            What our clients say
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans">
            Hear directly from the organizations, brands, and founders whose operations we have accelerated.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-gray-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(147,51,234,0.1)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* 5-Star Rating & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-purple-600">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-purple-600 text-purple-600" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-gray-400 font-mono">
                    {t.rating}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-base text-gray-700 leading-relaxed font-sans mb-8">
                  {t.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-purple-200"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 font-sans">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-sans">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
