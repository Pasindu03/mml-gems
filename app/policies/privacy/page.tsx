import Navbar from "@/components/navbar";

export default function PrivacyPolicyPage() {
    return (
        <main className="w-full min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="w-full pt-32 pb-16 px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-16 text-center">
                        <h1 className="text-6xl font-extralight tracking-wide mb-6 font-serif">
                            PRIVACY POLICY
                        </h1>
                        <p className="text-sm text-foreground/70 font-light max-w-md mx-auto">
                            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-12 text-sm font-light leading-relaxed text-foreground/80">
                        <div>
                            <h2 className="text-xs font-medium tracking-widest mb-4 text-foreground/60">
                                INFORMATION WE COLLECT
                            </h2>
                            <p>
                                We may collect personal information such as your name, email address, phone number,
                                and any details you provide when contacting us through our website.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xs font-medium tracking-widest mb-4 text-foreground/60">
                                HOW WE USE YOUR INFORMATION
                            </h2>
                            <p>
                                Information collected is used solely to respond to inquiries, provide customer support,
                                process orders, and improve our services. We do not sell or share your personal data
                                with third parties for marketing purposes.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xs font-medium tracking-widest mb-4 text-foreground/60">
                                DATA SECURITY
                            </h2>
                            <p>
                                We implement appropriate technical and organizational measures to safeguard your
                                personal information against unauthorized access, disclosure, or misuse.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xs font-medium tracking-widest mb-4 text-foreground/60">
                                COOKIES
                            </h2>
                            <p>
                                Our website may use cookies to enhance user experience and analyze site traffic.
                                You may disable cookies in your browser settings if you prefer.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xs font-medium tracking-widest mb-4 text-foreground/60">
                                POLICY UPDATES
                            </h2>
                            <p>
                                This Privacy Policy may be updated periodically. Any changes will be posted on this page
                                with an updated effective date.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xs font-medium tracking-widest mb-4 text-foreground/60">
                                CONTACT
                            </h2>
                            <p>
                                If you have questions regarding this Privacy Policy, please contact us at
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
