"use client"

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContentThree = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const supplyRef = useRef<HTMLParagraphElement>(null);
  const sign1Ref = useRef<HTMLDivElement>(null);
  const sign2Ref = useRef<HTMLDivElement>(null);
  const sign3Ref = useRef<HTMLDivElement>(null);
  const paw1Ref = useRef<HTMLDivElement>(null);
  const paw2Ref = useRef<HTMLDivElement>(null);

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

      // Supply text fades in
      if (supplyRef.current) {
        gsap.from(supplyRef.current, {
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: supplyRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Sign 1 simple fade in
      if (sign1Ref.current) {
        gsap.from(sign1Ref.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sign1Ref.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Sign 2 simple fade in
      if (sign2Ref.current) {
        gsap.from(sign2Ref.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sign2Ref.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Sign 3 simple fade in
      if (sign3Ref.current) {
        gsap.from(sign3Ref.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sign3Ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Paw prints simple fade in
      if (paw1Ref.current) {
        gsap.from(paw1Ref.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paw1Ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }

      if (paw2Ref.current) {
        gsap.from(paw2Ref.current, {
          opacity: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paw2Ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

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
      <div ref={paw1Ref} className="absolute top-32 left-10 md:left-20 hidden md:block opacity-30">
        <Image 
            src="/images/pawpad.png" 
            alt="Paw" 
            width={150} 
            height={150} 
            className="-rotate-12"
        />
      </div>
      <div ref={paw2Ref} className="absolute top-32 right-10 md:right-20 hidden md:block opacity-30">
         <Image 
         src="/images/pawpad.png" 
            alt="Paw" 
            width={150} 
            height={150} 
            className="rotate-12"
        />
      </div>

      {/* Header */}
      <div className="relative z-20 text-center mt-16 md:mt-20 lg:mt-28 mb-8 md:mb-12 px-4">
        
        <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-white text-center mb-3 md:mb-4 tracking-wider uppercase"
                  style={{
                    fontFamily: "'Jumps Winter', sans-serif",
                    textShadow: '4px 4px 0 #6A1B9A, -2px -2px 0 #6A1B9A'
                  }}>
               REKTNOMICS
              </h1>
        <p ref={supplyRef} className="text-white text-sm sm:text-base md:text-lg font-normal tracking-wide uppercase" style={{ fontFamily: "'Free Sans', 'Liberation Sans', Arial, sans-serif" }}>
            TOTAL SUPPLY: 420,690,000,000 $REKT
        </p>
      </div>

      {/* Signs Layout - Staggered */}
      <div className="relative z-20 max-w-6xl w-full px-4 md:px-8">
        {/* Row 1: Sign 1 (left) */}
        <div className="flex justify-center md:justify-start mb-4 lg:mb-0">
          <div className="w-4/5 sm:w-3/4 md:w-3/5 lg:w-1/2">
            <div ref={sign1Ref} className="relative hover:scale-105 transition-transform duration-300">
              <Image 
                src="/images/rekttokenomic1.png" 
                alt="90% Liquidity Pool" 
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Sign 2 (right, offset) */}
        <div className="flex justify-center md:justify-end mb-4 lg:mb-0 lg:-mt-12">
          <div className="w-4/5 sm:w-3/4 md:w-3/5 lg:w-1/2">
            <div ref={sign2Ref} className="relative hover:scale-105 transition-transform duration-300">
              <Image 
                src="/images/rekttokenomics2.svg" 
                alt="7% Marketing" 
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Row 3: Sign 3 (center) */}
        <div className="flex justify-center lg:-mt-10">
          <div className="w-4/5 sm:w-3/4 md:w-3/5 lg:w-1/2">
            <div ref={sign3Ref} className="relative hover:scale-105 transition-transform duration-300">
              <Image 
                src="/images/rektokenomics3.svg" 
                alt="3% Team" 
                width={600}
                height={600}
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
