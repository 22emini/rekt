import React from 'react';

const HowToBuy = () => {
  return (
    <div id="how-to-buy" className="relative w-full min-h-screen bg-[#360C62] flex flex-col items-center py-16 overflow-hidden">
      {/* Snow Drip Top */}
      <div 
        className="absolute -top-4 left-0 w-full h-32 md:h-48 lg:h-56 z-10"
        style={{
            backgroundImage: 'url(/images/snow.png)',
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 100%'
        }}
      />

      {/* Header */}
      <div className="relative z-20 text-center mt-20 md:mt-24 mb-16">
        <h1 className="text-5xl md:text-8xl font-black text-white text-center tracking-wider uppercase"
                  style={{
                    fontFamily: "'Jumps Winter', sans-serif",
                    textShadow: '4px 4px 0 #6A1B9A, -2px -2px 0 #6A1B9A'
                  }}>
               HOW TO BUY
              </h1>
      </div>

      {/* Steps Container with Footprint Path */}
      <div className="relative z-20 max-w-6xl w-full px-8">
        
        {/* Row 1 - Steps 1, 2, 3 */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
          {/* Step 1 */}
          <div className="relative flex-1">
            {/* Footprint decoration */}
            <div className="absolute -top-12 -left-8 w-10 h-6 bg-white rounded-full rotate-45 opacity-80"></div>
            <div className="absolute -top-16 left-4 w-8 h-5 bg-white rounded-full rotate-12 opacity-60"></div>
            <StepCard 
                step="1"
                title="GET A WALLET" 
                description="Download MetaMask or Coinbase Wallet. Fund it with ETH." 
            />
            {/* Footprint trail to step 2 */}
            <div className="hidden lg:block absolute -bottom-12 right-0 w-8 h-5 bg-white rounded-full -rotate-45 opacity-70"></div>
            <div className="hidden lg:block absolute -bottom-6 right-16 w-6 h-4 bg-white rounded-full rotate-12 opacity-50"></div>
          </div>

          {/* Step 2 */}
          <div className="relative flex-1 lg:mt-16">
            {/* Footprint decoration */}
            <div className="hidden lg:block absolute -top-12 -left-8 w-8 h-5 bg-white rounded-full rotate-45 opacity-60"></div>
            <StepCard 
                step="2"
                title="BRIDGE TO BASE" 
                description="Go to bridge.base.org Bridge your ETH to Base network." 
            />
            {/* Footprint trail to step 3 */}
            <div className="hidden lg:block absolute -bottom-8 right-4 w-8 h-5 bg-white rounded-full -rotate-12 opacity-70"></div>
            <div className="hidden lg:block absolute -bottom-16 right-16 w-6 h-4 bg-white rounded-full rotate-45 opacity-50"></div>
          </div>

          {/* Step 3 */}
          <div className="relative flex-1">
            {/* Footprint decoration */}
            <div className="hidden lg:block absolute -top-16 -left-4 w-10 h-6 bg-white rounded-full rotate-12 opacity-70"></div>
            <div className="hidden lg:block absolute -top-10 left-8 w-6 h-4 bg-white rounded-full -rotate-45 opacity-50"></div>
            <StepCard 
                step="3"
                title="SWAP FOR $REKT" 
                description="Go to Uniswap and switch to Base network. Paste the $REKT contract address. Swap ETH for $REKT." 
            />
          </div>
        </div>

        {/* Footprint path to step 4 */}
        <div className="relative flex justify-center my-8">
          <div className="w-8 h-5 bg-white rounded-full rotate-45 opacity-60 mr-8"></div>
          <div className="w-10 h-6 bg-white rounded-full -rotate-12 opacity-70"></div>
          <div className="w-6 h-4 bg-white rounded-full rotate-45 opacity-50 ml-8"></div>
        </div>

        {/* Row 2 - Step 4 Centered */}
        <div className="flex justify-center">
          <div className="relative w-full md:w-1/2 lg:w-1/3">
            {/* Footprint decoration */}
            <div className="absolute -top-10 left-1/3 w-8 h-5 bg-white rounded-full rotate-12 opacity-60"></div>
            <StepCard 
                step="4"
                title="YOU'RE IN" 
                description="Congrats. You're officially rekt. Welcome to the club." 
            />
          </div>
        </div>

      </div>

      {/* Snow Drip Bottom */}
      <div 
        className="absolute -bottom-4 left-0 w-full h-32 md:h-48 lg:h-56 z-10 rotate-180"
        style={{
            backgroundImage: 'url(/images/snow.png)',
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 100%'
        }}
      />
    </div>
  );
};

const StepCard = ({ step, title, description }: { step: string, title: string, description: string }) => {
    return (
        <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-2xl border-4 border-[#8A38F5] hover:scale-105 transition-transform duration-300">
             {/* Decorative Bubbles - Top Left */}
             <div className="absolute -top-6 -left-4 flex flex-col gap-1">
                <div className="w-10 h-6 bg-white border-2 border-[#8A38F5] rounded-full shadow-md"></div>
                <div className="w-6 h-4 bg-white border-2 border-[#8A38F5] rounded-full shadow-md ml-4"></div>
             </div>
             
             {/* Step Header */}
             <div className="text-center mb-4">
                <h3 className="text-xl md:text-2xl font-black text-[#6C2298] uppercase" style={{
                    fontFamily: "'Jumps Winter', sans-serif",
                  }}>
                    STEP {step}: {title}
                 </h3>
             </div>

             {/* Description */}
             <p className="text-black text-sm md:text-base text-center leading-relaxed" style={{ fontFamily: "'Free Sans', 'Liberation Sans', Arial, sans-serif" }}>
                {description}
             </p>
        </div>
    )
}

export default HowToBuy;

