"use client";
import { motion } from 'motion/react';
import Image from 'next/image';

const artists = [
  { name: 'Cyberpunk Syndicate', genre: 'Synthwave / Electronic', image: 'https://picsum.photos/seed/cyber/600/800', featured: true },
  { name: 'Neon Dreamers', genre: 'House / Techno', image: 'https://picsum.photos/seed/neon/600/800', featured: true },
  { name: 'The Midnight Echo', genre: 'Alternative Rock', image: 'https://picsum.photos/seed/midnight/600/800', featured: true },
  { name: 'DJ Crimson', genre: 'Bass / Dubstep', image: 'https://picsum.photos/seed/crimson/600/800', featured: false },
  { name: 'Lunar Eclipse', genre: 'Trance', image: 'https://picsum.photos/seed/lunar/600/800', featured: false },
  { name: 'Velocity', genre: 'Drum & Bass', image: 'https://picsum.photos/seed/velocity/600/800', featured: false },
];

export function Lineup() {
  return (
    <section id="lineup" className="py-32 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">
              The <span className="text-gradient">Lineup</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              Experience world-class performances from the biggest names in the industry, curated exclusively for Raj Entertainment.
            </p>
          </div>
          <a href="#" className="text-[#ff0033] font-medium hover:text-white transition-colors flex items-center gap-2">
            View Full Roster &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden bg-[#111] border border-white/5 hover:border-[#ff0033]/50 transition-colors duration-500 ${
                artist.featured ? 'md:col-span-2 lg:col-span-1 aspect-[3/4]' : 'aspect-square'
              }`}
            >
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Red Glow on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_50px_rgba(255,0,51,0.3)]" />

              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[#ff0033] font-medium text-sm tracking-widest uppercase mb-2">
                  {artist.genre}
                </p>
                <h3 className="text-3xl font-display font-bold uppercase tracking-tight">
                  {artist.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
