import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <main>
            <nav className="fixed top-0 z-50 w-full px-8 py-6 flex items-center justify-between bg-background border-b border-border">
                <div className="flex gap-8 text-sm font-medium tracking-wider">
                    <Link href="/shop" className="hover:opacity-70 transition-opacity">SHOP</Link>
                    <Link href="/about" className="hover:opacity-70 transition-opacity">ABOUT</Link>
                    <Link href="/contact" className="hover:opacity-70 transition-opacity">CONTACT</Link>
                </div>
                <Link href="/" className="text-sm font-bold tracking-widest">MML GEMS</Link>
                <div className="flex gap-6 text-sm font-medium tracking-wider">
                    <Link href="/account" className="hover:opacity-70 transition-opacity">ACCOUNT</Link>
                    <button className="hover:opacity-70 transition-opacity">CART (0)</button>
                </div>
            </nav>
        </main>
    );
};

export default Navbar;