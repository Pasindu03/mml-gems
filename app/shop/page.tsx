'use client'

import { useEffect, useState } from 'react'

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
            name: 'Ruby Ring',
            category: 'rings',
            price: '$2,450',
            image: '/elegant-ruby-ring-jewelry.jpg',
            description: 'Premium natural ruby in 18k white gold'
        },
        {
            id: 2,
            name: 'Sapphire Pendant',
            category: 'pendants',
            price: '$1,850',
            image: '/sapphire-pendant-necklace.png',
            description: 'Deep blue sapphire with diamond accents'
        },
        {
            id: 3,
            name: 'Diamond Bracelet',
            category: 'bracelets',
            price: '$3,200',
            image: '/diamond-tennis-bracelet.jpg',
            description: 'Fine diamond bracelet with platinum setting'
        },
        {
            id: 4,
            name: 'Emerald Earrings',
            category: 'earrings',
            price: '$1,650',
            image: '/emerald-drop-earrings-gold.jpg',
            description: 'Natural emerald drop earrings in 14k gold'
        },
        {
            id: 5,
            name: 'Pink Diamond Ring',
            category: 'rings',
            price: '$5,800',
            image: '/pink-diamond-engagement-ring.jpg',
            description: 'Rare pink diamond in platinum'
        },
        {
            id: 6,
            name: 'Tanzanite Necklace',
            category: 'pendants',
            price: '$2,100',
            image: '/tanzanite-gemstone-necklace.jpg',
            description: 'Stunning tanzanite with white gold chain'
        },
        {
            id: 7,
            name: 'Opal Bracelet',
            category: 'bracelets',
            price: '$1,450',
            image: '/opal-gemstone-bracelet-silver.jpg',
            description: 'Rainbow opal bracelet in sterling silver'
        },
        {
            id: 8,
            name: 'Aquamarine Studs',
            category: 'earrings',
            price: '$1,200',
            image: '/aquamarine-stud-earrings.jpg',
            description: 'Classic aquamarine studs in white gold'
        },
    ]

    const categories = ['all', 'rings', 'pendants', 'bracelets', 'earrings']
    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(p => p.category === selectedCategory)

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
