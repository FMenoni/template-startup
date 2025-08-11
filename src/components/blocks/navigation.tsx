"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { getMessages } from "@/lib/translations"

export default function Navigation() {
  const pathname = usePathname()

  const currentLocale = pathname.startsWith("/fr") ? "fr" : "en"
  const messages = getMessages(currentLocale)
  const navItems = [
    { href: `/${currentLocale}`, label: messages?.navigation?.home || "Home" },
    { href: `/${currentLocale}/about`, label: messages?.navigation?.about || "About" },
    { href: `/${currentLocale}/products`, label: messages?.navigation?.products || "Products" },
    { href: `/${currentLocale}/contact`, label: messages?.navigation?.contact || "Contact" },
  ]

  return (
    <nav className="fixed top-2 left-2 right-2 z-50 px-12 py-8 backdrop-blur-3xl bg-white/70 dark:bg-neutral-950/50 rounded-[32px]">
      <div className="max-w-screen mx-auto flex justify-between items-center">
        <ul className="flex gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 text-sm hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors ${pathname === item.href
                    ? "text-neutral-950 dark:text-neutral-100 font-medium"
                    : "text-neutral-600 dark:text-neutral-400"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <Link href="/login" className="flex items-center gap-2 text-sm dark:text-neutral-200 hover:bg-neutral-700 dark:hover:bg-neutral-100 hover:text-white dark:hover:text-neutral-950 px-4 py-2 rounded-full transition-colors duration-300">
            <span>{messages?.navigation?.login || "Log in"}</span>
          </Link>
          <Link href="/register" className="flex items-center gap-2 text-sm bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 px-4 py-2 rounded-full">
            <span>{messages?.navigation?.signup || "Sign up"}</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}