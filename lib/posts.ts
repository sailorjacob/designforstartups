export type Post = {
  slug: string
  title: string
  excerpt: string
  tags: string[]
  image: string
  authorSlug: string
  date: string
}

export const DEMO_POSTS: Post[] = [
  {
    slug: "interview-crafting-identity-seed-stage",
    title: "Design Leader Interview: Crafting Identity at Seed Stage",
    excerpt:
      "We sat down with a founding designer to unpack how early identity systems evolve with product and team maturity.",
    tags: ["Interviews"],
    image: "/placeholder.jpg",
    authorSlug: "dfs",
    date: "2025-08-17",
  },
  {
    slug: "case-study-messaging-overhaul-trials",
    title: "Case Study: Messaging Overhaul that 3x’d Trials",
    excerpt:
      "A focused pass on narrative, tone, and visual hierarchy led to a measurable lift across the funnel.",
    tags: ["Startups", "Case Study"],
    image: "/placeholder.jpg",
    authorSlug: "dfs",
    date: "2025-08-10",
  },
  {
    slug: "playbook-founder-led-brand-30-days",
    title: "Framework: Founder-Led Brand in 30 Days",
    excerpt:
      "A guided sprint structure for seed to Series A teams to set a durable brand foundation.",
    tags: ["Principles", "Playbooks"],
    image: "/placeholder.jpg",
    authorSlug: "dfs",
    date: "2025-08-05",
  },
  {
    slug: "interview-hiring-your-first-designer",
    title: "Interview: Hiring Your First Designer",
    excerpt: "Signals, ladders, and how to scope the first 90 days for success.",
    tags: ["Interviews"],
    image: "/placeholder.jpg",
    authorSlug: "dfs",
    date: "2025-08-01",
  },
]


