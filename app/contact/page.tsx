import type { Metadata } from "next"
import { Mail, Phone, MapPin } from "lucide-react"

import { NavbarComponent } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Falklands Explore to book car hire or guided tours in the Falkland Islands. Call +500 65338 or email bookings@falklandsexplore.com. Based at 7 Pale Maiden Crescent, Stanley.",
  alternates: { canonical: "https://falklandsexplore.com/contact" },
}

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "bookings@kedrivediscover.com",
    href: "mailto:bookings@kedrivediscover.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+500 65338",
    href: "tel:+50065338",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "7 Pale Maiden Crescent, Stanley, Falkland Islands",
    href: "https://maps.google.com/?q=-51.6900853,-57.8948136",
  },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Page header — contact.jpg background keeps navbar white text legible */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/contact.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/45 to-black/65" />
        <div className="relative z-10">
          <NavbarComponent />
          <div className="px-4 pt-36 pb-16 text-center sm:px-6 lg:px-8">
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-blue-400 uppercase">
              Get in Touch
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Contact Falklands Explore
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-white">
              Ready to book your Falkland Islands car hire or guided tour? Reach
              out and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <section
        aria-labelledby="contact-details-heading"
        className="flex-1 bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact details */}
            <div>
              <h2
                id="contact-details-heading"
                className="mb-8 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl"
              >
                How to Reach Us
              </h2>

              <div className="space-y-6">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === "Address" ? "_blank" : undefined}
                    rel={
                      label === "Address" ? "noopener noreferrer" : undefined
                    }
                    className="group flex items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                        {label}
                      </p>
                      <p className="text-base font-medium text-zinc-800 group-hover:text-blue-700">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                <p className="mb-1 text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                  Opening Hours
                </p>
                <p className="text-base font-medium text-zinc-800">
                  Monday – Sunday, 8:00 am – 6:00 pm
                </p>
                <p className="mt-1 text-sm text-zinc-500">
                  Available for last-minute bookings — just call ahead.
                </p>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
                Find Us
              </h2>
              <p className="text-sm text-zinc-500">
                7 Pale Maiden Crescent, Stanley, Falkland Islands
              </p>
              <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
                <iframe
                  title="Falklands Explore location — 7 Pale Maiden Crescent, Stanley"
                  src="https://maps.google.com/maps?q=-51.6900853,-57.8948136&z=17&output=embed"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Map showing Falklands Explore location at 7 Pale Maiden Crescent, Stanley"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
