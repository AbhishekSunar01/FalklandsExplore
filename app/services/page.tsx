import type { Metadata } from "next"
import Script from "next/script"

import { NavbarComponent } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Car Hire & Tour Services in the Falkland Islands",
  description:
    "Falklands Explore offers self-drive car hire, guided wildlife tours, and transportation services across the Falkland Islands. Book daily, weekly or long-term from Stanley.",
  alternates: { canonical: "https://falklandsexplore.com/services" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Falkland Islands Car Hire & Tour Services",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Self-Drive Car Hire in the Falkland Islands",
        description:
          "Well-maintained 4×4 and standard vehicles available for daily, weekly, or long-term hire from Stanley. Ideal for holiday visitors and contractors.",
        provider: { "@type": "LocalBusiness", name: "Falklands Explore" },
        areaServed: "Falkland Islands",
        url: "https://falklandsexplore.com/services",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "TouristTrip",
        name: "Guided Tours of the Falkland Islands",
        description:
          "Customisable guided tours covering wildlife reserves, 1982 battlefield sites, and remote scenic areas. Suitable for individuals, families, and groups.",
        provider: { "@type": "LocalBusiness", name: "Falklands Explore" },
        touristType: [
          "Wildlife enthusiast",
          "History enthusiast",
          "Cruise passenger",
        ],
        url: "https://falklandsexplore.com/services",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Airport & Hotel Transportation — Falkland Islands",
        description:
          "Reliable airport pick-up and drop-off, hotel transfers, and scheduled transport between key locations across the Falkland Islands.",
        provider: { "@type": "LocalBusiness", name: "Falklands Explore" },
        areaServed: "Falkland Islands",
        url: "https://falklandsexplore.com/services",
      },
    },
  ],
}

const services = [
  {
    number: "01",
    title: "Self-Drive Car Hire in the Falkland Islands",
    paragraphs: [
      "We provide a variety of well-maintained 4×4 and standard vehicles for self-drive hire, giving you the freedom to explore the islands entirely at your own pace.",
      "Hire is available for short-term use — holidays and weekend trips — as well as long-term contracts, ideal for contractors or workers relocating to the islands for extended stays.",
    ],
    image:
      "https://kedriveanddiscover.com/wp-content/uploads/2025/10/Self-drive-car-rentals-461x1024.jpg",
    imageAlt:
      "Self-drive car rental vehicle on a Falkland Islands road — hire from Stanley",
    imageLeft: true,
  },
  {
    number: "02",
    title: "Guided Tours of the Falkland Islands",
    paragraphs: [
      "We offer guided and fully customisable tours to iconic sites across the Falklands — including Volunteer Point penguin colony, Gypsy Cove, 1982 battlefield memorials, and remote scenic areas.",
      "Perfect for individuals, families, couples, and cruise groups seeking local insight, wildlife encounters, and authentic Falklands adventure.",
    ],
    image:
      "https://kedriveanddiscover.com/wp-content/uploads/2025/10/Tour-Services-scaled-e1760161656819-1024x413.jpg",
    imageAlt:
      "Guided wildlife tour in the Falkland Islands — penguins and landscape",
    imageLeft: false,
  },
  {
    number: "03",
    title: "Airport & Hotel Transportation Services",
    paragraphs: [
      "Reliable and punctual airport pick-up and drop-off, hotel and accommodation transfers, and scheduled transport between key locations across East Falkland.",
      "Designed for convenience — whether you are arriving at Stanley Airport, departing, or need comfortable transport between locations on the islands.",
    ],
    image:
      "https://kedriveanddiscover.com/wp-content/uploads/2025/10/Transportation-service-scaled-e1760161679500-1024x599.jpg",
    imageAlt:
      "Transportation service vehicle in the Falkland Islands — airport and hotel transfers",
    imageLeft: true,
  },
]

export default function ServicesPage() {
  return (
    <>
      <Script
        id="json-ld-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex min-h-screen flex-col">
        {/* Page header */}
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70" />
          <div className="relative z-10">
            <NavbarComponent />
            <div className="px-4 pt-36 pb-20 text-center sm:px-6 lg:px-8">
              <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-emerald-400 uppercase">
                What We Offer
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Explore the Falklands with Confidence
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-300">
                Reliable car hire and unforgettable guided tours — designed to
                help you discover the beauty, wildlife, and adventure of the
                Falkland Islands at your own pace.
              </p>
            </div>
          </div>
        </div>

        {/* Services — alternating image/content layout */}
        <main>
          {services.map(
            ({ number, title, paragraphs, image, imageAlt, imageLeft }) => (
              <article key={number} className="grid min-h-130 md:grid-cols-2">
                {/* Image panel */}
                <div
                  className={`relative min-h-72 md:min-h-full ${imageLeft ? "md:order-1" : "md:order-2"}`}
                >
                  <img
                    src={image}
                    alt={imageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content panel */}
                <div
                  className={`flex flex-col justify-center bg-white px-8 py-12 sm:px-12 lg:px-16 ${imageLeft ? "md:order-2" : "md:order-1"}`}
                >
                  <span className="mb-3 text-sm font-medium tracking-widest text-zinc-400">
                    {number}
                  </span>
                  <h2 className="mb-6 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                    {title}
                  </h2>
                  <div className="space-y-4">
                    {paragraphs.map((p, i) => (
                      <p key={i} className="text-base leading-7 text-zinc-600">
                        {p}
                      </p>
                    ))}
                  </div>
                  <a
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] text-zinc-900 uppercase transition hover:text-emerald-700"
                    aria-label={`Book ${title}`}
                  >
                    Book Here
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            )
          )}
        </main>

        {/* Must-See Attractions CTA */}
        <section
          aria-labelledby="attractions-heading"
          className="bg-zinc-900 px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Text */}
              <div>
                <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-emerald-400 uppercase">
                  Plan Your Visit
                </p>
                <h2
                  id="attractions-heading"
                  className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl"
                >
                  Must-See Attractions in the Falkland Islands
                </h2>
                <p className="mb-4 text-base leading-7 text-zinc-400">
                  The Falkland Islands are home to breathtaking landscapes, rich
                  wildlife, and unforgettable sights. From penguin colonies and
                  rugged coastlines to historic landmarks and scenic hikes —
                  there is something here for every kind of traveller.
                </p>
                <p className="mb-8 text-base leading-7 text-zinc-400">
                  Let us guide you to the must-see attractions that make the
                  Falklands truly unique. Whether you are an adventurer, nature
                  lover, or history enthusiast — your perfect itinerary starts
                  here.
                </p>
                <a
                  href="/attractions"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-8 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-emerald-800"
                >
                  Check Attractions
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Image mosaic */}
              <div className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="https://kedriveanddiscover.com/wp-content/uploads/2025/07/8f92a7af-7471-4823-9251-b810dd4fe85c-485x1024.jpg"
                    alt="Penguin colony at Volunteer Point, Falkland Islands"
                    className="h-72 w-full object-cover transition duration-500 hover:scale-105 sm:h-80"
                    loading="lazy"
                  />
                </div>
                <div className="mt-8 overflow-hidden rounded-2xl">
                  <img
                    src="https://kedriveanddiscover.com/wp-content/uploads/2025/09/unnamed-2.jpg"
                    alt="Scenic Falkland Islands landscape — wildlife and coastline"
                    className="h-72 w-full object-cover transition duration-500 hover:scale-105 sm:h-80"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
