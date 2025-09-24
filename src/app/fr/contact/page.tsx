import HUD from "@/components/blocks/hud"
import Contact from "@/components/pages/contact"
import { getMessages } from "@/lib/translations"

export default function FrContact() {
  const messages = getMessages("fr")
  return (
    <HUD>
      <Contact messages={messages} />
    </HUD>
  )
}
