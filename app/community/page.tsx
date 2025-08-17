export default function CommunityPage() {
  return (
    <div className="min-h-dvh bg-white">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-3xl sm:text-5xl font-light tracking-[-0.02em] text-black">Community</h1>
        <p className="mt-3 max-w-2xl text-sm text-black/60">Join AMAs, sprints, and a private space for designers and founders. We’ll host in Slack/Discord and share events via the newsletter.</p>

        <div className="mt-8 rounded-xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <ul className="grid gap-3 text-sm text-black/70">
            <li>Monthly AMA with design leaders</li>
            <li>Portfolio and case study reviews</li>
            <li>Startup project requests and intros</li>
            <li>City meetups and virtual co-working</li>
          </ul>
          <a href="/join" className="mt-6 inline-block rounded-md border border-black/10 bg-black px-4 py-2 text-sm text-white hover:bg-black/90">Join the community</a>
        </div>
      </div>
    </div>
  )
}


