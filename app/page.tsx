"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Image from "next/image"

const Page = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const diamondImages = [
    "https://uecokubvgdtijwhrhkgo.supabase.co/storage/v1/object/public/Pictures/blue-sapphire.jpeg",
    "https://uecokubvgdtijwhrhkgo.supabase.co/storage/v1/object/public/Pictures/pink-sapphire.jpeg",
    "https://uecokubvgdtijwhrhkgo.supabase.co/storage/v1/object/public/Pictures/pink-spinel.jpeg",
    "https://uecokubvgdtijwhrhkgo.supabase.co/storage/v1/object/public/Pictures/red-spinel.jpeg",
    "https://uecokubvgdtijwhrhkgo.supabase.co/storage/v1/object/public/Pictures/taaffeite.jpeg",
    "https://uecokubvgdtijwhrhkgo.supabase.co/storage/v1/object/public/Pictures/teal-sapphire.jpeg",
    "https://uecokubvgdtijwhrhkgo.supabase.co/storage/v1/object/public/Pictures/white-sapphire.jpeg",
    "https://uecokubvgdtijwhrhkgo.supabase.co/storage/v1/object/public/Pictures/yellow-sapphire.jpeg",
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % diamondImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [diamondImages.length])

  return (
      <main className="w-full min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full pt-24 md:pt-32 pb-12 px-6 md:px-12 min-h-screen flex items-center justify-center overflow-hidden">
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center">
            {/* Left Column: Info - Reordered for Mobile Flow */}
            <div
                className={`order-2 md:order-1 transition-all duration-1000 delay-300 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <p className="text-xs md:text-base leading-relaxed text-foreground/80 mb-8 font-light max-w-sm mx-auto md:mx-0 text-center md:text-left tracking-wider">
                The Natural Gem is your partner for gemstone investments, with 30 years of experience and leadership in
                natural, untreated colored stones.
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="flex items-center gap-3 text-xs md:text-sm font-medium tracking-widest hover:opacity-70 transition-opacity group">
                  ABOUT US
                  <span className="text-lg group-hover:translate-x-1 transition-transform">↗</span>
                </button>
              </div>
            </div>

            {/* Center Column: Visuals - Primary Focus on Mobile */}
            <div
                className={`order-1 md:order-2 flex flex-col items-center transition-all duration-1000 ${
                    isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extralight tracking-[0.1em] text-center mb-10 md:mb-16 leading-[1.1] font-serif uppercase">
                Natural
                <br />
                Rarity
              </h1>

              {/* Gemstone Display */}
              <div className="relative w-48 h-64 sm:w-64 sm:h-80 flex items-center justify-center mb-12">
                <div className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-transparent to-transparent rounded-full blur-3xl opacity-50" />

                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  {diamondImages.map((image, index) => (
                      <Image
                          key={index}
                          src={image || "/placeholder.svg"}
                          alt={`Gemstone ${index + 1}`}
                          className={`absolute w-full h-full object-contain drop-shadow-2xl transition-all duration-1000 ease-in-out ${
                              index === currentImageIndex ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-12"
                          }`}
                      />
                  ))}
                </div>

                {/* Pagination Dots */}
                <div className="absolute -bottom-8 flex gap-3">
                  {diamondImages.map((_, index) => (
                      <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-1 rounded-full transition-all duration-500 ${
                              index === currentImageIndex ? "bg-foreground w-8" : "bg-foreground/20 hover:bg-foreground/40 w-2"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                      />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Balancing Element or Empty for Layout */}
            <div className="order-3 md:order-3 hidden md:block" />
          </div>
        </section>
      </main>
  )
}

export default Page
