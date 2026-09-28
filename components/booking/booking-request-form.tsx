"use client"

import type { FormEvent } from "react"

export function BookingRequestForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const message = [
      "Booking request for Falklands Explore",
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone") || "Not provided"}`,
      `Service: ${formData.get("service")}`,
      `Start date: ${formData.get("startDate")}`,
      `End date: ${formData.get("endDate") || "Not provided"}`,
      `Number of guests: ${formData.get("guests")}`,
      `Notes: ${formData.get("notes") || "None"}`,
    ].join("\n")

    const whatsappUrl = new URL("https://wa.me/50056023")
    whatsappUrl.searchParams.set("text", message)
    window.location.assign(whatsappUrl.toString())
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="booking-name"
            className="mb-2 block text-sm font-semibold text-zinc-800"
          >
            Full name
          </label>
          <input
            id="booking-name"
            name="name"
            autoComplete="name"
            required
            className="w-full rounded-md border border-zinc-300 px-3 py-2.5 text-zinc-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
          />
        </div>
        <div>
          <label
            htmlFor="booking-email"
            className="mb-2 block text-sm font-semibold text-zinc-800"
          >
            Email address
          </label>
          <input
            id="booking-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full rounded-md border border-zinc-300 px-3 py-2.5 text-zinc-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
          />
        </div>
        <div>
          <label
            htmlFor="booking-phone"
            className="mb-2 block text-sm font-semibold text-zinc-800"
          >
            Phone number
          </label>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-md border border-zinc-300 px-3 py-2.5 text-zinc-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
          />
        </div>
        <div>
          <label
            htmlFor="booking-service"
            className="mb-2 block text-sm font-semibold text-zinc-800"
          >
            What would you like to book?
          </label>
          <select
            id="booking-service"
            name="service"
            required
            defaultValue=""
            className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-zinc-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
          >
            <option value="" disabled>
              Select a service
            </option>
            <option>Car hire</option>
            <option>Guided tour</option>
            <option>Other enquiry</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="booking-start-date"
            className="mb-2 block text-sm font-semibold text-zinc-800"
          >
            Preferred start date
          </label>
          <input
            id="booking-start-date"
            name="startDate"
            type="date"
            required
            className="w-full rounded-md border border-zinc-300 px-3 py-2.5 text-zinc-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
          />
        </div>
        <div>
          <label
            htmlFor="booking-end-date"
            className="mb-2 block text-sm font-semibold text-zinc-800"
          >
            Preferred end date, if applicable
          </label>
          <input
            id="booking-end-date"
            name="endDate"
            type="date"
            className="w-full rounded-md border border-zinc-300 px-3 py-2.5 text-zinc-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="booking-guests"
            className="mb-2 block text-sm font-semibold text-zinc-800"
          >
            Number of guests
          </label>
          <input
            id="booking-guests"
            name="guests"
            type="number"
            min="1"
            max="99"
            defaultValue="1"
            required
            className="w-full rounded-md border border-zinc-300 px-3 py-2.5 text-zinc-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 sm:max-w-40"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="booking-notes"
            className="mb-2 block text-sm font-semibold text-zinc-800"
          >
            Additional details
          </label>
          <textarea
            id="booking-notes"
            name="notes"
            rows={4}
            placeholder="Tell us about your plans or any requirements."
            className="w-full rounded-md border border-zinc-300 px-3 py-2.5 text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
          />
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 border-t border-zinc-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-6 text-zinc-600">
          Your request opens WhatsApp with these details ready to send. Your
          booking is confirmed only after Falklands Explore replies.
        </p>
        <button
          type="submit"
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        >
          Continue to WhatsApp
        </button>
      </div>
    </form>
  )
}
