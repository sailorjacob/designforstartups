import Link from "next/link"
import { FEATURED_STARTUPS } from "@/lib/startups"

export default function StartupsPage() {
  return (
    <div className="min-h-dvh bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="mb-2 text-[11px] uppercase tracking-wide text-black/50">Directory</div>
            <h1 className="text-3xl sm:text-5xl font-light tracking-[-0.02em] text-black">Startups</h1>
            <p className="mt-3 max-w-2xl text-sm text-black/60">Connect with Fortune 500s, VC-backed startups, and founding teams looking for design talent.</p>
          </div>
          <Link href="/join" className="text-sm text-black/60 hover:text-black">Get listed →</Link>
        </div>

        {/* Navigation tabs */}
        <div className="mb-8 flex gap-6 border-b border-black/10 pb-4">
          <Link href="/explore" className="text-sm text-black/60 hover:text-black">Articles</Link>
          <Link href="/designers" className="text-sm text-black/60 hover:text-black">Designers</Link>
          <Link href="/jobs" className="text-sm text-black/60 hover:text-black">Jobs</Link>
          <Link href="/startups" className="text-sm font-medium text-black border-b-2 border-black pb-2">Startups</Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_STARTUPS.map((s) => (
            <article key={s.name} className="rounded-xl border border-black/10 bg-white/70 p-5 backdrop-blur">
              <h2 className="text-lg font-light text-black">{s.name}</h2>
              <p className="mt-2 text-sm text-black/60">{s.blurb}</p>
              <div className="mt-3 text-xs text-black/50">{s.location}</div>
              <a href={s.link} className="mt-4 inline-block text-sm text-black/70 hover:text-black">Learn more →</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
