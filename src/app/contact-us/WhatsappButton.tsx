"use client"

import { Button } from "@/components/ui/button"

export default function WhatsappButton() {
  const openWhatsapp = () => {
    window.open("https://wa.me/+447356202485", "_blank")
  }
  return (
    <Button
      variant="secondary"
      onClick={openWhatsapp}
      className="w-full"
      size="lg"
    >
      Contact Us Now
    </Button>
  )
}
