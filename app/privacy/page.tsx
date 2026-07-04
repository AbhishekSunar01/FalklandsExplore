import type { Metadata } from "next"

import { Footer } from "@/components/layout/footer"
import { NavbarComponent } from "@/components/layout/navbar"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy for Falklands Explore, including how we handle booking enquiries and customer contact details.",
  alternates: { canonical: "https://falklandsexplore.com/privacy" },
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-zinc-900">
        <NavbarComponent />
      </div>

      <main className="flex-1 bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900">
            Privacy Policy
          </h1>
          <div className="space-y-5 text-base leading-8 text-zinc-700">
            <p>
              Falklands Explore respects your privacy. We only collect
              information needed to respond to enquiries and process bookings.
            </p>
            <p>
              Information you share by phone, email, WhatsApp, or contact forms
              may include your name, contact details, travel dates, and service
              preferences.
            </p>
            <p>
              We do not sell your personal data. We use your information only
              for communication, booking support, and customer service.
            </p>
            <p>
              To request data updates or deletion, contact us at
              bookings@kedrivediscover.com or call +500 65338.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
