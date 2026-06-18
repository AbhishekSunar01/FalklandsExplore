import React from "react"

export function OurStory() {
  return (
    <section className="w-full bg-white px-6 py-16 text-zinc-900 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-blue-700 uppercase">
          Our Story
        </p>

        <h2 className="mb-6 text-3xl leading-tight font-bold tracking-tight md:text-5xl">
          Trusted Car Hire & Tours in the Falkland Islands
        </h2>

        <div className="space-y-5 text-base leading-8 text-zinc-700 md:text-lg">
          <p>
            At KE Drive & Discover, we make getting around the Falkland Islands
            simple. Whether you need a reliable hire car for a week-long
            holiday, a 4x4 for a self-drive adventure to Volunteer Point, or a
            guided tour tailored to your interests - we have the local knowledge
            and the right vehicle for the job.
          </p>
          <p>
            Based in Stanley, we serve cruise passengers, holiday visitors, and
            long-stay workers across East Falkland. Flexible hire terms, honest
            pricing, and genuinely local service.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-zinc-900">
              Our Vision
            </h3>
            <p className="text-base leading-7 text-zinc-700">
              We value hospitality, safety, and honest service. We’re passionate
              about the Falklands and committed to sharing it responsibly and
              respectfully. With a focus on innovation, accessibility, and local
              pride, we make every journey simple, meaningful, and
              unforgettable.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-zinc-900">
              Our Mission
            </h3>
            <p className="text-base leading-7 text-zinc-700">
              Our mission is to help visitors experience the Falkland Islands in
              the most authentic, flexible, and comfortable way possible. We are
              passionate about sharing the islands’ natural beauty, wildlife,
              and unique history through dependable car rentals and immersive
              local tours. Every journey with us is designed to be personal,
              memorable, and deeply connected to the spirit of the Falklands.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
