"use client";

import HUD from "@/components/blocks/hud"
import Home from "@/components/pages/home"

interface HomeProps {
  messages?: any;
}

export default function HomePage({ messages }: HomeProps) {
  return (
    <HUD>
      <Home messages={messages} />
    </HUD>
  )
}
