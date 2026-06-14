"use client"
import { NavbarComponent } from "@/components/navbar"

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <NavbarComponent />

        {/* Hero Section */}
        <section className="flex h-screen items-center justify-center px-6 text-center md:h-[90vh]">
          <div className="max-w-2xl">
            <h1
              className="mb-6 text-4xl font-bold text-white drop-shadow-lg md:text-6xl"
              style={{
                textShadow:
                  "0 2px 8px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3)",
              }}
            >
              Falkland Islands Car Hire Explore at Your Own Pace
            </h1>
            <p
              className="mb-8 text-lg font-medium text-white/95 drop-shadow-md md:text-xl"
              style={{
                textShadow: "0 1px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              Hire a 4×4 or standard vehicle from Stanley and discover the
              Falkland Islands on your own terms. Short-term holiday hire,
              long-term contracts, and guided tours also available.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
