"use client"

import { Copy, Send } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const handleCopyAddress = () => {
    const address = "0XBEK0000000000000GEESUKVIV0RS420690"
    navigator.clipboard.writeText(address)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#360C62] via-purple-800 to-[#360C62] overflow-hidden">
      {/* Paw print background pattern */}
      
      <PawPrintBackground />

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-4xl font-black text-white tracking-wider">$REKT</div>

          <div className="hidden md:flex items-center gap-6 border-2 bg-[#6C2298] border-white rounded-full px-8 py-3">
            <a href="#about" className="text-white font-bold text-sm tracking-wider hover:opacity-80 transition">
              ABOUT
            </a>
            <a href="#story" className="text-white font-bold text-sm tracking-wider hover:opacity-80 transition">
              STORY
            </a>
            <a href="#tokenomics" className="text-white font-bold text-sm tracking-wider hover:opacity-80 transition">
              TOKENOMICS
            </a>
            <a href="#how-to-buy" className="text-white font-bold text-sm tracking-wider hover:opacity-80 transition">
              HOW TO BUY
            </a>

            
          </div>
          <button className="px-6 py-2 border-2 bg-[#6C2298] border-white rounded-full text-white font-bold text-sm tracking-wider hover:bg-white hover:text-purple-900 transition">
              BUY REKT
            </button>

          {/* Mobile menu button */}
          <button className="md:hidden px-6 py-2 border-2 border-white rounded-full text-white font-bold text-sm tracking-wider hover:bg-white hover:text-purple-900 transition">
            BUY $REKT
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 pt-32 pb-20 flex items-center justify-between min-h-screen relative">
        <div className="flex-1 z-10">
          <h1
            className="text-8xl md:text-9xl font-black text-white mb-8 tracking-tighter"
            style={{
              textShadow:
                "0 4px 0 rgba(168, 85, 247, 0.8), 0 8px 0 rgba(139, 0, 139, 0.8), 0 12px 0 rgba(88, 28, 135, 0.8), 0 16px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            $REKT
          </h1>

          {/* Description */}
          <p className="text-base text-white mb-8 max-w-md leading-relaxed font-medium">
            From the ashes of rugs and liquidations rises $REKT the memecoin that turns your losses into memes and your
            memes into gains.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mb-12">
            <button className="px-6 py-3  rotate-12  bg-[#6C2298] border-2 border-white rounded-full text-white font-bold text-sm tracking-wider hover:bg-white hover:text-purple-900 transition">
              BUY $REKT
            </button>
            <button className="px-6 py-3 -rotate-12 bg-lime-400 text-black font-bold text-sm tracking-wider rounded-full hover:bg-lime-300 transition">
              WHITEPAPER
            </button>
          </div>

          {/* Contact Address Section */}
          <div className="flex flex-col gap-2">
            <p className="text-white text-sm font-semibold">Contact Address</p>
            <div className="flex items-center gap-2">
              <div className="bg-lime-400 rounded-full px-6 py-3 font-mono text-black font-bold text-sm tracking-wider">
                0XBEK0000000000000GEESUKVIV0RS420690
              </div>
              <button
                onClick={handleCopyAddress}
                className="p-2 bg-white rotate-12 rounded-lg hover:bg-gray-200 transition"
                title="Copy address"
              >
                <Copy className="w-5 h-5  text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Right-side Image Placeholder (visible on md+ screens) */}
        <div className="hidden md:flex flex-1 justify-end items-center z-10">
 
           <Image  src="/image/rac1.png" alt="Dog" width={400} height={600} className="rounded-3xl"/>
        
        </div>

        <div className=" right-6 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-4">
          {/* Telegram */}
          <a
            href="#"
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition shadow-lg"
          >
            <Send className="w-6 h-6 text-purple-900" />
          </a>
          {/* X / Twitter */}
          <a
            href="#"
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition shadow-lg"
          >
            <svg className="w-6 h-6 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
            </svg>
          </a>
          {/* TikTok */}
          <a
            href="#"
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition shadow-lg"
          >
            <svg className="w-6 h-6 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.194-1.888.324.037.636.037.973.037 1.891 0 3.623-.645 5.03-1.738-1.768-.033-3.255-1.201-3.769-2.802.249.037.499.074.761.074.361 0 .724-.05 1.061-.137-1.847-.375-3.23-2.066-3.23-4.099v-.051c.537.299 1.159.486 1.82.511-.1-.066-.2-.133-.295-.201-1.15-.838-1.495-2.368-.79-3.641.824 1.022 2.078 1.684 3.422 1.779-.057-.303-.088-.617-.088-.922 0-2.23 1.804-4.034 4.027-4.034 1.159 0 2.207.473 2.942 1.236.917-.181 1.77-.526 2.537-1.007-.301.942-.94 1.734-1.772 2.233.812-.099 1.588-.314 2.31-.637-.537.812-1.22 1.529-2.006 2.101z" />
            </svg>
          </a>
          {/* Discord */}
         
        </div>

        <div
          className=" transform -rotate-90 z-10 whitespace-nowrap"
          style={{ right: "10px", top: "35%" }}
        >
          <p className="text-white font-black text-lg tracking-widest" style={{ letterSpacing: "0.15em" }}>
             ONLY ON BASE
          </p>
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
