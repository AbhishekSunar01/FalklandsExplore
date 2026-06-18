import React from "react"

export const Footer = () => {
  return (
    <footer className="bg-zinc-50 px-4 py-16 text-black sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 md:flex-row md:gap-16">
        <div className="space-y-6">
          <div className="text-2xl font-bold">UI-LAYOUTS.</div>
          <p className="max-w-xs text-pretty text-zinc-500">
            Redefining the digital frontier with elegance and precision.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16 sm:grid-cols-3">
          <div className="space-y-4">
            <div className="text-sm font-bold tracking-widest text-zinc-400 uppercase">
              Social
            </div>
            <div className="flex flex-col gap-2 text-sm text-zinc-600">
              <a href="#" className="hover:text-black">
                Twitter
              </a>
              <a href="#" className="hover:text-black">
                LinkedIn
              </a>
              <a href="#" className="hover:text-black">
                Instagram
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-sm font-bold tracking-widest text-zinc-400 uppercase">
              Legal
            </div>
            <div className="flex flex-col gap-2 text-sm text-zinc-600">
              <a href="#" className="hover:text-black">
                Privacy
              </a>
              <a href="#" className="hover:text-black">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-3 border-t border-zinc-100 pt-8 text-xs text-zinc-400 sm:flex-row sm:justify-between sm:gap-6">
        <span>&copy; 2026 UI-Layouts. All rights reserved.</span>
        <span>Made with Precision.</span>
      </div>
    </footer>
  )
}
