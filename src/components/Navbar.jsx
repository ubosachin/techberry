import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Navbar({ currentPath, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredRect, setHoveredRect] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const navContainerRef = useRef(null);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'impact', href: '#impact' },
    { label: 'Testimonial', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (e, idx) => {
    const target = e.currentTarget;
    setHoveredRect({
      left: target.offsetLeft,
      width: target.offsetWidth,
    });
    setHoveredIdx(idx);
  };

  const handleMouseLeave = () => {
    setHoveredRect(null);
    setHoveredIdx(null);
  };

  const handleNavClick = (href, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '/contact' || href === '#contact') {
      navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      if (currentPath !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex flex-col items-center px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
      {/* Curved Floating Navbar Container with Translucent Glassmorphism Effect */}
      <div
        className={`w-full max-w-7xl pointer-events-auto rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/75 backdrop-blur-2xl backdrop-saturate-[180%] border border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_12px_36px_rgba(0,0,0,0.12),0_0_20px_rgba(156,98,250,0.15)] py-3 px-4 sm:py-3.5 sm:px-6 md:py-1.5 md:px-6 lg:py-2 lg:px-8'
            : 'bg-gradient-to-b from-white/70 via-white/50 to-white/65 backdrop-blur-2xl backdrop-saturate-[180%] border border-white/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),inset_0_-1px_1px_rgba(0,0,0,0.04),0_10px_30px_rgba(0,0,0,0.08),0_0_16px_rgba(156,98,250,0.12)] py-3.5 px-4 sm:py-4 sm:px-6 md:py-2 md:px-6 lg:py-2.5 lg:px-8'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Section - Enhanced height on mobile, sleek on desktop */}
          <a
            href="/"
            onClick={(e) => handleNavClick('/', e)}
            className="flex items-center gap-3 group cursor-pointer select-none flex-shrink-0"
          >
            <div className="relative h-10 sm:h-11 md:h-10 lg:h-11 xl:h-12 w-auto flex items-center justify-center">
              <img
                src={siteData.brand.logo}
                alt="TechBerrys"
                className="h-full w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(124,58,237,0.25)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </a>

          {/* Single Dedicated Container for Nav Links with Magnetic Sliding Cursor Indicator */}
          <nav
            ref={navContainerRef}
            onMouseLeave={handleMouseLeave}
            className="relative hidden md:flex items-center p-1 rounded-full bg-slate-900/[0.06] backdrop-blur-md border border-slate-900/[0.07] shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]"
          >
            {/* Smooth Sliding Cursor Indicator Pill */}
            <div
              className={`absolute top-1 bottom-1 rounded-full bg-white shadow-[0_2px_10px_rgba(124,58,237,0.22),0_1px_3px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,1)] border border-purple-200/80 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                hoveredRect ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                left: hoveredRect ? `${hoveredRect.left}px` : '0px',
                width: hoveredRect ? `${hoveredRect.width}px` : '0px',
              }}
            />

            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={(e) => handleMouseEnter(e, idx)}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`relative z-10 px-3.5 py-1 lg:px-4 lg:py-1.5 rounded-full text-xs md:text-sm lg:text-[14px] font-semibold transition-colors duration-200 cursor-pointer select-none ${
                  hoveredIdx === idx
                    ? 'text-purple-700 font-bold'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <a
              href="/contact"
              onClick={(e) => handleNavClick('/contact', e)}
              className="group relative inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 lg:px-6 lg:py-2 rounded-full bg-gradient-to-r from-[#9c62fa] to-[#803fe8] text-white text-xs md:text-sm lg:text-[15px] font-bold shadow-[0_4px_16px_rgba(156,98,250,0.4)] hover:shadow-[0_6px_24px_rgba(156,98,250,0.65)] hover:scale-105 transition-all duration-300"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button - Comfortable touch target */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-slate-700 hover:text-purple-700 hover:bg-purple-100/60 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer - Responsive Curved Container with Glass Effect */}
      {mobileMenuOpen && (
        <div className="w-full max-w-7xl mt-2 pointer-events-auto rounded-3xl bg-white/80 backdrop-blur-2xl backdrop-saturate-[180%] border border-white/70 p-5 sm:p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_20px_50px_rgba(0,0,0,0.18)] md:hidden space-y-2 animate-in fade-in slide-in-from-top-3 duration-200">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(item.href, e)}
              className="block px-4 py-3 text-base font-semibold text-slate-700 hover:text-purple-700 hover:bg-purple-100/60 rounded-2xl transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="/contact"
              onClick={(e) => handleNavClick('/contact', e)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#9c62fa] to-[#803fe8] text-white text-base font-bold shadow-lg"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
