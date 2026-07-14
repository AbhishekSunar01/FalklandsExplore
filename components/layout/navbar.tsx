"use client"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"
import { useEffect, useState } from "react"

const navItems = [
  {
    //   name: "Attractions",
    //   link: "#",
    //   dropdown: [
    //     {
    //       name: "Within Stanley",
    //       link: "/attractions/within-stanley",
    //     },
    //     {
    //       name: "Outside Stanley",
    //       link: "/attractions/outside-stanley",
    //     },
    //   ],
    // },
    // {
    name: "Services",
    link: "/services",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
]

const languageOptions = [
  { value: "en", label: "English" },
  { value: "zh-CN", label: "简体中文" },
  { value: "nl", label: "Nederlands" },
  { value: "fr", label: "Français" },
  { value: "de", label: "Deutsch" },
  { value: "pt", label: "Português" },
  { value: "es", label: "Español" },
]

const isSupportedLanguage = (language: string) =>
  languageOptions.some((option) => option.value === language)

const emitLanguageChange = (language: string) => {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.setItem("falklands-language", language)
  window.dispatchEvent(
    new CustomEvent("falklands-language-change", {
      detail: { language },
    })
  )
}

export function NavbarComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    if (typeof window === "undefined") {
      return "en"
    }

    const storedLanguage = window.localStorage.getItem("falklands-language")

    if (storedLanguage && isSupportedLanguage(storedLanguage)) {
      return storedLanguage
    }

    return "en"
  })

  useEffect(() => {
    window.localStorage.setItem("falklands-language", selectedLanguage)
  }, [selectedLanguage])

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-3">
          <label className="sr-only" htmlFor="navbar-language-select">
            Select language
          </label>
          <select
            id="navbar-language-select"
            value={selectedLanguage}
            onChange={(event) => {
              setSelectedLanguage(event.target.value)
              emitLanguageChange(event.target.value)
            }}
            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition outline-none hover:bg-white/15 focus:border-white/40"
            aria-label="Select language"
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <NavbarButton href="tel:+50065338" variant="primary">
            Book Now
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-700"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <label
              className="mb-2 block text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase"
              htmlFor="mobile-language-select"
            >
              Language
            </label>
            <select
              id="mobile-language-select"
              value={selectedLanguage}
              onChange={(event) => {
                setSelectedLanguage(event.target.value)
                emitLanguageChange(event.target.value)
              }}
              className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 outline-none"
              aria-label="Select language"
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              href="tel:+50065338"
              variant="primary"
              className="w-full"
            >
              Book Now
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
