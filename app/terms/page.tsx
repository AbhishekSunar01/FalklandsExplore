import type { Metadata } from "next"

import { Footer } from "@/components/layout/footer"
import { NavbarComponent } from "@/components/layout/navbar"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "View the terms and conditions for car hire, tours, and transportation bookings with Falklands Explore.",
  alternates: { canonical: "https://falklandsexplore.com/terms" },
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-zinc-900">
        <NavbarComponent />
      </div>

      <main className="flex-1 bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900">
            Terms & Conditions
          </h1>
          <div className="space-y-5 text-base leading-8 text-zinc-700">
            <p>
              By booking with Falklands Explore, you agree to the service
              details confirmed at the time of booking, including dates,
              pricing, and pickup arrangements.
            </p>
            <p>
              Vehicle hire and tour schedules are subject to weather and local
              conditions. We may adjust itineraries for safety or operational
              reasons.
            </p>
            <p>
              Cancellations and changes should be requested as early as
              possible. Any applicable fees depend on notice period and service
              type.
            </p>
            <p>
              For complete booking terms for your trip, contact
              bookings@kedrivediscover.com or call +500 65338 before confirming
              payment.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
