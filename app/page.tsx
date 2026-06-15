"use client"
import { CustomBeam } from "@/components/custom-beam"
import { NavbarComponent } from "@/components/navbar"
import { CanvasText } from "@/components/ui/canvas-text"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Background */}
      <div
        className="absolute inset-x-0 top-0 h-screen w-full bg-cover bg-center bg-no-repeat md:h-[90vh]"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <NavbarComponent />

        {/* Hero Section */}
        <section className="flex h-screen items-center justify-center px-6 text-center md:h-[90vh]">
          <div className="max-w-2xl">
            <h1
              className="mb-6 text-4xl leading-20 font-bold text-white drop-shadow-lg md:text-6xl"
              // style={{
              //   textShadow:
              //     "0 2px 8px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3)",
              // }}
            >
              Falkland Islands Car Hire Explore at Your Own Pace
            </h1>
            <p
              className="mb-8 text-lg font-medium text-white/95 drop-shadow-md md:text-lg"
              // style={{
              //   textShadow: "0 1px 4px rgba(0, 0, 0, 0.3)",
              // }}
            >
              Hire a 4×4 or standard vehicle from Stanley and discover the
              Falkland Islands on your own terms. Short-term holiday hire,
              long-term contracts, and guided tours also available.
            </p>
          </div>
        </section>

        <CustomBeam />

        <div className="flex min-h-80 items-center justify-center p-8">
          <h2
            className={cn(
              "group relative mx-auto mt-4 max-w-2xl text-left text-4xl leading-20 font-bold tracking-tight text-balance text-neutral-600 sm:text-5xl md:text-6xl xl:text-7xl dark:text-neutral-700"
            )}
          >
            Falkland Islands Car Hire &{" "}
            <CanvasText
              text="Tour Services"
              backgroundClassName="bg-blue-600 dark:bg-blue-700"
              colors={[
                "rgba(0, 153, 255, 1)",
                "rgba(0, 153, 255, 0.9)",
                "rgba(0, 153, 255, 0.8)",
                "rgba(0, 153, 255, 0.7)",
                "rgba(0, 153, 255, 0.6)",
                "rgba(0, 153, 255, 0.5)",
                "rgba(0, 153, 255, 0.4)",
                "rgba(0, 153, 255, 0.3)",
                "rgba(0, 153, 255, 0.2)",
                "rgba(0, 153, 255, 0.1)",
              ]}
              lineGap={4}
              animationDuration={20}
            />
          </h2>
        </div>
      </div>
    </div>
  )
}
