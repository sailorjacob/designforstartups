import { DEMO_POSTS } from "@/lib/posts"

export async function GET() {
  const items = DEMO_POSTS.map((p) => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>https://designforstartups.net/explore/${p.slug}</link>
      <guid>https://designforstartups.net/explore/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description><![CDATA[${p.excerpt}]]></description>
    </item>
  `).join("")

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Design for Startups</title>
      <link>https://designforstartups.net</link>
      <description>Interviews, playbooks, and case studies for designers and startups</description>
      ${items}
    </channel>
  </rss>`

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } })
}


