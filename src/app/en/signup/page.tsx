import HUD from "@/components/blocks/hud"
import Signup from "@/components/pages/signup"
import { getMessages } from "@/lib/translations"

export default function EnSignup() {
  const messages = getMessages("en")
  return (
    <HUD>
      <Signup messages={messages} />
    </HUD>
  )
}