'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import SparkleEffect from '@/components/SparkleEffect';
import FloatingCandles from '@/components/FloatingCandles';
import AboutModal from '@/components/AboutModal';
import Projects from './portfolio/page';
import emailjs from 'emailjs-com';
import { FaGithub } from 'react-icons/fa';

export default function HomePage() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
  
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        e.target,
        'YOUR_USER_ID'
      );
      setSending(false);
      setSent(true);
    } catch (error) {
      console.error('Failed to send email', error);
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-midnight to-navy">
      <div className="stars-bg">
        <SparkleEffect />
        <FloatingCandles />
        <div className="relative min-h-screen">
          <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-4xl mx-auto px-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--hogwarts-gold)] mb-6 leading-tight">
                Welcome to the Wizarding World of Siri Karra
              </h1>
              
              {/* GitHub link - repositioned for mobile */}
              <div className="flex justify-center mb-6 sm:mb-0 sm:absolute sm:top-8 sm:right-8">
                <a
                  href="https://github.com/heyysiri/Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--hogwarts-gold)] hover:text-amber-500 transition-colors"
                >
                  <FaGithub size={28} />
                </a>
              </div>

              <div className="mb-8 sm:mb-12 relative w-32 h-32 sm:w-48 sm:h-48 mx-auto">
                <Image
                  src="/assets/crest.svg"
                  alt="Personal Crest"
                  fill
                  className="animate-float object-contain"
                  priority
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <button 
                  onClick={() => setShowAboutModal(true)} 
                  className="magical-button w-full sm:w-auto"
                >
                  About Me
                </button>
                <button 
                  onClick={() => setShowProjectsModal(true)} 
                  className="magical-button w-full sm:w-auto"
                >
                  View my projects
                </button>
                <button
                  onClick={() => setShowContactModal(true)}
                  className="magical-button w-full sm:w-auto"
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
                  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-2 sm:p-4"
                >
                  <motion.div
                    initial={{ scale: 0.9, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 50 }}
                    className="relative w-[95%] sm:w-[90%] max-w-2xl max-h-[90vh] rounded-xl overflow-hidden"
                  >
                    <div 
                      className="relative bg-cover bg-center overflow-y-auto"
                      style={{ backgroundImage: "url('/assets/parchment_bg.jpg')" }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-4 sm:p-6"
                      >
                        <button
                          onClick={() => setShowProjectsModal(false)}
                          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-3xl text-[#2A1810] hover:text-[var(--hogwarts-gold)] transition-colors"
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
                  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-2 sm:p-4"
                >
                  <motion.div
                    initial={{ scale: 0.9, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 50 }}
                    className="relative w-[95%] sm:w-[90%] max-w-lg rounded-xl overflow-hidden"
                  >
                    <div 
                      className="relative bg-cover bg-center"
                      style={{ backgroundImage: "url('/assets/parchment_bg.jpg')" }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-4 sm:p-6"
                      >
                        <button
                          onClick={() => setShowContactModal(false)}
                          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-3xl text-[#2A1810] hover:text-[var(--hogwarts-gold)] transition-colors"
                        >
                          ×
                        </button>

                        <h1 className="font-[ParryHotter] text-4xl sm:text-5xl text-center text-amber-900 mb-6">
                          Send an Email
                        </h1>

                        <form 
                          onSubmit={handleSubmit}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block text-amber-900/90 font-semibold mb-2 text-base sm:text-lg">Your Name</label>
                            <input
                              type="text"
                              required
                              className="w-full bg-white/30 border-2 border-[#2A1810]/30 rounded-lg
                                       px-3 py-2 sm:px-4 sm:py-3 text-[#2A1810] focus:outline-none 
                                       focus:border-[#2A1810] transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-amber-900/90 font-semibold mb-2 text-base sm:text-lg">Your Email</label>
                            <input
                              type="email"
                              required
                              className="w-full bg-white/30 border-2 border-[#2A1810]/30 rounded-lg
                                       px-3 py-2 sm:px-4 sm:py-3 text-[#2A1810] focus:outline-none 
                                       focus:border-[#2A1810] transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-amber-900/90 font-semibold mb-2 text-base sm:text-lg">Your Message</label>
                            <textarea
                              required
                              rows={4}
                              className="w-full bg-white/30 border-2 border-[#2A1810]/30 rounded-lg
                                       px-3 py-2 sm:px-4 sm:py-3 text-[#2A1810] focus:outline-none 
                                       focus:border-[#2A1810] transition-colors resize-none"
                            />
                          </div>

                          <motion.button
                            type="submit"
                            disabled={sending || sent}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full py-2 sm:py-3 rounded-lg font-semibold text-base sm:text-lg
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