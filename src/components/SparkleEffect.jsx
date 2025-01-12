'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Sparkle = ({ style }) => (
  <motion.div
    className="absolute w-1 h-1 bg-[var(--hogwarts-gold)]"
    style={style}
    animate={{
      scale: [1, 1.2, 0],
      opacity: [1, 0.8, 0],
    }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
  />
);

export default function SparkleEffect() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (Math.random() > 0.9) { // Only create sparkle 10% of the time
        const sparkle = {
          id: Math.random(),
          x: e.clientX,
          y: e.clientY,
        };

        setSparkles(prev => [...prev, sparkle]);

        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== sparkle.id));
        }, 800);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          style={{
            left: sparkle.x,
            top: sparkle.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
}
