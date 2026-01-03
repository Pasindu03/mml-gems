import { createClient } from "@/lib/supabase/server"
import Image from "next/image"
import { notFound } from "next/navigation"
import AddToCartButton from "@/components/add-to-cart-button"
import Navbar from "@/components/navbar";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const supabase = await createClient()
    const { data: product } = await supabase.from("products").select("*").eq("id", id).single()

    if (!product) {
        notFound()
    }

    return (
        <main>
            <Navbar />
            <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="aspect-square relative overflow-hidden bg-muted/20">
                        <Image
                            src={product.image_url}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-4">
                            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">{product.category}</p>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-[0.1em]">{product.name}</h1>
                            <p className="text-xl tracking-widest">${Number(product.price).toLocaleString()}</p>
                        </div>

                        <div className="prose prose-sm prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed tracking-wide">{product.description}</p>
                        </div>

                        <div className="space-y-6 pt-6">
                            <AddToCartButton productId={product.id} />

                            <div className="space-y-4 border-t border-border pt-8">
                                <div className="flex justify-between items-center text-xs tracking-widest">
                                    <span className="font-bold">AUTHENTICITY</span>
                                    <span className="text-muted-foreground">CERTIFIED NATURAL</span>
                                </div>
                                <div className="flex justify-between items-center text-xs tracking-widest">
                                    <span className="font-bold">SHIPPING</span>
                                    <span className="text-muted-foreground">FREE WORLDWIDE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}
