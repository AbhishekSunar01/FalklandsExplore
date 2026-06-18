"use client"
import { Star } from "lucide-react"
import React, { useState } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Product Lead @ Linear",
    quote:
      "Finding a system that balances aesthetic purity with functional robustness is rare. This library is the first one I've truly enjoyed using in production.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Design Director @ Stripe",
    quote:
      "The attention to detail is remarkable. Every interaction feels intentional and polished. It's raised the bar for our entire design system.",
    rating: 5,
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Engineering Manager @ Figma",
    quote:
      "Performance meets elegance. We've integrated this across our platform and the developer experience has been phenomenal.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emma Williams",
    role: "CTO @ Notion",
    quote:
      "This is what modern UI libraries should aspire to be. Clean, powerful, and delightful to work with every single day.",
    rating: 5,
  },
]

export const StackTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <section className="font-manrope relative w-full bg-linear-to-br from-zinc-50 to-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <article>
          <h2 className="mb-4 text-5xl font-bold tracking-tight text-zinc-700">
            Customer Stories
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600">
            Hear from industry leaders who have transformed their products with
            our design system
          </p>
        </article>
        <div className="relative flex h-110 items-center justify-center">
          {testimonials.map((testimonial, index) => {
            const position =
              (index - activeIndex + testimonials.length) % testimonials.length
            const isActive = position === 0
            const isVisible = position < 3

            return (
              <motion.div
                key={testimonial.id}
                className="absolute w-full"
                initial={false}
                animate={{
                  scale: isActive ? 1 : position === 1 ? 0.95 : 0.9,
                  y: isActive ? 0 : position === 1 ? 16 : 32,
                  x: isActive ? 0 : position === 1 ? 0 : 2,
                  opacity: isVisible ? 1 : 0,
                  zIndex: testimonials.length - position,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.32, 0.72, 0, 1],
                }}
                style={{
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <div
                  className={`relative rounded-3xl border bg-white p-10 shadow-xl ${isActive ? "border-zinc-200" : position === 1 ? "border-zinc-300 bg-zinc-50" : "border-zinc-300 bg-zinc-100"} `}
                >
                  <div className="mb-10 flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-2xl bg-zinc-900 shadow-md" />
                      <div>
                        <p className="text-base font-bold text-zinc-900">
                          {testimonial.name}
                        </p>
                        <p className="text-xs font-medium tracking-wider text-zinc-500 uppercase">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} className="text-sm text-yellow-400">
                          <Star fill="currentColor" size={16} />
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="mb-10 text-xl leading-relaxed text-zinc-700 italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center justify-between border-t border-zinc-100 pt-6">
                    <span className="text-xs font-semibold tracking-widest text-zinc-300 uppercase">
                      Verified Review
                    </span>
                    <button className="text-xs font-semibold hover:underline">
                      Read full story →
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Navigation Controls */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            onClick={handlePrevious}
            className="flex items-center gap-0 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5.5 12.002H19" />
              <path d="M10.9999 18.002C10.9999 18.002 4.99998 13.583 4.99997 12.0019C4.99996 10.4208 11 6.00195 11 6.00195" />
            </svg>{" "}
            Previous
          </Button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-zinc-900" : "w-2 bg-zinc-300 hover:bg-zinc-400"} `}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            className="flex items-center gap-0 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Next{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18.5 12L4.99997 12" />
              <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}
