import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import Navbar from "@/components/navbar";
import {CheckoutForm} from "@/components/checkout-form";

export default async function CheckoutPage() {
    const supabase = await createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        redirect("/auth/login")
    }

    const { data: cartItems } = await supabase
        .from("cart_items")
        .select(`
      id,
      quantity,
      products (
        id,
        name,
        price
      )
    `)
        .eq("user_id", user.id)

    if (!cartItems || cartItems.length === 0) {
        redirect("/")
    }

    const total = cartItems.reduce((acc, item: any) => acc + item.products.price * item.quantity, 0)

    return (
        <main>
            <Navbar />
            <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="space-y-8 order-2 lg:order-1">
                        <h1 className="text-2xl font-bold tracking-widest uppercase">SHIPPING INFORMATION</h1>
                        <CheckoutForm cartItems={cartItems} total={total} />
                    </div>

                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="bg-muted/5 p-8 border border-border space-y-6">
                            <h2 className="text-sm font-bold tracking-widest uppercase">YOUR ORDER</h2>
                            <div className="space-y-4 border-b border-border pb-6">
                                {cartItems.map((item: any) => (
                                    <div key={item.id} className="flex justify-between text-xs tracking-widest">
                                        <span className="uppercase">
                                            {item.products.name} x {item.quantity}
                                        </span>
                                        <span>${(item.products.price * item.quantity).toLocaleString()}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between font-bold tracking-widest pt-2">
                                <span className="uppercase text-sm">TOTAL</span>
                                <span className="text-sm">${total.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}
