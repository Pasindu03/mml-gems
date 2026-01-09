"use client"

import Navbar from "@/components/navbar"
import { useEffect, useState } from "react"
import Link from "next/link";

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const images = [
        "https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg",
        "https://images.pexels.com/photos/2942855/pexels-photo-2942855.jpeg",
        "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg",
        "https://images.pexels.com/photos/6806419/pexels-photo-6806419.jpeg",
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [images.length])

    return (
        <main className="relative w-full min-h-screen overflow-hidden text-white">
            {/* Background Images */}
            <div className="absolute inset-0">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                ))}

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Hero Content */}
            <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.15em] uppercase mb-6">
                    Natural
                    <br />
                    Rarity
                </h1>

                <p className="max-w-xl text-xs sm:text-sm md:text-base text-white/80 leading-relaxed tracking-wider mb-10">
                    The Natural Gem is your trusted partner for gemstone investments, backed by
                    30 years of expertise in natural, untreated colored stones.
                </p>

                <Link href="/about">
                    <button className="group flex items-center gap-3 text-xs sm:text-sm tracking-widest uppercase hover:opacity-70 transition">
                        About Us
                        <span className="text-lg transition-transform group-hover:translate-x-1">↗</span>
                    </button>
                </Link>


                {/* Pagination Dots */}
                <div className="absolute bottom-10 flex gap-3">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`h-1 rounded-full transition-all duration-500 ${
                                index === currentImageIndex
                                    ? "bg-white w-8"
                                    : "bg-white/40 w-2 hover:bg-white/70"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Hero
