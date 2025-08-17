export type Author = {
  slug: string
  name: string
  title?: string
  avatar?: string
  bio?: string
  links?: { x?: string; website?: string; linkedin?: string }
}

export const AUTHORS: Author[] = [
  {
    slug: "dfs",
    name: "Design for Startups",
    title: "Editorial",
    avatar: "/placeholder-user.jpg",
    links: { x: "https://x.com/havenengineer" },
  },
]


