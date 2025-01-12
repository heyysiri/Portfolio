'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HomePage() {
  return (
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
            <Link href="/about" className="magical-button inline-block">
              About Me
            </Link>
            <Link href="/portfolio" className="magical-button inline-block">
              View my projects
            </Link>
            <Link href="/contact" className="magical-button inline-block">
              Contact
            </Link>
          </div>

        </motion.div>
      </main>
    </div>
  );
}