import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Sparkles, Search, ChevronDown, HelpCircle, MessageCircle, Mail, Phone, ArrowRight } from 'lucide-react';

export default function FAQPage({ navigate }) {
  const { faqs, contact } = siteData;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIdx, setOpenIdx] = useState(0);

  const categories = ['All', 'General', 'E-Commerce', 'AI & Automation', 'Process & Delivery', 'Security', 'Pricing & Support'];

  const filteredFaqs = faqs.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#07050d] text-white">
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-[#180828] to-[#07050d] overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Help Center & Knowledge Base</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight font-sans mb-6 leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-base sm:text-xl text-purple-200/80 leading-relaxed font-sans max-w-2xl">
            Everything you need to know about our services, AI development, engineering processes, security standards, and support.
          </p>

          {/* Search Filter */}
          <div className="w-full max-w-xl mt-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions (e.g., timeline, security, Shopify, AI)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white/[0.06] border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-purple-400 focus:bg-white/[0.1] transition-all"
            />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
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

      {/* FAQ Accordion Section */}
      <section className="py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg">No questions match your query "{searchTerm}".</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="mt-4 px-4 py-2 rounded-full bg-purple-600 text-white text-xs font-semibold"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-gradient-to-r from-purple-950/40 via-[#150a26] to-purple-950/40 border-purple-500/40 shadow-[0_8px_30px_rgba(156,98,250,0.12)]'
                        : 'bg-[#100a1e]/80 hover:bg-[#140c24] border-white/5'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                      className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 font-bold text-xs flex-shrink-0">
                          {idx + 1}
                        </span>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400/80 mb-0.5 block">
                            {faq.category}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-white">
                            {faq.q}
                          </h3>
                        </div>
                      </div>
                      <div
                        className={`w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 bg-purple-500/20 border-purple-500/40' : ''
                        }`}
                      >
                        <ChevronDown className="w-4 h-4 text-purple-300" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-0 border-t border-white/5 animate-fadeIn">
                        <p className="mt-4 text-xs sm:text-sm text-gray-300 leading-relaxed pl-12">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Need Direct Help Card */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-purple-950/50 via-[#160a28] to-purple-950/50 border border-purple-500/20 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Still have a question?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-400">
                Can't find the answer you're looking for? Reach out directly to our engineering support team.
              </p>
            </div>
            <button
              onClick={() => {
                navigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm shadow-[0_4px_16px_rgba(147,51,234,0.4)] transition-all cursor-pointer flex-shrink-0"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
