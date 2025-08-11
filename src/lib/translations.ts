import enMessages from '../messages/en.json'
import frMessages from '../messages/fr.json'

const messages = {
  en: enMessages,
  fr: frMessages,
} as const

export type Locale = keyof typeof messages

export function getMessages(locale: Locale) {
  return messages[locale]
}

export function getNestedValue(obj: any, path: string) {
  return path.split('.').reduce((current, key) => current?.[key], obj)
}
