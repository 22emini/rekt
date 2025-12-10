import React from 'react';
import Image from 'next/image';

const ContentThree = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#2a0a55]  flex flex-col items-center">
      {/* Snow Drip Top */}
      <div 
        className="absolute -top-6 left-0 w-full h-20 md:h-36 z-10"
        style={{
            backgroundImage: 'url(/images/snow.png)',
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 100%'
        }}
      />

      {/* Paw Prints - Decor */}
      <div className="absolute top-24 left-10 md:left-20 animate-pulse hidden md:block">
        <Image 
            src="/images/pawpad.png" 
            alt="Paw" 
            width={200} 
            height={200} 
            className="-rotate-12 opacity-90 drop-shadow-lg"
        />
      </div>
      <div className="absolute top-24 right-10 md:right-20 animate-pulse hidden md:block delay-700">
         <Image 
         src="/images/pawpad.png" 
            alt="Paw" 
            width={200} 
            height={200} 
            className="rotate-12 opacity-90 drop-shadow-lg"
        />
      </div>

      {/* Header */}
      <div className="relative z-20 text-center mt-12 mb-16">
        
        <h1 className="text-7xl font-black text-white text-center mb-8 tracking-wider"
                  style={{
                    textShadow: '-3px -3px 0 #7b1fa2, 3px -3px 0 #7b1fa2, -3px 3px 0 #7b1fa2, 3px 3px 0 #7b1fa2, 0 6px 20px rgba(0,0,0,0.5)'
                  }}>
               REKTNOMICS
              </h1>
        <p className="text-white/90 text-sm md:text-lg font-bold tracking-widest uppercase">
            Total Supply: 420,690,000,000 $REKT
        </p>
      </div>

      {/* Signs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 max-w-7xl w-full z-20 place-items-center">
        
        {/* Sign 1 */}
        <SignPost 
            percentage="90%" 
            title="LIQUIDITY POOL" 
            description="Burned forever. No rugs." 
        />

        {/* Sign 2 - Offset usually in design, but grid is fine */}
        <div className="md:mt-24">
            <SignPost 
                percentage="7%" 
                title="MARKETING" 
                description="Memes, raids, and chaos." 
            />
        </div>

        {/* Sign 3 */}
        <SignPost 
            percentage="3%" 
            title="TEAM" 
            description="Ramen budget." 
        />

      </div>
    </div>
  );
};

const SignPost = ({ percentage, title, description }: { percentage: string, title: string, description: string }) => {
    return (
        <div className="relative w-[550px] max-w-[95vw] h-[430px] md:w-[700px] md:max-w-full md:h-[520px] flex items-center justify-center hover:scale-105 transition-transform duration-300">
             {/* Sign Background Image */}
             <div className="absolute inset-0 w-full h-full">
                <Image 
                    src="/images/sign.png" 
                    alt="Wooden Sign" 
                    fill
                    className="object-contain" // Use contain to see whole sign
                />
             </div>
             
             {/* Text Content - Absolute positioned to fit on the wood part */}
             {/* Adjust top padding to clear the snow cap on the sign */}
             <div className="relative z-10 pt-10 px-6 text-center w-[80%]">
                <div className="flex items-center justify-center gap-2 mb-1">
                     <span className="text-2xl md:text-3xl font-black text-white drop-shadow-md stroke-black [text-shadow:2px_2px_0px_#4a192c]" style={{
                    textShadow: '-3px -3px 0 #7b1fa2, 3px -3px 0 #7b1fa2, -3px 3px 0 #7b1fa2, 3px 3px 0 #7b1fa2, 0 6px 20px rgba(0,0,0,0.5)'
                  }}>
                        {percentage} - {title}
                     </span>
                </div>
                <p className="text-white text-base md:text-lg font-bold drop-shadow-sm">
                    {description}
                </p>
             </div>
        </div>
    )
}

export default ContentThree;
