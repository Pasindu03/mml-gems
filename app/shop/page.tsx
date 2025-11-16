'use client'

import { useEffect, useState } from 'react'
import Link from "next/link";
import Navbar from "@/components/navbar";

interface Product {
    id: number
    name: string
    category: string
    price: string
    image: string
    description: string
}

export default function ShopPage() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('all')

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    // Product data
    const products: Product[] = [
        {
            id: 1,
            name: 'Alexandrite',
            category: 'gemstones',
            price: '$2,450',
            image: 'https://cxivizteenjzkzrbnydz.supabase.co/storage/v1/object/sign/mml-gems/alexandrite.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83M2FmYTAyNS0xMTg5LTRkYWYtYjI5MS0wNGE0MDc5NTgxNzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtbWwtZ2Vtcy9hbGV4YW5kcml0ZS5qcGVnIiwiaWF0IjoxNzYzMzA3MzQ1LCJleHAiOjE3OTQ4NDMzNDV9.-ZIb94xPZz2Elzx-7wVVkKAECprIgN8stcHS8y53qHs',
            description: 'Premium natural alexandrite gemstone'
        },
        {
            id: 2,
            name: 'Blue Sapphire',
            category: 'gemstones',
            price: '$1,850',
            image: 'https://cxivizteenjzkzrbnydz.supabase.co/storage/v1/object/sign/mml-gems/blue-sapphire.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83M2FmYTAyNS0xMTg5LTRkYWYtYjI5MS0wNGE0MDc5NTgxNzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtbWwtZ2Vtcy9ibHVlLXNhcHBoaXJlLmpwZWciLCJpYXQiOjE3NjMzMDczMjUsImV4cCI6MTc5NDg0MzMyNX0.SCeP87MPujiByg5pF1fNEkHMHkOGGoWGB6SenjVWEDk',
            description: 'Fine quality natural blue sapphire'
        },
        {
            id: 3,
            name: 'Pink Sapphire',
            category: 'gemstones',
            price: '$3,200',
            image: 'https://cxivizteenjzkzrbnydz.supabase.co/storage/v1/object/sign/mml-gems/pink-sapphire.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83M2FmYTAyNS0xMTg5LTRkYWYtYjI5MS0wNGE0MDc5NTgxNzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtbWwtZ2Vtcy9waW5rLXNhcHBoaXJlLmpwZWciLCJpYXQiOjE3NjMzMDczOTgsImV4cCI6MTc5NDg0MzM5OH0.JgR0-jhnDD1deXPqAR5PXFQkM2wmzksJnAnmXwyCDSo',
            description: 'Premium natural pink sapphire'
        },
        {
            id: 4,
            name: 'Pink Spinel',
            category: 'gemstones',
            price: '$1,650',
            image: 'https://cxivizteenjzkzrbnydz.supabase.co/storage/v1/object/sign/mml-gems/pink-spinel.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83M2FmYTAyNS0xMTg5LTRkYWYtYjI5MS0wNGE0MDc5NTgxNzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtbWwtZ2Vtcy9waW5rLXNwaW5lbC5qcGVnIiwiaWF0IjoxNzYzMzA3NDA3LCJleHAiOjE3OTQ4NDM0MDd9.wDiSs3mNgwQ8apYv5skqZ1PGAuE8GdEuB8o0aHXDSnI',
            description: 'High-grade natural pink spinel'
        },
        {
            id: 5,
            name: 'Red Spinel',
            category: 'gemstones',
            price: '$5,800',
            image: 'https://cxivizteenjzkzrbnydz.supabase.co/storage/v1/object/sign/mml-gems/red-spinel.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83M2FmYTAyNS0xMTg5LTRkYWYtYjI5MS0wNGE0MDc5NTgxNzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtbWwtZ2Vtcy9yZWQtc3BpbmVsLmpwZWciLCJpYXQiOjE3NjMzMDc0MTksImV4cCI6MTc5NDg0MzQxOX0.wC9UDaGPdZd60K2-jFneM8gs841WTU3PLLikg9o1Sps',
            description: 'Rare natural red spinel gemstone'
        },
        {
            id: 6,
            name: 'Taaffeite',
            category: 'gemstones',
            price: '$2,100',
            image: 'https://cxivizteenjzkzrbnydz.supabase.co/storage/v1/object/sign/mml-gems/taaffeite.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83M2FmYTAyNS0xMTg5LTRkYWYtYjI5MS0wNGE0MDc5NTgxNzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtbWwtZ2Vtcy90YWFmZmVpdGUuanBlZyIsImlhdCI6MTc2MzMwNzQzNiwiZXhwIjoxNzk0ODQzNDM2fQ.A6NR9UFLesM-g6BU5Cn4Ui7drRrycAcme0abPtEpPbU',
            description: 'Extremely rare natural taaffeite'
        },
        {
            id: 7,
            name: 'Teal Sapphire',
            category: 'gemstones',
            price: '$1,450',
            image: 'https://cxivizteenjzkzrbnydz.supabase.co/storage/v1/object/sign/mml-gems/teal-sapphire.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83M2FmYTAyNS0xMTg5LTRkYWYtYjI5MS0wNGE0MDc5NTgxNzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtbWwtZ2Vtcy90ZWFsLXNhcHBoaXJlLmpwZWciLCJpYXQiOjE3NjMzMDc0NDYsImV4cCI6MTc5NDg0MzQ0Nn0.V2kzWgb5EZZlsuszW9NSizvNIa6COpQmQaJFUJ4v5ro',
            description: 'Natural teal sapphire with unique color'
        },
        {
            id: 8,
            name: 'White Sapphire',
            category: 'gemstones',
            price: '$1,200',
            image: 'https://cxivizteenjzkzrbnydz.supabase.co/storage/v1/object/sign/mml-gems/white-sapphire.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83M2FmYTAyNS0xMTg5LTRkYWYtYjI5MS0wNGE0MDc5NTgxNzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtbWwtZ2Vtcy93aGl0ZS1zYXBwaGlyZS5qcGVnIiwiaWF0IjoxNzYzMzA3NDU0LCJleHAiOjE3OTQ4NDM0NTR9.daukSiwrXui-RBzIdljgO7POw-Dg6BvJ0_xOMW0mngY',
            description: 'Brilliant natural white sapphire'
        },
    ];

    const categories = ['all', 'rings', 'pendants', 'bracelets', 'earrings']
    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(p => p.category === selectedCategory)

    return (
        <main className="w-full min-h-screen bg-background text-foreground">
            {/* Navigation */}
            <Navbar />

            {/* Shop Section */}
            <section className="pt-24 pb-20 px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Page Header */}
                    <div
                        className={`mb-16 transition-all duration-700 ${
                            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    >
                        <h1 className="text-6xl font-extralight tracking-wide mb-4 font-serif">
                            OUR COLLECTION
                        </h1>
                        <p className="text-sm font-light tracking-wide text-foreground/60">
                            Curated selection of certified natural gemstones and fine jewelry
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div
                        className={`mb-12 flex gap-6 transition-all duration-700 delay-100 ${
                            isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`text-xs font-medium tracking-wider uppercase transition-all ${
                                    selectedCategory === category
                                        ? 'text-foreground opacity-100 border-b-2 border-foreground pb-2'
                                        : 'text-foreground/50 hover:text-foreground/70'
                                }`}
                            >
                                {category === 'all' ? 'All Items' : category}
                            </button>
                        ))}
                    </div>

                    {/* Product Grid */}
                    <div
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 delay-200 ${
                            isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {filteredProducts.map((product, index) => (
                            <div
                                key={product.id}
                                className="group flex flex-col cursor-pointer"
                                style={{
                                    animation: isLoaded ? `fadeInUp 0.6s ease-out ${0.3 + index * 0.05}s forwards` : 'none',
                                    opacity: isLoaded ? 1 : 0,
                                }}
                            >
                                {/* Product Image */}
                                <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-muted">
                                    <img
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="flex-1">
                                    <p className="text-xs font-light tracking-widest text-foreground/50 mb-1 uppercase">
                                        {product.category}
                                    </p>
                                    <h3 className="text-sm font-light tracking-wide mb-2">{product.name}</h3>
                                    <p className="text-xs font-light text-foreground/60 mb-4">{product.description}</p>

                                    {/* Price and Action */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-light">{product.price}</span>
                                        <button className="w-8 h-8 rounded-full border border-foreground/30 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-foreground/5">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Animation for staggered product appearance */}
            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </main>
    )
}
