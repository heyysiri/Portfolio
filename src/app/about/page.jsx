'use client'
import { useState, useEffect } from 'react';
import { Sparkles, Scroll, Book, Trophy, GraduationCap } from 'lucide-react';

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image - Replace src with your image */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#2A1810] opacity-80" />
        {/* Add your background image here */}
        <div className="absolute inset-0 bg-[url('/assets/parchment_bg.jpg')] bg-cover bg-center" />
      </div>

      {/* Floating Elements */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translate(${(mousePosition.x * 0.02) * (i % 3)}px, ${(mousePosition.y * 0.02) * (i % 3)}px)`,
            transition: 'transform 0.3s ease-out',
            background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)',
          }}
        />
      ))}

      <main className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="flex flex-col items-center mb-16 transform translate-y-0 transition-transform duration-1000">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-serif text-[#8B4513] mb-4 text-center relative">
              <span className="relative inline-block">
                Magical Portfolio
                <Sparkles 
                  className="absolute -top-8 -right-8 text-[#DAA520]" 
                  style={{
                    transform: `rotate(${scrollPosition * 0.1}deg)`,
                  }}
                />
              </span>
            </h1>
            <p className="text-2xl text-[#8B4513] text-center font-serif italic">
              Where Code Meets Magic
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div 
            className={`relative p-8 rounded-lg transform transition-all duration-500 hover:scale-105 hover:z-20 
              ${activeSection === 'about' ? 'scale-105 z-20' : ''}`}
            style={{
              background: 'rgba(139, 69, 19, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #8B4513',
            }}
            onMouseEnter={() => setActiveSection('about')}
            onMouseLeave={() => setActiveSection(null)}
          >
            <Scroll className="w-12 h-12 text-[#8B4513] mb-4" />
            <h2 className="text-3xl font-serif text-[#8B4513] mb-4">The Story</h2>
            <p className="text-[#A0522D] leading-relaxed">
              A passionate code wizard crafting digital spells and enchantments. 
              Like a seeker chasing the golden snitch, I pursue elegant solutions 
              with unwavering determination.
            </p>
          </div>

          {/* Skills Section */}
          <div 
            className={`relative p-8 rounded-lg transform transition-all duration-500 hover:scale-105 hover:z-20
              ${activeSection === 'skills' ? 'scale-105 z-20' : ''}`}
            style={{
              background: 'rgba(139, 69, 19, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #8B4513',
            }}
            onMouseEnter={() => setActiveSection('skills')}
            onMouseLeave={() => setActiveSection(null)}
          >
            <Book className="w-12 h-12 text-[#8B4513] mb-4" />
            <h2 className="text-3xl font-serif text-[#8B4513] mb-4">Spell Book</h2>
            <div className="space-y-4">
              {['Frontend Charms', 'Backend Alchemy', 'Database Potions', 'Design Transfiguration'].map((skill, index) => (
                <div 
                  key={skill}
                  className="relative overflow-hidden rounded p-2"
                  style={{
                    background: `rgba(139, 69, 19, ${0.1 + (index * 0.05)})`,
                  }}
                >
                  <div className="relative z-10 text-[#A0522D] font-serif">
                    {skill}
                  </div>
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent to-[#DAA520] opacity-20"
                    style={{
                      transform: `translateX(${mousePosition.x * 0.02}px)`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div 
            className={`relative p-8 rounded-lg transform transition-all duration-500 hover:scale-105 hover:z-20
              ${activeSection === 'achievements' ? 'scale-105 z-20' : ''}`}
            style={{
              background: 'rgba(139, 69, 19, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #8B4513',
            }}
            onMouseEnter={() => setActiveSection('achievements')}
            onMouseLeave={() => setActiveSection(null)}
          >
            <Trophy className="w-12 h-12 text-[#8B4513] mb-4" />
            <h2 className="text-3xl font-serif text-[#8B4513] mb-4">Magical Feats</h2>
            <div className="space-y-4">
              {[
                'Created 3 Legendary Apps',
                'Mastered 5 Programming Languages',
                'Led Team of 10 Wizards',
                'Published in Developers Daily'
              ].map((achievement, index) => (
                <div 
                  key={achievement}
                  className="flex items-center space-x-2"
                >
                  <span className="text-[#DAA520] text-2xl">⚡</span>
                  <span className="text-[#A0522D] font-serif">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;