export type Designer = {
  slug: string
  name: string
  title: string
  location: string
  rate: string
  availability: string
  skills: string[]
  portfolio: string
}

export const DESIGNERS: Designer[] = [
  {
    slug: "alex-ramirez",
    name: "Alex Ramirez",
    title: "Brand + Product Designer",
    location: "NYC, ET",
    rate: "$120/hr",
    availability: "Open this month",
    skills: ["Brand", "Design Systems", "Web"],
    portfolio: "https://example.com",
  },
  {
    slug: "mona-khan",
    name: "Mona Khan",
    title: "Founding Designer",
    location: "Remote, PT",
    rate: "$8k/mo retainer",
    availability: "2 slots",
    skills: ["Messaging", "Web", "Motion"],
    portfolio: "https://example.com",
  },
  {
    slug: "li-zhang",
    name: "Li Zhang",
    title: "Senior Product Designer",
    location: "Remote, CET",
    rate: "$140/hr",
    availability: "Waitlist",
    skills: ["SaaS", "Growth", "UX"],
    portfolio: "https://example.com",
  },
]


