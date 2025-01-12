'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSending(false);
    setSent(true);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat p-8"
      style={{ 
        backgroundImage: "url('/parchment_bg.jpg')",
        backgroundColor: '#f5f0e1' // Fallback color
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto pt-16"
      >
        <h1 className="font-[ParryHotter] text-6xl text-center text-[#2A1810] mb-12 drop-shadow-lg">
          Send an Owl
        </h1>

        <form 
          onSubmit={handleSubmit}
          className="backdrop-blur-sm border-2 border-[#2A1810]/30 
                   rounded-xl p-8 space-y-6 shadow-xl"
        >
          <div>
            <label className="block text-[#2A1810] font-semibold mb-2 text-lg">Your Name</label>
            <input
              type="text"
              required
              className="w-full bg-white/30 border-2 border-[#2A1810]/30 rounded-lg
                       px-4 py-3 text-[#2A1810] focus:outline-none 
                       focus:border-[#2A1810] transition-colors placeholder-[#2A1810]/50"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-[#2A1810] font-semibold mb-2 text-lg">Your Email</label>
            <input
              type="email"
              required
              className="w-full bg-white/30 border-2 border-[#2A1810]/30 rounded-lg
                       px-4 py-3 text-[#2A1810] focus:outline-none 
                       focus:border-[#2A1810] transition-colors placeholder-[#2A1810]/50"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-[#2A1810] font-semibold mb-2 text-lg">Your Message</label>
            <textarea
              required
              rows={5}
              className="w-full bg-white/30 border-2 border-[#2A1810]/30 rounded-lg
                       px-4 py-3 text-[#2A1810] focus:outline-none 
                       focus:border-[#2A1810] transition-colors placeholder-[#2A1810]/50
                       resize-none"
              placeholder="Write your message here..."
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
  );
}