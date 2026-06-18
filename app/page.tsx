import type { Metadata } from "next"
import Script from "next/script"

import { BookingCta } from "@/components/sections/home/booking-cta"
import { CustomBeam } from "@/components/sections/home/custom-beam"
import { OurStory } from "@/components/sections/home/our-story"
import { StackTestimonials } from "@/components/sections/home/testimonial"
import { Footer } from "@/components/layout/footer"
import { NavbarComponent } from "@/components/layout/navbar"
import { CanvasText } from "@/components/ui/canvas-text"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Falkland Islands Car Hire & Guided Tours",
  description:
    "Hire a 4\u00d74 or standard vehicle from Stanley and explore the Falkland Islands on your own terms. Short-term holiday hire, long-term contracts, wildlife tours, and guided excursions also available.",
  alternates: { canonical: "https://falklandsexplore.com" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://falklandsexplore.com/#business",
      name: "Falklands Explore",
      description:
        "Car hire and guided tours in the Falkland Islands, based in Stanley. Self-drive 4\u00d74 rental, wildlife tours, battlefield excursions, and cruise passenger transfers.",
      url: "https://falklandsexplore.com",
      telephone: "+50065338",
      image: "https://falklandsexplore.com/images/hero.jpg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stanley",
        addressRegion: "Falkland Islands",
        addressCountry: "FK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -51.6938,
        longitude: -57.8613,
      },
      priceRange: "\u00a3\u00a3",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Falkland Islands Car Hire & Tours",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Self-Drive 4\u00d74 Car Hire",
              description:
                "Daily, weekly, and long-term 4\u00d74 and standard vehicle hire from Stanley, Falkland Islands.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "TouristTrip",
              name: "Guided Wildlife & History Tours",
              description:
                "Full-day and half-day guided tours covering Volunteer Point penguins, 1982 battlefield sites, Gypsy Cove, and coastal landmarks.",
              touristType: [
                "Wildlife enthusiast",
                "History enthusiast",
                "Cruise passenger",
              ],
            },
          },
        ],
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://falklandsexplore.com/#website",
      url: "https://falklandsexplore.com",
      name: "Falklands Explore",
      description: "Falkland Islands car hire and guided tours",
      publisher: { "@id": "https://falklandsexplore.com/#business" },
    },
  ],
}

export default function Home() {
  return (
    <>
      <Script
        id="json-ld-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative w-full overflow-hidden">
        {/* Hero Background */}
        <div
          className="absolute inset-x-0 top-0 h-screen w-full bg-cover bg-center bg-no-repeat md:h-[90vh]"
          style={{ backgroundImage: "url('/images/contact.jpg')" }}
          role="img"
          aria-label="Aerial view of the Falkland Islands coastline"
        >
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <NavbarComponent />
          {/* Hero Section */}
          <section
            aria-label="Hero"
            className="flex h-screen items-center justify-center px-4 text-center sm:px-6 md:h-[90vh] lg:px-8"
          >
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-4xl leading-20 font-bold text-white drop-shadow-lg md:text-6xl">
                Falkland Islands Car Hire — Explore at Your Own Pace
              </h1>
              <p className="mb-8 text-lg font-medium text-white/95 drop-shadow-md md:text-lg">
                Hire a 4×4 or standard vehicle from Stanley and discover the
                Falkland Islands on your own terms. Short-term holiday hire,
                long-term contracts, and guided tours also available.
              </p>
            </div>
          </section>

          <section id="attractions">
            <CustomBeam />
          </section>

          <section
            id="services"
            aria-labelledby="services-heading"
            className="px-4 py-16 sm:px-6 md:py-20 lg:px-8"
          >
            <div className="mx-auto max-w-7xl">
              <h2
                id="services-heading"
                className={cn(
                  "group relative mb-6 max-w-5xl text-left text-4xl leading-20 font-bold tracking-tight text-balance text-neutral-600 sm:text-5xl md:text-6xl xl:text-7xl"
                )}
              >
                Falkland Islands Car Hire &{" "}
                <CanvasText
                  text="Tour Services"
                  backgroundClassName="bg-emerald-700"
                  colors={[
                    "rgba(15, 110, 86, 1)",
                    "rgba(15, 110, 86, 0.9)",
                    "rgba(15, 110, 86, 0.8)",
                    "rgba(15, 110, 86, 0.7)",
                    "rgba(15, 110, 86, 0.6)",
                    "rgba(15, 110, 86, 0.5)",
                    "rgba(15, 110, 86, 0.4)",
                    "rgba(15, 110, 86, 0.3)",
                    "rgba(15, 110, 86, 0.2)",
                    "rgba(15, 110, 86, 0.1)",
                  ]}
                  lineGap={4}
                  animationDuration={20}
                />
              </h2>

              <p className="mb-12 max-w-4xl text-left text-base leading-8 text-zinc-700 md:text-lg">
                From scenic drives through East Falkland to guided tours of
                iconic sites like Volunteer Point and Gypsy Cove, Falklands
                Explore offers personalised travel solutions for every kind of
                visitor. Whether you&apos;re here for adventure, wildlife, or
                history — we&apos;ve got the right vehicle and itinerary waiting
                for you.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
                  <div className="mb-5 flex h-44 items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-100 text-sm font-medium tracking-wide text-zinc-500 uppercase">
                    Image Placeholder
                  </div>
                  <h3 className="mb-4 text-2xl font-bold tracking-tight text-zinc-900">
                    Self-Drive Car Hire in the Falkland Islands
                  </h3>
                  <p className="mb-5 text-base leading-7 text-zinc-700">
                    Choose from a range of well-maintained 4×4 and standard
                    vehicles, available for daily, weekly, or long-term hire.
                    Perfect for holiday visitors wanting freedom to explore, and
                    for contractors or workers relocating to the islands for
                    extended stays. All vehicles come with full local support.
                  </p>
                  <a
                    href="/services"
                    className="inline-flex text-sm font-semibold text-emerald-700 underline-offset-4 hover:underline"
                    aria-label="Learn more about Falkland Islands self-drive car hire"
                  >
                    Learn More
                  </a>
                </article>

                <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
                  <div className="mb-5 flex h-44 items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-100 text-sm font-medium tracking-wide text-zinc-500 uppercase">
                    Image Placeholder
                  </div>
                  <h3 className="mb-4 text-2xl font-bold tracking-tight text-zinc-900">
                    Guided Tours of the Falkland Islands
                  </h3>
                  <p className="mb-5 text-base leading-7 text-zinc-700">
                    Not sure about driving the tracks yourself? Our guided tours
                    cover the Falklands&apos; most iconic sites — from Volunteer
                    Point&apos;s king penguin colony to the San Carlos war
                    memorials. Suitable for individuals, couples, families, and
                    cruise groups.
                  </p>
                  <a
                    href="/services"
                    className="inline-flex text-sm font-semibold text-emerald-700 underline-offset-4 hover:underline"
                    aria-label="Learn more about guided tours in the Falkland Islands"
                  >
                    Learn More
                  </a>
                </article>
              </div>
            </div>
          </section>

          <div id="about">
            <OurStory />
          </div>
          <div id="contact">
            <BookingCta />
          </div>
          <StackTestimonials />
        </div>
        <Footer />
      </div>
    </>
  )
}
