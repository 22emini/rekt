import React from 'react';
import Image from 'next/image';

const ContentThree = () => {
  return (
    <div id="tokenomics" className="relative w-full min-h-screen bg-[#360C62] flex flex-col items-center py-20 overflow-hidden">
      {/* Snow Drip Top */}
      <div 
        className="absolute -top-4 left-0 w-full h-32 md:h-48 lg:h-56 z-10"
        style={{
            backgroundImage: 'url(/images/snow.png)',
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 100%'
        }}
      />

      {/* Paw Prints - Decor */}
      <div className="absolute top-32 left-10 md:left-20 hidden md:block opacity-30">
        <Image 
            src="/images/pawpad.png" 
            alt="Paw" 
            width={150} 
            height={150} 
            className="-rotate-12"
        />
      </div>
      <div className="absolute top-32 right-10 md:right-20 hidden md:block opacity-30">
         <Image 
         src="/images/pawpad.png" 
            alt="Paw" 
            width={150} 
            height={150} 
            className="rotate-12"
        />
      </div>

      {/* Header */}
      <div className="relative z-20 text-center mt-20 md:mt-28 mb-12">
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white text-center mb-4 tracking-wider uppercase"
                  style={{
                    fontFamily: "'Jumps Winter', sans-serif",
                    textShadow: '4px 4px 0 #6A1B9A, -2px -2px 0 #6A1B9A'
                  }}>
               REKTNOMICS
              </h1>
        <p className="text-white text-base md:text-lg font-normal tracking-wide uppercase" style={{ fontFamily: "'Free Sans', 'Liberation Sans', Arial, sans-serif" }}>
            TOTAL SUPPLY: 420,690,000,000 $REKT
        </p>
      </div>

      {/* Signs Layout - Staggered */}
      <div className="relative z-20 max-w-6xl w-full px-4 md:px-8">
        {/* Row 1: Sign 1 (left) */}
        <div className="flex justify-start mb-8 lg:mb-0">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="relative hover:scale-105 transition-transform duration-300">
              <Image 
                src="/images/rekttokenomic1.png" 
                alt="90% Liquidity Pool" 
                width={450}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Sign 2 (right, offset) */}
        <div className="flex justify-end mb-8 lg:mb-0 lg:-mt-20">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="relative hover:scale-105 transition-transform duration-300">
              <Image 
                src="/images/rekttokenomics2.svg" 
                alt="7% Marketing" 
                width={450}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Row 3: Sign 3 (center) */}
        <div className="flex justify-center lg:-mt-16">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="relative hover:scale-105 transition-transform duration-300">
              <Image 
                src="/images/rektokenomics3.svg" 
                alt="3% Team" 
                width={450}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContentThree;
