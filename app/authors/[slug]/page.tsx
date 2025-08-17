import { AUTHORS } from "@/lib/authors"
import Link from "next/link"

export function generateStaticParams() {
  return AUTHORS.map((a) => ({ slug: a.slug }))
}

export default function AuthorPage({ params }: { params: { slug: string } }) {
  const author = AUTHORS.find((a) => a.slug === params.slug)
  if (!author) return null
  return (
    <div className="min-h-dvh bg-white">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link href="/explore" className="text-sm text-black/60 hover:text-black">← Explore</Link>
        <div className="mt-6 flex items-center gap-4">
          {author.avatar && <img src={author.avatar} alt={author.name} className="h-16 w-16 rounded-full border border-black/10" />}
          <div>
            <h1 className="text-3xl font-light text-black">{author.name}</h1>
            {author.title && <div className="text-sm text-black/60">{author.title}</div>}
            {author.links?.x && (
              <a href={author.links.x} target="_blank" rel="noopener noreferrer" className="text-xs text-black/60 hover:text-black">X profile →</a>
            )}
          </div>
        </div>
        {author.bio && <p className="mt-6 text-sm text-black/70">{author.bio}</p>}
      </div>
    </div>
  )
}


