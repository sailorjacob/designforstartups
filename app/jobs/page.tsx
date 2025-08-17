import Link from "next/link"

export default function JobsPage() {
  return (
    <div className="min-h-dvh bg-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="mb-2 text-[11px] uppercase tracking-wide text-black/50">Job Board</div>
            <h1 className="text-3xl sm:text-5xl font-light tracking-[-0.02em] text-black">Open Roles</h1>
            <p className="mt-3 max-w-2xl text-sm text-black/60">Curated design roles from early startups to growth-stage companies.</p>
          </div>
          <Link href="/join" className="text-sm text-black/60 hover:text-black">Post a job →</Link>
        </div>

        {/* Navigation tabs */}
        <div className="mb-8 flex gap-6 border-b border-black/10 pb-4">
          <Link href="/explore" className="text-sm text-black/60 hover:text-black">Articles</Link>
          <Link href="/designers" className="text-sm text-black/60 hover:text-black">Designers</Link>
          <Link href="/jobs" className="text-sm font-medium text-black border-b-2 border-black pb-2">Jobs</Link>
          <Link href="/startups" className="text-sm text-black/60 hover:text-black">Startups</Link>
        </div>

        <div className="grid gap-3">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-lg border border-black/10 bg-white/70 p-4 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm">Founding Designer</div>
                  <div className="text-xs text-black/60">Seed-stage SaaS · Remote · $120–160k + equity</div>
                </div>
                <a href="#" className="text-sm text-black/60 hover:text-black">View →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


