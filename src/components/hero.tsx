"use client";
import React from "react";
import { Download, ArrowRight } from "lucide-react";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { FlipText } from "./magicui/flip-text";
import { IconCloudDemo } from "./iconCloud";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 pt-24 pb-12 overflow-hidden bg-white dark:bg-black">
      
      {/* Background glowing gradients */}
      <div className="absolute top-[20%] left-0 w-[40rem] h-[40rem] bg-sky-200/30 dark:bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[30rem] h-[30rem] bg-blue-200/40 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="z-10 flex flex-col items-start justify-center w-full md:w-1/2 max-w-2xl mt-12 md:mt-0">
        <div className="inline-flex items-center rounded-full border border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-900/30 px-4 py-1.5 text-sm font-medium text-sky-600 dark:text-sky-300 mb-8 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-sky-500 mr-2 border border-sky-300 animate-pulse"></span>
          Available for new opportunities
        </div>

        <FlipText className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-black dark:text-white leading-[1.1] mb-2 -ml-1">
          Hi, I'm Veer
        </FlipText>
        
        <BoxReveal boxColor={"#0ea5e9"} duration={0.6}>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 pb-2">
            Full Stack Developer
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#0ea5e9"} duration={0.7}>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed max-w-xl">
            I craft scalable, efficient web experiences using <span className="font-bold text-black dark:text-white">React, TypeScript, Tailwind</span>, and <span className="font-bold text-black dark:text-white">Motion</span>. Turning complex problems into elegant solutions.
          </p>
        </BoxReveal>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a 
            href="#projects" 
            className="group w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-black dark:bg-white px-8 font-semibold text-white dark:text-black transition-all hover:scale-[1.02] active:scale-95 shadow-xl hover:shadow-sky-500/25"
          >
            View Projects 
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a 
            href="/media/resume.pdf" 
            download="Veer_Resume.pdf" 
            className="group w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full border-2 border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-md px-8 font-semibold text-black dark:text-white transition-all hover:border-black dark:hover:border-white hover:bg-zinc-50 dark:hover:bg-zinc-900 active:scale-95"
          >
            <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:text-sky-500" /> 
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="z-10 w-full md:w-1/2 flex items-center justify-center mt-16 md:mt-0"
      >
        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
          {/* Decorative rings for the 3D globe effect */}
          <div className="absolute inset-0 border border-black/5 dark:border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-8 border border-black/5 dark:border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute inset-16 border border-sky-500/20 dark:border-sky-500/30 rounded-full shadow-[0_0_100px_rgba(14,165,233,0.1)]" />
          
          <div className="relative z-20 w-[120%] h-[120%] flex items-center justify-center drop-shadow-2xl">
            <IconCloudDemo />
          </div>
        </div>
      </motion.div>

    </section>
  );
}
