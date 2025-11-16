"use client"

import { useEffect, useState } from "react"
import Link from "next/link";
import Navbar from "@/components/navbar";

const Page = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const diamondImages = [
    "https://cxivizteenjzkzrbnydz.supabase.co/storage/v1/object/sign/mml-gems/blue-sapphire.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83M2FmYTAyNS0xMTg5LTRkYWYtYjI5MS0wNGE0MDc5NTgxNzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtbWwtZ2Vtcy9ibHVlLXNhcHBoaXJlLmpwZWciLCJpYXQiOjE3NjMzMDczMjUsImV4cCI6MTc5NDg0MzMyNX0.SCeP87MPujiByg5pF1fNEkHMHkOGGoWGB6SenjVWEDk",

    "https://cxivizteenjzkzrbnydz.supabase.co/storage/v1/object/sign/mml-gems/pink-sapphire.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83M2FmYTAyNS0xMTg5LTRkYWYtYjI5MS0wNGE0MDc5NTgxNzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtbWwtZ2Vtcy9waW5rLXNhcHBoaXJlLmpwZWciLCJpYXQiOjE3NjMzMDczOTgsImV4cCI6MTc5NDg0MzM5OH0.JgR0-jhnDD1deXPqAR5PXFQkM2wmzksJnAnmXwyCDSo",

    "https://cxivizteenjzkzrbnydz.supabase.co/storage/v1/object/sign/mml-gems/pink-spinel.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83M2FmYTAyNS0xMTg5LTRkYWYtYjI5MS0wNGE0MDc5NTgxNzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtbWwtZ2Vtcy9waW5rLXNwaW5lbC5qcGVnIiwiaWF0IjoxNzYzMzA3NDA3LCJleHAiOjE3OTQ4NDM0MDd9.wDiSs3mNgwQ8apYv5skqZ1PGAuE8GdEuB8o0aHXDSnI",

    "https://cxivizteenjzkzrbnydz.supabase.co/storage/v1/object/sign/mml-gems/red-spinel.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83M2FmYTAyNS0xMTg5LTRkYWYtYjI5MS0wNGE0MDc5NTgxNzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtbWwtZ2Vtcy9yZWQtc3BpbmVsLmpwZWciLCJpYXQiOjE3NjMzMDc0MTksImV4cCI6MTc5NDg0MzQxOX0.wC9UDaGPdZd60K2-jFneM8gs841WTU3PLLikg9o1Sps",

    "https://cxivizteenjzkzrbnydz.supabase.co/storage/v1/object/sign/mml-gems/taaffeite.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83M2FmYTAyNS0xMTg5LTRkYWYtYjI5MS0wNGE0MDc5NTgxNzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtbWwtZ2Vtcy90YWFmZmVpdGUuanBlZyIsImlhdCI6MTc2MzMwNzQzNiwiZXhwIjoxNzk0ODQzNDM2fQ.A6NR9UFLesM-g6BU5Cn4Ui7drRrycAcme0abPtEpPbU",

    "https://cxivizteenjzkzrbnydz.supabase.co/storage/v1/object/sign/mml-gems/teal-sapphire.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83M2FmYTAyNS0xMTg5LTRkYWYtYjI5MS0wNGE0MDc5NTgxNzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtbWwtZ2Vtcy90ZWFsLXNhcHBoaXJlLmpwZWciLCJpYXQiOjE3NjMzMDc0NDYsImV4cCI6MTc5NDg0MzQ0Nn0.V2kzWgb5EZZlsuszW9NSizvNIa6COpQmQaJFUJ4v5ro",

    "https://cxivizteenjzkzrbnydz.supabase.co/storage/v1/object/sign/mml-gems/white-sapphire.jpeg?token=eyJraWQiOiJzdG9yZWdlLXVybC1zaWduaW5nLWtleV83M2FmYTAyNS0xMTg5LTRkYWYtYjI5MS0wNGE0MDc5NTgxNzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtbWwtZ2Vtcy93aGl0ZS1zYXBwaGlyZS5qcGVnIiwiaWF0IjoxNzYzMzA3NDU0LCJleHAiOjE3OTQ4NDM0NTR9.daukSiwrXui-RBzIdljgO7POw-Dg6BvJ0_xOMW0mngY",

    "https://cxivizteenjzkzrbnydz.supabase.co/storage/v1/object/sign/mml-gems/yellow-sapphire.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83M2FmYTAyNS0xMTg5LTRkYWYtYjI5MS0wNGE0MDc5NTgxNzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtbWwtZ2Vtcy95ZWxsb3ctc2FwcGhpcmUuanBlZyIsImlhdCI6MTc2MzMwNzc3OSwiZXhwIjoxNzk0ODQzNzc5fQ.ncBsH_l8gB_nvvME2NanDck3Jlk3PQLNBOcACiUy5mI"
  ];

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
        <Navbar />

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
          </div>
        </section>
      </main>
  );
};

export default Page;