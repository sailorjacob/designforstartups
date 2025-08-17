import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_DESIGNERS } from "@/lib/config"

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const res = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_DESIGNERS)}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ records: [{ fields: payload }] }),
    })
    const data = await res.json()
    return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" }, status: res.ok ? 200 : 400 })
  } catch (e) {
    return new Response(JSON.stringify({ error: "invalid" }), { status: 400 })
  }
}


