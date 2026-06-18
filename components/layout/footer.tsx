import React from "react"

export const Footer = () => {
  return (
    <footer
      aria-label="Site footer"
      className="bg-zinc-50 px-4 py-16 text-black sm:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 md:flex-row md:gap-16">
        <div className="space-y-6">
          <div className="text-2xl font-bold">Falklands Explore</div>
          <p className="max-w-xs text-pretty text-zinc-500">
            Car hire and guided tours in the Falkland Islands. Based in Stanley
            — serving holiday visitors, cruise passengers, and long-stay
            workers.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16 sm:grid-cols-3">
          <div className="space-y-4">
            <div className="text-sm font-bold tracking-widest text-zinc-400 uppercase">
              Explore
            </div>
            <nav
              aria-label="Footer explore links"
              className="flex flex-col gap-2 text-sm text-zinc-600"
            >
              <a href="/attractions" className="hover:text-black">
                Attractions
              </a>
              <a href="/services" className="hover:text-black">
                Services
              </a>
              <a href="/contact" className="hover:text-black">
                Contact
              </a>
            </nav>
          </div>
          <div className="space-y-4">
            <div className="text-sm font-bold tracking-widest text-zinc-400 uppercase">
              Legal
            </div>
            <nav
              aria-label="Footer legal links"
              className="flex flex-col gap-2 text-sm text-zinc-600"
            >
              <a href="/privacy" className="hover:text-black">
                Privacy
              </a>
              <a href="/terms" className="hover:text-black">
                Terms
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-3 border-t border-zinc-100 pt-8 text-xs text-zinc-400 sm:flex-row sm:justify-between sm:gap-6">
        <span>
          &copy; {new Date().getFullYear()} Falklands Explore. All rights
          reserved.
        </span>
        <span>Car hire &amp; guided tours in the Falkland Islands.</span>
      </div>
    </footer>
  )
}
