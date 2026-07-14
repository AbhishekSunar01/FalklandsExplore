"use client"

import { useEffect } from "react"

const STORAGE_KEY = "falklands-language"
const SCRIPT_ID = "google-translate-element-script"
const TRANSLATE_CONTAINER_ID = "google_translate_element"
const SUPPORTED_LANGUAGES = "en,zh-CN,nl,fr,de,pt,es"

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    __applySiteLanguage?: (language: string) => void
    google?: {
      translate?: {
        TranslateElement?: new (
          options: {
            pageLanguage: string
            includedLanguages: string
            autoDisplay: boolean
          },
          elementId: string
        ) => unknown
      }
    }
  }
}

function applyLanguage(language: string) {
  if (typeof window === "undefined") {
    return
  }

  document.documentElement.lang = language
  window.localStorage.setItem(STORAGE_KEY, language)

  const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo")
  if (combo) {
    combo.value = language
    combo.dispatchEvent(new Event("change"))
  }
}

export function SiteLanguageTranslator() {
  useEffect(() => {
    window.__applySiteLanguage = applyLanguage

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) {
        return
      }

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: SUPPORTED_LANGUAGES,
          autoDisplay: false,
        },
        TRANSLATE_CONTAINER_ID
      )

      const storedLanguage = window.localStorage.getItem(STORAGE_KEY)
      if (storedLanguage && storedLanguage !== "en") {
        window.setTimeout(() => applyLanguage(storedLanguage), 300)
      }
    }

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script")
      script.id = SCRIPT_ID
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      script.async = true
      document.body.appendChild(script)
    } else if (window.googleTranslateElementInit) {
      window.googleTranslateElementInit()
    }

    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ language?: string }>
      if (customEvent.detail?.language) {
        applyLanguage(customEvent.detail.language)
      }
    }

    window.addEventListener("falklands-language-change", handleLanguageChange)

    return () => {
      window.removeEventListener(
        "falklands-language-change",
        handleLanguageChange
      )
    }
  }, [])

  return (
    <div id={TRANSLATE_CONTAINER_ID} className="sr-only" aria-hidden="true" />
  )
}
