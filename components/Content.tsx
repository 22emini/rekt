import Image from 'next/image';
import React from 'react';

const RektMemecoin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#360C62] via-purple-800 to-[#360C62] relative overflow-hidden">
      {/* Icicles at top */}
      <div className="absolute top-0 left-0 w-full h-20 z-10">
         <div
        className="absolute bottom-0  rotate-180 left-0 right-0 h-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,40 Q50,20 100,40 T200,40 L200,80 L0,80 Z' fill='white' opacity='0.95'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "200px auto",
          backgroundPosition: "0 0",
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
            <div className=" bg-opacity-60 border-4 border-purple-300 rounded-3xl p-12 relative shadow-2xl">
              {/* Decorative line top right */}
              <div className="absolute top-8 right-10 w-20 h-4  -rotate-12 bg-white rounded-full"></div>
              
              {/* Decorative line bottom left */}
              <div className="absolute bottom-6 left-10 w-24 h-5 bg-gradient-to-r from-green-500 rotate-12 to-green-400 rounded-full"></div>

              <h1 className="text-7xl font-black text-white text-center mb-8 tracking-wider"
                  style={{
                    textShadow: '-3px -3px 0 #7b1fa2, 3px -3px 0 #7b1fa2, -3px 3px 0 #7b1fa2, 3px 3px 0 #7b1fa2, 0 6px 20px rgba(0,0,0,0.5)'
                  }}>
                ABOUT
              </h1>

              <p className="text-white text-base leading-relaxed text-center font-normal"
                 style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
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