"use client"

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HowToBuy = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const step4Ref = useRef<HTMLDivElement>(null);

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

      // Step cards simple fade in
      const steps = [step1Ref, step2Ref, step3Ref, step4Ref];
      steps.forEach((stepRef, index) => {
        if (stepRef.current) {
          gsap.from(stepRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stepRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="how-to-buy" className="relative w-full min-h-screen bg-[#360C62] flex flex-col items-center py-24 md:py-32 lg:py-40 overflow-hidden">
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
        <h1 ref={titleRef} className="text-4xl md:text-5xl font-black text-white text-center tracking-wider uppercase"
                  style={{
                    fontFamily: "'Jumps Winter', sans-serif",
                    textShadow: '4px 4px 0 #6A1B9A, -2px -2px 0 #6A1B9A'
                  }}>
               HOW TO BUY
              </h1>
      </div>

      {/* Steps Container */}
      <div className="relative z-20 max-w-6xl w-full px-8">
        
        {/* Top Row - Steps 1, 2, 3 */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          {/* Step 1 */}
          <div ref={step1Ref} className="relative">
            {/* Decorative ovals around card */}
            <Image src="/images/oval.svg" alt="" width={40} height={30} className="absolute -top-6 -left-3 w-10 h-7" />
            <Image src="/images/oval.svg" alt="" width={50} height={37} className="absolute -top-8 left-6 w-12 h-9" />
            
            <StepCard 
                step="1"
                title="GET A WALLET" 
                description="Download MetaMask or Coinbase Wallet. Fund it with ETH." 
            />
          </div>

          {/* Step 2 */}
          <div ref={step2Ref} className="relative">
            {/* Decorative ovals around card */}
            <Image src="/images/oval.svg" alt="" width={40} height={30} className="absolute -top-6 -left-3 w-10 h-7" />
            <Image src="/images/oval.svg" alt="" width={50} height={37} className="absolute -top-8 left-6 w-12 h-9" />
            
            <StepCard 
                step="2"
                title="BRIDGE TO BASE" 
                description="Go to bridge.base.org Bridge your ETH to Base network." 
            />
          </div>

          {/* Step 3 */}
          <div ref={step3Ref} className="relative">
            {/* Decorative ovals around card */}
            <Image src="/images/oval.svg" alt="" width={40} height={30} className="absolute -top-6 -left-3 w-10 h-7" />
            <Image src="/images/oval.svg" alt="" width={50} height={37} className="absolute -top-8 left-6 w-12 h-9" />
            
            <StepCard 
                step="3"
                title="SWAP FOR $REKT" 
                description="Go to Uniswap and switch to Base network. Paste the $REKT contract address. Swap ETH for $REKT." 
            />
          </div>
        </div>

        {/* Bottom Row - Step 4 Centered */}
        <div className="flex justify-center">
          <div ref={step4Ref} className="relative">
            {/* Decorative ovals around card */}
            <Image src="/images/oval.svg" alt="" width={40} height={30} className="absolute -top-6 -left-3 w-10 h-7" />
            <Image src="/images/oval.svg" alt="" width={50} height={37} className="absolute -top-8 left-6 w-12 h-9" />
            
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
        <div className="relative bg-white rounded-2xl p-4 hover:scale-105 transition-transform duration-300 flex flex-col justify-center"
             style={{
               width: '300px',
               minHeight: '160px',
               boxShadow: '8px 8px 0 #8A38F5'
             }}>
             
             {/* Step Header */}
             <div className="text-center mb-3">
                <h3 className="text-base font-black text-[#6C2298] uppercase leading-tight" style={{
                    fontFamily: "'Jumps Winter', sans-serif",
                  }}>
                    STEP {step}: {title}
                 </h3>
             </div>

             {/* Description */}
             <p className="text-[#360C62] text-sm text-center leading-relaxed" style={{ fontFamily: "'Free Sans', 'Liberation Sans', Arial, sans-serif" }}>
                {description}
             </p>
        </div>
    )
}

export default HowToBuy;

