"use client"

import { Copy, Send, Check } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Home() {
  const [copied, setCopied] = useState(false)

  const handleCopyAddress = async () => {
    const address = "0XREKT00000000000000DEEGENSURVIV0RS420690"
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = address
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Smooth scroll functionality
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.hash) {
        e.preventDefault()
        const targetId = target.hash.slice(1)
        const targetElement = document.getElementById(targetId)
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  return (
    <div id="home" className="min-h-screen bg-gradient-to-b from-[#360C62] via-purple-800 to-[#360C62] overflow-hidden">
      {/* Paw print background pattern */}
      
      <PawPrintBackground />

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-3xl md:text-4xl font-black text-white tracking-wider" style={{ fontFamily: "'Jumps Winter', sans-serif" }}>
              $REKT
            </a>
          </div>

          {/* Navigation Menu - centered */}
          <nav className="hidden md:flex items-center gap-6 border-2 bg-[#6C2298] border-white rounded-full px-8 py-3" style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}>
            <a href="#about" className="text-white font-bold text-sm tracking-wider hover:opacity-80 transition uppercase cursor-pointer smooth-scroll">
              ABOUT
            </a>
            <a href="#story" className="text-white font-bold text-sm tracking-wider hover:opacity-80 transition uppercase cursor-pointer smooth-scroll">
              STORY
            </a>
            <a href="#tokenomics" className="text-white font-bold text-sm tracking-wider hover:opacity-80 transition uppercase cursor-pointer smooth-scroll">
              TOKENOMICS
            </a>
            <a href="#how-to-buy" className="text-white font-bold text-sm tracking-wider hover:opacity-80 transition uppercase cursor-pointer smooth-scroll">
              HOW TO BUY
            </a>
          </nav>

          {/* Buy Button on the right */}
          <button className="px-6 py-2 border-2 bg-[#6C2298] border-white rounded-full text-white font-bold text-xs md:text-sm tracking-wider hover:bg-white hover:text-purple-900 transition uppercase flex-shrink-0" style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}>
            BUY REKT
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 pt-32 pb-20 flex items-center justify-between min-h-screen relative">
        <div className="flex-1 z-10">
          <h1
            className="text-8xl md:text-9xl font-black text-white mb-8 tracking-tighter"
            style={{
              fontFamily: "'Jumps Winter', sans-serif",
              textShadow:
                "0 4px 0 rgba(168, 85, 247, 0.8), 0 8px 0 rgba(139, 0, 139, 0.8), 0 12px 0 rgba(88, 28, 135, 0.8), 0 16px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            $REKT
          </h1>

          {/* Description */}
          <p className="text-base text-white mb-8 max-w-md leading-relaxed font-medium" style={{ fontFamily: "'Free Sans', 'Liberation Sans', Arial, sans-serif" }}>
            From the ashes of rugs and liquidations rises $REKT the memecoin that turns your losses into memes and your
            memes into gains.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mb-12">
            <button className="px-8 py-3 rotate-3 bg-[#8A38F5] border-2 border-white rounded-full text-white font-bold text-sm tracking-wider hover:bg-white hover:text-purple-900 transition uppercase" style={{ fontFamily: "'Free Sans', 'Liberation Sans', Arial, sans-serif" }}>
              BUY REKT
            </button>
            <button className="px-8 py-3 -rotate-3 bg-[#7CB342] text-white font-bold text-sm tracking-wider rounded-full hover:bg-[#689F38] transition uppercase" style={{ fontFamily: "'Free Sans', 'Liberation Sans', Arial, sans-serif" }}>
              WHITEPAPER
            </button>
          </div>

          {/* Contact Address Section */}
          <div className="flex flex-col gap-2">
            <p className="text-white text-sm font-semibold" style={{ fontFamily: "'Free Sans', 'Liberation Sans', Arial, sans-serif" }}>Contact Address:</p>
            <div className="flex items-center gap-3">
              <div className="bg-[#7CB342] rounded-full px-6 py-3 text-white font-bold text-xs tracking-wider uppercase" style={{ fontFamily: "'Free Sans', 'Liberation Sans', Arial, sans-serif" }}>
                0XREKT00000000000000DEEGENSURVIV0RS420690
              </div>
              <button
                onClick={handleCopyAddress}
                className={`p-3 ${copied ? 'bg-green-400' : 'bg-white'} rotate-12 rounded-lg hover:bg-gray-200 transition-all duration-300`}
                title={copied ? "Copied!" : "Copy address"}
              >
                {copied ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <Copy className="w-5 h-5 text-[#8A38F5]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right-side Image Placeholder (visible on md+ screens) */}
        <div className="hidden md:flex flex-1 justify-end items-center z-10 pr-24 lg:pr-32">
 
           <Image  src="/image/rac1.png" alt="Dog" width={400} height={600} className="rounded-3xl"/>
        
        </div>

        {/* Social Icons & "ONLY ON BASE" - Absolute positioned within hero only */}
        <div className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex flex-col gap-5">
            {/* Telegram */}
            <a
              href="#"
              className="w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-[#8A38F5] rounded-full flex items-center justify-center hover:bg-gray-100 transition shadow-lg"
            >
              <Send className="w-5 h-5 md:w-6 md:h-6 text-[#8A38F5]" />
            </a>
            {/* X / Twitter */}
            <a
              href="#"
              className="w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-[#8A38F5] rounded-full flex items-center justify-center hover:bg-gray-100 transition shadow-lg"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#8A38F5]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="#"
              className="w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-[#8A38F5] rounded-full flex items-center justify-center hover:bg-gray-100 transition shadow-lg"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#8A38F5]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>

          {/* "ONLY ON BASE" Text Below Icons */}
          <div className="mt-8 transform -rotate-90 whitespace-nowrap origin-center" style={{ marginTop: '100px' }}>
            <p className="text-white font-black text-sm md:text-base lg:text-lg tracking-widest uppercase" style={{ fontFamily: "'Jumps Winter', sans-serif", letterSpacing: "0.2em" }}>
              ONLY ON BASE
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

// Paw Print Pattern Component
function PawPrintBackground() {
  const paws = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 30 + 20,
    opacity: Math.random() * 0.3 + 0.1,
    rotation: Math.random() * 360,
  }))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {paws.map((paw) => (
        <img
          key={paw.id}
          src="/image/paw.svg"
          alt="paw"
          width={paw.size}
          height={paw.size}
          className="absolute"
          style={{
            left: `${paw.left}%`,
            top: `${paw.top}%`,
            opacity: paw.opacity,
            transform: `translate(-50%, -50%) rotate(${paw.rotation}deg)`,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  )
}
