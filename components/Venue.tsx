"use client";
import { motion } from 'motion/react';
import { MapPin, Navigation, Car, Train } from 'lucide-react';
import Image from 'next/image';

export function Venue() {
  return (
    <section id="venue" className="py-32 relative bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
      {/* Abstract Map Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6">
              The <span className="text-gradient">Venue</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Metropolis Arena is transformed into a neon-lit wonderland for three days. Featuring state-of-the-art sound systems, immersive art installations, and multiple stages.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ff0033]/10 flex items-center justify-center shrink-0 border border-[#ff0033]/20">
                  <MapPin className="text-[#ff0033]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Location</h4>
                  <p className="text-gray-400">100 Neon Boulevard, Metropolis, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Train className="text-gray-300" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Public Transit</h4>
                  <p className="text-gray-400">Subway Lines A, C, E to Neon Station. 5 minute walk.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Car className="text-gray-300" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Parking</h4>
                  <p className="text-gray-400">Limited premium parking available. Ride-sharing recommended.</p>
                </div>
              </div>
            </div>

            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-colors">
              <Navigation className="w-5 h-5" />
              Get Directions
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 group"
          >
            <Image
              src="https://picsum.photos/seed/venue/800/600"
              alt="Venue Map"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            
            {/* Stylized Map Markers */}
            <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-[#ff0033] rounded-full shadow-[0_0_20px_#ff0033] animate-pulse" />
            <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_white]" />
            <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_white]" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#050505]/80 backdrop-blur-md rounded-2xl border border-white/10">
              <h4 className="font-bold text-lg mb-2">Festival Map</h4>
              <p className="text-sm text-gray-400">Interactive map will be available in the festival app 48 hours before gates open.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
