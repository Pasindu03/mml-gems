'use client'

import { useState } from 'react'
import Navbar from "@/components/navbar";

export default function AccountPage() {
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    return (
        <main className="w-full min-h-screen bg-background text-foreground">
            {/* Navigation */}
            <Navbar />

            {/* Account Section */}
            <section className="w-full pt-32 pb-16 px-8">
                <div className="max-w-md mx-auto">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-extralight tracking-wide mb-8 font-serif">
                            {isLogin ? 'WELCOME BACK' : 'CREATE ACCOUNT'}
                        </h1>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {!isLogin && (
                            <>
                                <div>
                                    <label htmlFor="firstName" className="text-xs font-medium tracking-widest mb-3 block text-foreground/60">
                                        FIRST NAME
                                    </label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-b border-foreground/20 bg-transparent py-3 text-sm font-light focus:outline-none focus:border-foreground/50 transition-colors"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="text-xs font-medium tracking-widest mb-3 block text-foreground/60">
                                        LAST NAME
                                    </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-b border-foreground/20 bg-transparent py-3 text-sm font-light focus:outline-none focus:border-foreground/50 transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>
                            </>
                        )}

                        <div>
                            <label htmlFor="email" className="text-xs font-medium tracking-widest mb-3 block text-foreground/60">
                                EMAIL ADDRESS
                            </label>
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
                            <label htmlFor="password" className="text-xs font-medium tracking-widest mb-3 block text-foreground/60">
                                PASSWORD
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-foreground/20 bg-transparent py-3 text-sm font-light focus:outline-none focus:border-foreground/50 transition-colors"
                                placeholder="••••••••"
                            />
                        </div>

                        {!isLogin && (
                            <div>
                                <label htmlFor="confirmPassword" className="text-xs font-medium tracking-widest mb-3 block text-foreground/60">
                                    CONFIRM PASSWORD
                                </label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    className="w-full border-b border-foreground/20 bg-transparent py-3 text-sm font-light focus:outline-none focus:border-foreground/50 transition-colors"
                                    placeholder="••••••••"
                                />
                            </div>
                        )}

                        {isLogin && (
                            <div className="text-right">
                                <button
                                    type="button"
                                    className="text-xs font-light text-foreground/60 hover:text-foreground/80 transition-colors"
                                >
                                    Forgot password?
                                </button>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-foreground text-background py-3 text-sm font-medium tracking-wide hover:opacity-80 transition-opacity mt-8"
                        >
                            {isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}
                        </button>
                    </form>

                    {/* Toggle */}
                    <div className="mt-8 text-center text-sm font-light">
                        <span className="text-foreground/60">
                          {isLogin ? "Don't have an account? " : 'Already have an account? '}
                        </span>
                        <button
                            onClick={() => {
                                setIsLogin(!isLogin)
                                setFormData({ email: '', password: '', confirmPassword: '', firstName: '', lastName: '' })
                            }}
                            className="font-medium hover:opacity-70 transition-opacity"
                        >
                            {isLogin ? 'Sign up' : 'Sign in'}
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}
