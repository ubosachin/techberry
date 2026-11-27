import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Footer({ navigate }) {
  const { footer, brand } = siteData;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const handleLinkClick = (href, e) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderSocialIcon = (icon) => {
    switch (icon) {
      case 'Linkedin':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
          </svg>
        );
      case 'Twitter':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'Instagram':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        );
      case 'Youtube':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      case 'Github':
      default:
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        );
    }
  };

  return (
    <footer className="bg-[#06030c] text-white pt-20 pb-12 border-t border-purple-950/80 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter & Brand CTA Ribbon */}
        <div className="rounded-3xl bg-gradient-to-r from-purple-950/60 via-[#140827] to-purple-950/60 border border-purple-500/20 p-8 sm:p-10 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 block">
                Stay Ahead of Digital Innovation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Get our weekly tech insights & enterprise playbooks
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-300">
                Join 15,000+ technology leaders and founders receiving our curated breakdown of AI breakthroughs and web architecture patterns.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-semibold">Thank you for subscribing! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your corporate email"
                      required
                      className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white/[0.06] border border-white/10 text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-purple-400 focus:bg-white/[0.1] transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-[0_4px_16px_rgba(147,51,234,0.4)] hover:shadow-[0_6px_24px_rgba(147,51,234,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2">
            <a
              href="/"
              onClick={(e) => handleLinkClick('/', e)}
              className="inline-flex items-center gap-3 mb-6 cursor-pointer group"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 sm:h-11 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(124,58,237,0.25)] group-hover:scale-105 transition-transform"
              />
            </a>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm mb-6">
              {footer.company.desc}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {footer.socials.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.label}
                  className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-purple-600/30 border border-white/10 hover:border-purple-400/50 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                >
                  {renderSocialIcon(soc.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 font-sans mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footer.quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(item.href, e)}
                    className="text-xs sm:text-sm text-gray-400 hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 font-sans mb-5">
              Core Services
            </h4>
            <ul className="space-y-2.5">
              {footer.services.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(item.href, e)}
                    className="text-xs sm:text-sm text-gray-400 hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 font-sans mb-5">
              Global Hub
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>{footer.contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <a
                  href={`mailto:${footer.contactInfo.email}`}
                  className="hover:text-purple-300 transition-colors"
                >
                  {footer.contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <a
                  href={`tel:${footer.contactInfo.phone}`}
                  className="hover:text-purple-300 transition-colors"
                >
                  {footer.contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>{footer.contactInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>{footer.copyright}</p>

          <div className="flex flex-wrap items-center gap-6">
            {footer.legal.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-purple-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <p className="text-[11px] text-gray-400">
            {footer.taglineBottom}
          </p>
        </div>
      </div>
    </footer>
  );
}
