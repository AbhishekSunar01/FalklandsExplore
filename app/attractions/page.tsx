import type { Metadata } from "next"

import { Footer } from "@/components/layout/footer"
import { NavbarComponent } from "@/components/layout/navbar"

export const metadata: Metadata = {
  title: "Falkland Islands Attractions",
  description:
    "Discover must-see Falkland Islands attractions including penguin colonies, coastlines, historic sites, and scenic day-trip routes from Stanley.",
  alternates: { canonical: "https://falklandsexplore.com/attractions" },
}

const attractions = [
  {
    title: "Volunteer Point",
    description:
      "One of the top Falkland Islands attractions for king penguins, white-sand beaches, and dramatic coastal views.",
  },
  {
    title: "Gypsy Cove",
    description:
      "A short trip from Stanley with wildlife, walking trails, and excellent opportunities to see Magellanic penguins.",
  },
  {
    title: "Cape Pembroke Lighthouse",
    description:
      "A scenic coastal route ending at the iconic lighthouse and open sea views near Stanley.",
  },
  {
    title: "Goose Green & Battlefield Sites",
    description:
      "Important historical landmarks from 1982, ideal for travelers interested in Falklands military history.",
  },
]

export default function AttractionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10">
          <NavbarComponent />
          <div className="px-4 pt-36 pb-20 text-center sm:px-6 lg:px-8">
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-emerald-400 uppercase">
              Must-See Places
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Falkland Islands Attractions
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-300">
              Wildlife, coastlines, history, and unforgettable viewpoints across
              East Falkland.
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {attractions.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6"
              >
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-zinc-900">
                  {item.title}
                </h2>
                <p className="text-base leading-7 text-zinc-700">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="mb-2 text-xl font-bold text-zinc-900">
              Need help planning your route?
            </h3>
            <p className="mb-5 text-zinc-700">
              We can tailor a day-by-day itinerary based on your interests,
              travel dates, and weather conditions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center rounded-full bg-emerald-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Plan My Attractions Tour
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
