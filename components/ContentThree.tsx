import React from 'react';
import Image from 'next/image';

const ContentThree = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#360C62] flex flex-col items-center">
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
      <div className="relative z-20 text-center mt-16 mb-16">
        
        <h1 className="text-7xl md:text-8xl font-black text-white text-center mb-6 tracking-wider uppercase"
                  style={{
                    fontFamily: "'Jumps Winter', sans-serif",
                    textShadow: '4px 4px 0 #6A1B9A, -2px -2px 0 #6A1B9A'
                  }}>
               REKTNOMICS
              </h1>
        <p className="text-white text-lg md:text-xl font-normal tracking-wide uppercase" style={{ fontFamily: "'Free Sans', 'Liberation Sans', Arial, sans-serif" }}>
            TOTAL SUPPLY: 420,690,000,000 $REKT
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
                <div className="flex items-center justify-center gap-2 mb-3">
                     <span className="text-3xl md:text-4xl font-black text-[#8A38F5] drop-shadow-md uppercase" style={{
                    fontFamily: "'Jumps Winter', sans-serif",
                    textShadow: '2px 2px 0 #4A148C, -1px -1px 0 #4A148C'
                  }}>
                        {percentage} - {title}
                     </span>
                </div>
                <p className="text-white text-lg md:text-xl font-normal" style={{ fontFamily: "'Free Sans', 'Liberation Sans', Arial, sans-serif" }}>
                    {description}
                </p>
             </div>
        </div>
    )
}

export default ContentThree;
