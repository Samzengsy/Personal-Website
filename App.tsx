import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Publications } from './components/Publications';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Lifestyle } from './components/Lifestyle';
import { LifestylePage } from './components/LifestylePage';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [route, setRoute] = useState(window.location.pathname);

  const isLifestylePage = route.startsWith('/lifestyle/');
  const lifestyleSlug = isLifestylePage ? route.split('/')[2] || '' : '';

  const navigate = (path: string) => {
    if (path === route) return;
    window.history.pushState({}, '', path);
    setRoute(path);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  const scrollToSection = (id: string) => {
    if (route !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }

    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const onPopState = () => {
      setRoute(window.location.pathname);
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (route.startsWith('/lifestyle/')) {
      setActiveSection('life');
    }
  }, [route]);

  useEffect(() => {
    if (route !== '/') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -50% 0px' }
    );

    const sections = ['home', 'about', 'publications', 'experience', 'skills', 'life', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [route]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f3ee] via-white to-[#e8f2f7]">
      <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="lg:pl-80 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
        <div className="lg:mt-0 mt-4">
          {isLifestylePage ? (
            <LifestylePage slug={lifestyleSlug} onBack={() => navigate('/')} />
          ) : (
            <>
              <Hero />
              <About />
              <Publications />
              <Experience />
              <Skills />
              <Lifestyle />
              <Contact />
            </>
          )}
        </div>

        {!isLifestylePage ? (
          <footer className="mt-16 py-8 border-t border-slate-200 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Shenyan Zeng. Built with React & Tailwind.</p>
          </footer>
        ) : null}
      </main>
    </div>
  );
};

export default App;
