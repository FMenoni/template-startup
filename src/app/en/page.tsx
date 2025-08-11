import HomePage from "../page"
import { getMessages } from "@/lib/translations"

export default function EnPage() {
  const messages = getMessages("en")
  return <HomePage messages={messages} />
}
