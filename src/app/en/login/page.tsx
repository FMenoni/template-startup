import HUD from "@/components/blocks/hud"
import Login from "@/components/pages/login"
import { getMessages } from "@/lib/translations"

export default function EnLogin() {
  const messages = getMessages("en")
  return (
    <HUD>
      <Login messages={messages} />
    </HUD>
  )
}