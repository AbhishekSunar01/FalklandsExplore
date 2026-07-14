import type { Metadata, Viewport } from "next"
import { Manrope, Geist_Mono } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { WhatsAppFloatingButton } from "@/components/ui/whatsapp-floating-button"
import { SiteLanguageTranslator } from "@/components/ui/site-language-translator"

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://falklandsexplore.com"),
  title: {
    default: "Falkland Islands Car Hire & Guided Tours | Falklands Explore",
    template: "%s | Falklands Explore",
  },
  description:
    "Book car hire and guided tours in the Falkland Islands. Self-drive 4×4 rental from Stanley, wildlife tours to Volunteer Point, 1982 battlefield visits, and cruise passenger excursions. Call +500 65338.",
  keywords: [
    "Falkland Islands car hire",
    "Falkland Islands 4x4 hire",
    "car rental Stanley Falkland Islands",
    "Falkland Islands guided tours",
    "Falkland Islands wildlife tour",
    "Volunteer Point penguin tour",
    "Falkland Islands cruise excursions",
    "East Falkland day trips",
    "Falkland Islands self drive",
    "Stanley car hire",
    "Falkland Islands travel",
    "Falkland Islands holiday",
    "Gypsy Cove tour",
    "Falklands tour guide",
  ],
  authors: [{ name: "Falklands Explore" }],
  creator: "Falklands Explore",
  publisher: "Falklands Explore",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://falklandsexplore.com",
    siteName: "Falklands Explore",
    title: "Falkland Islands Car Hire & Guided Tours | Falklands Explore",
    description:
      "Self-drive 4×4 hire, wildlife tours, and battlefield excursions in the Falkland Islands. Based in Stanley. Serving holiday visitors, cruise passengers & long-stay workers.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Falkland Islands landscape — Car Hire & Guided Tours from Stanley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Falkland Islands Car Hire & Guided Tours | Falklands Explore",
    description:
      "Self-drive 4×4 hire, wildlife tours, and battlefield excursions in the Falkland Islands. Based in Stanley.",
    images: ["/images/hero.jpg"],
  },
  alternates: {
    canonical: "https://falklandsexplore.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        manrope.variable
      )}
    >
      <body>
        {children}
        <SiteLanguageTranslator />
        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}
