import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { ProjectList } from './components/ProjectList';
import { Lifestyle } from './components/Lifestyle';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer to update active state on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -50% 0px" }
    );

    const sections = ['home', 'experience', 'projects', 'life', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />
      
      {/* Main Content Wrapper */}
      <main className="lg:pl-80 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
        {/* Spacer for mobile fixed sidebar/header if needed */}
        <div className="lg:mt-0 mt-4">
          <Hero />
          <Experience />
          <ProjectList />
          <Lifestyle />
          <Contact />
        </div>
        
        {/* Footer */}
        <footer className="mt-20 py-8 border-t border-gray-200 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Shenyan Zeng. Built with React & Tailwind.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
