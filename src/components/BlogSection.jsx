import React from 'react';
import { siteData } from '../data/siteData';
import { BookOpen, Calendar, Clock, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function BlogSection({ navigate }) {
  const { blogs } = siteData;
  // Display top 3 featured blogs on the home page
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section className="relative py-24 bg-[#090514] border-b border-purple-950/60 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              <span>Engineering & AI Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Our Latest Blogs & Insights
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400">
              Articles, architectural deep dives, and production playbooks written by the TechBerrys engineering and product team.
            </p>
          </div>

          <button
            onClick={() => {
              navigate('/blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer group self-start md:self-auto"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Featured Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogs.map((blog) => (
            <article
              key={blog.id}
              onClick={() => {
                navigate('/blog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group rounded-3xl bg-[#110a1f]/80 hover:bg-[#150d28] border border-white/5 hover:border-purple-500/40 p-6 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_40px_rgba(156,98,250,0.18)] hover:-translate-y-1.5 cursor-pointer"
            >
              <div>
                {/* Category & Read Time */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-snug mb-3">
                  {blog.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-gray-400 line-clamp-3 leading-relaxed mb-6">
                  {blog.summary}
                </p>
              </div>

              {/* Footer Meta */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-1 text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
