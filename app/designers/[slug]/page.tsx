import { DESIGNERS } from "@/lib/designers"
import Link from "next/link"

export function generateStaticParams() {
  return DESIGNERS.map((d) => ({ slug: d.slug }))
}

export default function DesignerProfilePage({ params }: { params: { slug: string } }) {
  const d = DESIGNERS.find((x) => x.slug === params.slug)
  if (!d) return null
  return (
    <div className="min-h-dvh bg-white">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link href="/designers" className="text-sm text-black/60 hover:text-black">← Designers</Link>
        <header className="mt-6">
          <h1 className="text-3xl sm:text-4xl font-light text-black">{d.name}</h1>
          <div className="mt-1 text-sm text-black/60">{d.title} · {d.location}</div>
        </header>
        <section className="mt-6">
          <div className="text-xs uppercase tracking-wide text-black/50">Skills</div>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            {d.skills.map((s) => (
              <span key={s} className="rounded-full border border-black/10 bg-white/70 px-2 py-1">{s}</span>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-black/70">
            <div>Rate: <span className="text-black/90">{d.rate}</span></div>
            <div>Availability: <span className="text-black/90">{d.availability}</span></div>
          </div>
          <a href={d.portfolio} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm text-black/70 hover:text-black">Portfolio →</a>
        </section>
      </div>
    </div>
  )
}


