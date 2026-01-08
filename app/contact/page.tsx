'use client'

import { useState } from 'react'
import Navbar from "@/components/navbar";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', message: '' })
            setSubmitted(false)
        }, 3000)
    }

    return (
        <main className="w-full min-h-screen bg-background text-foreground">
            <Navbar />
            {/* Contact Section */}
            <section className="w-full pt-32 pb-16 px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-16 text-center">
                        <h1 className="text-6xl font-extralight tracking-wide mb-6 font-serif">GET IN TOUCH</h1>
                        <p className="text-sm text-foreground/70 font-light max-w-md mx-auto">
                            Have questions about our gemstones? We're here to help and would love to hear from you.
                        </p>
                    </div>

                    {/* Contact Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <p className="text-xs font-medium tracking-widest mb-3 text-foreground/60">PHONE</p>
                                <a href="tel:+94705275557" className="text-sm font-light hover:opacity-70 transition-opacity">
                                    +94705275557
                                </a>
                            </div>
                            <div>
                                <p className="text-xs font-medium tracking-widest mb-3 text-foreground/60">EMAIL</p>
                                <a href="mailto:md@mmlgemsandjewellers.com" className="text-sm font-light hover:opacity-70 transition-opacity">
                                    md@mmlgemsandjewellers.com
                                </a>
                            </div>
                            <div>
                                <p className="text-xs font-medium tracking-widest mb-3 text-foreground/60">ADDRESS</p>
                                <p className="text-sm font-light">
                                    No 28/23 Podusewa Road<br />
                                    Keselwththa, Panadura<br />
                                    Sri Lanka
                                </p>
                            </div>
                            <div>
                                <p className="text-xs font-medium tracking-widest mb-3 text-foreground/60">HOURS</p>
                                <p className="text-sm font-light">
                                    Always open 24x7
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="text-xs font-medium tracking-widest mb-3 block text-foreground/60">NAME</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-b border-foreground/20 bg-transparent py-3 text-sm font-light focus:outline-none focus:border-foreground/50 transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-xs font-medium tracking-widest mb-3 block text-foreground/60">EMAIL</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-b border-foreground/20 bg-transparent py-3 text-sm font-light focus:outline-none focus:border-foreground/50 transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="text-xs font-medium tracking-widest mb-3 block text-foreground/60">PHONE (OPTIONAL)</label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full border-b border-foreground/20 bg-transparent py-3 text-sm font-light focus:outline-none focus:border-foreground/50 transition-colors"
                                        placeholder="+1 (000) 000-0000"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="text-xs font-medium tracking-widest mb-3 block text-foreground/60">MESSAGE</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full border-b border-foreground/20 bg-transparent py-3 text-sm font-light focus:outline-none focus:border-foreground/50 transition-colors resize-none"
                                        placeholder="Tell us more..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-foreground text-background py-3 text-sm font-medium tracking-wide hover:opacity-80 transition-opacity mt-8"
                                >
                                    SEND MESSAGE
                                </button>
                            </form>
                        ) : (
                            <div className="flex items-center justify-center">
                                <div className="text-center">
                                    <p className="text-lg font-light mb-2">Thank you for reaching out!</p>
                                    <p className="text-sm text-foreground/60 font-light">We'll get back to you within 24 hours or less.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}
