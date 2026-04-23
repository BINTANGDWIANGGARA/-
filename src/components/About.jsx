import React from 'react';

const About = () => {
  return (
    <section id="tentang" className="py-24 bg-white dark:bg-darkCard relative border-t border-gray-100 dark:border-purple-900/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Image Card */}
          <div className="w-full md:w-5/12" data-aos="fade-right">
            <div className="relative group h-full tilt-container">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass-card rounded-2xl p-3 h-full flex flex-col tilt-element bg-white dark:bg-[#111]">
                <div className="overflow-hidden rounded-xl relative">
                  <img 
                    src="/Picture/coding.jpg" 
                    alt="Potret Bintang Dwi Anggara" 
                    loading="lazy" 
                    className="w-full h-[450px] object-cover object-top filter grayscale-[30%] group-hover:grayscale-0 transition duration-700 transform group-hover:scale-105" 
                    onError={(e) => { e.target.src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">Bintang Dwi Anggara</h3>
                    <p className="text-purple-300 font-medium drop-shadow-md">Fullstack Developer & Digital Strategist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full md:w-7/12" data-aos="fade-left">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">Halo! Saya <span className="text-purple-600 dark:text-purple-500">Angga</span></h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              <p>
                Saya seorang <span className="text-purple-600 dark:text-purple-400 font-bold">Fullstack Developer</span> yang lebih suka ngetik kode daripada ngetik "P" di chat. Fokus saya adalah membangun sistem yang efisien dan enak dilihat.
              </p>
              <p>
                Bukan sekadar koding, saya juga suka ngulik data dan strategi marketplace. Jadi, sistem yang saya bangun nggak cuma jalan, tapi juga bantu bisnis tumbuh.
              </p>
              <div className="border-l-4 border-purple-500 pl-6 py-4 mt-8 bg-purple-50 dark:bg-purple-900/10 rounded-r-xl transition-colors">
                <p className="font-medium text-gray-800 dark:text-gray-200 italic">
                  "Kalo bisa otomatis, kenapa harus manual? Kalo bisa rapi, kenapa harus berantakan?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
