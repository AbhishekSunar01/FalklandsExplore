import React from "react"

export function BookingCta() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-16 text-white md:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/cta.jpeg')",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/35 to-black/55" />

      {/* Card background styles paused for now:
          border border-white/20 bg-black/20 bg-black/45 shadow-lg backdrop-blur-[2px]
      */}
      <div className="relative z-10 mx-auto max-w-4xl p-8 text-center md:p-12">
        <h2 className="mb-4 text-3xl font-bold tracking-tight drop-shadow-md md:text-4xl">
          Book Your Falkland Islands Car Hire Today
        </h2>
        <p className="mb-2 text-base text-white/90 drop-shadow-sm md:text-lg">
          Available for short breaks, holidays, and long-term contracts.
        </p>
        <p className="mb-8 text-base text-white/90 drop-shadow-sm md:text-lg">
          Call +500 65338 or use the form below.
        </p>

        <a
          href="tel:+50065338"
          className="inline-flex items-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-blue-700"
        >
          BOOK YOUR ADVENTURE NOW
        </a>

        <p className="mt-6 text-xl font-bold tracking-wide text-white drop-shadow-md">
          +500 65338
        </p>
      </div>
    </section>
  )
}
