export type ResourceLink = {
  title: string
  href: string
  category: "Inspiration" | "Tools" | "Communities" | "Learning"
  description?: string
}

export const RESOURCE_LINKS: ResourceLink[] = [
  { title: "Awwwards", href: "https://www.awwwards.com/", category: "Inspiration", description: "Award-winning websites and interviews" },
  { title: "Behance", href: "https://www.behance.net/", category: "Inspiration", description: "Portfolios and case studies" },
  { title: "Dribbble", href: "https://dribbble.com/", category: "Inspiration", description: "Shots, portfolios, hiring" },
  { title: "Muzli", href: "https://muz.li/", category: "Inspiration", description: "Curated design inspiration" },
  { title: "Designer Hangout", href: "https://designerhangout.co/", category: "Communities", description: "UX community and advice" },
  { title: "Webdesigner Depot", href: "https://www.webdesignerdepot.com/", category: "Learning", description: "Trends, news, tutorials" },
]


