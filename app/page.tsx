import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import AccentOverlay from "@/components/accent-overlay"
import Script from "next/script"

export default function HomePage() {
  const bookingUrl = "https://cal.com/designforstartups/secret";
  return (
    <div className="h-dvh overflow-hidden bg-white">
      <div className="relative h-full w-full">
        {/* Brand mark */}
        <div className="absolute left-8 top-8 z-20 text-sm tracking-widest text-black/70">
          DESIGN FOR STARTUPS
        </div>

        <AccentOverlay />

        {/* Center content */}
        <main className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-8 text-center">
          {/* Soft contrast halo for readability */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(closest-side,_white_0%,_transparent_70%)] opacity-70 blur-2xl" />
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs text-black/60 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            bespoke brand & identity
          </div>

          <h1 className="text-6xl md:text-8xl font-light leading-[0.95] tracking-[-0.02em] text-black">
            You need design and branding help.
            <br />
            <span className="font-extralight text-black/70">This is your answer.</span>
          </h1>

          <div className="mt-10 flex items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="px-8 bg-white/70 hover:bg-white">Get a 15‑min audit</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-light">Free Branding Audit</DialogTitle>
                  <DialogDescription className="text-black/60">
                    Share your site or deck. We’ll send 3 actionable recommendations within 24 hours.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <a href="mailto:info@haven.engineer?subject=Branding%20Audit" className="block rounded-md border border-black/10 px-4 py-3 text-center text-sm hover:bg-black hover:text-white transition-colors">Email: info@haven.engineer</a>
                  <div id="my-cal-inline-secret" className="h-[60vh] w-full overflow-auto rounded-md border border-black/10" />
                  <Script id="cal-inline-embed" strategy="afterInteractive">{`
  (function (C, A, L) {
    let p = function (a, ar) { a.q.push(ar); };
    let d = C.document; C.Cal = C.Cal || function () {
      let cal = C.Cal; let ar = arguments;
      if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const namespace = ar[1]; api.q = api.q || [];
        if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); }
        else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");
  Cal("init", "secret", { origin: "https://app.cal.com" });
  Cal.ns.secret("inline", {
    elementOrSelector: "#my-cal-inline-secret",
    config: { "layout": "month_view" },
    calLink: "designforstartups/secret",
  });
  Cal.ns.secret("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
                  `}</Script>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog className="hidden">
              <DialogTrigger asChild>
                <Button variant="outline" className="px-8">View offerings</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="font-light">Straightforward Pricing</DialogTitle>
                  <DialogDescription className="text-black/60">Fundamentals that launch with confidence.</DialogDescription>
                </DialogHeader>
                <div className="rounded-xl border border-black/10 p-6 sm:p-8 bg-white/70 backdrop-blur">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <div className="text-sm text-black/60">Growth</div>
                        <div className="text-[11px] uppercase tracking-wide text-black/50">starting at</div>
                      </div>
                      <div className="text-3xl sm:text-4xl font-light mt-1">$1,000/mo</div>
                    </div>
                    <div className="text-sm text-black/70 grid gap-2 sm:grid-cols-2 sm:gap-4">
                      <div>
                        <ul className="space-y-1">
                          <li>Design system</li>
                          <li>Monthly refinement</li>
                          <li>Priority support</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-1">
                          <li>Messaging alignment</li>
                          <li>Asset updates</li>
                          <li>Founder-first cadence</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </main>

        {/* Controls moved into AccentOverlay */}

        {/* Frame */}
        <div className="pointer-events-none absolute inset-0 rounded-none md:rounded-[24px] border border-black/[0.06]" />
      </div>
    </div>
  )
}
