// app/layout.js
'use client';
import './globals.css';
import { motion } from 'framer-motion';
import SparkleEffect from '@/components/SparkleEffect';
import FloatingCandles from '@/components/FloatingCandles';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-b from-midnight to-navy">
          <div className="stars-bg">
            <SparkleEffect />
            <FloatingCandles />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </body>
    </html>
  );
}