import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
})

export const metadata: Metadata = {
    metadataBase: new URL("https://www.mmlgemsandjewellery.com"),

    title: {
        default: "MML Gems & Jewellery | Sri Lankan Gemstone Exporters",
        template: "%s | MML Gems & Jewellery",
    },

    description:
        "MML Gems & Jewellery is a Sri Lanka–based gemstone and fine jewellery exporter, specializing in sapphires, spinels, and custom-crafted jewellery certified for global markets.",

    keywords: [
        "Sri Lankan Gems",
        "Ceylon Sapphires",
        "Gemstone Exporters Sri Lanka",
        "Fine Jewellery Sri Lanka",
        "MML Gems",
        "Natural Sapphires",
        "Precious Gemstones",
        "Jewellery Manufacturers Sri Lanka",
    ],

    authors: [{ name: "MML Gems & Jewellery" }],
    creator: "MML Gems & Jewellery",
    publisher: "MML Gems & Jewellery",

    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
        other: [
            {
                rel: "manifest",
                url: "/site.webmanifest",
            },
        ],
    },

    openGraph: {
        title: "MML Gems & Jewellery | Certified Sri Lankan Gem Exporters",
        description:
            "Premium Sri Lankan gemstones and fine jewellery crafted for international markets.",
        url: "https://www.mmlgemsandjewellery.com",
        siteName: "MML Gems & Jewellery",
        images: [
            {
                url: "/blue-sapphire.jpeg",
                width: 1200,
                height: 630,
                alt: "Sri Lankan Blue Sapphire",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "MML Gems & Jewellery",
        description:
            "Exporter of certified Sri Lankan gemstones and fine jewellery.",
        images: ["/blue-sapphire.jpeg"],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
        },
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
        <body className="font-sans antialiased bg-white text-neutral-900">
        {children}
        <Analytics />
        </body>
        </html>
    )
}
