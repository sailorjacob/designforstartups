import Link from "next/link"
import { DEMO_POSTS } from "@/lib/posts"

export default function ExplorePage() {
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

        {/* Featured */}
        <section className="mb-10">
          <div className="grid items-stretch gap-6 sm:grid-cols-2">
            <Link href={`/explore/${DEMO_POSTS[0].slug}`} className="group">
              <article className="h-full overflow-hidden rounded-xl border border-black/10 bg-white/70 backdrop-blur">
                <div className="aspect-[16/9] w-full overflow-hidden bg-black/5">
                  <img src={DEMO_POSTS[0].image} alt={DEMO_POSTS[0].title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="mb-2 text-[11px] uppercase tracking-wide text-black/50">{DEMO_POSTS[0].tag}</div>
                  <h2 className="mb-2 text-xl sm:text-2xl font-light text-black">{DEMO_POSTS[0].title}</h2>
                  <p className="text-sm text-black/60">{DEMO_POSTS[0].excerpt}</p>
                </div>
              </article>
            </Link>
            <div className="grid gap-6">
              {DEMO_POSTS.slice(1, 3).map((post, idx) => (
                <Link key={idx} href={`/explore/${post.slug}`} className="group">
                  <article className="overflow-hidden rounded-xl border border-black/10 bg-white/70 backdrop-blur">
                    <div className="aspect-[16/9] w-full overflow-hidden bg-black/5">
                      <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="mb-2 text-[11px] uppercase tracking-wide text-black/50">{post.tag}</div>
                      <h3 className="mb-2 text-lg sm:text-xl font-light text-black">{post.title}</h3>
                      <p className="text-sm text-black/60">{post.excerpt}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All posts */}
        <section className="mb-16">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm uppercase tracking-wide text-black/50">Latest</h3>
            <Link href="#" className="text-xs text-black/60 hover:text-black">RSS</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DEMO_POSTS.map((post, idx) => (
              <Link key={idx} href={`/explore/${post.slug}`} className="group">
                <article className="overflow-hidden rounded-xl border border-black/10 bg-white/70 backdrop-blur transition-shadow hover:shadow-sm">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-black/5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="mb-2 text-[11px] uppercase tracking-wide text-black/50">{post.tag}</div>
                    <h4 className="mb-2 text-lg sm:text-xl font-light text-black">{post.title}</h4>
                    <p className="text-sm text-black/60">{post.excerpt}</p>
                  </div>
                </article>
              </Link>
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


