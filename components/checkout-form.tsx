"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function CheckoutForm({ cartItems, total }: { cartItems: any[]; total: number }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const address = `${formData.get("address")}, ${formData.get("city")}, ${formData.get("country")}`

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) throw new Error("Unauthorized")

      // Create order
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
          user_id: user.id,
          total_amount: total,
          shipping_address: address,
          status: "completed",
        })
        .select()
        .single()

      if (orderError) throw orderError

      // Create order items
      const orderItems = cartItems.map((item) => ({
        order_id: order.id,
        product_id: item.products.id,
        quantity: item.quantity,
        price_at_time: item.products.price,
      }))

      const { error: itemsError } = await supabase.from("order_items").insert(orderItems)

      if (itemsError) throw itemsError

      // Clear cart
      await supabase.from("cart_items").delete().eq("user_id", user.id)

      toast({
        title: "Order placed successfully",
        description: "Thank you for your purchase!",
      })

      router.push("/account")
      router.refresh()
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Order failed",
        description: error.message,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="address" className="text-[10px] tracking-widest font-bold uppercase">
            ADDRESS
          </Label>
          <Input
            id="address"
            name="address"
            required
            className="rounded-none border-t-0 border-x-0 border-b border-border focus-visible:ring-0 px-0"
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="city" className="text-[10px] tracking-widest font-bold uppercase">
              CITY
            </Label>
            <Input
              id="city"
              name="city"
              required
              className="rounded-none border-t-0 border-x-0 border-b border-border focus-visible:ring-0 px-0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country" className="text-[10px] tracking-widest font-bold uppercase">
              COUNTRY
            </Label>
            <Input
              id="country"
              name="country"
              required
              className="rounded-none border-t-0 border-x-0 border-b border-border focus-visible:ring-0 px-0"
            />
          </div>
        </div>
      </div>

      <div className="pt-8">
        <Button type="submit" disabled={isLoading} className="w-full py-8 tracking-[0.2em] font-bold uppercase">
          {isLoading ? "PROCESSING..." : "PLACE ORDER"}
        </Button>
      </div>
    </form>
  )
}
