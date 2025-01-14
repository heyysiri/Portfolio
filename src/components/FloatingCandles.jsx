

'use client';
import { motion } from 'framer-motion';

const Candle = ({ delay, x }) => (
  <motion.div
    className="absolute"
    initial={{ y: -100 }}
    animate={{ 
      y: ['10vh', '80vh'], // The movement of the candle up and down
    }}
    transition={{
      repeat: Infinity,
      repeatType: 'reverse',
      duration: Math.random() * 5 + 10,
      delay,
      ease: 'easeInOut',
    }}
    style={{ left: `${x}%` }}
  >
    {/* Candle Body */}
    <div className="w-2 h-12 bg-parchment/80 rounded-t opacity-30" />

    {/* Flame Animation */}
    <div className="w-2 h-2 bg-[var(--hogwarts-gold)] rounded-full animate-flicker mx-auto -mt-1" />

    {/* Optional: Add a soft glow around the flame */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-300 rounded-full opacity-50 animate-glow" />
  </motion.div>
);

export default function FloatingCandles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {Array.from({ length: 15 }).map((_, i) => (
        <Candle
          key={i}
          delay={i * 0.2}
          x={((i + 1) * 100) / 16}
        />
      ))}
    </div>
  );
}
