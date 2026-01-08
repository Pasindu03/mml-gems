import React from 'react';
import Navbar from "@/components/navbar";

const Page = () => {
    return (
        <main className="w-full min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="w-full pt-32 pb-16 px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-16 text-center">
                        <h1 className="text-6xl font-extralight tracking-wide mb-6 font-serif">OUR BLOGS</h1>
                        <p className="text-sm text-foreground/70 font-light max-w-md mx-auto">
                            Have questions about our gemstones? We're here to help and would love to hear from you.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;