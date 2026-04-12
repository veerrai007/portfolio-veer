"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { BoxReveal } from "./magicui/box-reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-24 flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden relative">
      <div className="absolute top-[20%] left-[20%] w-[30rem] h-[30rem] bg-sky-500/10 dark:bg-sky-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[25rem] h-[25rem] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 w-full flex flex-col items-center z-10 relative">
        <BoxReveal boxColor={"#A1E3F9"} duration={0.5}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black dark:text-white mb-6 text-center">
            Let's work together.
          </h2>
        </BoxReveal>
        
        <BoxReveal boxColor={"#A1E3F9"} duration={0.6}>
          <p className="text-zinc-600 dark:text-zinc-400 text-center max-w-xl mb-12 text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to network, I'd love to connect with you.
          </p>
        </BoxReveal>

        <div className="w-full max-w-md h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit} 
                className="w-full flex flex-col gap-4 bg-white/50 dark:bg-zinc-950/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-md shadow-xl"
              >
                <div className="flex flex-col gap-2">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    required
                    className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all dark:text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    required
                    className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all dark:text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <textarea 
                    name="message"
                    placeholder="Your Message..." 
                    rows={4}
                    required
                    className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all resize-none dark:text-white"
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button 
                  type="submit"
                  disabled={loading}
                  className="group mt-2 w-full inline-flex h-12 items-center justify-center rounded-xl bg-black dark:bg-white px-6 font-semibold text-white dark:text-black transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"} <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col items-center justify-center p-12 text-center bg-white/50 dark:bg-zinc-950/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-md shadow-xl"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle2 className="w-20 h-20 text-sky-500 mb-6 drop-shadow-[0_0_15px_rgba(14,165,233,0.5)]" />
                </motion.div>
                <h3 className="text-3xl font-bold text-black dark:text-white mb-2">Message Sent!</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8">Thanks for reaching out. I'll get back to you soon.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-semibold px-4 py-2 rounded-full border border-sky-200 dark:border-sky-900/50 hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-all"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium uppercase tracking-widest mb-4">Or mail me directly</p>
          <a 
            href="mailto:veerrai007@gmail.com" 
            className="group inline-flex items-center text-xl font-semibold text-black dark:text-white transition-all hover:text-sky-500 dark:hover:text-sky-400"
          >
            <div className="bg-zinc-100 dark:bg-zinc-900 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-sky-500" />
            </div>
            iveer003@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
