import { Hero } from '@/components/Hero';
import { Lineup } from '@/components/Lineup';
import { Schedule } from '@/components/Schedule';
import { Ticketing } from '@/components/Ticketing';
import { Venue } from '@/components/Venue';
import { Gallery } from '@/components/Gallery';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#ff0033] selection:text-white font-sans">
      <Navbar />
      <Hero />
      <Lineup />
      <Schedule />
      <Ticketing />
      <Venue />
      <Gallery />
      <Footer />
    </main>
  );
}
