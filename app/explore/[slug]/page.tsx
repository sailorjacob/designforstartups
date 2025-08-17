import { DEMO_POSTS } from "@/lib/posts"
import Link from "next/link"

type Params = { params: { slug: string } }

export function generateStaticParams() {
  return DEMO_POSTS.map((p) => ({ slug: p.slug }))
}

export default function ArticlePage({ params }: Params) {
  const post = DEMO_POSTS.find((p) => p.slug === params.slug)
  if (!post) return null

  return (
    <div className="min-h-dvh bg-white">
      <article className="relative mx-auto max-w-3xl px-6 py-12">
        <Link href="/explore" className="text-sm text-black/60 hover:text-black">← Back to Explore</Link>
        <header className="mt-6">
          <div className="mb-3 text-[11px] uppercase tracking-wide text-black/50">{post.tag}</div>
          <h1 className="text-3xl sm:text-5xl font-light tracking-[-0.02em] text-black">{post.title}</h1>
          <div className="mt-3 text-xs text-black/50">{post.author} · {post.date}</div>
        </header>

        <div className="mt-8 overflow-hidden rounded-xl border border-black/10">
          <img src={post.image} alt="" className="h-auto w-full object-cover" />
        </div>

        <section className="prose prose-neutral mt-8 max-w-none">
          <p>
            This is a demo article layout. Replace with your CMS content or generated draft. For interviews, open with
            the designer’s context and unique constraints, then extract principles and repeatable patterns.
          </p>
          <h2>Key principles</h2>
          <ul>
            <li>Clarify audience, tone, and the core job of the page</li>
            <li>Reduce cognitive load via hierarchy, chunking, and progressive disclosure</li>
            <li>Show outcomes with before/after and quantified impact where possible</li>
          </ul>
          <h2>Interview prompts</h2>
          <ol>
            <li>What constraint or insight changed your approach?</li>
            <li>What did you remove to make the work stronger?</li>
            <li>Where did the process break and how did you adapt?</li>
          </ol>
          <p>
            Close with links to the designer, relevant artifacts, and a clear CTA to subscribe or join the community.
          </p>
        </section>

        <footer className="mt-12 border-t border-black/10 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/explore" className="text-sm text-black/60 hover:text-black">← All posts</Link>
            <Link href="/explore" className="text-sm text-black/60 hover:text-black">Next up: More interviews →</Link>
          </div>
        </footer>
      </article>
    </div>
  )
}


