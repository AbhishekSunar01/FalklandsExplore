"use client"
import React from "react"

import { twMerge } from "tailwind-merge"
import { TracingBeam } from "@/components/ui/tracing-beam"

export function CustomBeam() {
  return (
    <TracingBeam className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl antialiased">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-16 last:mb-0 md:mb-20">
            {/* <h2 className="mb-4 w-fit rounded-full bg-black px-4 py-1 text-sm text-white">
              {item.badge}
            </h2> */}
            {index < 2 ? (
              <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:gap-10">
                <div className="flex h-full w-full items-center justify-start">
                  <div>
                    <p className="mb-6 max-w-2xl text-3xl leading-tight font-semibold text-neutral-900 md:text-4xl">
                      <span role="heading" aria-level={index === 0 ? 2 : 3}>
                        {item.title}
                      </span>
                    </p>

                    <div className="prose max-w-2xl text-left text-base leading-7 text-zinc-700 md:text-lg">
                      {item.description}
                    </div>

                    <a
                      href="/attractions"
                      className="mt-10 inline-flex items-center gap-4 rounded-lg border border-zinc-700 px-10 py-4 text-sm font-semibold tracking-[0.22em] text-emerald-700 uppercase transition hover:bg-zinc-100"
                      aria-label="Explore Falkland Islands attractions"
                    >
                      CHECK ATTRACTIONS
                      <span aria-hidden="true" className="text-xl leading-none">
                        →
                      </span>
                    </a>
                  </div>
                </div>

                <div className="grid w-full max-w-5xl grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div className="h-110 overflow-hidden rounded-lg bg-zinc-100 md:-mt-4">
                    {item?.image ? (
                      <img
                        src={item.image}
                        alt={item.imageAlt ?? item.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center border border-dashed border-zinc-300 text-sm font-medium tracking-wide text-zinc-500 uppercase">
                        Image Placeholder
                      </div>
                    )}
                  </div>

                  <div className="h-110 overflow-hidden rounded-lg bg-zinc-100 md:mt-6">
                    {item?.imageSecondary ? (
                      <img
                        src={item.imageSecondary}
                        alt={
                          item.imageSecondaryAlt ??
                          `${item.title} — secondary view`
                        }
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center border border-dashed border-zinc-300 text-sm font-medium tracking-wide text-zinc-500 uppercase">
                        Image Placeholder
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <p
                  className={twMerge(
                    "mb-4 text-3xl leading-10 font-bold text-neutral-800"
                  )}
                >
                  {item.title}
                </p>

                <div className="prose prose-sm max-w-3xl text-justify text-sm md:text-base">
                  {item?.image && (
                    <img
                      src={item.image}
                      alt="blog thumbnail"
                      height="600"
                      width="600"
                      className="mb-4 rounded-lg object-cover"
                    />
                  )}
                  {item.description}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </TracingBeam>
  )
}

const dummyContent = [
  {
    title: "East Falkland Day Trips — Wildlife & History Beyond Stanley",
    imageAlt: "Penguins and wildlife at Volunteer Point, East Falkland Islands",
    imageSecondaryAlt: "4x4 vehicle on rural tracks in East Falkland",
    description: (
      <>
        <p>
          Venture beyond Stanley into the wild, open landscapes of East
          Falkland.
        </p>
        <p>
          Our self-drive hire vehicles are fully equipped for rural tracks,
          getting you to remote spots like Volunteer Point, Bertha’s Beach, and
          Goose Green that no town bus will reach.
        </p>
        <p>
          Prefer a guide? We also offer full-day and half-day tours covering
          wildlife safaris, 1982 battlefield sites, and coastal hikes, ideal if
          you’d rather leave the navigation to us.
        </p>
      </>
    ),
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageSecondary:
      "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Exploring Stanley — Capital City Car Hire & Tours",
    imageAlt: "Stanley harbour and waterfront, Falkland Islands capital",
    imageSecondaryAlt:
      "Gypsy Cove Magellanic penguins near Stanley, Falkland Islands",
    description: (
      <>
        <p>
          Stanley is the Falklands’ compact, walkable capital but a hire car
          opens up the coastline just minutes from town. Drive yourself to Gypsy
          Cove for Magellanic penguins, Cape Pembroke Lighthouse, and Yorke Bay
          beach, or join one of our guided Stanley tours for local history and
          cultural insight included.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageSecondary:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1200",
  },
]
