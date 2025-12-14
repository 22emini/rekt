import Image from 'next/image';
import React from 'react';

const RektMemecoin = () => {
  return (
    <div className="min-h-screen bg-[#360C62] relative overflow-hidden">
      {/* Icicles at top */}
      <div className="absolute top-0 left-0 w-full h-20 z-10">
      <div 
        className="absolute -top-6 left-0 w-full h-20 md:h-36 z-10"
        style={{
            backgroundImage: 'url(/images/snow.png)',
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 100%'
        }}
      />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-8 py-32 relative z-5">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Raccoon Mascot */}
          <div className="flex-shrink-0 w-80 lg:w-96">
            <Image src="/image/rac2.png" alt="Raccoon Mascot" width={320} height={384} className="w-full h-auto " />
          </div>

          {/* About Box */}
          <div className="flex-1 relative">
            <div className="bg-[#8A38F5] border-4 border-white rounded-3xl p-12 relative shadow-2xl">
              {/* Decorative line top right */}
              <div className="absolute top-8 right-10 w-24 h-5 -rotate-12 bg-white rounded-full"></div>
              
              {/* Decorative line bottom left */}
              <div className="absolute bottom-8 left-10 w-32 h-6 rotate-12 bg-[#7CB342] rounded-full"></div>

              <h1 className="text-7xl font-black text-white text-center mb-8 tracking-wider uppercase"
                  style={{
                    fontFamily: "'Jumps Winter', sans-serif",
                    textShadow: '4px 4px 0 #6A1B9A, -2px -2px 0 #6A1B9A'
                  }}>
                ABOUT
              </h1>

              <p className="text-white text-lg leading-relaxed text-center font-normal"
                 style={{fontFamily: "'Free Sans', 'Liberation Sans', Arial, sans-serif"}}>
                $REKT is the memecoin for everyone who's been wrecked by the market and lived to tell the tale. Built by degens who've lost it all and came back stronger. Our mascot is a raccoon because raccoons are survivors. They thrive in chaos, adapt to anything, and always find a way through. Got liquidated? Rugged? Down bad? You're not alone. $REKT is where survivors gather, laugh at the pain, and ride the next wave together. This isn't about lambos and moons. It's about real traders, real losses, and real resilience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0  left-0 w-full h-20 z-1">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1280 80">
      
          <path d="M0,50 Q100,20 200,50 T400,50 T600,50 T800,50 T1000,50 T1200,50 T1400,50 L1400,80 L0,80 Z" 
                fill="#fff" 
               />
        </svg>
      </div>
    </div>
  );
};

export default RektMemecoin;