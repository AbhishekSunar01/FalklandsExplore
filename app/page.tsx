"use client"
import { Footer } from "@/components/layout/footer"
import { NavbarComponent } from "@/components/layout/navbar"
import { BookingCta } from "@/components/sections/home/booking-cta"
import { CustomBeam } from "@/components/sections/home/custom-beam"
import { OurStory } from "@/components/sections/home/our-story"
import { StackTestimonials } from "@/components/sections/home/testimonial"
import { CanvasText } from "@/components/ui/canvas-text"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Background */}
      <div
        className="absolute inset-x-0 top-0 h-screen w-full bg-cover bg-center bg-no-repeat md:h-[90vh]"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <NavbarComponent />

        {/* Hero Section */}
        <section className="flex h-screen items-center justify-center px-4 text-center sm:px-6 md:h-[90vh] lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1
              className="mb-6 text-4xl leading-20 font-bold text-white drop-shadow-lg md:text-6xl"
              // style={{
              //   textShadow:
              //     "0 2px 8px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3)",
              // }}
            >
              Falkland Islands Car Hire Explore at Your Own Pace
            </h1>
            <p
              className="mb-8 text-lg font-medium text-white/95 drop-shadow-md md:text-lg"
              // style={{
              //   textShadow: "0 1px 4px rgba(0, 0, 0, 0.3)",
              // }}
            >
              Hire a 4×4 or standard vehicle from Stanley and discover the
              Falkland Islands on your own terms. Short-term holiday hire,
              long-term contracts, and guided tours also available.
            </p>
          </div>
        </section>

        <CustomBeam />

        <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2
              className={cn(
                "group relative mb-6 max-w-5xl text-left text-4xl leading-20 font-bold tracking-tight text-balance text-neutral-600 sm:text-5xl md:text-6xl xl:text-7xl"
              )}
            >
              Falkland Islands Car Hire &{" "}
              <CanvasText
                text="Tour Services"
                backgroundClassName="bg-blue-600"
                colors={[
                  "rgba(0, 153, 255, 1)",
                  "rgba(0, 153, 255, 0.9)",
                  "rgba(0, 153, 255, 0.8)",
                  "rgba(0, 153, 255, 0.7)",
                  "rgba(0, 153, 255, 0.6)",
                  "rgba(0, 153, 255, 0.5)",
                  "rgba(0, 153, 255, 0.4)",
                  "rgba(0, 153, 255, 0.3)",
                  "rgba(0, 153, 255, 0.2)",
                  "rgba(0, 153, 255, 0.1)",
                ]}
                lineGap={4}
                animationDuration={20}
              />
            </h2>

            <p className="mb-12 max-w-4xl text-left text-base leading-8 text-zinc-700 md:text-lg">
              From scenic drives through East Falkland to guided tours of iconic
              sites like Volunteer Point and Gypsy Cove, KeDrive & Discover
              offers personalized travel solutions for every kind of explorer.
              Whether you’re here for adventure, wildlife, or history-we’ve got
              the right vehicle and itinerary waiting for you.
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
                  extended stays. All vehicles are maintained to a high standard
                  and come with full local support.
                </p>
                <a
                  href="https://kedriveanddiscover.com/services/"
                  className="inline-flex text-sm font-semibold text-blue-700 underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn More
                </a>
              </article>

              <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
                <div className="mb-5 flex h-44 items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-100 text-sm font-medium tracking-wide text-zinc-500 uppercase">
                  Image Placeholder
                </div>
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-zinc-900">
                  Tour Services
                </h3>
                <p className="mb-5 text-base leading-7 text-zinc-700">
                  Not sure about driving the tracks yourself? Our guided tours
                  cover the Falklands’ most iconic sites - from Volunteer
                  Point’s king penguin colony to the San Carlos war memorials.
                  Suitable for individuals, couples, families, and groups.
                </p>
                <a
                  href="https://kedriveanddiscover.com/services/"
                  className="inline-flex text-sm font-semibold text-blue-700 underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn More
                </a>
              </article>
            </div>
          </div>
        </section>

        <OurStory />
        <BookingCta />
        <StackTestimonials />
      </div>
      <Footer />
    </div>
  )
}
