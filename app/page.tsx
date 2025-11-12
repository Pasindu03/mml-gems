"use client"

import { useEffect, useState } from "react"
import Link from "next/link";

const Page = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const diamondImages = ["/alexandrite.jpeg", "/blue-sapphire.jpeg", "/pink-sapphire.jpeg", "/pink-spinel.jpeg"
      , "/red-spinel.jpeg", "/taaffeite.jpeg", "/teal-sapphire.jpeg", "/white-sapphire.jpeg", "yellow-sapphire.jpeg"
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % diamondImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
      <main className="w-full min-h-screen bg-background text-foreground">
        {/* Navigation */}
        <nav className="fixed top-0 z-50 w-full px-8 py-6 flex items-center justify-between bg-background border-b border-border">
          <div className="flex gap-8 text-sm font-medium tracking-wider">
            <Link href="/shop">
              <button className="hover:opacity-70 transition-opacity">SHOP</button>
            </Link>
            <Link href="/about">
              <button className="hover:opacity-70 transition-opacity">ABOUT</button>
            </Link>
            <Link href="/contact">
              <button className="hover:opacity-70 transition-opacity">CONTACT</button>
            </Link>
          </div>


          <div className="text-sm font-bold tracking-widest">NATURAL GEMS</div>
          <div className="flex gap-6 text-sm font-medium tracking-wider">
            <button className="hover:opacity-70 transition-opacity">ACCOUNT</button>
            <button className="hover:opacity-70 transition-opacity">CART (0)</button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative w-full pt-24 pb-12 px-8 min-h-screen flex items-center justify-center">
          <div className="w-full max-w-7xl grid grid-cols-3 gap-12 items-center">
            <div
                className={`transition-all duration-700 ${
                    isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
            >
              <p className="text-sm leading-relaxed text-foreground/80 mb-8 font-light">
                The Natural Gem is your partner for gemstone investments, with 30 years of experience and leadership in
                natural, untreated colored stones.
              </p>
              <button className="flex items-center gap-3 text-sm font-medium tracking-wide hover:opacity-70 transition-opacity group">
                ABOUT US
                <span className="text-lg group-hover:translate-x-1 transition-transform">↗</span>
              </button>
            </div>

            <div
                className={`flex flex-col items-center transition-all duration-700 ${
                    isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
              <h1 className="text-5xl lg:text-6xl font-extralight tracking-wide text-center mb-12 leading-tight font-serif">
                NATURAL
                <br />
                RARITY
              </h1>

              <div className="relative w-64 h-80 flex items-center justify-center mb-8">
                <div className="absolute inset-0 bg-gradient-to-b from-foreground/5 via-transparent to-transparent rounded-full blur-3xl" />

                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  {diamondImages.map((image, index) => (
                      <img
                          key={index}
                          src={image || "/placeholder.svg"}
                          alt={`Diamond ${index + 1}`}
                          className={`absolute w-full h-full object-cover rounded-lg transition-all duration-1000 ${
                              index === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                          }`}
                      />
                  ))}
                </div>

                <div className="absolute bottom-4 flex gap-2">
                  {diamondImages.map((_, index) => (
                      <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                              index === currentImageIndex ? "bg-foreground/60 w-6" : "bg-foreground/20 hover:bg-foreground/40"
                          }`}
                      />
                  ))}
                </div>
              </div>
            </div>

            <div
                className={`flex flex-col items-end transition-all duration-700 delay-200 ${
                    isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
            >
              <div className="mb-8 text-center">
                <div className="bg-muted aspect-square rounded-lg mb-4 w-32 flex items-center justify-center">
                  <div className="text-4xl">💍</div>
                </div>
                <p className="text-xs font-light tracking-widest">RUBY RING</p>
              </div>
              <button className="w-12 h-12 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-foreground/5 transition-colors text-lg">
                +
              </button>
            </div>
          </div>
        </section>
      </main>
  );
};

export default Page;