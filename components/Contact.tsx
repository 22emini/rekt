import React from 'react';
import Image from 'next/image';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="relative w-full min-h-[80vh] flex flex-col items-center justify-between py-16 px-8 overflow-hidden" style={{
      background: 'linear-gradient(to bottom, #8A38F5 0%, #8A38F5 50%, #51218F 100%)'
    }}>
      {/* Decorative confetti/shapes */}
      <div className="confetti absolute top-16 left-8 w-4 h-8 bg-[#7CB342] rounded-lg transform rotate-45 opacity-70"></div>
      <div className="confetti absolute top-32 left-16 w-3 h-6 bg-[#7CB342] rounded-lg transform -rotate-12 opacity-60"></div>
      <div className="confetti absolute top-24 left-28 w-2 h-5 bg-[#7CB342] rounded-lg transform rotate-90 opacity-50"></div>
      <div className="confetti absolute top-20 right-1/3 w-3 h-6 bg-[#7CB342] rounded-lg transform rotate-45 opacity-60"></div>
      <div className="confetti absolute top-40 right-1/4 w-4 h-8 bg-[#7CB342] rounded-lg transform -rotate-12 opacity-70"></div>
      <div className="confetti absolute bottom-1/3 left-1/4 w-3 h-6 bg-[#7CB342] rounded-lg transform rotate-12 opacity-50"></div>
      <div className="confetti absolute top-1/2 right-32 w-3 h-6 bg-[#7CB342] rounded-lg transform -rotate-45 opacity-60"></div>

      {/* White drip/splash on left side */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 50 400">
          <path d="M0,0 L20,0 Q25,50 15,80 Q10,100 20,130 Q30,160 15,200 Q5,240 20,280 Q35,320 15,360 Q5,380 20,400 L0,400 Z" 
                fill="#fff" 
                opacity="0.9"
          />
        </svg>
      </div>

      {/* White drip/splash on right side */}
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 50 400">
          <path d="M50,0 L30,0 Q25,60 35,100 Q40,140 30,180 Q20,220 35,260 Q45,300 30,340 Q20,370 35,400 L50,400 Z" 
                fill="#fff" 
                opacity="0.9"
          />
        </svg>
      </div>
      
      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-6 md:gap-8 flex-1 px-4">
        
        {/* Left Side - Happy Raccoon */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <div className="relative">
            <Image 
              src="/images/happyratel.svg" 
              alt="Happy Ratel" 
              width={450} 
              height={450} 
              className="w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96 h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side - Contact Info */}
        <div className="flex-1 flex flex-col items-center">
          {/* "CONTACT" Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 md:mb-8 uppercase"
                  style={{
                    fontFamily: "'Jumps Winter', sans-serif",
                    textShadow: '4px 4px 0 #6A1B9A, -2px -2px 0 #6A1B9A'
                  }}>
               CONTACT
              </h1>

          {/* Raccoon Circle Image */}
          <div className="mb-4 md:mb-6 bg-white rounded-full p-2 md:p-3 shadow-2xl border-2 md:border-4 border-[#6C2298]">
            <Image 
              src="/images/sittingrattel.svg" 
              alt="Raccoon Logo" 
              width={120} 
              height={120} 
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full"
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 md:gap-4 mb-6 md:mb-8">
            {/* Telegram */}
            <a
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white border-2 border-[#6C2298] rounded-full flex items-center justify-center hover:bg-gray-100 transition shadow-lg"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#8A38F5]" />
            </a>
            {/* X / Twitter */}
            <a
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white border-2 border-[#6C2298] rounded-full flex items-center justify-center hover:bg-gray-100 transition shadow-lg"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#8A38F5]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white border-2 border-[#6C2298] rounded-full flex items-center justify-center hover:bg-gray-100 transition shadow-lg"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#8A38F5]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="relative z-20 w-full max-w-5xl px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 bg-[#6C2298]/80 border-2 border-white rounded-full px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4">
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6" style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}>
            <a href="#about" className="text-white font-bold text-[10px] sm:text-xs md:text-sm tracking-wider hover:opacity-80 transition uppercase">
              ABOUT
            </a>
            <a href="#story" className="text-white font-bold text-[10px] sm:text-xs md:text-sm tracking-wider hover:opacity-80 transition uppercase">
              STORY
            </a>
            <a href="#tokenomics" className="text-white font-bold text-[10px] sm:text-xs md:text-sm tracking-wider hover:opacity-80 transition uppercase">
              TOKENOMICS
            </a>
            <a href="#how-to-buy" className="text-white font-bold text-[10px] sm:text-xs md:text-sm tracking-wider hover:opacity-80 transition uppercase">
              HOW TO BUY
            </a>
          </nav>

          {/* Buy Button */}
          <button className="px-4 sm:px-5 md:px-6 py-1.5 md:py-2 border-2 bg-[#6C2298] border-white rounded-full text-white font-bold text-[10px] sm:text-xs md:text-sm tracking-wider hover:bg-white hover:text-purple-900 transition uppercase" style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}>
            BUY REKT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

