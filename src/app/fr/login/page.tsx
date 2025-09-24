import HUD from "@/components/blocks/hud"
import Login from "@/components/pages/login"
import { getMessages } from "@/lib/translations"

export default function FrLogin() {
  const messages = getMessages("fr")
  return (
    <HUD>
      <Login messages={messages} />
    </HUD>
  )
}