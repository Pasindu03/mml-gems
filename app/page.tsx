import Navbar from "@/components/navbar"
import Hero from "@/components/home/Hero";
import HomeShop from "@/components/home/HomeShop";
import Footer from "@/components/home/Footer";

export default function Page() {
  return (
      <main className="bg-background text-foreground">
        <Navbar />
        <Hero />
        <HomeShop />
        <Footer />
      </main>
  )
}
