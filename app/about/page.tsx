'use client'

import { useEffect, useState } from 'react'

export default function AboutPage() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <main className="w-full min-h-screen bg-background text-foreground">
            {/* Navigation */}
            <nav className="fixed top-0 z-50 w-full px-8 py-6 flex items-center justify-between bg-background border-b border-border">
                <div className="flex gap-8 text-sm font-medium tracking-wider">
                    <a href="/shop" className="hover:opacity-70 transition-opacity">SHOP</a>
                    <a href="/about" className="hover:opacity-70 transition-opacity">ABOUT</a>
                    <a href="/contact" className="hover:opacity-70 transition-opacity">CONTACT</a>
                </div>
                <div className="text-sm font-bold tracking-widest">NATURAL GEMS</div>
                <div className="flex gap-6 text-sm font-medium tracking-wider">
                    <button className="hover:opacity-70 transition-opacity">ACCOUNT</button>
                    <button className="hover:opacity-70 transition-opacity">CART (0)</button>
                </div>
            </nav>

            {/* About Section */}
            <section className="pt-24 pb-20 px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Page Header */}
                    <div
                        className={`mb-16 transition-all duration-700 ${
                            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    >
                        <h1 className="text-6xl font-extralight tracking-wide mb-4 font-serif">
                            ABOUT NATURAL GEMS
                        </h1>
                        <p className="text-sm font-light tracking-wide text-foreground/60">
                            Est. 1995 | Leading Provider of Certified Natural Gemstones
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
                                Founded in 1995, Natural Gems has been a beacon of excellence in the gemstone industry for nearly three decades. What began as a small family operation has grown into one of the most trusted names in certified natural gemstones.
                            </p>
                            <p className="text-sm font-light leading-relaxed text-foreground/80 mb-6">
                                Our commitment to authenticity, quality, and customer satisfaction has made us the preferred choice for collectors, investors, and jewelry enthusiasts worldwide. Every stone in our collection is hand-selected and certified by independent gemological institutes.
                            </p>
                            <p className="text-sm font-light leading-relaxed text-foreground/80">
                                We believe in transparency and education, helping our clients make informed decisions about their gemstone investments with knowledge and confidence.
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
                                    <h3 className="text-sm font-medium tracking-wider mb-2">AUTHENTICITY</h3>
                                    <p className="text-sm font-light text-foreground/70 leading-relaxed">
                                        Every gemstone is genuine, untreated, and certified by independent geological experts.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-medium tracking-wider mb-2">QUALITY</h3>
                                    <p className="text-sm font-light text-foreground/70 leading-relaxed">
                                        We source only the finest specimens, representing the best of nature's brilliance.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-medium tracking-wider mb-2">EXPERTISE</h3>
                                    <p className="text-sm font-light text-foreground/70 leading-relaxed">
                                        30+ years of gemological knowledge guides every selection and appraisal.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-medium tracking-wider mb-2">SUSTAINABILITY</h3>
                                    <p className="text-sm font-light text-foreground/70 leading-relaxed">
                                        Ethical sourcing and responsible practices ensure positive impact.
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
                            <div className="text-4xl font-extralight mb-2 font-serif">30+</div>
                            <p className="text-xs font-light tracking-widest text-foreground/60">YEARS IN BUSINESS</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-extralight mb-2 font-serif">5K+</div>
                            <p className="text-xs font-light tracking-widest text-foreground/60">SATISFIED CLIENTS</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-extralight mb-2 font-serif">100%</div>
                            <p className="text-xs font-light tracking-widest text-foreground/60">CERTIFIED STONES</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
