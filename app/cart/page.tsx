import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CartItemRow from "@/components/cart-item-row"

export default async function CartPage() {
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
        price,
        image_url
      )
    `)
        .eq("user_id", user.id)

    const subtotal = cartItems?.reduce((acc, item: any) => acc + item.products.price * item.quantity, 0) || 0

    return (
        <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="space-y-12">
                <h1 className="text-3xl font-bold tracking-[0.2em] text-center">SHOPPING CART</h1>

                {!cartItems || cartItems.length === 0 ? (
                    <div className="text-center space-y-6 py-24">
                        <p className="tracking-widest text-muted-foreground uppercase">Your cart is currently empty.</p>
                        <Link href="/shop">
                            <Button variant="outline" className="px-12 py-6 tracking-widest bg-transparent">
                                CONTINUE SHOPPING
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="hidden md:grid grid-cols-4 gap-4 pb-4 border-b border-border text-[10px] tracking-[0.3em] font-bold text-muted-foreground uppercase">
                                <div className="col-span-2">PRODUCT</div>
                                <div className="text-center">QUANTITY</div>
                                <div className="text-right">TOTAL</div>
                            </div>
                            <div className="space-y-8">
                                {cartItems.map((item: any) => (
                                    <CartItemRow key={item.id} item={item} />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-muted/10 p-8 border border-border space-y-6">
                                <h2 className="text-lg font-bold tracking-widest">ORDER SUMMARY</h2>
                                <div className="space-y-4 text-sm tracking-widest border-b border-border pb-6">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground uppercase">SUBTOTAL</span>
                                        <span>${subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground uppercase">SHIPPING</span>
                                        <span>FREE</span>
                                    </div>
                                </div>
                                <div className="flex justify-between font-bold tracking-widest pt-2">
                                    <span className="uppercase">TOTAL</span>
                                    <span>${subtotal.toLocaleString()}</span>
                                </div>
                                <Link href="/checkout" className="block">
                                    <Button className="w-full py-8 tracking-[0.2em] font-bold uppercase">CHECKOUT</Button>
                                </Link>
                                <p className="text-[10px] text-center text-muted-foreground tracking-widest uppercase leading-loose">
                                    TAXES AND SHIPPING CALCULATED AT CHECKOUT
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
