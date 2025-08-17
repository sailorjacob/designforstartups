import Link from "next/link"

export default function JoinPage() {
  return (
    <div className="min-h-dvh bg-white">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-5xl font-light tracking-[-0.02em] text-black">Join the Community</h1>
          <p className="mt-3 max-w-2xl text-sm text-black/60">Designers get jobs, resources, and a curated network. Startups get access to vetted designers and priority intros.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-black/10 bg-white/70 p-6 backdrop-blur">
            <div className="text-[11px] uppercase tracking-wide text-black/50">For Designers</div>
            <div className="mt-1 text-2xl font-light">$10 / month</div>
            <ul className="mt-4 space-y-2 text-sm text-black/70">
              <li>Job board + alerts</li>
              <li>Community access</li>
              <li>Templates + playbooks</li>
            </ul>
            <a href="#" className="mt-6 inline-block rounded-md border border-black/10 bg-black px-4 py-2 text-sm text-white hover:bg-black/90">Subscribe</a>
          </div>

          <div className="rounded-xl border border-black/10 bg-white/70 p-6 backdrop-blur">
            <div className="text-[11px] uppercase tracking-wide text-black/50">For Startups</div>
            <div className="mt-1 text-2xl font-light">$200 / month</div>
            <ul className="mt-4 space-y-2 text-sm text-black/70">
              <li>Post jobs and projects</li>
              <li>Priority designer intros</li>
              <li>Hiring playbooks</li>
            </ul>
            <a href="#" className="mt-6 inline-block rounded-md border border-black/10 bg-black px-4 py-2 text-sm text-white hover:bg-black/90">Subscribe</a>
          </div>
        </div>

        <div className="mt-10 text-sm text-black/60">
          Prefer annual billing or custom tiers? <Link href="/contact" className="underline">Contact us</Link>.
        </div>
      </div>
    </div>
  )
}


