import HomePage from "../page"
import { getMessages } from "@/lib/translations"

export default function FrPage() {
  const messages = getMessages("fr")
  return <HomePage messages={messages} />
}
