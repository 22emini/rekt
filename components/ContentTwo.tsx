export default function RektMeme() {
  return (
    < div  className="bg-[#50167B]">
         <div className=" bottom-0  -rotate-180 left-0 w-full h-20 z-1">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1280 80">
          <path d="M0,40 Q80,10 160,40 T320,40 T480,40 T640,40 T800,40 T960,40 T1120,40 T1280,40 L1280,80 L0,80 Z" 
                fill="#e3f2fd" 
                />
     
        </svg>
      </div>
    <div className="min-h-screen bg-[#50167B] flex items-center justify-center p-4">
      

      <div className="relative max-w-4xl w-full">
        
        {/* Main container with jagged border */}
        <div className="relative">

          {/* Content box */}
          <div className="relative">
            <div className="text-center space-y-6">
              {/* Title */}
              <h1 className="text-6xl font-black text-white mb-8" style={{ 
                fontFamily: 'Impact, "Arial Black", sans-serif',
                letterSpacing: '0.05em',
                textShadow: '3px 3px 0px rgba(0,0,0,0.3)'
              }}>
                WHO IS REKT?
              </h1>

              {/* Body text */}
              <div className="text-white text-xl leading-relaxed space-y-1">
                <p className="mb-1">
                  Once upon a degen dream, a raccoon aped into every shitcoin imaginable.
                </p>
                <p className="mb-1">
                  Luna at $119? Bought it. SafeMoon? Bag holder. FTX tokens? Still has 'em.
                </p>
                <p className="mb-1">
                  He got liquidated 47 times. Rugged 23 times. His portfolio looked like a
                </p>
                <p className="mb-4">
                  graveyard.
                </p>
                <p className="mb-4">
                  But raccoons don't quit. They dig through trash and find treasure. So he kept going.
                </p>
                <p className="mb-4">
                  Now he's back with $REKT the coin for everyone who's been wrecked and lived
                </p>
                <p className="mb-4">
                  to meme about it.
                </p>
                <p className="mb-1">
                  No roadmap. No promises. Just vibes and survival.
                </p>
                <p className="font-semibold">
                  $REKT: Because we've all been there.
                </p>
              </div>
            </div>
            
       

          </div>
          
        </div>
        
      </div>
      
    </div>
     <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1280 80">
          
          <path d="M0,50 Q100,20 200,50 T400,50 T600,50 T800,50 T1000,50 T1200,50 T1400,50 L1400,80 L0,80 Z" 
                fill="#fff" 
                />
        </svg>
    </div >
  );
}