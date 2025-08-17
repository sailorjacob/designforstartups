"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


type AccentVariant = "classic" | "neon" | "rainbow"

function getInitialVariant(): AccentVariant {
  if (typeof window === "undefined") return "rainbow"
  const stored = window.localStorage.getItem("accent-variant") as AccentVariant | null
  return stored === "neon" || stored === "classic" || stored === "rainbow" ? stored : "rainbow"
}

export default function AccentOverlay() {
  const [variant, setVariant] = useState<AccentVariant>("rainbow")

  useEffect(() => {
    setVariant(getInitialVariant())
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as AccentVariant
      console.log("AccentOverlay received variant:", detail)
      setVariant(detail)
    }
    document.addEventListener("accent-variant", handler as EventListener)
    return () => document.removeEventListener("accent-variant", handler as EventListener)
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("accent-variant", variant)
    }
  }, [variant])

  const isClassic = variant === "classic"
  const isNeon = variant === "neon"

  return (
    <>
      {/* Accent shape */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-[70vmin] w-[70vmin]">
          {isClassic ? (
            <>
              <div className="absolute inset-0 rounded-[48%_52%_47%_53%/40%_46%_54%_60%] bg-[radial-gradient(circle_at_30%_30%,_oklch(0.82_0.21_24)_0%,transparent_60%),radial-gradient(circle_at_70%_60%,_oklch(0.93_0.03_280)_0%,transparent_55%)] opacity-20 blur-2xl" />
              <div className="absolute inset-0 animate-[spin_40s_linear_infinite] rounded-[48%_52%_47%_53%/40%_46%_54%_60%] bg-[conic-gradient(from_120deg,_oklch(0.18_0_0)_0%,_oklch(0.22_0_0)_35%,_oklch(0.18_0_0)_70%,_oklch(0.18_0_0)_100%)] shadow-[0_0_120px_-30px_rgba(0,0,0,0.3)]" />
              <div className="absolute inset-8 rounded-[40%_60%_50%_50%/50%_50%_40%_60%] bg-[radial-gradient(circle_at_50%_50%,_oklch(0.7_0.24_20)_0%,_transparent_55%)] opacity-30" />
            </>
          ) : isNeon ? (
            <>
              {/* Neon ambient glows (silver-blue + neon green) */}
              <div className="absolute inset-0 rounded-[48%_52%_47%_53%/40%_46%_54%_60%] bg-[radial-gradient(circle_at_28%_32%,_oklch(0.92_0.12_230)_0%,transparent_60%),radial-gradient(circle_at_72%_62%,_oklch(0.9_0.27_145)_0%,transparent_55%)] opacity-30 blur-2xl" />
              {/* Conic core with two-tone sweep */}
              <div className="absolute inset-0 animate-[spin_40s_linear_infinite] rounded-[48%_52%_47%_53%/40%_46%_54%_60%] bg-[conic-gradient(from_120deg,_oklch(0.9_0.10_230)_0%,_oklch(0.88_0.26_145)_35%,_oklch(0.92_0.12_230)_70%,_oklch(0.9_0.10_230)_100%)] shadow-[0_0_160px_-30px_rgba(0,0,0,0.25)]" />
              {/* Inner soft glow biased to blue-silver */}
              <div className="absolute inset-8 rounded-[40%_60%_50%_50%/50%_50%_40%_60%] bg-[radial-gradient(circle_at_50%_50%,_oklch(0.96_0.08_230)_0%,_transparent_58%)] opacity-35" />
            </>
          ) : (
            <>
              {/* Rainbow neon (original multi‑hue sweep) */}
              <div className="absolute inset-0 rounded-[48%_52%_47%_53%/40%_46%_54%_60%] bg-[radial-gradient(circle_at_28%_32%,_oklch(0.9_0.34_140)_0%,transparent_60%),radial-gradient(circle_at_72%_62%,_oklch(0.92_0.35_320)_0%,transparent_55%)] opacity-30 blur-2xl" />
              <div className="absolute inset-0 animate-[spin_36s_linear_infinite] rounded-[48%_52%_47%_53%/40%_46%_54%_60%] bg-[conic-gradient(from_120deg,_oklch(0.86_0.33_140)_0%,_oklch(0.85_0.32_200)_25%,_oklch(0.86_0.33_320)_50%,_oklch(0.88_0.28_20)_75%,_oklch(0.86_0.33_140)_100%)] shadow-[0_0_160px_-30px_rgba(0,0,0,0.25)]" />
              <div className="absolute inset-8 rounded-[40%_60%_50%_50%/50%_50%_40%_60%] bg-[radial-gradient(circle_at_50%_50%,_oklch(0.93_0.3_200)_0%,_transparent_58%)] opacity-35" />
            </>
          )}
        </div>
      </div>

      {/* Controls (about/contact only) */}
      <div className="pointer-events-auto absolute bottom-8 right-8 z-20 flex items-center gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="px-3 py-2 text-xs">About</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle className="font-light">Design, for startups</DialogTitle>
              <DialogDescription className="text-black/60">
                We craft brand identities for founders who value clarity, restraint, and long‑term equity.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="px-3 py-2 text-xs">Contact</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle className="font-light">Get in touch</DialogTitle>
              <DialogDescription className="text-black/60">
                info@haven.engineer • Singapore / Remote
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-2">
              <a href="mailto:info@haven.engineer" className="flex-1 rounded-md border border-black/10 px-4 py-2 text-center text-sm hover:bg-black hover:text-white transition-colors">Email</a>
              <a href="#my-cal-inline-secret" className="flex-1 rounded-md border border-black/10 px-4 py-2 text-center text-sm hover:bg-black hover:text-white transition-colors">Book</a>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}


