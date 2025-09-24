import HUD from "@/components/blocks/hud"
import Signup from "@/components/pages/signup"
import { getMessages } from "@/lib/translations"

export default function FrSignup() {
  const messages = getMessages("fr")
  return (
    <HUD>
      <Signup messages={messages} />
    </HUD>
  )
}