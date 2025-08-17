import { DEMO_POSTS } from "@/lib/posts"

export async function GET() {
  const base = "https://designforstartups.net"
  const staticPaths = ["/", "/explore", "/join", "/jobs", "/community"]
  const postPaths = DEMO_POSTS.map((p) => `/explore/${p.slug}`)
  const urls = [...staticPaths, ...postPaths]
    .map((path) => `<url><loc>${base}${path}</loc></url>`) 
    .join("")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } })
}


