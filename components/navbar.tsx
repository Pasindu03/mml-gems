"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, User } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [cartCount, setCartCount] = useState(0)
    const [user, setUser] = useState<any>(null)
    const supabase = createClient()

    useEffect(() => {
        const getData = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser()
            setUser(user)

            if (user) {
                const { data: cartItems } = await supabase.from("cart_items").select("quantity").eq("user_id", user.id)

                const count = cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0
                setCartCount(count)
            }
        }

        getData()

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
        })

        return () => subscription.unsubscribe()
    }, [supabase])

    return (
        <nav className="fixed top-0 z-50 w-full px-6 md:px-8 py-4 md:py-6 flex items-center justify-between bg-white backdrop-blur-md border-b border-border">
            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex-1">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 hover:bg-blue-200 rounded-md transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Logo - Centered */}
            <div className="flex-1 flex justify-left">
                <Link href="/" className="text-sm md:text-base font-bold tracking-[0.3em] whitespace-nowrap">
                    <Image src={"/logo.jpg"} alt={"logo"} width={150} height={120}/>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center flex-1 gap-8 text-[10px] md:text-xs font-medium tracking-[0.2em]">
                <Link href="/" className="hover:opacity-70 transition-opacity uppercase">
                    HOME
                </Link>
                <Link href="/about" className="hover:opacity-70 transition-opacity uppercase">
                    ABOUT
                </Link>
                <Link href="/contact" className="hover:opacity-70 transition-opacity uppercase">
                    CONTACT
                </Link>
                <Link href={`/blogs`} className={"hover:opacity-70 transition-opacity uppercase"}>
                    BLOGS
                </Link>
            </div>

            {/* Account/Cart */}
            <div className="flex-1 flex justify-end gap-4 md:gap-6 text-[10px] md:text-xs font-medium tracking-[0.2em] items-center">
                <Link
                    href="/account"
                    className="hidden sm:flex items-center gap-2 hover:opacity-70 transition-opacity uppercase"
                >
                    {user ? "Account" : "Login"}
                </Link>
                <Link href="/account" className="sm:hidden hover:opacity-70 transition-opacity">
                    <User size={18} />
                </Link>
                <Link href="/cart" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                    <span className="hidden sm:inline uppercase">Cart ({cartCount})</span>
                    <ShoppingCart size={18} className="sm:hidden" />
                    <span className="sm:hidden text-[10px] font-bold">({cartCount})</span>
                </Link>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 top-[65px] md:hidden bg-background z-40 flex flex-col p-8 gap-6 animate-in slide-in-from-top duration-300">
                    <Link
                        href="/about"
                        onClick={() => setIsOpen(false)}
                        className="text-lg bg-orange-100 font-light tracking-[0.2em] border-b border-border pb-4 uppercase"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="text-lg bg-orange-100  font-light tracking-[0.2em] border-b border-border pb-4 uppercase"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/account"
                        onClick={() => setIsOpen(false)}
                        className="text-lg bg-orange-100 font-light tracking-[0.2em] border-b border-border pb-4 uppercase"
                    >
                        {user ? "Account" : "Login"}
                    </Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar
