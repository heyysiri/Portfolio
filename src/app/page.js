'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import SparkleEffect from '@/components/SparkleEffect';
import FloatingCandles from '@/components/FloatingCandles';
import AboutModal from '@/components/AboutModal';
import Projects from './portfolio/page';
export default function HomePage() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSending(false);
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-midnight to-navy">
    <div className="stars-bg">
    <SparkleEffect />
    <FloatingCandles />
    <div className="relative min-h-screen">
      <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl text-[var(--hogwarts-gold)] mb-6">
            Welcome to the Wizarding World of Siri Karra
          </h1>
          
          <div className="mb-12 relative w-48 h-48 mx-auto">
            <Image
              src="/assets/crest.svg"
              alt="Personal Crest"
              fill
              className="animate-float object-contain"
              priority
            />
          </div>

          <div className="flex justify-center items-center space-x-8">
          <button 
            onClick={() => setShowAboutModal(true)} 
            className="magical-button inline-block"
          >
            About Me
          </button>
          <button 
              onClick={() => setShowProjectsModal(true)} 
              className="magical-button inline-block"
            >
              View my projects
            </button>


            <button
              onClick={() => setShowContactModal(true)}
              className="magical-button inline-block"
            >
              Contact
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
        {showProjectsModal && (
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
        className="relative w-[90%] max-w-2xl max-h-[600px] rounded-xl overflow-hidden"
      >
        <div 
          className="relative bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/parchment_bg.jpg')" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6"
          >
            <button
              onClick={() => setShowProjectsModal(false)} // Close the Projects modal
              className="absolute top-4 right-4 text-3xl text-[#2A1810] hover:text-[var(--hogwarts-gold)] transition-colors"
            >
              ×
            </button>
            <Projects onClose={() => setShowProjectsModal(false)} />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )}
          {showContactModal && (
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
                className="relative w-[90%] max-w-lg rounded-xl overflow-hidden"
              >
                <div 
                  className="relative bg-cover bg-center"
                  style={{ backgroundImage: "url('/assets/parchment_bg.jpg')" }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-6"
                  >
                    <button
                      onClick={() => setShowContactModal(false)}
                      className="absolute top-4 right-4 text-3xl text-[#2A1810] hover:text-[var(--hogwarts-gold)] transition-colors"
                    >
                      ×
                    </button>

                    <h1 className="font-[ParryHotter] text-5xl text-center text-[#2A1810] mb-6">
                      Send an Owl
                    </h1>

                    <form 
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-[#2A1810] font-semibold mb-2 text-lg">Your Name</label>
                        <input
                          type="text"
                          required
                          className="w-full bg-white/30 border-2 border-[#2A1810]/30 rounded-lg
                                   px-4 py-3 text-[#2A1810] focus:outline-none 
                                   focus:border-[#2A1810] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[#2A1810] font-semibold mb-2 text-lg">Your Email</label>
                        <input
                          type="email"
                          required
                          className="w-full bg-white/30 border-2 border-[#2A1810]/30 rounded-lg
                                   px-4 py-3 text-[#2A1810] focus:outline-none 
                                   focus:border-[#2A1810] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[#2A1810] font-semibold mb-2 text-lg">Your Message</label>
                        <textarea
                          required
                          rows={4}
                          className="w-full bg-white/30 border-2 border-[#2A1810]/30 rounded-lg
                                   px-4 py-3 text-[#2A1810] focus:outline-none 
                                   focus:border-[#2A1810] transition-colors resize-none"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={sending || sent}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3 rounded-lg font-semibold text-lg
                                   transition-all duration-300 shadow-md
                                   ${sending ? 'bg-[#2A1810]/50 text-white cursor-not-allowed' : 
                                     sent ? 'bg-green-700 text-white' :
                                     'bg-[#2A1810] text-[#f5f0e1] hover:bg-[#3A2820]'}`}
                      >
                        {sending ? 'Sending...' : sent ? 'Owl Sent!' : 'Send Owl'}
                      </motion.button>
                    </form>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AboutModal 
          isOpen={showAboutModal} 
          onClose={() => setShowAboutModal(false)} 
        />
      </main>
    </div>
    </div>
    </div>
  );
}