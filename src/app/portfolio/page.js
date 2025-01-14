'use client';

import React from 'react';

const projects = [
  {
    title: "Marauder's Map Web App",
    description: "A real-time location tracking system inspired by the magical Marauder's Map. Solemnly swear that you're up to monitoring user positions with interactive floor plans!",
    techStack: ["Next.js", "Socket.io", "MongoDB", "SVG Animations"]
  },
  {
    title: "Hogwarts Library Catalog",
    description: "Madam Pince would be proud! A digital catalog system for magical books and scrolls, complete with whispers from the restricted section.",
    techStack: ["React", "GraphQL", "PostgreSQL", "Auth0"]
  },
  {
    title: "Spell Recognition API",
    description: "Wingardium Levi-OS-a! A magical API that recognizes wand movements through your webcam. Practice your spells without breaking your monitor!",
    techStack: ["TensorFlow.js", "Python", "FastAPI", "WebRTC"]
  },
  {
    title: "Quidditch Score Tracker",
    description: "Keep track of your Quidditch matches like a professional commentator! Lee Jordan would definitely use this for his match broadcasts.",
    techStack: ["Next.js", "Firebase", "Tailwind CSS", "React Query"]
  },
  {
    title: "Potions Inventory System",
    description: "Professor Snape's dream inventory system! Track your ingredients, brewing schedules, and never let your Wolfsbane Potion expire again.",
    techStack: ["React", "Node.js", "MySQL", "Redux"]
  }
];

export default function Projects({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75" onClick={onClose}></div>
      
      {/* Scrollable Popup */}
      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-auto bg-cover rounded-xl p-6 md:p-8"
        style={{
          backgroundImage: "url('/assets/parchment_bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-3xl text-[#2A1810] hover:text-[var(--hogwarts-gold)] transition-colors"
          aria-label="Close projects"
        >
          ×
        </button>

        {/* Content */}
        <h1 
          className="text-4xl md:text-5xl mb-12 text-center font-[ParryHotter] text-amber-900"
          style={{
            textShadow: '2px 2px 4px rgba(139, 115, 85, 0.3), -1px -1px 0 rgba(255, 255, 255, 0.8)'
          }}
        >
          Magical Projects Portfolio
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative transform transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-amber-700/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card */}
              <div 
                className="relative p-6 rounded-2xl transition-all duration-500"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(245, 230, 211, 0.95), 
                      rgba(212, 196, 168, 0.95)
                    )
                  `,
                  boxShadow: `
                    inset 0 2px 4px rgba(255, 255, 255, 0.9),
                    inset 0 -2px 4px rgba(139, 115, 85, 0.5),
                    0 4px 8px rgba(0, 0, 0, 0.15),
                    0 8px 16px rgba(139, 115, 85, 0.2)
                  `
                }}
              >
                {/* Title */}
                <h2 
                  className="text-xl md:text-2xl font-serif text-amber-900 pb-3 group-hover:text-amber-800 transition-all duration-300"
                  style={{ textShadow: '1px 1px 0 rgba(255, 255, 255, 0.5)' }}
                >
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-amber-900/90 mb-6 font-medium leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h3 className="font-serif text-amber-900 font-semibold text-sm md:text-base">
                    Magical Technologies Used:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block px-3 py-1 text-xs md:text-sm rounded-full text-amber-900 
                        bg-gradient-to-br from-amber-50/80 to-amber-100/80
                        border border-amber-900/20 
                        transform transition-all duration-300
                        hover:-translate-y-0.5 hover:shadow-md
                        cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
