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

export function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce((current: unknown, key: string) => {
    if (current && typeof current === 'object' && current !== null) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj as unknown);
}
