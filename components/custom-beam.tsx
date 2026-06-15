"use client"
import React from "react"

import { twMerge } from "tailwind-merge"
import { TracingBeam } from "./ui/tracing-beam"

export function CustomBeam() {
  return (
    <TracingBeam className="px-6">
      <div className="relative mx-auto max-w-2xl pt-4 antialiased">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            {/* <h2 className="mb-4 w-fit rounded-full bg-black px-4 py-1 text-sm text-white">
              {item.badge}
            </h2> */}

            <p
              className={twMerge(
                "mb-4 text-3xl leading-10 font-bold text-neutral-800"
              )}
            >
              {item.title}
            </p>

            <div className="prose prose-sm text-justify text-sm">
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
          </div>
        ))}
      </div>
    </TracingBeam>
  )
}

const dummyContent = [
  {
    title: "East Falkland Day Trips — Wildlife & History Beyond Stanley",
    description: (
      <>
        <p>
          Venture beyond StaVenture beyond Stanley into the wild, open
          landscapes of East Falkland.
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
  },
  {
    title: "Exploring Stanley — Capital City Car Hire & Tours",
    description: (
      <>
        <p>
          Stanley is the Falklands’ compact, walkable capital but a hire car
          opens up the coastline just minutes from town. Drive yourself to Gypsy
          Cove for Magellanic penguins, Cape Pembroke Lighthouse, and Yorke Bay
          beach, or join one of our guided Stanley tours for local history and
          cultural insight included.
        </p>
        <p></p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]
