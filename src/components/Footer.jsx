import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-white dark:bg-darkCard border-t border-gray-100 dark:border-purple-900/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} <span className="font-bold text-gray-900 dark:text-white">Angga<span className="text-purple-600 dark:text-purple-500">.dev</span></span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
