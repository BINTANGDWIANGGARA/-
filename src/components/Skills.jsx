import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      title: 'Frontend',
      icon: 'fas fa-laptop-code',
      color: 'purple',
      skills: [
        { name: 'React / Flutter', level: 85 },
        { name: 'HTML / CSS / JS', level: 95 },
      ],
      tags: ['Tailwind CSS', 'Next.js']
    },
    {
      title: 'Backend',
      icon: 'fas fa-server',
      color: 'blue',
      skills: [
        { name: 'Laravel / PHP', level: 90 },
        { name: 'Node.js', level: 75 },
      ],
      tags: ['MySQL', 'Firebase']
    }
  ];

  return (
    <section id="keahlian" className="py-24 bg-gray-50 dark:bg-darkBg relative transition-colors duration-300 border-t border-gray-200 dark:border-purple-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Senjata <span className="text-purple-600 dark:text-purple-500">Andalan</span></h2>
          <p className="text-gray-600 dark:text-gray-400">Kombinasi teknologi yang saya gunakan untuk mewujudkan ide menjadi kenyataan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl" data-aos="fade-up" data-aos-delay={100 * (idx + 1)}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-${category.color}-100 dark:bg-${category.color}-900/30 rounded-2xl flex items-center justify-center text-${category.color}-600 dark:text-${category.color}-400`}>
                  <i className={`${category.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-purple-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs rounded-full border border-purple-100 dark:border-purple-900/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Tools Section */}
        <div className="mt-8">
          <div className="glass-card p-8 rounded-3xl" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center text-orange-600 dark:text-orange-400">
                <i className="fas fa-tools text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tools & Others</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Git / GitHub', 'Figma', 'Postman', 'VScode'].map((tool, idx) => (
                <span key={idx} className="px-4 py-2 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-xl text-sm font-medium hover:border-orange-500 transition cursor-default text-gray-700 dark:text-gray-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
