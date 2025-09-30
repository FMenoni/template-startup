"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { getMessages } from "@/lib/translations"
import { useState, useEffect } from "react"
import { User } from "lucide-react"

interface NavigationProps {
  messages?: {
    navigation?: {
      home?: string;
      about?: string;
      products?: string;
      contact?: string;
      login?: string;
      signup?: string;
      logout?: string;
      profile?: string;
    };
  }
}

export default function Navigation({ messages: propMessages }: NavigationProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsConnected(localStorage.getItem('isConnected') === 'true')
      
      // Fonction pour détecter si on est sur mobile
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768) // md breakpoint
      }
      
      // Vérification initiale
      checkIsMobile()
      
      // Écouteur d'événement pour le redimensionnement
      window.addEventListener('resize', checkIsMobile)
      
      // Nettoyage
      return () => window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  // Extraire la locale depuis le pathname
  const pathSegments = pathname.split('/').filter(Boolean)
  const currentLocale = pathSegments[0] === 'fr' || pathSegments[0] === 'en' ? pathSegments[0] : 'fr'
  
  // Utiliser les messages passés en props ou fallback sur getMessages
  const messages = propMessages || getMessages(currentLocale as 'fr' | 'en')
  const navItems = [
    { href: `/${currentLocale}`, label: messages?.navigation?.home || "Home" },
    { href: `/${currentLocale}/about`, label: messages?.navigation?.about || "About" },
    { href: `/${currentLocale}/products`, label: messages?.navigation?.products || "Products" },
    { href: `/${currentLocale}/contact`, label: messages?.navigation?.contact || "Contact" },
  ]

  // Rendu conditionnel basé sur isMobile
  if (isMobile) {
    return (
      <nav className="px-8 py-2 backdrop-blur-3xl bg-white/70 dark:bg-neutral-950/50 rounded-[22px] transition-all duration-300 hover:bg-white/80 dark:hover:bg-neutral-950/60">
        <div className="flex justify-between items-center">
          <div className="items-center">
            <Link 
              href={`/${currentLocale}`} 
              className="text-lg font-bold text-neutral-950 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-300"
            >
              Template Startup
            </Link>
          </div>

          {/* Bouton hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span className={`hamburger-line w-5 h-0.5 bg-neutral-900 dark:bg-neutral-100 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`hamburger-line w-5 h-0.5 bg-neutral-900 dark:bg-neutral-100 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`hamburger-line w-5 h-0.5 bg-neutral-900 dark:bg-neutral-100 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Menu mobile - overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-6 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-3xl rounded-[16px] border border-neutral-200/50 dark:border-neutral-800/50 animate-in slide-in-from-top-2 duration-300">
            {/* Navigation mobile */}
            <ul className="space-y-4 mb-6">
              {navItems.map((item, index) => (
                <li key={item.href} className="animate-slide-in-from-left" style={{ animationDelay: `${index * 100}ms` }}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-lg hover:text-neutral-600 dark:hover:text-neutral-400 transition-all duration-300 hover:translate-x-2 ${pathname === item.href
                        ? "text-neutral-950 dark:text-neutral-100 font-medium"
                        : "text-neutral-600 dark:text-neutral-400"
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Boutons de connexion mobile */}
            <div className="flex flex-col gap-3">
              {!isConnected ? (
                <>
                  <Link 
                    href={`/${currentLocale}/login`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center text-sm dark:text-neutral-200 hover:bg-neutral-700 dark:hover:bg-neutral-100 hover:text-white dark:hover:text-neutral-950 px-4 py-2 rounded-full transition-all duration-300 border border-neutral-200 dark:border-neutral-800 hover:scale-105 animate-slide-in-from-right"
                    style={{ animationDelay: '300ms' }}
                  >
                    <span>{messages?.navigation?.login || "Log in"}</span>
                  </Link>
                  <Link 
                    href={`/${currentLocale}/signup`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center text-sm bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 animate-slide-in-from-right"
                    style={{ animationDelay: '400ms' }}
                  >
                    <span>{messages?.navigation?.signup || "Sign up"}</span>
                  </Link>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => {
                      localStorage.removeItem('isConnected')
                      window.location.href = `/${currentLocale}`
                      setIsMenuOpen(false)
                    }} 
                    className="flex items-center justify-center text-sm dark:text-neutral-200 hover:bg-neutral-700 dark:hover:bg-neutral-100 hover:text-white dark:hover:text-neutral-950 px-4 py-2 rounded-full transition-all duration-300 border border-neutral-200 dark:border-neutral-800 hover:scale-105 animate-slide-in-from-right"
                    style={{ animationDelay: '300ms' }}
                  >
                    <span>{messages?.navigation?.logout || "Log out"}</span>
                  </button>
                  <Link 
                    href={`/${currentLocale}/profile`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center text-sm bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 animate-slide-in-from-right"
                    style={{ animationDelay: '400ms' }}
                  >
                    <span>{messages?.navigation?.profile || "Profile"}</span>
                    <User className="size-4" strokeWidth={1.5} />
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    )
  }

  // Version Desktop
  return (
    <div className="flex justify-between items-center w-full gap-4">
      {/* Bloc gauche - Navigation */}
      <div className="px-8 py-4 backdrop-blur-3xl bg-white/70 dark:bg-neutral-950/50 rounded-[22px] transition-all duration-300 hover:bg-white/80 dark:hover:bg-neutral-950/60">
        <ul className="flex gap-6 lg:gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 text-sm relative group transition-all duration-300 ease-out ${
                  pathname === item.href
                    ? "text-neutral-950 dark:text-neutral-100 font-medium"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                }`}
              >
                <span className="relative">
                  {item.label}
                  {/* Ligne de soulignement animée */}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-neutral-400 dark:bg-neutral-700 transition-all duration-300 ease-out ${
                      pathname === item.href 
                        ? "w-full opacity-100" 
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bloc droit - Compte utilisateur */}
      <div className="px-4 py-2 backdrop-blur-3xl bg-white/70 dark:bg-neutral-950/50 rounded-[22px] transition-all duration-300 hover:bg-white/80 dark:hover:bg-neutral-950/60">
        {!isConnected ? (
          <div className="flex gap-4">
            <Link 
              href={`/${currentLocale}/login`} 
              className="flex items-center gap-2 text-sm dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-100 dark:hover:text-neutral-950 px-4 py-2 rounded-full"
            >
              <span>{messages?.navigation?.login || "Log in"}</span>
            </Link>
            <Link 
              href={`/${currentLocale}/signup`} 
              className="flex items-center gap-2 text-sm bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 px-4 py-2 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200"
            >
              <span>{messages?.navigation?.signup || "Sign up"}</span>
            </Link>
          </div>
        ) : (
          <div className="flex gap-4">
            <button 
              onClick={() => {
                localStorage.removeItem('isConnected')
                window.location.href = `/${currentLocale}`
              }} 
              className="flex items-center gap-2 text-sm dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-100 dark:hover:text-neutral-950 px-4 py-2 rounded-full"
            >
              <span>{messages?.navigation?.logout || "Log out"}</span>
            </button>
            <Link 
              href={`/${currentLocale}/profile`} 
              className="flex items-center gap-2 text-sm bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 px-4 py-2 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200"
            >
              <span>{messages?.navigation?.profile || "Profile"}</span>
              <User className="size-4" strokeWidth={1.5} />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}