"use client"
import { useEffect } from "react"

export function Calendly() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/contact-tacknowledge/30min?primary_color=f46e16&background_color=f9fdff"
      style={{ minWidth: "320px", height: "700px" }}
    />
  )
}
