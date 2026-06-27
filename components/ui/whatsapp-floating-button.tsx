"use client"

import { FaWhatsapp } from "react-icons/fa"

export function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/50056023"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed right-6 bottom-6 z-[9999] flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg transition-all hover:scale-105 hover:bg-green-600"
    >
      <FaWhatsapp className="h-6 w-6" />
      <span className="font-medium">How can I help you?</span>
    </a>
  )
}
