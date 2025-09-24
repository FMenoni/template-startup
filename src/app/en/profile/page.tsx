import HUD from "@/components/blocks/hud"
import Profile from "@/components/pages/profile"
import { getMessages } from "@/lib/translations"

export default function EnProfile() {
  const messages = getMessages("en")
  return (
    <HUD>
      <Profile messages={messages} />
    </HUD>
  )
}