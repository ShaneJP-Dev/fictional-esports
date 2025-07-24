"use client"

import { 
  MessageCircle, 
  Youtube, 
  Twitter, 
  Twitch, 
  Instagram,
  Facebook,
  Linkedin,
  Music
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Logo and Copyright */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              {/* Logo placeholder - you can replace with your actual logo */}
              <div className="flex items-center justify-center">
                <img 
                src="/images/mettle-logo.jpg" 
                alt="Mettlestate Logo" 
                className="w-16 h-16 object-contain"
                onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; 
                target.src = 'https://placehold.co/64x64/1c2a3e/FFF?text=Logo';
              }}
              />
              </div>
            </div>
            <div className="text-gray-400 mb-2">© Mettlestate</div>
            <div className="text-gray-500 text-sm">All rights reserved.</div>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-1 h-6 bg-red-500 mr-3"></div>
              <h3 className="text-white font-bold text-lg uppercase tracking-wider">Company</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Investors
                </a>
              </li>
            </ul>
          </div>

          {/* Further Information Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-1 h-6 bg-red-500 mr-3"></div>
              <h3 className="text-white font-bold text-lg uppercase tracking-wider">Further Information</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-1 h-6 bg-red-500 mr-3"></div>
              <h3 className="text-white font-bold text-lg uppercase tracking-wider">Socials</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200 group"
              >
                <MessageCircle className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-red-600 rounded-lg transition-colors duration-200 group"
              >
                <Youtube className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </a>
              
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-white rounded-lg transition-colors duration-200 group"
              >
                {/* https://www.flaticon.com/free-icon/twitter_5968958?term=x&page=1&position=6&origin=tag&related_id=5968958 */}
                <img
                  src="/images/twitter.png"
                  alt="X (Twitter) Icon"
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://placehold.co/24x24/000/FFF?text=X";
                  }}
                />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-purple-600 rounded-lg transition-colors duration-200 group"
              >
                <Twitch className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-lg transition-all duration-200 group"
              >
                <Instagram className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-black rounded-lg transition-colors duration-200 group"
              >
                {/* https://www.flaticon.com/free-icon/tik-tok_3046121?term=tiktok&page=1&position=2&origin=search&related_id=3046121 */}
                <img
                  src="/images/tiktok.png"
                  alt="TikTok Icon"
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://placehold.co/24x24/000/FFF?text=X";
                  }}
                />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors duration-200 group"
              >
                <Facebook className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-blue-700 rounded-lg transition-colors duration-200 group"
              >
                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="text-center text-gray-500 text-sm">
            Built for champions, designed for legends. Join the ultimate gaming experience.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;