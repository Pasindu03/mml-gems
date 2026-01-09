"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

export function CheckoutForm({cartItems, total,}: { cartItems: any[], total: number }) {
  const [isLoading, setIsLoading] = useState(false)
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true)

  const router = useRouter()
  const supabase = createClient()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)

    const shippingAddress = `${formData.get("address")}, ${formData.get("city")}, ${formData.get("country")}`
    const billingAddress = billingSameAsShipping
        ? shippingAddress
        : `${formData.get("billingAddress")}, ${formData.get("billingCity")}, ${formData.get("billingCountry")}`

    try {
      const { data: auth } = await supabase.auth.getUser()
      if (!auth.user) throw new Error("User not authenticated")

      // 1. Save order
      const { data: order, error } = await supabase
          .from("orders")
          .insert({
            user_id: auth.user.id,
            total_amount: total,
            shipping_address: shippingAddress,
            billing_address: billingAddress,
            contact_number: formData.get("phone"),
            status: "pending_confirmation",
          })
          .select()
          .single()

      if (error) throw error

      // 2. Send confirmation emails
      await supabase.functions.invoke("send-order-confirmation", {
        body: {
          orderId: order.id,
          customerEmail: auth.user.email,
          adminEmail: "md@mmlgemsandjewellers.com",
          total,
          contactNumber: formData.get("phone"),
          shippingAddress,
        },
      })

      toast({
        title: "Confirmation email sent",
        description: "We’ve emailed you and our team will contact you shortly.",
      })

      router.push("/success")
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
      <form onSubmit={handleSubmit} className="grid gap-12 lg:grid-cols-3">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-12">
          {/* Shipping */}
          <div className="space-y-6">
            <h3 className="text-sm tracking-[0.2em] font-bold uppercase border-b pb-2">
              Shipping Information
            </h3>

            <div className="space-y-4">
              <div>
                <Label className="text-[10px] tracking-widest font-bold uppercase">
                  Contact Number
                </Label>
                <Input
                    name="phone"
                    required
                    className="rounded-none border-b px-0 bg-transparent"
                />
              </div>

              <div>
                <Label className="text-[10px] tracking-widest font-bold uppercase">
                  Address
                </Label>
                <Input
                    name="address"
                    required
                    className="rounded-none border-b px-0 bg-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Input
                    name="city"
                    placeholder="City"
                    required
                    className="rounded-none border-b px-0 bg-transparent"
                />
                <Input
                    name="country"
                    placeholder="Country"
                    required
                    className="rounded-none border-b px-0 bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Billing */}
          <div className="space-y-6">
            <h3 className="text-sm tracking-[0.2em] font-bold uppercase border-b pb-2">
              Billing Address
            </h3>

            <div className="flex items-center space-x-3">
              <Checkbox
                  checked={billingSameAsShipping}
                  onCheckedChange={(v) => setBillingSameAsShipping(v as boolean)}
              />
              <Label className="text-[10px] tracking-widest font-bold uppercase">
                Same as shipping
              </Label>
            </div>

            {!billingSameAsShipping && (
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <Input name="billingAddress" placeholder="Address" />
                  <Input name="billingCity" placeholder="City" />
                  <Input name="billingCountry" placeholder="Country" />
                </div>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="sticky top-8 space-y-6">
          <h2 className="font-serif text-2xl">Order Summary</h2>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-8 tracking-[0.2em] font-bold uppercase rounded-none"
          >
            {isLoading ? "SENDING CONFIRMATION..." : "CONFIRM ORDER"}
          </Button>
        </div>
      </form>
  )
}
