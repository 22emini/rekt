export default function RektMeme() {
  return (
    <div 
      id="story" 
      className="min-h-screen flex items-center justify-center px-4 pt-24 md:pt-32 pb-20 -mt-2"
      style={{
        backgroundImage: 'url(/images/whoisbg.svg)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative max-w-4xl w-full">
        {/* Content box */}
        <div className="relative">
          <div className="text-center space-y-6">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-black text-white mb-12 uppercase" style={{ 
              fontFamily: "'Jumps Winter', sans-serif",
              letterSpacing: '0.05em',
              textShadow: '4px 4px 0 #4A148C, -2px -2px 0 #4A148C'
            }}>
              WHO IS REKT?
            </h1>

            {/* Body text */}
            <div className="text-white text-lg md:text-xl leading-relaxed space-y-5" style={{ fontFamily: "'Free Sans', 'Liberation Sans', Arial, sans-serif" }}>
              <p>
                <span className="font-bold text-xl md:text-2xl mb-2 block">$REKT is you. $REKT is all of us.</span>
                In the wild world of crypto, fortune and failure walk hand in hand. Our story is told by the ultimate survivor—a raccoon who’s seen every pump, every dump, and every rug. From buying Luna at the top, to diamond-handing the worst bags in the market, he’s weathered it all.
              </p>
              <ul className="list-disc list-inside pl-4 text-base md:text-xl space-y-1 text-white/90">
                <li>Bought the hype, held the dip.</li>
                <li>Liquidated, rugged, rekt…but never gave up.</li>
                <li>Found hope at the bottom and started digging for the next win.</li>
              </ul>
              <p>
                Now, $REKT is more than just a token—it’s a badge of honor for every true degen who’s taken losses and come back stronger. There’s no roadmap, no empty promises; just resilience, community, and real vibes.
              </p>
              <div className="mt-4">
                <span className="font-bold text-xl md:text-2xl">$REKT: Because surviving is the ultimate meme.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}