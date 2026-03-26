"use client";
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'General Admission',
    price: '$149',
    description: 'Access to all main stages and general festival areas.',
    features: [
      '3-Day Festival Access',
      'Access to Main & Neon Stages',
      'Food Village Access',
      'Standard Restrooms'
    ],
    highlight: false,
  },
  {
    name: 'VIP Experience',
    price: '$399',
    description: 'Elevated viewing, exclusive lounges, and premium amenities.',
    features: [
      'Everything in General Admission',
      'Express VIP Entry Lane',
      'Exclusive VIP Lounges & Bars',
      'Premium Viewing Areas',
      'Air-Conditioned Restrooms',
      'Exclusive Festival Merch Pack'
    ],
    highlight: true,
  },
  {
    name: 'VVIP / Backstage',
    price: '$999',
    description: 'The ultimate luxury festival experience with backstage access.',
    features: [
      'Everything in VIP Experience',
      'Backstage Access & Artist Village',
      'Complimentary Premium Drinks',
      'Dedicated Concierge Service',
      'Golf Cart Transport',
      'Meet & Greet Opportunities'
    ],
    highlight: false,
  }
];

export function Ticketing() {
  return (
    <section id="tickets" className="py-32 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">
            Secure Your <span className="text-gradient">Pass</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the experience that suits you best. Tickets are selling fast, secure yours before they&apos;re gone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl ${
                tier.highlight
                  ? 'bg-gradient-to-b from-[#1a0508] to-[#111] border border-[#ff0033]/30 shadow-[0_0_40px_rgba(255,0,51,0.15)]'
                  : 'bg-[#111] border border-white/5'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-brand rounded-full text-xs font-bold uppercase tracking-widest text-white">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm h-10">{tier.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-5xl font-display font-black">{tier.price}</span>
                <span className="text-gray-500 ml-2">/ person</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check className={`w-5 h-5 shrink-0 ${tier.highlight ? 'text-[#ff0033]' : 'text-gray-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-gradient-brand text-white hover:glow-red'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Buy {tier.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
