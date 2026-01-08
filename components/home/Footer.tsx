import React from "react"
import Link from "next/link"
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full bg-background border-t border-foreground/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <Image src={"/logo.jpg"} alt={"logo"} width={150} height={120}/>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            Specialists in natural, untreated gemstones and fine jewellery.
                            Trusted expertise, ethical sourcing, and timeless value.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-sm tracking-widest uppercase font-semibold">
                            Contact
                        </h4>
                        <div className="space-y-2 text-sm text-foreground/70">
                            <p>
                                Phone:{" "}
                                <a
                                    href="tel:+94705275557"
                                    className="hover:text-foreground transition-colors"
                                >
                                    +94 70 527 5557
                                </a>
                            </p>
                            <p>
                                Email:{" "}
                                <a
                                    href="mailto:md@mmlgemsandjewellers.com"
                                    className="hover:text-foreground transition-colors"
                                >
                                    md@mmlgemsandjewellers.com
                                </a>
                            </p>
                            <p>Hours: Always Open (24×7)</p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="space-y-4">
                        <h4 className="text-sm tracking-widest uppercase font-semibold">
                            Address
                        </h4>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            No 28/23 Podusewa Road,<br />
                            Keselwaththa,<br />
                            Panadura,<br />
                            Sri Lanka
                        </p>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h4 className="text-sm tracking-widest uppercase font-semibold">
                            Connect
                        </h4>

                        <div className="flex flex-col gap-3 text-sm">
                            <a
                                href="https://wa.me/94705275557"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors"
                            >
                                <span className="text-lg">💬</span>
                                WhatsApp
                            </a>

                            <a
                                href="https://instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors"
                            >
                                <span className="text-lg">📷</span>
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs tracking-widest text-foreground/50">
                        © {new Date().getFullYear()} MML Gems & Jewellers. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-xs tracking-widest text-foreground/50">
                        <Link href="/policies/privacy" className="hover:text-foreground">
                            Privacy Policy
                        </Link>
                        <Link href="/policies/terms" className="hover:text-foreground">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
