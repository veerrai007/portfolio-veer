"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projectsList = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, integrating secure payments and an intuitive admin dashboard.",
    tech: ["Next.js", "TailwindCSS", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-time Chat App",
    description: "Instant messaging application featuring real-time updates, user authentication, and responsive design.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Image Generator",
    description: "Web app that converts text prompts into high-quality images using advanced machine learning APIs.",
    tech: ["React", "Express", "OpenAI API", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-svh w-full py-24 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">Featured Projects</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
            Here are a few defining projects that showcase my passion for building beautiful, scalable, and responsive web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 flex flex-col h-full hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-2 outline-none transition-all duration-300"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-sky-500 transition-colors">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-6 mt-auto border-t border-zinc-100 dark:border-zinc-800/50 pt-6">
                <a href={project.githubUrl} className="flex items-center text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
                  <Github className="w-5 h-5 mr-2" /> Code
                </a>
                <a href={project.liveUrl} className="flex items-center text-sm font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition-colors ml-auto">
                  <ExternalLink className="w-5 h-5 mr-2" /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
