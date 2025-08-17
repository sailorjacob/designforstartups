"use client"

import { useEffect, useState } from "react"

type AccentVariant = "classic" | "neon" | "rainbow"

function getInitialVariant(): AccentVariant {
  if (typeof window === "undefined") return "rainbow"
  const stored = window.localStorage.getItem("accent-variant") as AccentVariant | null
  return stored === "neon" || stored === "classic" || stored === "rainbow" ? stored : "rainbow"
}

export default function VariantToggles() {
  const [activeVariant, setActiveVariant] = useState<AccentVariant>("rainbow")

  useEffect(() => {
    setActiveVariant(getInitialVariant())
  }, [])

  function setVariant(variant: AccentVariant) {
    if (typeof window === "undefined") return
    window.localStorage.setItem("accent-variant", variant)
    setActiveVariant(variant)
    document.dispatchEvent(new CustomEvent("accent-variant", { detail: variant }))
  }

  const items: { v: AccentVariant; color: string; title: string }[] = [
    { v: "classic", color: "#0f172a", title: "Classic" },
    { v: "neon", color: "#39ff14", title: "Neon" },
    { v: "rainbow", color: "#ff00f5", title: "Rainbow" },
  ]

  return (
    <div className="flex items-center gap-2" aria-label="Accent theme selector">
      {items.map((item) => (
        <button
          key={item.v}
          onClick={() => setVariant(item.v)}
          title={item.title}
          className={`h-6 w-2 rounded-sm border transition-all ${
            activeVariant === item.v 
              ? "border-black/30 shadow-sm scale-110" 
              : "border-black/10 hover:border-black/20"
          }`}
          style={{ backgroundColor: item.color }}
          aria-label={item.title}
        />
      ))}
    </div>
  )
}


