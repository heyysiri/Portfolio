'use client';
import { motion } from 'framer-motion';
import { Scroll, Book, Trophy, Code, Database } from 'lucide-react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="relative w-[90%] max-w-4xl rounded-xl overflow-hidden max-h-[90vh]"
      >
        <div
          className="relative bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/parchment_bg.jpg')" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 overflow-y-auto max-h-[80vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-3xl text-[#2A1810] hover:text-[var(--hogwarts-gold)] transition-colors"
            >
              ×
            </button>

            <h1 className="font-[ParryHotter] text-5xl text-center text-amber-900 mb-8">
              About Me
            </h1>

            <div className="space-y-8">
              {/* About Me Section */}
              <div className="bg-white/30 rounded-lg p-6 border-2 border-[#2A1810]/30">
                <Scroll className="w-8 h-8 text-[#2A1810] mb-4" />
                <p className="text-amber-900/90 leading-relaxed">
                I am a 3rd-year undergraduate student in Computer Science with a deep passion for solving real-world problems through technology. As a huge Potterhead, I decided to infuse my love for the wizarding world into my portfolio, which explains the magical theme. In addition to my academic journey, I have won two hackathons, including an international one, where I had the chance to work with talented teams to bring innovative ideas to life. Outside of tech, I enjoy playing chess and listening to music!
                </p>
              </div>

              {/* Skills Section */}
              <div className="bg-white/30 rounded-lg p-6 border-2 border-[#2A1810]/30">
                <Book className="w-8 h-8 text-[#2A1810] mb-4" />
                <h2 className="text-2xl font-serif text-[#2A1810] mb-4">Skill Set</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'MERN Stack',
                    'Next.js',
                    'Flask',
                    'Docker',
                    'Flutter',
                    'MySQL',
                    'SQLite',
                    'TailwindCSS'
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center space-x-2 p-2 bg-white/20 rounded"
                    >
                      <span className="text-[var(--hogwarts-gold)]">⚡</span>
                      <span className="text-amber-900/90">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications Section */}
              <div className="bg-white/30 rounded-lg p-6 border-2 border-[#2A1810]/30">
                <Trophy className="w-8 h-8 text-[#2A1810] mb-4" />
                <h2 className="text-2xl font-serif text-[#2A1810] mb-4">Certifications</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg text-amber-900/90 font-serif">Google Cloud Computing Foundations and Generative AI certification</h3>
                  </div>
                  <div>
                    <h3 className="text-lg text-amber-900/90 font-serif">J.P. Morgan - Software Engineering Job Simulation certification</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white/30 rounded-lg p-6 border-2 border-[#2A1810]/30">
                <h2 className="text-2xl font-serif text-[#2A1810] mb-4">Connect With Me</h2>
                <div className="flex space-x-4 justify-center">
                  <a href="https://github.com/heyysiri" target="_blank" rel="noopener noreferrer" className="text-amber-900/90 hover:text-[var(--hogwarts-gold)] transition-colors">
                  <FaGithub size={32} />
                  </a>
                  <a href="https://www.linkedin.com/in/siri-karra" target="_blank" rel="noopener noreferrer" className="text-amber-900/90 hover:text-[var(--hogwarts-gold)] transition-colors">
                  <FaLinkedin size={32} />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutModal;
