"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

export default function AddToCartButton({ productId }: { productId: string }) {
  const [isLoading, setIsLoading] = useState(false)
  const supabase = createClient()
  const router = useRouter()
  const { toast } = useToast()

  const handleAddToCart = async () => {
    setIsLoading(true)

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push("/auth/login")
        return
      }

      const { error } = await supabase.from("cart_items").upsert(
        {
          user_id: user.id,
          product_id: productId,
          quantity: 1,
        },
        { onConflict: "user_id,product_id" },
      )

      if (error) throw error

      toast({
        title: "Added to cart",
        description: "The item has been added to your shopping cart.",
      })

      router.refresh()
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to add item to cart.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button onClick={handleAddToCart} disabled={isLoading} className="w-full py-8 tracking-[0.2em] font-bold">
      {isLoading ? "ADDING..." : "ADD TO CART"}
    </Button>
  )
}
