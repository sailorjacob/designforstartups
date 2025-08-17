"use client"

type AccentVariant = "classic" | "neon" | "rainbow"

export default function VariantToggles() {
  function setVariant(variant: AccentVariant) {
    if (typeof window === "undefined") return
    window.localStorage.setItem("accent-variant", variant)
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
          className="h-6 w-2 rounded-sm border border-black/10"
          style={{ backgroundColor: item.color }}
          aria-label={item.title}
        />
      ))}
    </div>
  )
}


