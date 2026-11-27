import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ChevronDown, Briefcase, HelpCircle, FileText, Layers, FolderKanban, Users, Home } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Navbar({ currentPath, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [hoveredRect, setHoveredRect] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const navContainerRef = useRef(null);
  const dropdownRef = useRef(null);

  // Primary desktop nav items
  const primaryNavItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Case Study', href: '/case-study' },
    { label: 'Blog', href: '/blog' },
  ];

  // Secondary items in the "More" dropdown
  const moreNavItems = [
    { label: 'Careers', href: '/careers', desc: 'Join our engineering & AI team' },
    { label: 'FAQ', href: '/faq', desc: 'Knowledge base & answers' },
  ];

  // All 9 items for mobile menu drawer
  const allNavItems = [
    { label: 'Home', href: '/', icon: <Home className="w-4 h-4 text-purple-600" /> },
    { label: 'About Us', href: '/about', icon: <Users className="w-4 h-4 text-purple-600" /> },
    { label: 'Services', href: '/services', icon: <Layers className="w-4 h-4 text-purple-600" /> },
    { label: 'Projects', href: '/projects', icon: <FolderKanban className="w-4 h-4 text-purple-600" /> },
    { label: 'Case Study', href: '/case-study', icon: <FileText className="w-4 h-4 text-purple-600" /> },
    { label: 'Blog', href: '/blog', icon: <FileText className="w-4 h-4 text-purple-600" /> },
    { label: 'Careers', href: '/careers', icon: <Briefcase className="w-4 h-4 text-purple-600" /> },
    { label: 'FAQ', href: '/faq', icon: <HelpCircle className="w-4 h-4 text-purple-600" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
    setMoreDropdownOpen(false);
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex flex-col items-center px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
      {/* Curved Floating Navbar Container with Translucent Glassmorphism Effect */}
      <div
        className={`w-full max-w-7xl pointer-events-auto rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-2xl backdrop-saturate-[180%] border border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_12px_36px_rgba(0,0,0,0.12),0_0_20px_rgba(156,98,250,0.15)] py-2.5 px-4 sm:py-3 sm:px-6 md:py-1.5 md:px-6 lg:py-2 lg:px-8'
            : 'bg-gradient-to-b from-white/75 via-white/55 to-white/70 backdrop-blur-2xl backdrop-saturate-[180%] border border-white/75 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),inset_0_-1px_1px_rgba(0,0,0,0.04),0_10px_30px_rgba(0,0,0,0.08),0_0_16px_rgba(156,98,250,0.12)] py-3 px-4 sm:py-3.5 sm:px-6 md:py-2 md:px-6 lg:py-2.5 lg:px-8'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <a
            href="/"
            onClick={(e) => handleNavClick('/', e)}
            className="flex items-center gap-3 group cursor-pointer select-none flex-shrink-0"
          >
            <div className="relative h-10 sm:h-11 md:h-9 lg:h-11 xl:h-12 w-auto flex items-center justify-center">
              <img
                src={siteData.brand.logo}
                alt="TechBerrys"
                className="h-full w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(124,58,237,0.25)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </a>

          {/* Desktop Nav Items with Magnetic Sliding Cursor Indicator */}
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

            {primaryNavItems.map((item, idx) => {
              const isActive = currentPath === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={(e) => handleMouseEnter(e, idx)}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={`relative z-10 px-3 py-1 lg:px-3.5 lg:py-1.5 rounded-full text-xs lg:text-[13px] font-semibold transition-colors duration-200 cursor-pointer select-none ${
                    isActive
                      ? 'text-purple-700 font-bold'
                      : hoveredIdx === idx
                      ? 'text-purple-700 font-bold'
                      : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            {/* "More" Dropdown Trigger */}
            <div className="relative" ref={dropdownRef}>
              <button
                onMouseEnter={(e) => handleMouseEnter(e, primaryNavItems.length)}
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`relative z-10 px-3 py-1 lg:px-3.5 lg:py-1.5 rounded-full text-xs lg:text-[13px] font-semibold transition-colors duration-200 cursor-pointer select-none flex items-center gap-1 ${
                  currentPath === '/careers' || currentPath === '/faq'
                    ? 'text-purple-700 font-bold'
                    : hoveredIdx === primaryNavItems.length
                    ? 'text-purple-700 font-bold'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {moreDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl bg-white/95 backdrop-blur-2xl border border-purple-200/80 shadow-[0_12px_36px_rgba(0,0,0,0.15)] p-2 z-50 animate-fadeIn">
                  {moreNavItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(item.href, e)}
                      className={`block px-3.5 py-2.5 rounded-xl transition-colors ${
                        currentPath === item.href
                          ? 'bg-purple-100/70 text-purple-900 font-bold'
                          : 'hover:bg-purple-50 text-slate-700 hover:text-purple-700'
                      }`}
                    >
                      <div className="text-xs font-bold">{item.label}</div>
                      <div className="text-[10px] text-gray-500 font-normal">{item.desc}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <a
              href="/contact"
              onClick={(e) => handleNavClick('/contact', e)}
              className="group relative inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 lg:px-6 lg:py-2 rounded-full bg-gradient-to-r from-[#9c62fa] to-[#803fe8] text-white text-xs md:text-sm lg:text-[14px] font-bold shadow-[0_4px_16px_rgba(156,98,250,0.4)] hover:shadow-[0_6px_24px_rgba(156,98,250,0.65)] hover:scale-105 transition-all duration-300"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-slate-700 hover:text-purple-700 hover:bg-purple-100/60 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="w-full max-w-7xl mt-2 pointer-events-auto rounded-3xl bg-white/95 backdrop-blur-2xl backdrop-saturate-[180%] border border-white/80 p-5 sm:p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_20px_50px_rgba(0,0,0,0.2)] md:hidden space-y-1.5 animate-fadeIn max-h-[82vh] overflow-y-auto">
          {allNavItems.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-purple-100 text-purple-900 font-bold'
                    : 'text-slate-700 hover:text-purple-700 hover:bg-purple-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-sm font-semibold">{item.label}</span>
                </div>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                )}
              </a>
            );
          })}

          {/* Mobile Contact Button */}
          <div className="pt-3 border-t border-gray-100">
            <a
              href="/contact"
              onClick={(e) => handleNavClick('/contact', e)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-[#9c62fa] to-[#803fe8] text-white text-sm font-bold shadow-lg cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
