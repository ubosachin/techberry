import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Sparkles, Globe, Award, BookOpen, Laptop, Heart, Calendar, ArrowRight, Briefcase, MapPin, Clock, CheckCircle2, X } from 'lucide-react';

export default function CareerPage({ navigate }) {
  const { careers } = siteData;
  const [selectedDept, setSelectedDept] = useState('All');
  const [activeJobModal, setActiveJobModal] = useState(null);
  const [applySubmitted, setApplySubmitted] = useState(false);
  const [applicantData, setApplicantData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    resumeLink: '',
    coverNote: ''
  });

  const perkIcons = {
    Globe: <Globe className="w-6 h-6 text-purple-400" />,
    Award: <Award className="w-6 h-6 text-pink-400" />,
    BookOpen: <BookOpen className="w-6 h-6 text-amber-400" />,
    Laptop: <Laptop className="w-6 h-6 text-cyan-400" />,
    Heart: <Heart className="w-6 h-6 text-emerald-400" />,
    Calendar: <Calendar className="w-6 h-6 text-indigo-400" />
  };

  const departments = ['All', 'Engineering', 'Design', 'Infrastructure', 'Growth'];

  const filteredJobs = selectedDept === 'All'
    ? careers.openings
    : careers.openings.filter(j => j.department === selectedDept);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplySubmitted(true);
    setTimeout(() => {
      setApplySubmitted(false);
      setActiveJobModal(null);
      setApplicantData({ name: '', email: '', phone: '', portfolio: '', resumeLink: '', coverNote: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#07050d] text-white">
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-[#180828] to-[#07050d] overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{careers.hero.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight font-sans mb-6 leading-tight">
            {careers.hero.title}
          </h1>

          <p className="text-base sm:text-xl text-purple-200/80 leading-relaxed font-sans max-w-2xl">
            {careers.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Perks & Benefits Grid */}
      <section className="py-20 bg-[#0a0616] border-y border-purple-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 block">
              Life At TechBerrys
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Perks, Benefits & Culture
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {careers.perks.map((perk, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#120a22]/80 border border-white/5 hover:border-purple-500/30 transition-all duration-300 flex items-start gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0">
                  {perkIcons[perk.icon]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">
                    {perk.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 block">
                Join Our Team
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Current Open Positions
              </h2>
            </div>

            {/* Department Filter Pills */}
            <div className="flex items-center flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedDept === dept
                      ? 'bg-purple-600 text-white shadow-[0_2px_10px_rgba(147,51,234,0.3)]'
                      : 'bg-white/[0.04] text-gray-300 hover:text-white border border-white/5'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-8 rounded-3xl bg-[#110a1f]/90 hover:bg-[#150d26] border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.3)] group"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {job.department}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      {job.location}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-purple-400" />
                      {job.type}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                      {job.experience}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    {job.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {job.skills.map((s) => (
                      <span key={s} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-purple-200 border border-white/5">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setActiveJobModal(job)}
                  className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm shadow-[0_4px_16px_rgba(147,51,234,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2 flex-shrink-0"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {activeJobModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#120a22] border border-purple-500/30 rounded-3xl p-6 sm:p-10 overflow-y-auto text-left shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
            <button
              onClick={() => setActiveJobModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-1 block">
              Application
            </span>
            <h2 className="text-2xl font-extrabold text-white mb-2">
              Apply for {activeJobModal.title}
            </h2>
            <p className="text-xs text-gray-400 mb-6">
              {activeJobModal.department} • {activeJobModal.location} • {activeJobModal.type}
            </p>

            {applySubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Application Submitted!
                </h3>
                <p className="text-xs text-gray-300 max-w-sm mx-auto">
                  Thank you for applying. Our recruiting team will review your profile and reach out within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={applicantData.name}
                      onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={applicantData.email}
                      onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={applicantData.phone}
                      onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">LinkedIn / Portfolio URL *</label>
                    <input
                      type="url"
                      required
                      value={applicantData.portfolio}
                      onChange={(e) => setApplicantData({ ...applicantData, portfolio: e.target.value })}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Resume / CV Link (Google Drive, Notion, PDF) *</label>
                  <input
                    type="url"
                    required
                    value={applicantData.resumeLink}
                    onChange={(e) => setApplicantData({ ...applicantData, resumeLink: e.target.value })}
                    placeholder="https://drive.google.com/..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Why TechBerrys? (Short Note)</label>
                  <textarea
                    rows={3}
                    value={applicantData.coverNote}
                    onChange={(e) => setApplicantData({ ...applicantData, coverNote: e.target.value })}
                    placeholder="Tell us about a technical challenge you solved or what excites you about this role..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-400 resize-none"
                  />
                </div>

                <div className="pt-4 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveJobModal(null)}
                    className="px-4 py-2 rounded-full text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm shadow-[0_2px_12px_rgba(147,51,234,0.4)] transition-all cursor-pointer"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
