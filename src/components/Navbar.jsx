import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Sobre' },
  { id: 'systems', label: 'Sistemas' },
  { id: 'developers', label: 'Desenvolvedores' }
];

const Navbar = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection, isDarkMode, setIsDarkMode }) => {
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 glass-effect shadow-lg transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/884d6230-512b-4341-8463-f357d4f441a9/a307d908a57a3c493b5ae82e16423436.png" 
              alt="Logo SESI" 
              className="h-12 md:h-14 drop-shadow-sm" 
            />
            <span className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-red-400' : 'text-[#E31837]'}`}>
              SESI Carapicuíba
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-md font-semibold transition-colors duration-300 group pb-2 ${
                  activeSection === item.id 
                    ? (isDarkMode ? 'text-red-400' : 'text-[#E31837]') 
                    : (isDarkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-[#E31837]')
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full transform transition-transform duration-300 ease-out ${activeSection === item.id ? 'scale-x-100 bg-[#E31837]' : 'scale-x-0 group-hover:scale-x-100 bg-gray-400 group-hover:bg-[#E31837]'}`}></span>
                {activeSection === item.id && (
                  <motion.div 
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${isDarkMode ? 'bg-red-400' : 'bg-[#E31837]'}`}
                    layoutId="active-nav-item-underline"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <motion.button
              aria-label="Alternar tema claro/escuro"
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-300 ${isDarkMode ? 'text-yellow-400 hover:bg-gray-700' : 'text-gray-700 hover:bg-red-100'}`}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1, rotate: isDarkMode ? -15 : 15 }}
            >
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <motion.button
              aria-label="Alternar tema claro/escuro"
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-300 mr-2 ${isDarkMode ? 'text-yellow-400 hover:bg-gray-700' : 'text-gray-700 hover:bg-red-100'}`}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </motion.button>
            <button
              aria-label="Abrir menu"
              className={`p-2 rounded-md transition-colors ${isDarkMode ? 'text-red-400 hover:bg-gray-700' : 'text-[#E31837] hover:bg-red-100'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} /* Expo ease-out */
            className={`md:hidden shadow-lg border-t-2 ${isDarkMode ? 'bg-gray-800 border-red-500/50' : 'bg-white border-[#E31837]'}`}
          >
            <div className="px-4 py-5 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 font-medium rounded-lg transition-all duration-200 ${
                    isDarkMode 
                    ? 'text-gray-200 hover:text-red-400 hover:bg-gray-700' 
                    : 'text-gray-700 hover:text-[#E31837] hover:bg-red-50'
                  } ${activeSection === item.id ? (isDarkMode ? 'bg-gray-700 text-red-400' : 'bg-red-50 text-[#E31837]') : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;