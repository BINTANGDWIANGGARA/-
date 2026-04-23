import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleWhatsApp = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Mohon lengkapi semua kolom form terlebih dahulu.');
      return;
    }
    const phoneNumber = '6281315379958';
    const textWA = `Halo Bintang Dwi Anggara,%0A%0APerkenalkan saya *${formData.name}*.%0AEmail saya: ${formData.email}%0A%0ASaya ingin mendiskusikan hal berikut:%0A"${formData.message}"%0A%0ATerima kasih.`;
    window.open(`https://wa.me/${phoneNumber}?text=${textWA}`, '_blank');
  };

  const handleEmail = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Mohon lengkapi semua kolom form terlebih dahulu.');
      return;
    }
    const emailTo = 'bintangdwianggara9@gmail.com';
    const subject = `Pesan dari ${formData.name} via Portfolio Website`;
    const body = `Halo Bintang Dwi Anggara,%0D%0A%0D%0APerkenalkan saya ${formData.name}.%0D%0AEmail: ${formData.email}%0D%0A%0D%0ASaya ingin mendiskusikan hal berikut:%0D%0A"${formData.message}"%0D%0A%0D%0ATerima kasih.`;
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="kontak" className="py-24 bg-gray-50 dark:bg-darkBg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Mulai <span className="text-purple-600 dark:text-purple-500">Kolaborasi</span></h2>
          <p className="text-gray-600 dark:text-gray-400">Punya ide proyek atau sekadar ingin menyapa? Mari bicara!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900 dark:text-white font-medium">bintangdwianggara9@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-600 dark:text-green-400">
                    <i className="fab fa-whatsapp text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="text-gray-900 dark:text-white font-medium">+62 813-1537-9958</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <p className="text-gray-900 dark:text-white font-bold mb-4">Sosial Media</p>
                <div className="flex gap-4">
                  {['github', 'linkedin', 'instagram'].map((platform) => (
                    <a key={platform} href={`https://${platform}.com/`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white transition">
                      <i className={`fab fa-${platform}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <form className="glass-card p-8 rounded-3xl space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nama Lengkap</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-darkBg border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none transition" placeholder="Masukkan nama Anda" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-darkBg border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none transition" placeholder="email@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Pesan</label>
                <textarea id="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-darkBg border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none transition resize-none" placeholder="Ceritakan proyek Anda..."></textarea>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button type="button" onClick={handleWhatsApp} className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2">
                  <i className="fab fa-whatsapp text-lg"></i> WhatsApp
                </button>
                <button type="button" onClick={handleEmail} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2">
                  <i className="fas fa-envelope"></i> Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
