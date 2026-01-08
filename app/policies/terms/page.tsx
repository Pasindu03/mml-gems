import Navbar from "@/components/navbar";

export default function TermsAndConditionsPage() {
    return (
        <main className="w-full min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="w-full pt-32 pb-16 px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-16 text-center">
                        <h1 className="text-6xl font-extralight tracking-wide mb-6 font-serif">
                            TERMS & CONDITIONS
                        </h1>
                        <p className="text-sm text-foreground/70 font-light max-w-md mx-auto">
                            Please read these terms carefully before using our website or services.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-12 text-sm font-light leading-relaxed text-foreground/80">
                        <div>
                            <h2 className="text-xs font-medium tracking-widest mb-4 text-foreground/60">
                                ACCEPTANCE OF TERMS
                            </h2>
                            <p>
                                By accessing or using this website, you agree to be bound by these Terms and Conditions.
                                If you do not agree, please refrain from using our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xs font-medium tracking-widest mb-4 text-foreground/60">
                                PRODUCTS & INFORMATION
                            </h2>
                            <p>
                                All gemstone and jewelry descriptions are provided for informational purposes only.
                                While we strive for accuracy, variations may occur due to natural characteristics.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xs font-medium tracking-widest mb-4 text-foreground/60">
                                PRICING & AVAILABILITY
                            </h2>
                            <p>
                                Prices and product availability are subject to change without notice.
                                We reserve the right to modify or discontinue products at any time.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xs font-medium tracking-widest mb-4 text-foreground/60">
                                LIMITATION OF LIABILITY
                            </h2>
                            <p>
                                MML Gems and Jewellers shall not be liable for any direct, indirect, or consequential
                                damages arising from the use or inability to use this website or its content.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xs font-medium tracking-widest mb-4 text-foreground/60">
                                GOVERNING LAW
                            </h2>
                            <p>
                                These Terms and Conditions are governed by and interpreted in accordance with the laws
                                of Sri Lanka.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xs font-medium tracking-widest mb-4 text-foreground/60">
                                CONTACT
                            </h2>
                            <p>
                                For any questions regarding these Terms & Conditions, please contact:
                                <br />
                                <span className="block mt-2">
                                    md@mmlgemsandjewellers.com
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
