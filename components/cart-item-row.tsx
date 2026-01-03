"use client"

import { useState } from "react"
import Image from "next/image"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { Minus, Plus } from "lucide-react"

export default function CartItemRow({ item }: { item: any }) {
  const [isUpdating, setIsUpdating] = useState(false)
  const supabase = createClient()
  const router = useRouter()

  const updateQuantity = async (newQuantity: number) => {
    if (newQuantity < 1) return
    setIsUpdating(true)
    const { error } = await supabase.from("cart_items").update({ quantity: newQuantity }).eq("id", item.id)

    if (!error) router.refresh()
    setIsUpdating(false)
  }

  const removeItem = async () => {
    setIsUpdating(true)
    const { error } = await supabase.from("cart_items").delete().eq("id", item.id)

    if (!error) router.refresh()
    setIsUpdating(false)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center group opacity-100 transition-opacity disabled:opacity-50">
      <div className="md:col-span-2 flex gap-6 items-center">
        <div className="relative h-24 w-24 bg-muted/20 flex-shrink-0">
          <Image
            src={item.products.image_url || "/placeholder.svg?height=200&width=200"}
            alt={item.products.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-xs font-bold tracking-widest uppercase">{item.products.name}</h3>
          <p className="text-xs text-muted-foreground tracking-widest">
            ${Number(item.products.price).toLocaleString()}
          </p>
          <button
            onClick={removeItem}
            disabled={isUpdating}
            className="text-[10px] tracking-widest text-muted-foreground hover:text-foreground underline underline-offset-4 uppercase pt-2 block"
          >
            REMOVE
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex items-center border border-border">
          <button
            onClick={() => updateQuantity(item.quantity - 1)}
            disabled={isUpdating || item.quantity <= 1}
            className="p-2 hover:bg-muted/20 disabled:opacity-30"
          >
            <Minus className="h-3 w-3" />
          </button>
          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.quantity + 1)}
            disabled={isUpdating}
            className="p-2 hover:bg-muted/20"
          >
            <Plus className="h-3 w-3" />
          </button>
        </div>
      </div>

      <div className="text-right text-xs font-bold tracking-widest">
        ${(item.products.price * item.quantity).toLocaleString()}
      </div>
    </div>
  )
}
