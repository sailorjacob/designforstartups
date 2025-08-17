"use client"
export default function SignInPage() {
  async function signIn(provider: 'google' | 'apple') {
    // Scaffold only: wire to your auth provider (Clerk/Auth.js/Supabase) later
    window.location.href = `/api/auth/${provider}`
  }
  return (
    <div className="min-h-dvh bg-white">
      <div className="mx-auto max-w-sm px-6 py-12">
        <h1 className="text-2xl font-light text-black">Sign in</h1>
        <div className="mt-6 grid gap-3">
          <button onClick={() => signIn('google')} className="rounded-md border border-black/10 bg-white px-4 py-2 text-sm hover:bg-black/5">Continue with Google</button>
          <button onClick={() => signIn('apple')} className="rounded-md border border-black/10 bg-white px-4 py-2 text-sm hover:bg-black/5">Continue with Apple</button>
        </div>
      </div>
    </div>
  )
}


