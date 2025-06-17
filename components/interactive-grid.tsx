"use client"

import { useState, useEffect } from "react"

// Simplified static grid - no mouse interactions
export function InteractiveGrid() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Don't render on server
  if (!isClient || typeof window === "undefined") return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent">
        {/* Static grid pattern */}
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </div>
  )
}
