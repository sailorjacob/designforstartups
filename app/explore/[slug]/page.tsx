import { DEMO_POSTS } from "@/lib/posts"
import { AUTHORS } from "@/lib/authors"
import Link from "next/link"

type Params = { params: { slug: string } }

export function generateStaticParams() {
  return DEMO_POSTS.map((p) => ({ slug: p.slug }))
}

export default function ArticlePage({ params }: Params) {
  const post = DEMO_POSTS.find((p) => p.slug === params.slug)
  if (!post) return null

  const author = AUTHORS.find((a) => a.slug === post.authorSlug)
  return (
    <div className="min-h-dvh bg-white">
      <article className="relative mx-auto max-w-3xl px-6 py-12">
        <Link href="/explore" className="text-sm text-black/60 hover:text-black">← Back to Explore</Link>
        <header className="mt-6">
          <div className="mb-3 text-[11px] uppercase tracking-wide text-black/50">{post.tags.join(" · ")}</div>
          <h1 className="text-3xl sm:text-5xl font-light tracking-[-0.02em] text-black">{post.title}</h1>
          <div className="mt-3 flex items-center gap-3 text-xs text-black/50">
            {author?.avatar && (
              <span className="h-6 w-6 rounded-full border border-black/10" style={{ backgroundColor: "#39ff14" }} aria-hidden />
            )}
            <span>{author?.name ?? ""}</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
        </header>

        <div className="mt-8 overflow-hidden rounded-xl border border-black/10">
          <div className="aspect-[16/9] w-full" style={{ backgroundColor: "#00f0ff" }} aria-hidden />
        </div>

        <section className="prose prose-neutral mt-8 max-w-none">
          <p>We sat down with a founding designer to unpack how early identity systems evolve with product and team maturity. Below is a lightly edited transcript and distilled principles.</p>

          <h2>Context</h2>
          <p>Seed-stage, 6-person team, B2B workflow tool. No in-house design prior. Goals: clarify narrative, establish credibility, and speed up sales conversations.</p>

          <h2>Process</h2>
          <ul>
            <li>Story-first: align on audience, promise, and before/after outcomes</li>
            <li>System pass: typography, color, components, and usage rules</li>
            <li>Landing flow: reduce cognitive load, increase signal-to-noise</li>
          </ul>

          <h2>What changed</h2>
          <ul>
            <li>Messaging: shifted from feature soup to outcome-led narrative</li>
            <li>Design system: created tokens and a scalable component library</li>
            <li>Evidence: added quantified proof, customer quotes, and demos</li>
          </ul>

          <h2>Results</h2>
          <p>+34% demo request rate, faster sales cycles, and clearer internal alignment.</p>

          <h2>Interview prompts to reuse</h2>
          <ol>
            <li>What constraint or insight changed your approach?</li>
            <li>What did you remove to make the work stronger?</li>
            <li>Where did the process break and how did you adapt?</li>
          </ol>
        </section>

        <footer className="mt-12 border-t border-black/10 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/explore" className="text-sm text-black/60 hover:text-black">← All posts</Link>
            <Link href="/explore" className="text-sm text-black/60 hover:text-black">Next up: More interviews →</Link>
          </div>
          <div className="mt-6 rounded-lg border border-black/10 bg-white/70 p-4">
            <div className="text-[11px] uppercase tracking-wide text-black/50">Weekly dispatch</div>
            <div className="mt-1 text-sm text-black">Design jobs, interviews, and brand tactics</div>
            <form action="https://app.convertkit.com/forms/0000000/subscriptions" method="post" className="mt-3 flex gap-2">
              <input type="email" name="email_address" required placeholder="you@company.com" className="w-full rounded-md border border-black/10 px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:border-black/30" />
              <button type="submit" className="whitespace-nowrap rounded-md border border-black/10 bg-black px-4 py-2 text-sm text-white hover:bg-black/90">Subscribe</button>
            </form>
          </div>
        </footer>
      </article>
    </div>
  )
}


