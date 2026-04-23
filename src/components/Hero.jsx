import React from 'react';

const Hero = ({ translations, currentLang }) => {
  return (
    <section id="hero" className="pt-36 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center text-center relative min-h-screen justify-center">
      <div className="orb orb-1 animate-float-slow"></div>
      <div className="orb orb-2 animate-float-fast"></div>
      
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-10 z-[-1]" style={{ backgroundImage: 'radial-gradient(rgba(168, 85, 247, 0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Profile Image */}
      <div className="tilt-container mb-8 relative group" data-aos="zoom-in" data-aos-duration="1000">
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 rounded-full blur-xl opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
        <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full p-1 bg-gradient-to-tr from-purple-500 to-indigo-500 shadow-2xl tilt-element">
          <img 
            src="/Picture/profil.png" 
            alt="Foto Bintang Dwi Anggara" 
            fetchPriority="high" 
            className="w-full h-full rounded-full object-cover border-4 border-white dark:border-[#050505] bg-gray-200 dark:bg-gray-800" 
            onError={(e) => { e.target.src='https://ui-avatars.com/api/?name=Bintang+Anggara&background=a855f7&color=fff&size=256' }}
          />
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight" data-aos="fade-up" data-aos-delay="200">
        Software Developer, <br className="hidden md:block" />
        Data & <span className="gradient-text drop-shadow-md dark:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Digital Marketing</span>.
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
        {translations[currentLang]['hero-subtitle']}
      </p>
      
      <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-delay="400">
        <a href="#kontak" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full bp-glow transition transform hover:-translate-y-1 hover:scale-105 shadow-lg flex items-center gap-2 text-sm md:text-base">
          <span>{translations[currentLang]['hero-cta']}</span> <i className="fas fa-rocket"></i>
        </a>
        <a href="/Picture/cv.pdf" download="CV_Bintang_Dwi_Anggara.pdf" className="bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-[#111] text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 font-bold py-4 px-10 rounded-full transition transform hover:-translate-y-1 hover:text-purple-600 dark:hover:text-purple-400 shadow-sm flex items-center gap-2 text-sm md:text-base">
          <span>{translations[currentLang]['hero-cv']}</span> <i className="fas fa-download"></i>
        </a>
        <a href="#proyek" className="w-full md:w-auto text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 font-bold py-2 px-4 transition flex items-center justify-center gap-2 text-sm">
          <span>{translations[currentLang]['hero-explore']}</span> <i className="fas fa-arrow-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
