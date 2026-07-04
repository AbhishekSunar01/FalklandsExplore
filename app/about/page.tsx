import type { Metadata } from "next"
import { MapPin, Star, Users, Car } from "lucide-react"

import { NavbarComponent } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "About Kamal Gaudel — Your Falkland Islands Guide",
  description:
    "Meet Kamal Gaudel, owner of Falklands Explore and expert Falkland Islands tour guide. Based in Stanley, Kamal offers personalised car hire and guided tours across East Falkland.",
  alternates: { canonical: "https://falklandsexplore.com/about" },
}

const highlights = [
  {
    icon: MapPin,
    title: "Local Expert",
    description:
      "Born and raised with deep roots in Stanley, Kamal knows every track, viewpoint, and hidden gem the Falkland Islands has to offer.",
  },
  {
    icon: Users,
    title: "Personalised Service",
    description:
      "Every tour and hire is tailored to you. Kamal goes out of his way — including last-minute bookings — to make your trip unforgettable.",
  },
  {
    icon: Car,
    title: "Safe & Reliable",
    description:
      "All vehicles are well-maintained and fully equipped for Falklands terrain. Your safety and comfort are the top priority on every journey.",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description:
      "Consistently praised by visitors for friendliness, knowledge, and going the extra mile. Read the reviews — guests keep coming back.",
  },
]

const stats = [
  { value: "10+", label: "Years Exploring the Islands" },
  { value: "500+", label: "Happy Guests" },
  { value: "4×4", label: "Fleet Ready for Any Track" },
  { value: "7 Days", label: "Available Every Week" },
]

const testimonials = [
  {
    quote:
      "Kamal was very friendly and knowledgeable of the area — he took us to see the wildlife including penguins and the war memorials. It was a wonderful experience and I would highly recommend using this tour operator.",
    name: "David Clayton",
    role: "East Falkland Tour Guest",
  },
  {
    quote:
      "Kamal did everything in his power to make my time on the island unforgettable. Even when I asked for an extra last-minute tour, he went all out to arrange it for me.",
    name: "Joanne Drost",
    role: "Holiday Visitor",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero header */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10">
          <NavbarComponent />
          <div className="px-4 pt-36 pb-20 text-center sm:px-6 lg:px-8">
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-emerald-400 uppercase">
              Your Guide
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Kamal Gaudel
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-300">
              Owner &amp; Lead Tour Guide — Falklands Explore
            </p>
          </div>
        </div>
      </div>

      {/* About story */}
      <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Photo */}
            <div className="relative">
              <div className="aspect-4/5 w-full overflow-hidden rounded-3xl bg-zinc-100">
                <img
                  src="/images/kamal.jpeg"
                  alt="Kamal Gaudel, owner of Falklands Explore and Falkland Islands tour guide"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -right-4 -bottom-5 rounded-2xl border border-zinc-200 bg-white px-6 py-4 shadow-lg sm:-right-6">
                <p className="text-2xl font-bold text-zinc-900">10+</p>
                <p className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                  Years on the Islands
                </p>
              </div>
            </div>

            {/* Story */}
            <div>
              <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-emerald-600 uppercase">
                My Story
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
                Sharing the Falklands with the World
              </h2>
              <div className="space-y-4 text-base leading-8 text-zinc-600 md:text-lg">
                <p>
                  Hi, I&apos;m Kamal — owner of Falklands Explore and your guide
                  to one of the most extraordinary places on earth. The Falkland
                  Islands captured my heart long ago, and I&apos;ve spent years
                  getting to know every track, bay, and wildlife spot across
                  East Falkland.
                </p>
                <p>
                  What started as a love for these islands has grown into a
                  passion for sharing them. Whether you want to drive yourself
                  to Volunteer Point in a 4×4, join a guided tour of the 1982
                  battlefield sites, or simply explore Stanley and its coastline
                  at your own pace — I&apos;m here to make it happen.
                </p>
                <p>
                  I take pride in honest, friendly, and genuinely personal
                  service. No two guests are the same, and no two trips have to
                  be either. Get in touch and let&apos;s plan your Falklands
                  adventure together.
                </p>
              </div>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center rounded-full bg-emerald-700 px-8 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-emerald-800"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-zinc-900 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <dt className="text-3xl font-bold text-white md:text-4xl">
                  {value}
                </dt>
                <dd className="mt-1 text-sm font-medium text-zinc-400">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Highlights */}
      <section
        aria-labelledby="highlights-heading"
        className="bg-zinc-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-emerald-600 uppercase">
            Why Choose Kamal
          </p>
          <h2
            id="highlights-heading"
            className="mb-12 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl"
          >
            What Sets the Experience Apart
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-700 text-white">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-zinc-900">
                  {title}
                </h3>
                <p className="text-sm leading-7 text-zinc-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        aria-labelledby="testimonials-heading"
        className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-emerald-600 uppercase">
            Guest Reviews
          </p>
          <h2
            id="testimonials-heading"
            className="mb-12 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl"
          >
            What Guests Say About Kamal
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {testimonials.map(({ quote, name, role }) => (
              <blockquote
                key={name}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8"
              >
                <div className="mb-4 flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="currentColor"
                      className="text-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mb-6 text-base leading-8 text-zinc-700 italic">
                  &ldquo;{quote}&rdquo;
                </p>
                <footer>
                  <p className="font-bold text-zinc-900">{name}</p>
                  <p className="text-sm text-zinc-500">{role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-20 text-white sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/images/cta.jpeg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight drop-shadow-md md:text-4xl">
            Ready to Explore with Kamal?
          </h2>
          <p className="mb-8 text-base text-white/90 md:text-lg">
            Book your Falkland Islands car hire or guided tour today. Flexible
            dates, honest pricing, and genuinely local expertise.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+50065338"
              className="inline-flex items-center rounded-full bg-emerald-700 px-8 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-emerald-800"
            >
              Call +500 65338
            </a>
            <a
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/60 px-8 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-white/10"
            >
              Send a Message
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
