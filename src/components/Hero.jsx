import React from 'react';
import { siteData } from '../data/siteData';

export default function Hero({ navigate }) {
  const { brand } = siteData;

  return (
    <section
      className="relative min-h-[780px] sm:min-h-[840px] md:min-h-[920px] lg:min-h-[980px] xl:min-h-[1040px] bg-[#d1d1d1] flex flex-col justify-between overflow-hidden pt-32 sm:pt-36 md:pt-40 lg:pt-44 xl:pt-48 pb-8 sm:pb-12 transition-colors duration-500"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Base Semi-Transparent Cosmic Nebula Image */}
      <img
        src={brand.heroBackground}
        alt="Space Nebula"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0"
      />

      {/* Clipped Fog & Ambient Mist Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-10">
        {/* Left Fog Pillar - Responsive opacity & size */}
        <div
          className="absolute -left-12 top-4 w-[110px] sm:w-[160px] md:w-[220px] h-[460px] bg-[#e5e5e5] opacity-30 sm:opacity-50 md:opacity-95 animate-fog-1"
          style={{ filter: 'blur(47px)', WebkitFilter: 'blur(47px)' }}
        />
        {/* Right Fog Pillar - Responsive opacity & size */}
        <div
          className="absolute -right-12 top-6 w-[110px] sm:w-[160px] md:w-[220px] h-[460px] bg-[#e5e5e5] opacity-30 sm:opacity-50 md:opacity-95 animate-fog-2"
          style={{ filter: 'blur(47px)', WebkitFilter: 'blur(47px)' }}
        />

        {/* Subtle Ambient Radial Light across top */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.25)_0%,_transparent_65%)]" />

        {/* Side Floating Tiles - Only on desktop/tablet to keep mobile clean */}
        <div className="absolute left-[3%] top-[38%] w-[84px] h-[68px] rounded-xl bg-white/10 backdrop-blur-md border border-[#9c62fa]/60 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hidden md:block animate-float-slow" />
        <div className="absolute left-[1.5%] top-[47%] w-[84px] h-[68px] rounded-xl bg-black/30 backdrop-blur-md border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.25)] hidden md:block animate-float-reverse" />
        <div className="absolute left-[8%] top-[30%] w-[72px] h-[60px] rounded-xl bg-white/[0.08] backdrop-blur-sm border border-white/10 hidden lg:block" />

        <div className="absolute right-[10%] top-[9%] w-[84px] h-[68px] rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hidden md:block animate-float-slow" />
        <div className="absolute right-[4%] top-[10%] w-[84px] h-[68px] rounded-xl bg-black/30 backdrop-blur-md border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.25)] hidden md:block animate-float-reverse" />
        <div className="absolute right-[3%] top-[32%] w-[72px] h-[60px] rounded-xl bg-white/[0.08] backdrop-blur-sm border border-white/10 hidden lg:block" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center flex-grow justify-between">
        {/* Top: Massive TechBerrys Heading - Positioned BEHIND the globe across Mobile, Tablet & Desktop */}
        <div className="relative w-full text-center select-none pt-1 sm:pt-3 md:pt-4 z-10">
          <h1
            className="text-[14.5vw] sm:text-[14vw] md:text-[145px] lg:text-[185px] xl:text-[220px] font-normal tracking-[-0.03em] text-transparent bg-clip-text leading-none select-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.25)] whitespace-nowrap"
            style={{
              backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #e2e0ee 42%, #6c6785 100%)',
              fontFamily: '"Google Sans Flex", "Inter", sans-serif'
            }}
          >
            TechBerrys
          </h1>
        </div>

        {/* Central 3D Textured Purple Sphere & Connected Stage - Pulled up with negative margin so the globe overlaps the text */}
        <div className="relative w-full max-w-5xl h-[330px] sm:h-[400px] md:h-[500px] lg:h-[560px] -mt-20 sm:-mt-22 md:-mt-20 lg:-mt-20 xl:-mt-24 flex items-center justify-center z-20">
          {/* Central 3D Hairy Purple Sphere with 1:1 Aspect Ratio across all devices */}
          <div className="relative z-10 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[450px] md:h-[450px] lg:w-[510px] lg:h-[510px] xl:w-[550px] xl:h-[550px] transition-transform duration-700 hover:scale-105">
            <img
              src={brand.heroImage}
              alt="TechBerrys AI Core"
              className="w-full h-full object-contain filter drop-shadow-[0_20px_60px_rgba(80,30,150,0.45)] select-none pointer-events-none animate-spin-sphere"
            />
          </div>

          {/* Connected Badges with 4 Corner Accent Dots - Positioned responsively for Mobile & Desktop */}

          {/* 1. GALLEON (Upper-Left of Sphere) */}
          <div className="absolute top-[26%] sm:top-[28%] md:top-[26%] left-[1%] sm:left-[6%] md:left-[20%] z-30 animate-float-slow">
            <div className="relative px-3.5 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-xl bg-slate-900/40 backdrop-blur-lg border border-purple-300/40 shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex items-center justify-center">
              {/* 4 Corner Dots */}
              <span className="absolute top-1 left-1 sm:top-1.5 sm:left-1.5 w-1 h-1 rounded-full bg-purple-300" />
              <span className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 w-1 h-1 rounded-full bg-purple-300" />
              <span className="absolute bottom-1 left-1 sm:bottom-1.5 sm:left-1.5 w-1 h-1 rounded-full bg-purple-300" />
              <span className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 w-1 h-1 rounded-full bg-purple-300" />

              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-white uppercase font-sans drop-shadow-sm">
                GALLEON
              </span>
            </div>
          </div>

          {/* 2. JAUNE (Desktop: Upper-Right; Mobile: Lower-Left) */}
          <div className="absolute bottom-[20%] md:bottom-auto md:top-[28%] left-[2%] sm:left-[8%] md:left-auto md:right-[20%] z-30 animate-float-reverse">
            <div className="relative px-3.5 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-xl bg-slate-900/40 backdrop-blur-lg border border-purple-300/40 shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex items-center justify-center">
              {/* 4 Corner Dots */}
              <span className="absolute top-1 left-1 sm:top-1.5 sm:left-1.5 w-1 h-1 rounded-full bg-purple-300" />
              <span className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 w-1 h-1 rounded-full bg-purple-300" />
              <span className="absolute bottom-1 left-1 sm:bottom-1.5 sm:left-1.5 w-1 h-1 rounded-full bg-purple-300" />
              <span className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 w-1 h-1 rounded-full bg-purple-300" />

              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-white uppercase font-sans drop-shadow-sm">
                JAUNE
              </span>
            </div>
          </div>

          {/* 3. SPACE-X <---> ATMOSFER-1-3 Horizontal Connecting Line (Shown on md+ screens) */}
          <div className="absolute top-[52%] left-[4%] sm:left-[12%] md:left-[16%] right-[4%] sm:right-[12%] md:right-[16%] hidden md:flex items-center justify-between pointer-events-none z-30">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-slate-800 pr-3 select-none drop-shadow-sm">
              SPACE-X
            </span>
            <div className="flex-grow h-[1px] bg-gradient-to-r from-purple-400/80 via-slate-600/60 to-purple-400/80 shadow-[0_0_8px_rgba(156,98,250,0.4)]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-slate-800 pl-3 select-none drop-shadow-sm">
              ATMOSFER-1-3
            </span>
          </div>

          {/* 4. APOLLO (Desktop: Lower-Left; Mobile: Upper-Right) */}
          <div className="absolute top-[24%] md:top-auto md:bottom-[10%] right-[1%] sm:right-[6%] md:right-auto md:left-[18%] z-30 animate-float-reverse">
            <div className="relative px-3.5 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-3.5 rounded-2xl bg-slate-900/40 backdrop-blur-lg border border-purple-300/40 shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex items-center justify-center">
              {/* 4 Corner Dots */}
              <span className="absolute top-1 left-1 sm:top-1.5 sm:left-1.5 w-1 h-1 rounded-full bg-purple-300" />
              <span className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 w-1 h-1 rounded-full bg-purple-300" />
              <span className="absolute bottom-1 left-1 sm:bottom-1.5 sm:left-1.5 w-1 h-1 rounded-full bg-purple-300" />
              <span className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 w-1 h-1 rounded-full bg-purple-300" />

              <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-wider text-white uppercase font-sans drop-shadow-sm">
                APOLLO
              </span>
            </div>
          </div>

          {/* 5. ARTEMIS (Lower-Right of Sphere) */}
          <div className="absolute bottom-[16%] sm:bottom-[14%] md:bottom-[12%] right-[2%] sm:right-[8%] md:right-[18%] z-30 animate-float-slow">
            <div className="relative px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-3 rounded-2xl bg-slate-900/40 backdrop-blur-lg border border-purple-300/40 shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex items-center justify-center">
              {/* 4 Corner Dots */}
              <span className="absolute top-1 left-1 sm:top-1.5 sm:left-1.5 w-1 h-1 rounded-full bg-purple-300" />
              <span className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 w-1 h-1 rounded-full bg-purple-300" />
              <span className="absolute bottom-1 left-1 sm:bottom-1.5 sm:left-1.5 w-1 h-1 rounded-full bg-purple-300" />
              <span className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 w-1 h-1 rounded-full bg-purple-300" />

              <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wider text-white uppercase font-sans drop-shadow-sm">
                ARTEMIS
              </span>
            </div>
          </div>
        </div>

        {/* Hero Bottom Narrative: Crystal Cube + Description on Left, Tagline on Right */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-end pt-4 sm:pt-6 z-20">
          {/* Left: Crystal Cube & Description */}
          <div className="flex flex-col items-start max-w-sm">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-black/50 border border-purple-400/30 p-2 sm:p-2.5 flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
              <img
                src={brand.heroCube}
                alt="TechBerry Core"
                className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(216,180,254,0.4)]"
              />
            </div>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-900 md:text-slate-800 font-semibold md:font-medium leading-relaxed font-sans max-w-sm drop-shadow-sm">
              {brand.subtext}
            </p>
          </div>

          {/* Right: Two-Line Tagline in Radiant Purple */}
          <div className="flex flex-col md:items-end justify-center text-left md:text-right mt-2 sm:mt-0">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#7c3aed] md:text-[#6818b8] tracking-tight font-sans leading-snug drop-shadow-[0_2px_10px_rgba(124,58,237,0.2)]">
              Simplifying Technology.<br />
              Empowering Growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
