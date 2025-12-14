export default function RektMeme() {
  return (
    < div  className="bg-[#8A38F5]">
         <div className=" bottom-0  -rotate-180 left-0 w-full h-20 z-1">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1280 80">
          <path d="M0,40 Q80,10 160,40 T320,40 T480,40 T640,40 T800,40 T960,40 T1120,40 T1280,40 L1280,80 L0,80 Z" 
                fill="#fff" 
                />
     
        </svg>
      </div>
    <div className="min-h-screen bg-[#8A38F5] flex items-center justify-center p-4">
      

      <div className="relative max-w-4xl w-full">
        
        {/* Main container with jagged border */}
        <div className="relative">

          {/* Content box */}
          <div className="relative">
            <div className="text-center space-y-6">
              {/* Title */}
              <h1 className="text-7xl font-black text-white mb-12 uppercase" style={{ 
                fontFamily: "'Jumps Winter', sans-serif",
                letterSpacing: '0.05em',
                textShadow: '4px 4px 0 #4A148C, -2px -2px 0 #4A148C'
              }}>
                WHO IS REKT?
              </h1>

              {/* Body text */}
              <div className="text-white text-2xl leading-relaxed space-y-6" style={{ fontFamily: "'Free Sans', 'Liberation Sans', Arial, sans-serif" }}>
                <p>
                  Once upon a degen dream, a raccoon aped into every shitcoin imaginable.
                </p>
                <p>
                  Luna at $119? Bought it. SafeMoon? Bag holder. FTX tokens? Still has 'em.
                </p>
                <p>
                  He got liquidated 47 times. Rugged 23 times. His portfolio looked like a graveyard.
                </p>
                <p>
                  But raccoons don't quit. They dig through trash and find treasure. So he kept going.
                </p>
                <p>
                  Now he's back with $REKT the coin for everyone who's been wrecked and lived to meme about it.
                </p>
                <p>
                  No roadmap. No promises. Just vibes and survival.
                </p>
                <p className="font-bold text-2xl">
                  $REKT: Because we've all been there.
                </p>
              </div>
            </div>
            
       

          </div>
          
        </div>
        
      </div>
      
    </div>
    
    </div >
  );
}