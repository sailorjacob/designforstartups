"use client"
import { useState } from "react"

export default function SubmitDesignerPage() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState(false)
  async function onSubmit(form: FormData) {
    setLoading(true)
    const body = Object.fromEntries(form.entries())
    const res = await fetch('/api/airtable/designers', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    setOk(res.ok)
    setLoading(false)
  }
  return (
    <div className="min-h-dvh bg-white">
      <div className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-3xl font-light text-black">Get listed</h1>
        <p className="mt-2 text-sm text-black/60">We’ll review and reach out with next steps.</p>
        <form action={onSubmit} className="mt-6 grid gap-3">
          <input name="name" required placeholder="Name" className="rounded-md border border-black/10 px-3 py-2 text-sm" />
          <input name="title" required placeholder="Title (e.g., Founding Designer)" className="rounded-md border border-black/10 px-3 py-2 text-sm" />
          <input name="location" placeholder="Location/Timezone" className="rounded-md border border-black/10 px-3 py-2 text-sm" />
          <input name="skills" placeholder="Skills (comma-separated)" className="rounded-md border border-black/10 px-3 py-2 text-sm" />
          <input name="rate" placeholder="Rate" className="rounded-md border border-black/10 px-3 py-2 text-sm" />
          <input name="portfolio" required placeholder="Portfolio URL" className="rounded-md border border-black/10 px-3 py-2 text-sm" />
          <button disabled={loading} className="mt-2 rounded-md border border-black/10 bg-black px-4 py-2 text-sm text-white disabled:opacity-70">{loading ? 'Submitting…' : 'Submit'}</button>
          {ok && <div className="text-sm text-green-600">Thanks! We’ll be in touch.</div>}
        </form>
      </div>
    </div>
  )
}


