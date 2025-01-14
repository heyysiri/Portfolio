'use client';
import React from 'react';

const projects = [
  {
    title: "GenAI Remote Sensing",
    description: "Created an AI-driven solution for environmental and agricultural challenges, using cutting-edge deep learning models to enhance crop classification, flood detection, and SAR image colorization. A game-changing approach for remote sensing!",
    github: "https://github.com/heyysiri/genai-remote-sensing",
    techStack: ["Flutter", "Flask", "Deep Learning models", "Docker"]
  },
  {
    title: "SKANA - Skill Gap Analyzer and Upskill Recommendation Tool",
    description: "Developed a tool to connect job seekers' skills with market demands, offering personalized upskilling paths and seamless job placement support with a responsive frontend and scalable backend.",
    github: "https://github.com/heyysiri/SKANA",
    techStack: ["React.js", "TailwindCSS", "Flask", "MongoDB"]
  },
  {
    title: "AI/ML powered chatbot for Namami Gange Programme",
    description: "Led the development of an AI-powered chatbot designed to inform and educate the public about the Namami Gange Programme, leveraging Rasa for NLP and enhancing response accuracy for a smoother user experience",
    github: "https://github.com/heyysiri/NamamiGange",
    techStack: ["React.js", "CSS","Rasa", "SQLite"]
  },
  {
    title: "Vitaria: Your AI-Powered Nutrition Companion",
    description: "Built an AI-driven platform that personalizes meal planning to align with your dietary goals and taste preferences. By leveraging generative AI, it crafts tailored meal suggestions, simplifying the process of maintaining a healthy diet amidst a busy lifestyle. Vitaria aims to transform meal planning into an effortless and enjoyable experience.",
    github: "https://github.com/heyysiri/vitaria",
    techStack: ["React Native", "Node.js", "Express.js", "MongoDB"]
  },
  {
    title: "Retro Harry Potter fansite",
    description: "Being the Potterhead that I am, I created a retro-inspired Harry Potter fan site featuring a mini-game, spell cards, and character cards, all wrapped in a nostalgic, magical vibe. A perfect treat for fellow wizards and witches!",
    github: "https://github.com/heyysiri/Arcade-Of-Azkaban",
    techStack: ["React.js", "TailwindCSS"]
  }
];

export default function Projects({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-transparent" onClick={onClose}></div>
      
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
          Projects Portfolio
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
                  className="text-xl md:text-2xl font-serif text-[#2A1810] pb-3 group-hover:text-amber-800 transition-all duration-300"
                  style={{ textShadow: '1px 1px 0 rgba(255, 255, 255, 0.5)' }}
                >
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-amber-900/90 mb-6 font-medium leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
                <p className="text-[#2A1810] mb-6 font-medium leading-relaxed text-sm md:text-base underline">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub Repository
                  </a>

                </p>
                {/* Tech Stack */}
                <div className="space-y-3">
                  <h3 className="font-serif text-amber-900 font-semibold text-sm md:text-base">
                    Tech Stack:
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
