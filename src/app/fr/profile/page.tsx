import HUD from "@/components/blocks/hud"
import Profile from "@/components/pages/profile"
import { getMessages } from "@/lib/translations"

export default function FrProfile() {
  const messages = getMessages("fr")
  return (
    <HUD>
      <Profile messages={messages} />
    </HUD>
  )
}