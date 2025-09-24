import HUD from "@/components/blocks/hud"
import Contact from "@/components/pages/contact"
import { getMessages } from "@/lib/translations"

export default function EnContact() {
  const messages = getMessages("en")
  return (
    <HUD>
      <Contact messages={messages} />
    </HUD>
  )
}