// app/about/page.jsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
export default function AboutPage() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <main className="min-h-screen p-8">
      <h1 className="font-[ParryHotter] text-5xl text-center text-[var(--hogwarts-gold)] mb-12">
        The Wizard Behind the Magic
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Chocolate Frog Card */}
        <div 
          className="perspective-1000 cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <motion.div
            className="relative w-full h-[500px] transform-style-3d transition-transform duration-500"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
          >
            {/* Front of card */}
            <div className="absolute w-full h-full backface-hidden bg-[var(--parchment)] rounded-xl p-6 border-4 border-[var(--hogwarts-gold)]">
            <Image
                src="/assets/pfp.jpg" // Path to your image
                alt="Wizard Portrait" // Accessible description
                width={1024} // Define the desired width in pixels
                height={256} // Define the desired height in pixels (aspect ratio: w-full and h-64 in Tailwind)
                className="object-cover rounded-lg mb-4" // Custom styles
                priority // Preloads the image for better LCP
            />
              <h2 className="font-[ParryHotter] text-3xl text-center text-midnight mb-4">
                [Your Name]
              </h2>
              <p className="text-center text-midnight">
                Master of Digital Sorcery
              </p>
            </div>

            {/* Back of card */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[var(--parchment)] rounded-xl p-6 border-4 border-[var(--hogwarts-gold)]">
              <div className="text-midnight">
                <h3 className="font-[ParryHotter] text-2xl mb-4">Biography</h3>
                <p className="mb-4">
                  A passionate developer with expertise in crafting magical digital experiences.
                  Specializing in frontend enchantments and backend sorcery.
                </p>
                <ul className="list-disc list-inside">
                  <li>Graduate of Digital Wizardry</li>
                  <li>3+ Years of Magical Development</li>
                  <li>Expert in React Spellcasting</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Scroll */}
        <div className="bg-[url('/assets/parchment.png')] p-8 rounded-xl">
          <h3 className="font-[ParryHotter] text-3xl text-midnight mb-6">
            Magical Abilities
          </h3>
          
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between text-midnight mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-4 bg-midnight/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="h-full bg-[var(--hogwarts-gold)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const skills = [
  { name: 'Frontend Enchantments', level: 90 },
  { name: 'Backend Sorcery', level: 85 },
  { name: 'Database Potions', level: 80 },
  { name: 'UI/UX Charms', level: 88 },
  { name: 'API Spellcasting', level: 85 },
];