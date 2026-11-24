import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import ImpactSection from './components/ImpactSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ProcessSection from './components/ProcessSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname === '/contact' ? '/contact' : '/'
  );

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname === '/contact' ? '/contact' : '/');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (path) => {
    if (path === currentPath) return;
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#07050d] text-gray-900 font-sans antialiased selection:bg-purple-600 selection:text-white">
      {/* Universal Fixed Navigation */}
      <Navbar currentPath={currentPath} navigate={navigate} />

      {/* Main View */}
      {currentPath === '/contact' ? (
        <ContactPage navigate={navigate} />
      ) : (
        <main>
          {/* 1. Hero Section */}
          <Hero navigate={navigate} />

          {/* 2. Brand Tech Marquee */}
          <BrandMarquee />

          {/* 3. Measurable Impact Stats */}
          <ImpactSection />

          {/* 4. Services Grid (8 Services) */}
          <ServicesSection navigate={navigate} />

          {/* 5. Projects / AI in Action Tabs */}
          <ProjectsSection navigate={navigate} />

          {/* 6. Process Steps */}
          <ProcessSection navigate={navigate} />

          {/* 7. About TechBerry's */}
          <AboutSection navigate={navigate} />

          {/* 8. Client Testimonials */}
          <TestimonialsSection />

          {/* 9. FAQs Accordion */}
          <FAQSection />

          {/* 10. CTA Intelligence Layer Banner */}
          <CTASection navigate={navigate} />
        </main>
      )}

      {/* Universal Footer */}
      <Footer navigate={navigate} />
    </div>
  );
}
