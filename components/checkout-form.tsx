"use client"

import * as React from "react"
import { CreditCard, Landmark, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function CheckoutForm() {
  const [billingSameAsShipping, setBillingSameAsShipping] = React.useState(true)

  return (
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          {/* Step 1: Attendee Information (Existing) */}
          <section className="space-y-4">
            <div className="flex items-center gap-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              1
            </span>
              <h2 className="text-xl font-bold tracking-tight">Complete your attendee information</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Jane" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                  <div className="grid gap-2 sm:col-span-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" placeholder="jane.doe@example.com" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Step 2: Payment Method (New) */}
          <section className="space-y-4">
            <div className="flex items-center gap-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              2
            </span>
              <h2 className="text-xl font-bold tracking-tight">Select payment method</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <RadioGroup defaultValue="card" className="grid gap-4">
                  <div>
                    <RadioGroupItem value="card" id="card" className="peer sr-only" />
                    <Label
                        htmlFor="card"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <CreditCard className="mb-3 h-6 w-6" />
                      Card
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
                    <Label
                        htmlFor="paypal"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Wallet className="mb-3 h-6 w-6" />
                      PayPal
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
                    <Label
                        htmlFor="apple"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Landmark className="mb-3 h-6 w-6" />
                      Apple Pay
                    </Label>
                  </div>
                </RadioGroup>

                <div className="mt-6 grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="grid gap-2 col-span-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM / YY" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Step 3: Billing Address (New) */}
          <section className="space-y-4">
            <div className="flex items-center gap-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              3
            </span>
              <h2 className="text-xl font-bold tracking-tight">Billing address</h2>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                      id="billing-same"
                      checked={billingSameAsShipping}
                      onCheckedChange={(checked) => setBillingSameAsShipping(checked as boolean)}
                  />
                  <Label
                      htmlFor="billing-same"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Billing address is the same as my shipping address
                  </Label>
                </div>

                {!billingSameAsShipping && (
                    <div className="grid gap-4 animate-in fade-in slide-in-from-top-2">
                      <div className="grid gap-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" placeholder="123 Main St" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="New York" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="state">State / Province</Label>
                          <Select>
                            <SelectTrigger id="state">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ny">New York</SelectItem>
                              <SelectItem value="ca">California</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="zip">Zip / Postal Code</Label>
                          <Input id="zip" placeholder="10001" />
                        </div>
                      </div>
                    </div>
                )}
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Order Summary (New) */}
        <div className="space-y-6">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Order summary</CardTitle>
              <CardDescription>Review your ticket selection.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="grid gap-0.5">
                  <span className="font-medium">Early bird in-person ticket</span>
                  <span className="text-sm text-muted-foreground">Vercel Ship 2025</span>
                </div>
                <span className="font-medium">$350.00</span>
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>$350.00</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Taxes</span>
                  <span>$0.00</span>
                </div>
                <div className="flex items-center justify-between font-bold text-lg pt-2">
                  <span>Total</span>
                  <span>$350.00</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                Complete purchase
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
  )
}
