import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import TrustedBrands from './components/TrustedBrands';
import AIIntegrationSection from './components/AIIntegrationSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ProcessSection from './components/ProcessSection';
import IndustriesSection from './components/IndustriesSection';
import InvolvingSection from './components/InvolvingSection';
import IntelligentSection from './components/IntelligentSection';
import DoYouNeedSection from './components/DoYouNeedSection';
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

// Dedicated Header Pages
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import CareerPage from './pages/CareerPage';
import CaseStudyPage from './pages/CaseStudyPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname || '/');
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

  // Render dedicated page based on current route
  const renderPage = () => {
    const normalizedPath = currentPath.toLowerCase().replace(/\/$/, '') || '/';

    switch (normalizedPath) {
      case '/about':
      case '/about-us':
        return <AboutPage navigate={navigate} />;

      case '/services':
      case '/our-services':
        return <ServicesPage navigate={navigate} />;

      case '/projects':
      case '/our-projects':
        return <ProjectsPage navigate={navigate} />;

      case '/blog':
      case '/blogs':
        return <BlogPage navigate={navigate} />;

      case '/faq':
      case '/faqs':
        return <FAQPage navigate={navigate} />;

      case '/contact':
      case '/contact-us':
        return <ContactPage navigate={navigate} />;

      case '/career':
      case '/careers':
      case '/carrer-us':
        return <CareerPage navigate={navigate} />;

      case '/case-study':
      case '/case-studies':
        return <CaseStudyPage navigate={navigate} />;

      case '/':
      default:
        return (
          <main>
            {/* 1. Hero Section */}
            <Hero navigate={navigate} />

            {/* 2. Languages & Technologies Section */}
            <BrandMarquee />

            {/* 3. Trusted Brands Section */}
            <TrustedBrands />

            {/* 4. AI Integration Section */}
            <AIIntegrationSection navigate={navigate} />

            {/* 5. Our Services Section */}
            <ServicesSection navigate={navigate} />

            {/* 6. Our Project */}
            <ProjectsSection navigate={navigate} />

            {/* 7. Our Process */}
            <ProcessSection navigate={navigate} />

            {/* 8. Industries we Serve */}
            <IndustriesSection navigate={navigate} />

            {/* 9. Involving */}
            <InvolvingSection navigate={navigate} />

            {/* 10. Intiligent */}
            <IntelligentSection navigate={navigate} />

            {/* 11. Do you need Section */}
            <DoYouNeedSection navigate={navigate} />

            {/* 12. About TechBerrys */}
            <AboutSection navigate={navigate} />

            {/* 13. Our Blogs Section */}
            <BlogSection navigate={navigate} />

            {/* 14. FAQ */}
            <FAQSection />

            {/* Intelligence Layer CTA Banner */}
            <CTASection navigate={navigate} />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#07050d] text-gray-900 font-sans antialiased selection:bg-purple-600 selection:text-white">
      {/* Universal Fixed Navigation */}
      <Navbar currentPath={currentPath} navigate={navigate} />

      {/* Dynamic Route View */}
      {renderPage()}

      {/* 15. Footer Section Same as Al Hadaya site */}
      <Footer navigate={navigate} />
    </div>
  );
}
