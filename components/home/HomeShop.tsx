import { createClient } from "@/lib/supabase/server"
import Link from "next/link"

const CATEGORIES = [
    { title: "Precious Gemstones", key: "precious" },
    { title: "Semi-Precious Gemstones", key: "semi_precious" },
    { title: "Jewelry", key: "jewelry" },
]

export default async function HomeShop() {
    const supabase = await createClient()

    const { data: products } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false })

    return (
        <section className="w-full py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-28">
            {CATEGORIES.map((category) => {
                const items = products?.filter(
                    (p) => p.category === category.key
                )

                if (!items || items.length === 0) return null

                return (
                    <div key={category.key} className="space-y-10">
                        {/* Section Header */}
                        <div className="text-center space-y-3">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-[0.3em] font-light uppercase">
                                {category.title}
                            </h2>
                            <div className="w-16 sm:w-20 h-px bg-foreground/40 mx-auto" />
                        </div>

                        {/* Slider */}
                        <div className="relative">
                            <div
                                className="
                                    flex gap-6 sm:gap-8
                                    overflow-x-auto
                                    snap-x snap-mandatory
                                    scroll-smooth
                                    pb-6
                                    [-ms-overflow-style:none]
                                    [scrollbar-width:none]
                                    [&::-webkit-scrollbar]:hidden
                                "
                            >
                                {items.map((product) => (
                                    <Link
                                        key={product.id}
                                        href={`/shop/${product.id}`}
                                        className="
                                            group
                                            snap-start
                                            shrink-0
                                            w-[88%]
                                            sm:w-[48%]
                                            lg:w-[32%]
                                            space-y-4
                                        "
                                    >
                                        {/* Image */}
                                        <div className="aspect-square bg-muted/20 overflow-hidden">
                                            <img
                                                src={product.image_url}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Text */}
                                        <div className="text-center space-y-1">
                                            <h3 className="text-xs sm:text-sm font-semibold tracking-widest uppercase">
                                                {product.name}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-muted-foreground tracking-widest">
                                                ${Number(product.price).toLocaleString()}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}
