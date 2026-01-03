import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function VerifyPage() {
    return (
        <div className="flex min-h-screen items-center justify-center p-6 bg-background">
            <div className="w-full max-w-md text-center space-y-6">
                <h1 className="text-3xl font-bold tracking-widest">CHECK YOUR EMAIL</h1>
                <p className="text-muted-foreground">
                    We&apos;ve sent a verification link to your email address. Please click the link to confirm your account.
                </p>
                <Link href="/auth/login">
                    <Button variant="outline" className="w-full mt-4 py-6 tracking-widest bg-transparent">
                        BACK TO SIGN IN
                    </Button>
                </Link>
            </div>
        </div>
    )
}
