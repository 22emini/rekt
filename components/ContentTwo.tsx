"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RektMeme() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title simple fade in
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Paragraphs simple fade in
      if (paragraphsRef.current) {
        gsap.from(paragraphsRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraphsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Tagline simple fade in
      if (taglineRef.current) {
        gsap.from(taglineRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: taglineRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="story"
      className="min-h-screen flex items-center justify-center px-4 pt-32 pb-32 -mt-2 relative z-10"
      style={{
        backgroundColor: '#360C62',
        backgroundImage: 'url(/images/whoisbg.svg)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative max-w-5xl w-full px-4">
        {/* Content box */}
        <div className="relative">
          <div className="text-center space-y-8">
            {/* Title */}
            <h1 ref={titleRef} className="text-5xl md:text-7xl font-black text-white mb-12 uppercase drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)]" style={{
              fontFamily: "'Jumps Winter', sans-serif",
              letterSpacing: '0.05em',
              textShadow: '4px 4px 0 #311B92'
            }}>
              WHO IS REKT?
            </h1>

            {/* Body text */}
            <div ref={paragraphsRef} className="text-white text-xl md:text-2xl leading-relaxed space-y-8 font-medium" style={{ fontFamily: "'Free Sans', 'Liberation Sans', Arial, sans-serif" }}>
              <p>
                Once upon a degen dream, a raccoon aped into every shitcoin imaginable. Luna at $119? Bought it. SafeMoon? Bag holder. FTX tokens? Still has 'em. He got liquidated 47 times. Rugged 23 times. His portfolio looked like a graveyard.
              </p>

              <p>
                But raccoons don't quit. They dig through trash and find treasure. So he kept going.
              </p>

              <p>
                He's back with $REKT the coin for everyone who's been wrecked and lived to meme about it.
              </p>

              <p>
                No roadmap. No promises. Just vibes and survival.
              </p>

              <div className="mt-8">
                <span ref={taglineRef} className="font-bold text-2xl md:text-3xl block">$REKT: Because we've all been there.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}