import Link from "next/link"
import { DEMO_POSTS } from "@/lib/posts"
import { RESOURCE_LINKS } from "@/lib/resources"
import { FEATURED_STARTUPS } from "@/lib/startups"

export default function ExplorePage() {
  const neonColors = ["#39ff14", "#00f0ff", "#ff00f5", "#ffee00", "#ff007a"]
  return (
    <div className="min-h-dvh bg-white">
      <div className="relative mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2 text-[11px] uppercase tracking-wide text-black/50">Resource hub</div>
            <h1 className="text-3xl sm:text-5xl font-light tracking-[-0.02em] text-black">Explore</h1>
            <p className="mt-3 max-w-2xl text-sm text-black/60">
              Interviews with working designers, practical playbooks, and case studies for startups.
              Subscribe for weekly updates and job leads.
            </p>
          </div>
          <Link href="/" className="text-sm text-black/60 hover:text-black">Back home →</Link>
        </div>

        {/* Navigation tabs */}
        <div className="mb-8 flex gap-6 border-b border-black/10 pb-4">
          <Link href="/explore" className="text-sm font-medium text-black border-b-2 border-black pb-2">Articles</Link>
          <Link href="/designers" className="text-sm text-black/60 hover:text-black">Designers</Link>
          <Link href="/jobs" className="text-sm text-black/60 hover:text-black">Jobs</Link>
          <Link href="/startups" className="text-sm text-black/60 hover:text-black">Startups</Link>
        </div>

        {/* Featured 2x2 grid */}
        <section className="mb-12">
          <div className="grid gap-8 sm:grid-cols-2">
            {DEMO_POSTS.slice(0, 4).map((post, idx) => (
              <article key={post.slug} className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md">
                <Link href={`/explore/${post.slug}`} className="block">
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <div
                      className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundColor: neonColors[idx % neonColors.length] }}
                      aria-hidden
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="mb-3 text-xs font-medium uppercase tracking-wide text-black/50">{post.tags.join(" · ")}</div>
                  <Link href={`/explore/${post.slug}`} className="group-hover:text-black/80">
                    <h3 className="mb-3 text-xl font-semibold leading-tight text-black">{post.title}</h3>
                  </Link>
                  <p className="text-sm leading-relaxed text-black/70">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* All posts */}
        <section className="mb-16">
          <div className="mb-6">
            <h3 className="text-sm uppercase tracking-wide text-black/50">Latest</h3>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {DEMO_POSTS.slice(4).map((post, idx) => (
              <article key={post.slug} className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md">
                <Link href={`/explore/${post.slug}`} className="block">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <div
                      className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundColor: neonColors[(idx + 4) % neonColors.length] }}
                      aria-hidden
                    />
                  </div>
                </Link>
                <div className="p-5">
                  <div className="mb-3 text-xs font-medium uppercase tracking-wide text-black/50">{post.tags.join(" · ")}</div>
                  <Link href={`/explore/${post.slug}`} className="group-hover:text-black/80">
                    <h4 className="mb-2 text-lg font-semibold leading-tight text-black">{post.title}</h4>
                  </Link>
                  <p className="text-sm leading-relaxed text-black/70">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Categories quick links */}
        <section className="mb-10">
          <div className="flex flex-wrap gap-2 text-xs">
            {["Designer Interviews", "Design Principles", "Startup Stories", "Community Forum", "Job Board"].map((c) => (
              <span key={c} className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-black/70">{c}</span>
            ))}
          </div>
        </section>

        {/* Resource directory */}
        <section className="mb-16">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm uppercase tracking-wide text-black/50">Resource Directory</h3>
            <Link href="#" className="text-xs text-black/60 hover:text-black">Suggest a resource</Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {RESOURCE_LINKS.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-black/10 bg-white/70 p-4 hover:bg-white"
              >
                <div className="text-[11px] uppercase tracking-wide text-black/50">{r.category}</div>
                <div className="mt-1 text-sm text-black group-hover:underline">{r.title}</div>
                {r.description && <div className="mt-1 text-xs text-black/60">{r.description}</div>}
              </a>
            ))}
          </div>
        </section>

        {/* Featured startups */}
        <section className="mb-16">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm uppercase tracking-wide text-black/50">Featured Startups</h3>
            <Link href="/jobs" className="text-xs text-black/60 hover:text-black">See roles</Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {FEATURED_STARTUPS.map((s) => (
              <a key={s.name} href={s.link} className="rounded-lg border border-black/10 bg-white/70 p-4 hover:bg-white">
                <div className="text-sm text-black">{s.name}</div>
                <div className="mt-1 text-xs text-black/60">{s.blurb}</div>
                <div className="mt-2 text-[11px] uppercase tracking-wide text-black/50">{s.location}</div>
              </a>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="rounded-xl border border-black/10 bg-white/70 p-6 backdrop-blur sm:p-8">
          <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <div className="mb-2 text-[11px] uppercase tracking-wide text-black/50">Weekly dispatch</div>
              <h4 className="text-xl font-light text-black">Design jobs, interviews, and brand tactics</h4>
              <p className="mt-1 max-w-2xl text-sm text-black/60">One email a week. No fluff, just practical resources and new openings.</p>
            </div>
            <form
              action="https://app.convertkit.com/forms/0000000/subscriptions"
              method="post"
              className="mt-2 flex gap-2 sm:mt-0"
            >
              <input
                type="email"
                name="email_address"
                required
                placeholder="you@company.com"
                className="w-full rounded-md border border-black/10 px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:border-black/30"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-md border border-black/10 bg-black px-4 py-2 text-sm text-white hover:bg-black/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}


