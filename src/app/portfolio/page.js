'use client';
import { motion } from 'framer-motion';


const projects = [
  {
    title: 'Enchanted E-commerce',
    description: 'A magical shopping experience built with Next.js and Stripe',
    type: 'wand', // for wand icon
    technologies: ['Next.js', 'React', 'Stripe', 'Tailwind'],
    image: '/assets/project1.jpg'
  },
  // Add more projects...
];

export default function PortfolioPage() {
  return (
    <>
      <main className="pt-24 min-h-screen p-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-[ParryHotter] text-5xl text-center text-[var(--hogwarts-gold)] mb-12"
        >
          Spellbound Projects
        </motion.h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-midnight/50 backdrop-blur-sm border border-[var(--hogwarts-gold)]/20 
                            rounded-lg overflow-hidden transition-transform duration-300 
                            group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-midnight/80" />
                </div>
                <div className="p-6">
                  <h3 className="text-[var(--hogwarts-gold)] text-xl mb-2">{project.title}</h3>
                  <p className="text-parchment/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs bg-[var(--hogwarts-gold)]/10 text-[var(--hogwarts-gold)] 
                                 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
