import type { Metadata } from "next"

import { BookingRequestForm } from "@/components/booking/booking-request-form"
import { Footer } from "@/components/layout/footer"
import { NavbarComponent } from "@/components/layout/navbar"

export const metadata: Metadata = {
  title: "Request a Booking",
  description:
    "Request car hire or a guided tour in the Falkland Islands. Send your dates and trip details to Falklands Explore.",
  alternates: { canonical: "https://falklandsexplore.com/booking" },
}

export default function BookingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <div className="bg-zinc-900">
        <NavbarComponent />
      </div>

      <main className="flex-1 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-bold text-emerald-700 uppercase">
            Falklands Explore
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Request a booking
          </h1>
          <p className="mt-3 mb-8 max-w-2xl leading-7 text-zinc-600">
            Share your preferred dates and trip details. We’ll open WhatsApp
            with your request ready to send, then confirm availability with you
            directly.
          </p>
          <BookingRequestForm />
          <p className="mt-6 text-sm text-zinc-600">
            Prefer to call?{" "}
            <a
              className="font-semibold text-emerald-800 underline underline-offset-4"
              href="tel:+50056023"
            >
              +500 56023
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
