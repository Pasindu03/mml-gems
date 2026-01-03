import { createClient } from "@/lib/supabase/server"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar";

export default async function ShopPage() {
    const supabase = await createClient()
    const { data: products } = await supabase.from("products").select("*").order("created_at", { ascending: false })

    return (
        <main>
            <Navbar />
            <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold tracking-[0.2em]">COLLECTIONS</h1>
                        <p className="text-muted-foreground tracking-widest text-sm">EXPLORE OUR EXCLUSIVE RANGE OF NATURAL GEMS</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {products?.map((product) => (
                            <Link key={product.id} href={`/shop/${product.id}`} className="group space-y-4">
                                <div className="aspect-square relative overflow-hidden bg-muted/20">
                                    <Image
                                        src={product.image_url}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="space-y-1 text-center">
                                    <h3 className="text-sm font-bold tracking-widest uppercase">{product.name}</h3>
                                    <p className="text-sm text-muted-foreground tracking-widest">
                                        ${Number(product.price).toLocaleString()}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
