'use client';
import './globals.css';
import { motion } from 'framer-motion';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </body>
    </html>
  );
}