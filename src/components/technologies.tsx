"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FileCode2, 
  Palette, 
  Braces, 
  Layers, 
  Server, 
  Database, 
  Box, 
  Github,
  MonitorSmartphone,
  Cpu,
  Coffee,
  TableProperties
} from "lucide-react";

const techCategories = [
  {
    title: "Frontend Development",
    speed: 25,
    direction: "left",
    items: [
      { name: "HTML5", icon: FileCode2 },
      { name: "CSS3", icon: Palette },
      { name: "JavaScript", icon: Braces },
      { name: "TypeScript", icon: Braces },
      { name: "React", icon: Layers },
      { name: "Next.js", icon: MonitorSmartphone },
    ],
  },
  {
    title: "Backend & Database",
    speed: 30,
    direction: "right",
    items: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Cpu },
      { name: "Java", icon: Coffee },
      { name: "SQL", icon: TableProperties },
      { name: "MongoDB", icon: Database },
    ],
  },
  {
    title: "Version Control & Tools",
    speed: 20,
    direction: "left",
    items: [
      { name: "Docker", icon: Box },
      { name: "GitHub", icon: Github },
    ],
  },
];

export default function Technologies() {
  return (
    <section className="py-24 w-full overflow-hidden flex flex-col items-center justify-center bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl w-full mx-auto px-4 md:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Technologies & Tools
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
            A showcase of the programming languages, frameworks, and tools I use to build robust and scalable applications.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {techCategories.map((category, idx) => {
            // Duplicate multiple times to ensure enough items to cover wider screens seamlessly
            const carouselItems = [...category.items, ...category.items, ...category.items, ...category.items, ...category.items, ...category.items];
            
            return (
              <div key={idx} className="flex flex-col">
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6 pl-4 border-l-4 border-sky-500 max-w-7xl mx-auto w-full">
                  {category.title}
                </h3>
                
                {/* Carousel container */}
                <div className="relative flex w-full max-w-[100vw] overflow-hidden py-4 -mx-4 px-4 md:mx-0 md:px-0">
                  <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>
                  
                  <motion.div
                    className="flex gap-6 w-max"
                    animate={{ 
                      x: category.direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
                    }}
                    transition={{ 
                      duration: category.speed,
                      ease: "linear", 
                      repeat: Infinity 
                    }}
                  >
                    {carouselItems.map((tech, i) => (
                      <div 
                        key={`${tech.name}-${i}`}
                        className="flex items-center gap-4 px-8 py-5 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 hover:border-sky-500/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 cursor-default"
                      >
                        <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0">
                          <tech.icon className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <span className="font-semibold text-lg text-zinc-800 dark:text-zinc-200 whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
