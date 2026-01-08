import { createClient } from "@/lib/supabase/server"
import Link from "next/link"

const CATEGORIES = [
    {
        title: "Precious Gemstones",
        key: "precious",
    },
    {
        title: "Semi-Precious Gemstones",
        key: "semi_precious",
    },
    {
        title: "Jewelry",
        key: "jewelry",
    },
]

export default async function HomeShop() {
    const supabase = await createClient()

    const { data: products } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false })

    return (
        <section className="w-full py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
            {CATEGORIES.map((category) => {
                const items = products?.filter(
                    (p) => p.category === category.key
                )

                if (!items || items.length === 0) return null

                return (
                    <div key={category.key} className="space-y-12">
                        <div className="text-center space-y-3">
                            <h2 className="text-3xl md:text-4xl tracking-[0.25em] font-light uppercase">
                                {category.title}
                            </h2>
                            <div className="w-20 h-px bg-foreground/40 mx-auto" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                            {items.map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/shop/${product.id}`}
                                    className="group space-y-4"
                                >
                                    <div className="aspect-square bg-muted/20 overflow-hidden">
                                        <img
                                            src={product.image_url}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="text-center space-y-1">
                                        <h3 className="text-sm font-bold tracking-widest uppercase">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground tracking-widest">
                                            ${Number(product.price).toLocaleString()}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}
