import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Publications } from './components/Publications';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Lifestyle } from './components/Lifestyle';
import { LifestylePage } from './components/LifestylePage';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [route, setRoute] = useState(window.location.pathname);
  const [pendingScrollId, setPendingScrollId] = useState<string | null>(null);
  const [returnSection, setReturnSection] = useState('life');

  const isLifestylePage = route.startsWith('/lifestyle/');
  const lifestyleSlug = isLifestylePage ? route.split('/')[2] || '' : '';

  const navigate = (path: string, scrollId?: string) => {
    if (path === route) return;
    window.history.pushState({}, '', path);
    setRoute(path);
    if (scrollId) {
      setPendingScrollId(scrollId);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  const scrollToSection = (id: string) => {
    if (route !== '/') {
      navigate('/', id);
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

    const sections = ['home', 'about', 'publications', 'academic', 'industry', 'research', 'projects', 'skills', 'life', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [route]);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('.fade-up'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const compactViewport = window.matchMedia('(max-width: 39.99rem)').matches;

    if (reduceMotion || compactViewport || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    revealItems.forEach((item) => item.classList.remove('is-visible'));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
    return () => revealObserver.disconnect();
  }, [route]);

  useEffect(() => {
    if (route !== '/' || !pendingScrollId) return;

    const timer = window.setTimeout(() => {
      const element = document.getElementById(pendingScrollId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setPendingScrollId(null);
    }, 50);

    return () => window.clearTimeout(timer);
  }, [route, pendingScrollId]);

  return (
    <div className="site-shell">
      <div className="scroll-progress" aria-hidden="true" />
      <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="site-main">
        <div className="content-root">
          {isLifestylePage ? (
            <LifestylePage slug={lifestyleSlug} onBack={() => navigate('/', returnSection)} />
          ) : (
            <>
              <Hero />
              <About />
              <Publications />
              <Experience />
              <Projects />
              <Skills />
              <Lifestyle
                onNavigate={(path) => {
                  setReturnSection('life');
                  navigate(path);
                }}
              />
              <Contact />
            </>
          )}
        </div>

        {!isLifestylePage ? (
          <footer className="site-footer">
            <p>© {new Date().getFullYear()} Shenyan Zeng. Built with React & Tailwind.</p>
          </footer>
        ) : null}
      </main>
    </div>
  );
};

export default App;
