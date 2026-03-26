"use client";
import { motion } from 'motion/react';
import Image from 'next/image';

const images = [
  { src: 'https://picsum.photos/seed/fest1/800/600', span: 'col-span-1 md:col-span-2 row-span-2' },
  { src: 'https://picsum.photos/seed/fest2/400/400', span: 'col-span-1 row-span-1' },
  { src: 'https://picsum.photos/seed/fest3/400/400', span: 'col-span-1 row-span-1' },
  { src: 'https://picsum.photos/seed/fest4/800/400', span: 'col-span-1 md:col-span-2 row-span-1' },
  { src: 'https://picsum.photos/seed/fest5/400/800', span: 'col-span-1 row-span-2' },
  { src: 'https://picsum.photos/seed/fest6/400/400', span: 'col-span-1 row-span-1' },
  { src: 'https://picsum.photos/seed/fest7/400/400', span: 'col-span-1 row-span-1' },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">
              Past <span className="text-gradient">Highlights</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              Relive the magic. A glimpse into the energy, production, and unforgettable moments from previous editions.
            </p>
          </div>
          <button className="px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors">
            View Full Gallery
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${img.span}`}
            >
              <Image
                src={img.src}
                alt={`Festival Highlight ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#ff0033]/0 group-hover:bg-[#ff0033]/20 transition-colors duration-500 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
