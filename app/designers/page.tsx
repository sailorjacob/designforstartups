import Link from "next/link"
import { DESIGNERS } from "@/lib/designers"

export default function DesignersPage() {
  return (
    <div className="min-h-dvh bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="mb-2 text-[11px] uppercase tracking-wide text-black/50">Directory</div>
            <h1 className="text-3xl sm:text-5xl font-light tracking-[-0.02em] text-black">Designers</h1>
            <p className="mt-3 max-w-2xl text-sm text-black/60">Curated designers for Fortune 500s, VC-backed startups, and founding teams.</p>
          </div>
          <Link href="/join" className="text-sm text-black/60 hover:text-black">Get listed →</Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DESIGNERS.map((d) => (
            <article key={d.slug} className="rounded-xl border border-black/10 bg-white/70 p-5 backdrop-blur">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-light text-black">{d.name}</h2>
                  <div className="text-sm text-black/60">{d.title}</div>
                </div>
                <span className="text-xs text-black/50">{d.location}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-black/70">
                {d.skills.map((s) => (
                  <span key={s} className="rounded-full border border-black/10 bg-white/70 px-2 py-1">{s}</span>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-black/60">
                <div>Rate: <span className="text-black/80">{d.rate}</span></div>
                <div>Availability: <span className="text-black/80">{d.availability}</span></div>
              </div>
              <a href={d.portfolio} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-black/70 hover:text-black">Portfolio →</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}


