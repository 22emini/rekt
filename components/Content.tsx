import Image from 'next/image';
import React from 'react';

const RektMemecoin = () => {
  return (
    <div id="about" className="min-h-screen bg-[#360C62] relative overflow-visible pb-0">
      {/* Icicles at top */}
      <div 
        className="absolute -top-4 left-0 pb-5 w-full h-32 md:h-48 lg:h-56 z-10"
        style={{
            backgroundImage: 'url(/images/snow.png)',
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 100%'
        }}
      />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-8 pt-32 pb-0 relative z-5">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Raccoon Mascot */}
          <div className="shrink-0 w-80 lg:w-96">
            <Image src="/image/rac2.png" alt="Raccoon Mascot" width={400} height={500} className="w-full h-auto" />
          </div>

          {/* About Box with Zigzag Background */}
          <div className="flex-1 relative">
            <div 
              className=" p-14 md:p-12 relative shadow-2xl"
              style={{
                backgroundImage: 'url(/images/purplezigzagbg.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Decorative line top right */}
              <div className="absolute top-6 right-8 w-20 h-4 -rotate-12 bg-white rounded-full"></div>
              
              {/* Decorative line bottom left */}
              <div className="absolute bottom-6 left-8 w-28 h-5 rotate-12 bg-[#7CB342] rounded-full"></div>

              <h1 className="text-5xl md:text-7xl font-black text-white text-center mb-8 tracking-wider uppercase"
                  style={{
                    fontFamily: "'Jumps Winter', sans-serif",
                    textShadow: '3px 3px 0 #6A1B9A, -1px -1px 0 #6A1B9A'
                  }}>
                ABOUT
              </h1>

              <p className="text-white text-base md:text-lg leading-relaxed text-center font-normal"
                 style={{fontFamily: "'Free Sans', 'Liberation Sans', Arial, sans-serif"}}>
                $REKT is the memecoin for everyone who's been wrecked by the market and lived to tell the tale. Built by degens who've lost it all and came back stronger. Our mascot is a raccoon because raccoons are survivors. They thrive in chaos, adapt to anything, and always find a way through. Got liquidated? Rugged? Down bad? You're not alone. $REKT is where survivors gather, laugh at the pain, and ride the next wave together. This isn't about lambos and moons. It's about real traders, real losses, and real resilience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RektMemecoin;