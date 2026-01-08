'use client'

import { useEffect, useState } from 'react'
import Navbar from "@/components/navbar";

export default function AboutPage() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <main className="w-full min-h-screen bg-background text-foreground">
            <Navbar />

            {/* About Section */}
            <section className="pt-24 pb-20 px-8">
                <div className="max-w-4xl mx-auto">

                    {/* Page Header */}
                    <div
                        className={`mb-16 text-center transition-all duration-700 ${
                            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    >
                        <h1 className="text-6xl font-extralight tracking-wide mb-4 font-serif">
                            ABOUT MML GEMS
                        </h1>
                        <p className="text-sm font-light tracking-wide text-foreground/60">
                            Where Every Gemstone Tells a Million-Year Story
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                        {/* Left Column */}
                        <div
                            className={`transition-all duration-700 delay-100 ${
                                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                            }`}
                        >
                            <h2 className="text-2xl font-extralight tracking-wide mb-6 font-serif">
                                Our Story
                            </h2>

                            <p className="text-sm font-light leading-relaxed text-foreground/80 mb-6">
                                At MML Gems Pvt Ltd, we believe that a gemstone is far more than a piece of beauty —
                                it is a story written by the Earth itself. Behind every gem lies a journey of millions
                                of years, shaped by time, pressure, and nature’s deepest mysteries.
                            </p>

                            <p className="text-sm font-light leading-relaxed text-foreground/80 mb-6">
                                Sri Lanka, historically known as Ceylon — the Island of Gems, has gifted the world
                                some of its most magnificent natural treasures. From the vibrant blues of Ceylon
                                sapphires to the fiery glow of rubies and the delicate brilliance of spinels,
                                these stones carry unmatched purity and heritage.
                            </p>

                            <p className="text-sm font-light leading-relaxed text-foreground/80">
                                At MML Gems, we work hand-in-hand with skilled miners and master gem cutters who
                                dedicate their lives to uncovering and refining these natural wonders — a craft
                                born from passion, patience, and deep respect for the land.
                            </p>
                        </div>

                        {/* Right Column */}
                        <div
                            className={`transition-all duration-700 delay-200 ${
                                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                            }`}
                        >
                            <h2 className="text-2xl font-extralight tracking-wide mb-6 font-serif">
                                Our Values
                            </h2>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-sm font-medium tracking-wider mb-2">
                                        100% NATURAL CEYLON ORIGIN
                                    </h3>
                                    <p className="text-sm font-light text-foreground/70 leading-relaxed">
                                        Every gemstone we offer is authentic, natural, and sourced exclusively
                                        from Sri Lanka, preserving its geological and cultural heritage.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-medium tracking-wider mb-2">
                                        ETHICAL & SUSTAINABLE SOURCING
                                    </h3>
                                    <p className="text-sm font-light text-foreground/70 leading-relaxed">
                                        We are committed to responsible mining practices that respect both
                                        communities and the environment.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-medium tracking-wider mb-2">
                                        EXPERT CRAFTSMANSHIP & CERTIFICATION
                                    </h3>
                                    <p className="text-sm font-light text-foreground/70 leading-relaxed">
                                        Each gemstone is carefully cut, evaluated, and certified to meet
                                        international gemological standards.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-medium tracking-wider mb-2">
                                        TRANSPARENCY & GLOBAL TRUST
                                    </h3>
                                    <p className="text-sm font-light text-foreground/70 leading-relaxed">
                                        We believe in complete transparency, long-term relationships, and
                                        delivering trusted service to clients worldwide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div
                        className={`mt-20 grid grid-cols-3 gap-8 pt-16 border-t border-border transition-all duration-700 delay-300 ${
                            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    >
                        <div className="text-center">
                            <div className="text-4xl font-extralight mb-2 font-serif">Millions</div>
                            <p className="text-xs font-light tracking-widest text-foreground/60">
                                YEARS IN THE MAKING
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl font-extralight mb-2 font-serif">Ceylon</div>
                            <p className="text-xs font-light tracking-widest text-foreground/60">
                                ORIGIN GUARANTEED
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl font-extralight mb-2 font-serif">100%</div>
                            <p className="text-xs font-light tracking-widest text-foreground/60">
                                CERTIFIED & AUTHENTIC
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}
