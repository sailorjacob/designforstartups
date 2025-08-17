// Minimal scaffold for Stripe checkout URL creation. Replace with real Stripe keys/server on deploy.
export async function POST(request: Request) {
  const { plan } = await request.json().catch(() => ({ plan: "designer" }))
  const priceId = plan === "startup" ? "price_startup_200" : "price_designer_10"

  // In real implementation, call Stripe checkout.sessions.create and return the URL
  const dummyUrl = `https://checkout.stripe.com/pay/${priceId}`
  return new Response(JSON.stringify({ url: dummyUrl }), {
    headers: { "Content-Type": "application/json" },
  })
}


