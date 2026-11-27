import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Sparkles, Search, Clock, Calendar, ArrowRight, User, X, Share2, Bookmark } from 'lucide-react';

export default function BlogPage({ navigate }) {
  const { blogs } = siteData;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticleModal, setActiveArticleModal] = useState(null);

  const categories = ['All', 'AI & Machine Learning', 'Web & E-Commerce', 'Cloud & Security', 'Mobile Engineering', 'Growth & Strategy'];

  const filteredBlogs = blogs.filter((b) => {
    const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory;
    const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = blogs[0];

  return (
    <div className="min-h-screen bg-[#07050d] text-white">
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-[#180828] to-[#07050d] overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Engineering & Design Insights</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight font-sans mb-6 leading-tight">
            The TechBerrys Blog
          </h1>

          <p className="text-base sm:text-xl text-purple-200/80 leading-relaxed font-sans max-w-2xl">
            In-depth architectural breakdowns, real-world AI implementation benchmarks, and best practices from our engineering team.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-xl mt-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles by topic, keyword, or architecture..."
              className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white/[0.06] border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-purple-400 focus:bg-white/[0.1] transition-all"
            />
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-6 bg-[#0c0717] border-y border-purple-950/60 sticky top-20 z-30 backdrop-blur-md bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white shadow-[0_2px_12px_rgba(147,51,234,0.4)]'
                  : 'bg-white/[0.04] text-gray-300 hover:text-white hover:bg-white/[0.08] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">No articles found matching "{searchTerm}".</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="mt-4 px-4 py-2 rounded-full bg-purple-600 text-white text-xs font-semibold"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((b) => (
                <article
                  key={b.id}
                  onClick={() => setActiveArticleModal(b)}
                  className="rounded-3xl bg-[#110a1f]/90 hover:bg-[#150d28] border border-white/10 hover:border-purple-500/40 p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_40px_rgba(156,98,250,0.18)] hover:-translate-y-1.5 cursor-pointer group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {b.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{b.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors leading-snug mb-3">
                      {b.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-300 line-clamp-3 leading-relaxed mb-6">
                      {b.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-purple-400" />
                      <span>{b.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Full Article Reader Modal */}
      {activeArticleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#120a22] border border-purple-500/30 rounded-3xl p-6 sm:p-10 overflow-y-auto text-left shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
            <button
              onClick={() => setActiveArticleModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {activeArticleModal.category}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {activeArticleModal.readTime}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {activeArticleModal.date}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
              {activeArticleModal.title}
            </h2>

            <div className="flex items-center gap-2 text-xs text-purple-300 mb-8 pb-4 border-b border-white/10">
              <User className="w-4 h-4" />
              <span>Written by {activeArticleModal.author}</span>
            </div>

            <div className="prose prose-invert max-w-none text-gray-300 text-sm sm:text-base leading-relaxed space-y-4">
              {activeArticleModal.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  setActiveArticleModal(null);
                  navigate('/contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm shadow-[0_2px_12px_rgba(147,51,234,0.4)] transition-all cursor-pointer"
              >
                Discuss with Authors
              </button>
              <button
                onClick={() => setActiveArticleModal(null)}
                className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
