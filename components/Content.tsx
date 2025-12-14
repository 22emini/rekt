"use client"

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RektMemecoin = () => {
  const raccoonRef = useRef<HTMLDivElement>(null);
  const aboutBoxRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Raccoon simple fade in
      if (raccoonRef.current) {
        gsap.from(raccoonRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: raccoonRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // About box simple fade in
      if (aboutBoxRef.current) {
        gsap.from(aboutBoxRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutBoxRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Title simple fade in
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Text simple fade in
      if (textRef.current) {
        gsap.from(textRef.current, {
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="about" className="min-h-screen bg-[#360C62] relative overflow-visible pb-20 md:pb-32">
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
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-28 sm:pt-32 md:pt-40 lg:pt-48 pb-12 md:pb-16 lg:pb-20 relative z-5">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Raccoon Mascot */}
          <div ref={raccoonRef} className="shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80">
            <Image src="/image/rac2.png" alt="Raccoon Mascot" width={400} height={500} className="w-full h-auto drop-shadow-2xl" />
          </div>

          {/* About Box with Zigzag Background */}
          <div className="flex-1 relative w-full max-w-2xl">
            <div 
              ref={aboutBoxRef}
              className="p-6 sm:p-8 md:p-10 lg:p-12 relative shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden"
              style={{
                backgroundImage: 'url(/images/purplezigzagbg.svg)',
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <h1 ref={titleRef} className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-center mb-4 sm:mb-6 md:mb-8 tracking-wider uppercase"
                  style={{
                    fontFamily: "'Jumps Winter', sans-serif",
                    textShadow: '3px 3px 0 #6A1B9A, -1px -1px 0 #6A1B9A'
                  }}>
                ABOUT
              </h1>

              <p ref={textRef} className="text-white text-xs sm:text-sm md:text-base lg:text-sm leading-relaxed text-center font-normal"
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