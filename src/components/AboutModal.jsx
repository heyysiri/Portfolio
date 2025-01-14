'use client'
import { motion } from 'framer-motion';
import { Scroll, Book, Trophy, GraduationCap } from 'lucide-react';

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

            <h1 className="font-[ParryHotter] text-5xl text-center text-[#2A1810] mb-8">
              About The Wizard
            </h1>

            <div className="space-y-8">
              {/* Story Section */}
              <div className="bg-white/30 rounded-lg p-6 border-2 border-[#2A1810]/30">
                <Scroll className="w-8 h-8 text-[#2A1810] mb-4" />
                <h2 className="text-2xl font-[ParryHotter] text-[#2A1810] mb-4">The Story</h2>
                <p className="text-[#2A1810] leading-relaxed">
                  A passionate code wizard crafting digital spells and enchantments. 
                  Like a seeker chasing the golden snitch, I pursue elegant solutions 
                  with unwavering determination.
                </p>
              </div>

              {/* Skills Section */}
              <div className="bg-white/30 rounded-lg p-6 border-2 border-[#2A1810]/30">
                <Book className="w-8 h-8 text-[#2A1810] mb-4" />
                <h2 className="text-2xl font-[ParryHotter] text-[#2A1810] mb-4">Spell Book</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Frontend Enchantments',
                    'Backend Sorcery',
                    'Database Potions',
                    'UI/UX Transfiguration',
                    'API Alchemy',
                    'Testing Divination'
                  ].map((skill) => (
                    <div 
                      key={skill}
                      className="flex items-center space-x-2 p-2 bg-white/20 rounded"
                    >
                      <span className="text-[var(--hogwarts-gold)]">⚡</span>
                      <span className="text-[#2A1810]">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements Section */}
              <div className="bg-white/30 rounded-lg p-6 border-2 border-[#2A1810]/30">
                <Trophy className="w-8 h-8 text-[#2A1810] mb-4" />
                <h2 className="text-2xl font-[ParryHotter] text-[#2A1810] mb-4">Magical Feats</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Created 3 Legendary Apps',
                    'Mastered 5 Programming Languages',
                    'Led Team of 10 Wizards',
                    'Published in Developers Daily'
                  ].map((achievement) => (
                    <div 
                      key={achievement}
                      className="flex items-center space-x-2 p-2 bg-white/20 rounded"
                    >
                      <span className="text-[var(--hogwarts-gold)]">🏆</span>
                      <span className="text-[#2A1810]">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="bg-white/30 rounded-lg p-6 border-2 border-[#2A1810]/30">
                <GraduationCap className="w-8 h-8 text-[#2A1810] mb-4" />
                <h2 className="text-2xl font-[ParryHotter] text-[#2A1810] mb-4">Magical Education</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl text-[#2A1810] font-semibold">School of Digital Sorcery</h3>
                    <p className="text-[#2A1810]/80">Master of Computer Magic</p>
                    <p className="text-[#2A1810]/60">2020 - 2024</p>
                  </div>
                  <div>
                    <h3 className="text-xl text-[#2A1810] font-semibold">Code Wizardry Academy</h3>
                    <p className="text-[#2A1810]/80">Advanced Spellcasting Certification</p>
                    <p className="text-[#2A1810]/60">2023</p>
                  </div>
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