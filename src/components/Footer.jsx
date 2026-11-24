import React from 'react';
import { siteData } from '../data/siteData';

export default function Footer({ navigate }) {
  const { footer } = siteData;

  const handleLinkClick = (href, e) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  return (
    <footer className="bg-[#150628] text-white pt-20 pb-12 border-t border-purple-950/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top 3 Columns: Navigation, Connect, Project */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left pb-16 border-b border-white/10">
          {/* Column 1: Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple-300 font-sans mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footer.navigation.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(item.href, e)}
                    className="text-sm text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Connect */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple-300 font-sans mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              {footer.connect.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Project */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple-300 font-sans mb-6">
              Project
            </h4>
            <ul className="space-y-3">
              {footer.project.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-300/70 space-y-3 sm:space-y-0">
          <p>{footer.copyright}</p>
          <p className="hover:text-white transition-colors">
            {footer.credit}
          </p>
        </div>
      </div>
    </footer>
  );
}
