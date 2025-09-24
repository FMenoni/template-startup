"use client"

import { usePathname, useRouter } from "next/navigation"

const locales = ["en", "fr"] as const
type Locale = typeof locales[number]

function getNextLocale(current: string): Locale {
  const index = locales.indexOf(current as Locale)
  const nextIndex = (index + 1) % locales.length
  return locales[nextIndex]
}

export default function Language() {
  const pathname = usePathname()
  const router = useRouter()

  const currentLocale = pathname.startsWith("/fr") ? "fr" : "en"
  const label = currentLocale.toUpperCase()

  function switchLocale() {
    const next = getNextLocale(currentLocale)
    
    const pathWithoutLocale = pathname.replace(/^\/(en|fr)/, "")
    const target = `/${next}${pathWithoutLocale}`
    
    router.push(target)
  }

  return (
    <button
      onClick={switchLocale}
      className="text-sm pointer-events-auto hover:cursor-pointer hover:bg-neutral-400/20 hover:text-neutral-950 dark:text-white p-3 rounded-full"
    >
      {label}
    </button>
  )
}