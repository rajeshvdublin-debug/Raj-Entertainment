"use client";
import { useState } from 'react';
import { motion } from 'motion/react';

const scheduleData = [
  {
    day: 'Day 1',
    date: 'Aug 15',
    events: [
      { time: '18:00', artist: 'Gates Open', stage: 'All Areas', type: 'info' },
      { time: '19:30', artist: 'Velocity', stage: 'Neon Stage', type: 'performance' },
      { time: '21:00', artist: 'The Midnight Echo', stage: 'Main Stage', type: 'performance', highlight: true },
      { time: '23:30', artist: 'DJ Crimson', stage: 'Underground', type: 'performance' },
    ]
  },
  {
    day: 'Day 2',
    date: 'Aug 16',
    events: [
      { time: '16:00', artist: 'Gates Open', stage: 'All Areas', type: 'info' },
      { time: '18:00', artist: 'Lunar Eclipse', stage: 'Neon Stage', type: 'performance' },
      { time: '20:30', artist: 'Cyberpunk Syndicate', stage: 'Main Stage', type: 'performance', highlight: true },
      { time: '00:00', artist: 'Secret Guest', stage: 'Underground', type: 'performance' },
    ]
  },
  {
    day: 'Day 3',
    date: 'Aug 17',
    events: [
      { time: '15:00', artist: 'Gates Open', stage: 'All Areas', type: 'info' },
      { time: '17:00', artist: 'Local Showcase', stage: 'Neon Stage', type: 'performance' },
      { time: '21:00', artist: 'Neon Dreamers', stage: 'Main Stage', type: 'performance', highlight: true },
      { time: '23:45', artist: 'Closing Ceremony', stage: 'Main Stage', type: 'info', highlight: true },
    ]
  }
];

export function Schedule() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="py-32 relative bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">
            Event <span className="text-gradient">Timetable</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Plan your festival experience. Three days of non-stop entertainment across multiple stages.
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {scheduleData.map((day, index) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(index)}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                activeDay === index
                  ? 'bg-gradient-brand text-white glow-red'
                  : 'bg-[#111] text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
              }`}
            >
              {day.day} <span className="text-sm font-normal opacity-70 ml-2">{day.date}</span>
            </button>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="bg-[#111] rounded-3xl p-6 md:p-10 border border-white/5">
          <div className="space-y-4">
            {scheduleData[activeDay].events.map((event, index) => (
              <motion.div
                key={`${event.time}-${event.artist}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 rounded-2xl transition-colors ${
                  event.highlight 
                    ? 'bg-gradient-to-r from-[#ff0033]/10 to-transparent border border-[#ff0033]/20' 
                    : 'bg-[#1a1a1a] hover:bg-[#222]'
                }`}
              >
                <div className="w-32 shrink-0">
                  <span className={`text-2xl font-display font-bold ${event.highlight ? 'text-[#ff0033]' : 'text-white'}`}>
                    {event.time}
                  </span>
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold uppercase tracking-wide mb-1">{event.artist}</h4>
                  <p className="text-gray-400 text-sm">{event.type === 'info' ? 'Information' : 'Live Performance'}</p>
                </div>
                <div className="shrink-0 md:text-right">
                  <span className="inline-block px-4 py-2 rounded-full bg-black/50 text-sm font-medium text-gray-300 border border-white/5">
                    {event.stage}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
