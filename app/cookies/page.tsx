import Link from "next/link"

export default function CookiesPage() {
  return (
    <div className="min-h-dvh bg-white">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="text-sm text-black/60 hover:text-black">← Back home</Link>
          <h1 className="mt-4 text-3xl sm:text-5xl font-light tracking-[-0.02em] text-black">Cookies Policy</h1>
          <p className="mt-3 text-sm text-black/60">How we use cookies to improve your experience on our design network.</p>
        </div>

        <div className="prose prose-neutral max-w-none">
          <h2>What Are Cookies</h2>
          <p>
            As is standard practice with professional websites, designforstartups.net uses cookies—small files downloaded to your device—to improve your experience. This policy explains what information we gather, how we use it, and why we sometimes need to store these cookies.
          </p>
          <p>
            For general information on cookies, see the <a href="https://en.wikipedia.org/wiki/HTTP_cookie" target="_blank" rel="noopener noreferrer">Wikipedia article on HTTP Cookies</a>.
          </p>

          <h2>How We Use Cookies</h2>
          <p>
            We use cookies to enhance your experience on our design network and studio platform. In most cases, there are no industry-standard options for disabling cookies without affecting the functionality they provide.
          </p>
          <p>
            We recommend leaving cookies enabled if you're unsure whether you need them, as they may be used to provide services you actively use.
          </p>

          <h2>The Cookies We Set</h2>
          
          <h3>Account and Authentication</h3>
          <p>
            If you create an account with our design network, we use cookies for signup management and general administration. These cookies are typically cleared when you log out, though some may remain to remember your preferences.
          </p>

          <h3>Newsletter and Subscriptions</h3>
          <p>
            Our platform offers newsletter subscriptions for design jobs, interviews, and resources. Cookies help us remember your subscription status and show relevant notifications.
          </p>

          <h3>Community and Directory Features</h3>
          <p>
            When you submit forms (designer profiles, job postings, contact forms), cookies may remember your details for future interactions within our network.
          </p>

          <h3>Theme Preferences</h3>
          <p>
            We store your visual theme preferences (classic, neon, rainbow) locally to provide a consistent experience across visits.
          </p>

          <h2>Third-Party Cookies</h2>
          
          <h3>Analytics and Optimization</h3>
          <p>
            We use Google Analytics to understand how designers and startups use our platform. These cookies track page visits, time spent, and engagement to help us improve the experience. For more information, see the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Analytics privacy policy</a>.
          </p>

          <h3>Payment Processing</h3>
          <p>
            Our subscription services ($10/month for designers, $200/month for startups) use Stripe for secure payment processing. Stripe may set cookies to manage transactions and prevent fraud.
          </p>

          <h3>Social Media Integration</h3>
          <p>
            We include links to social platforms (X/Twitter, LinkedIn) where designers showcase work and connect. These platforms may set cookies when you interact with their content through our site.
          </p>

          <h2>Managing Your Cookies</h2>
          <p>
            You can control cookies through your browser settings. However, disabling cookies may affect core functionality like:
          </p>
          <ul>
            <li>Account authentication and preferences</li>
            <li>Newsletter subscription management</li>
            <li>Directory search and filtering</li>
            <li>Payment and subscription processing</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have questions about our cookie policy or privacy practices, reach out:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:info@haven.engineer">info@haven.engineer</a><br />
            <strong>Platform:</strong> <a href="https://x.com/havenengineer" target="_blank" rel="noopener noreferrer">@havenengineer</a>
          </p>

          <div className="mt-8 rounded-xl border border-black/10 bg-white/70 p-6 backdrop-blur">
            <p className="text-sm text-black/60">
              <strong>Last updated:</strong> January 2025<br />
              This policy applies to our design network, job board, and community features.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
