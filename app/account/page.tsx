import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar";

export default async function AccountPage() {
    const supabase = await createClient()
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser()

    if (error || !user) {
        redirect("/auth/login")
    }

    const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

    return (
        <main>
            <Navbar />
            <div className="min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="space-y-8">
                    <div className="border-b border-border pb-6">
                        <h1 className="text-3xl font-bold tracking-widest">YOUR ACCOUNT</h1>
                        <p className="text-muted-foreground mt-2">Welcome back, {profile?.full_name || user.email}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold tracking-widest">ORDER HISTORY</h2>
                            <div className="bg-muted/30 p-8 text-center border border-border">
                                <p className="text-sm text-muted-foreground tracking-wider">YOU HAVEN&apos;T PLACED ANY ORDERS YET.</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-xl font-bold tracking-widest">ACCOUNT DETAILS</h2>
                            <div className="space-y-4 text-sm tracking-wider">
                                <div>
                                    <p className="font-bold">NAME</p>
                                    <p className="text-muted-foreground">{profile?.full_name || "Not provided"}</p>
                                </div>
                                <div>
                                    <p className="font-bold">EMAIL</p>
                                    <p className="text-muted-foreground">{user.email}</p>
                                </div>
                                <form action="/auth/sign-out" method="POST">
                                    <Button variant="outline" className="w-full py-6 tracking-widest mt-4 bg-transparent">
                                        LOG OUT
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}
