import Link from "next/link"

const posts = [
  {
    title: "Design Leader Interview: Crafting Identity at Seed Stage",
    excerpt: "We sat down with a founding designer to unpack how early identity systems evolve with product and team maturity.",
    tag: "Interview",
    href: "#",
    image: "/placeholder.jpg",
  },
  {
    title: "Case Study: Messaging Overhaul that 3x’d Trials",
    excerpt: "A focused pass on narrative, tone, and visual hierarchy led to a measurable lift across the funnel.",
    tag: "Case Study",
    href: "#",
    image: "/placeholder.jpg",
  },
  {
    title: "Framework: Founder-Led Brand in 30 Days",
    excerpt: "A guided sprint structure for seed to Series A teams to set a durable brand foundation.",
    tag: "Playbook",
    href: "#",
    image: "/placeholder.jpg",
  },
  {
    title: "Interview: Hiring Your First Designer",
    excerpt: "Signals, ladders, and how to scope the first 90 days for success.",
    tag: "Interview",
    href: "#",
    image: "/placeholder.jpg",
  },
]

export default function ExplorePage() {
  return (
    <div className="min-h-dvh bg-white">
      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-3xl sm:text-5xl font-light tracking-[-0.02em] text-black">Explore</h1>
          <Link href="/">
            <span className="text-sm text-black/60 hover:text-black">Back home →</span>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <Link key={idx} href={post.href} className="group">
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
                  <h2 className="mb-2 text-lg sm:text-xl font-light text-black">{post.title}</h2>
                  <p className="text-sm text-black/60">{post.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


