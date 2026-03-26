"use client";
import { motion } from 'motion/react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#050505] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,0,51,0.15),_transparent_60%)] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff0033] rounded-full blur-[150px] opacity-20 z-0 animate-pulse" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff0033] animate-pulse" />
          <span className="text-sm font-medium tracking-wide uppercase text-gray-300">The Ultimate Experience</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase leading-[0.9] mb-6"
        >
          Neon <br />
          <span className="text-gradient">Nights</span> Festival
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
        >
          Immerse yourself in a world of pulsating beats, mesmerizing light shows, and unforgettable performances. Brought to you by Raj Entertainment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2 text-gray-300">
            <Calendar className="w-5 h-5 text-[#ff0033]" />
            <span className="font-medium">August 15-17, 2026</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-5 h-5 text-[#ff0033]" />
            <span className="font-medium">Metropolis Arena, NY</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#tickets"
            className="group relative px-8 py-4 bg-gradient-brand rounded-full font-bold text-lg flex items-center justify-center gap-2 overflow-hidden transition-all hover:scale-105 glow-red"
          >
            <span className="relative z-10">Secure Your Pass</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
          <a
            href="#lineup"
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            View Lineup
          </a>
        </motion.div>
      </div>
    </section>
  );
}
