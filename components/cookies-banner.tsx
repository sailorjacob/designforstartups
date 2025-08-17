"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CookiesBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookies-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookies-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/10 bg-white/95 p-4 backdrop-blur">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <p className="text-sm text-black/70">
              We use cookies to enhance your experience, analyze site usage, and remember your preferences. 
              <Link href="/cookies" className="ml-1 underline hover:text-black">Learn more</Link>
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={declineCookies} className="text-xs">
              Decline
            </Button>
            <Button onClick={acceptCookies} className="bg-black text-white text-xs hover:bg-black/90">
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
