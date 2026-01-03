"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Landmark, Wallet } from "lucide-react"

export function CheckoutForm({ cartItems, total }: { cartItems: any[]; total: number }) {
  const [isLoading, setIsLoading] = useState(false)
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const router = useRouter()
  const supabase = createClient()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const address = `${formData.get("address")}, ${formData.get("city")}, ${formData.get("country")}`
    const billingAddress = billingSameAsShipping
        ? address
        : `${formData.get("billingAddress")}, ${formData.get("billingCity")}, ${formData.get("billingCountry")}`

    try {
      const { data: user } = await supabase.auth.getUser()
      if (!user.user) throw new Error("User not found")

      const { data: order, error: orderError } = await supabase
          .from("orders")
          .insert({
            user_id: user.user.id,
            total_amount: total,
            shipping_address: address,
            billing_address: billingAddress,
            payment_method: paymentMethod,
            status: "completed",
          })
          .select()
          .single()

      if (orderError) throw orderError

      toast({
        title: "Order placed successfully",
        description: "Thank you for your purchase!",
      })

      router.push("/success")
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
      <form onSubmit={handleSubmit} className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-12">
          {/* Shipping Address */}
          <div className="space-y-6">
            <h3 className="text-sm tracking-[0.2em] font-bold uppercase border-b pb-2">Shipping Information</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address" className="text-[10px] tracking-widest font-bold uppercase">
                  ADDRESS
                </Label>
                <Input
                    id="address"
                    name="address"
                    required
                    className="rounded-none border-t-0 border-x-0 border-b border-border focus-visible:ring-0 px-0 bg-transparent"
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
                      className="rounded-none border-t-0 border-x-0 border-b border-border focus-visible:ring-0 px-0 bg-transparent"
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
                      className="rounded-none border-t-0 border-x-0 border-b border-border focus-visible:ring-0 px-0 bg-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-6">
            <h3 className="text-sm tracking-[0.2em] font-bold uppercase border-b pb-2">Payment Method</h3>
            <RadioGroup
                defaultValue="card"
                onValueChange={setPaymentMethod}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div>
                <RadioGroupItem value="card" id="card" className="peer sr-only" />
                <Label
                    htmlFor="card"
                    className="flex flex-col items-center justify-between rounded-none border border-border bg-transparent p-4 hover:bg-muted/10 cursor-pointer peer-data-[state=checked]:border-primary transition-all"
                >
                  <CreditCard className="mb-2 h-5 w-5" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Credit Card</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
                <Label
                    htmlFor="paypal"
                    className="flex flex-col items-center justify-between rounded-none border border-border bg-transparent p-4 hover:bg-muted/10 cursor-pointer peer-data-[state=checked]:border-primary transition-all"
                >
                  <Wallet className="mb-2 h-5 w-5" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">PayPal</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
                <Label
                    htmlFor="apple"
                    className="flex flex-col items-center justify-between rounded-none border border-border bg-transparent p-4 hover:bg-muted/10 cursor-pointer peer-data-[state=checked]:border-primary transition-all"
                >
                  <Landmark className="mb-2 h-5 w-5" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Apple Pay</span>
                </Label>
              </div>
            </RadioGroup>

            {paymentMethod === "card" && (
                <div className="grid gap-6 pt-4 animate-in fade-in slide-in-from-top-2">
                  <div className="space-y-2">
                    <Label htmlFor="card-number" className="text-[10px] tracking-widest font-bold uppercase">
                      CARD NUMBER
                    </Label>
                    <Input
                        id="card-number"
                        placeholder="0000 0000 0000 0000"
                        className="rounded-none border-t-0 border-x-0 border-b border-border focus-visible:ring-0 px-0 bg-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="expiry" className="text-[10px] tracking-widest font-bold uppercase">
                        EXPIRY
                      </Label>
                      <Input
                          id="expiry"
                          placeholder="MM / YY"
                          className="rounded-none border-t-0 border-x-0 border-b border-border focus-visible:ring-0 px-0 bg-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv" className="text-[10px] tracking-widest font-bold uppercase">
                        CVV
                      </Label>
                      <Input
                          id="cvv"
                          placeholder="123"
                          className="rounded-none border-t-0 border-x-0 border-b border-border focus-visible:ring-0 px-0 bg-transparent"
                      />
                    </div>
                  </div>
                </div>
            )}
          </div>

          {/* Billing Address */}
          <div className="space-y-6">
            <h3 className="text-sm tracking-[0.2em] font-bold uppercase border-b pb-2">Billing Address</h3>
            <div className="flex items-center space-x-3">
              <Checkbox
                  id="billing-same"
                  checked={billingSameAsShipping}
                  onCheckedChange={(checked) => setBillingSameAsShipping(checked as boolean)}
                  className="rounded-none border-primary data-[state=checked]:bg-primary"
              />
              <Label htmlFor="billing-same" className="text-[10px] tracking-widest font-bold uppercase cursor-pointer">
                Same as shipping information
              </Label>
            </div>

            {!billingSameAsShipping && (
                <div className="space-y-4 pt-4 animate-in fade-in slide-in-from-top-2">
                  <div className="space-y-2">
                    <Label htmlFor="billingAddress" className="text-[10px] tracking-widest font-bold uppercase">
                      ADDRESS
                    </Label>
                    <Input
                        id="billingAddress"
                        name="billingAddress"
                        required={!billingSameAsShipping}
                        className="rounded-none border-t-0 border-x-0 border-b border-border focus-visible:ring-0 px-0 bg-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="billingCity" className="text-[10px] tracking-widest font-bold uppercase">
                        CITY
                      </Label>
                      <Input
                          id="billingCity"
                          name="billingCity"
                          required={!billingSameAsShipping}
                          className="rounded-none border-t-0 border-x-0 border-b border-border focus-visible:ring-0 px-0 bg-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billingCountry" className="text-[10px] tracking-widest font-bold uppercase">
                        COUNTRY
                      </Label>
                      <Input
                          id="billingCountry"
                          name="billingCountry"
                          required={!billingSameAsShipping}
                          className="rounded-none border-t-0 border-x-0 border-b border-border focus-visible:ring-0 px-0 bg-transparent"
                      />
                    </div>
                  </div>
                </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <div className="sticky top-8">
            <div className="border-b pb-4">
              <span className="font-serif italic text-2xl text-muted-foreground/50">Order summary</span>
              <h2 className="font-serif text-2xl tracking-tight">Review your ticket selection.</h2>
            </div>
            <div className="space-y-4 pt-6">
              <div className="flex items-center justify-between">
                <div className="grid gap-0.5">
                  <span className="font-medium">Early bird in-person ticket</span>
                  <span className="text-sm text-muted-foreground">Vercel Ship 2025</span>
                </div>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Taxes</span>
                  <span>$0.00</span>
                </div>
                <div className="flex items-center justify-between font-bold text-lg pt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-8 tracking-[0.2em] font-bold uppercase rounded-none"
              >
                {isLoading ? "PROCESSING..." : "PLACE ORDER"}
              </Button>
            </div>
          </div>
        </div>
      </form>
  )
}
