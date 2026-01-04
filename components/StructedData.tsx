export default function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "JewelryStore",
        name: "MML Gems & Jewellery",
        url: "https://www.mmlgemsandjewellery.com",
        logo: "https://www.mmlgemsandjewellery.com/icon.svg",
        image: [
            "https://www.mmlgemsandjewellery.com/blue-sapphire.jpeg",
            "https://www.mmlgemsandjewellery.com/pink-sapphire.jpeg",
        ],
        description:
            "Sri Lanka–based exporter of certified natural gemstones and fine jewellery.",
        address: {
            "@type": "PostalAddress",
            addressCountry: "LK",
        },
        sameAs: [],
        makesOffer: {
            "@type": "Offer",
            itemOffered: {
                "@type": "Product",
                name: "Natural Ceylon Sapphire",
                category: "Precious Gemstone",
            },
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
