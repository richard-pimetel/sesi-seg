import React, { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import SystemsSection from '@/components/sections/SystemsSection';
import DevelopersSection from '@/components/sections/DevelopersSection';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false); // Assuming you might add a toggle later

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      const sections = ['home', 'about', 'systems', 'developers'];
      const scrollPosition = window.scrollY + window.innerHeight / 2.5; 
      
      let currentSection = 'home';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
            break;
          }
          if (scrollPosition >= offsetTop + offsetHeight && scrollPosition > window.scrollY + window.innerHeight - (offsetHeight * 0.5) ) { 
             // Prioritize the section that occupies more of the viewport if at the very bottom
            if (window.scrollY + window.innerHeight > document.body.scrollHeight - 50 && sectionId === 'developers') {
               currentSection = sectionId;
            } else if (scrollPosition >= offsetTop + offsetHeight) {
               currentSection = sectionId;
            }
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen antialiased ${isDarkMode ? 'bg-dark-background' : 'bg-gradient-to-br from-gray-50 via-red-50 to-red-100'}`}>
      <Toaster />
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <HomeSection scrollToSection={scrollToSection} />
      <AboutSection />
      <SystemsSection />
      <DevelopersSection />
      <Footer scrollToSection={scrollToSection} />
      <ScrollToTopButton showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
    </div>
  );
}

export default App;