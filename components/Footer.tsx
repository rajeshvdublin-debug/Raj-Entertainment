import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#020202] pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="text-3xl font-display font-bold tracking-tighter flex items-center gap-2 mb-6">
              RAJ <span className="text-gradient">ENTERTAINMENT</span>
            </a>
            <p className="text-gray-400 max-w-md mb-8">
              Setting the standard for premium festival experiences and high-end event management globally. We create moments that last a lifetime.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ff0033] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ff0033] transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ff0033] transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ff0033] transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#lineup" className="text-gray-400 hover:text-[#ff0033] transition-colors">Lineup</a></li>
              <li><a href="#schedule" className="text-gray-400 hover:text-[#ff0033] transition-colors">Schedule</a></li>
              <li><a href="#tickets" className="text-gray-400 hover:text-[#ff0033] transition-colors">Tickets</a></li>
              <li><a href="#venue" className="text-gray-400 hover:text-[#ff0033] transition-colors">Venue Info</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-[#ff0033] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">info@rajentertainment.com</li>
              <li className="text-gray-400">press@rajentertainment.com</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
              <li className="text-gray-400 mt-4">
                100 Entertainment Way<br />
                Suite 400<br />
                New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Raj Entertainment. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
