import React, { useState, useEffect } from 'react';

const Navbar = ({ currentLang, toggleLanguage, translations }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const navLinks = [
    { href: '#hero', key: 'nav-home' },
    { href: '#tentang', key: 'nav-about' },
    { href: '#keahlian', key: 'nav-skills' },
    { href: '#proyek', key: 'nav-projects' },
    { href: '#blog', key: 'nav-blog' },
    { href: '#kontak', key: 'nav-contact' },
  ];

  return (
    <header>
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-gray-200 dark:border-purple-900/30 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0" data-aos="fade-down">
              <a href="#" aria-label="Beranda" className="font-bold text-2xl tracking-tight text-gray-900 dark:text-white">
                Angga<span className="text-purple-600 dark:text-purple-500 animate-pulse">.dev</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8" data-aos="fade-down" data-aos-delay="100">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition font-medium text-sm tracking-wide"
                >
                  {translations[currentLang][link.key]}
                </a>
              ))}

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold text-gray-600 dark:text-gray-400 hover:bg-purple-100 dark:hover:bg-gray-700 transition"
                aria-label="Toggle Language"
              >
                <span>{currentLang.toUpperCase()}</span>
                <i className="fas fa-globe"></i>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-yellow-400 hover:bg-purple-100 dark:hover:bg-gray-700 transition shadow-inner"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon text-purple-600"></i>}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-purple-100 dark:hover:bg-gray-700 transition"
              aria-label="Toggle Menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-white dark:bg-[#050505] z-40 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center h-20 px-4 border-b border-gray-200 dark:border-purple-900/30">
              <a href="#" aria-label="Beranda" className="font-bold text-2xl tracking-tight text-gray-900 dark:text-white">
                Angga<span className="text-purple-600 dark:text-purple-500">.dev</span>
              </a>
              <button
                onClick={toggleMenu}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400"
                aria-label="Close Menu"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-2xl font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition"
                >
                  {translations[currentLang][link.key]}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-bold text-gray-600 dark:text-gray-400"
                  aria-label="Toggle Language"
                >
                  <span>{currentLang.toUpperCase()}</span>
                  <i className="fas fa-globe"></i>
                </button>
                <button
                  onClick={toggleDarkMode}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-yellow-400"
                  aria-label="Toggle Dark Mode"
                >
                  {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon text-purple-600"></i>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
