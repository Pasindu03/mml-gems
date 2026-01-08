import Navbar from "@/components/navbar"
import Hero from "@/components/home/Hero";
import HomeShop from "@/components/home/HomeShop";

export default function Page() {
  return (
      <main className="bg-background text-foreground">
        <Navbar />
        <Hero />
        <HomeShop />
      </main>
  )
}
