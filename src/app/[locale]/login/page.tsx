"use client"

import { Button } from "@/components/ui/button"
import { TextField } from "@/components/ui/text-field"
import { instrumentSans } from "@/lib/primitive"
import { IconArrowRight, IconHighlight, IconEye, IconEyeClosed } from "@intentui/icons"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { getMessages } from "@/lib/translations"
import { useParams } from "next/navigation"

export default function LoginPage() {
  const { locale } = useParams() as { locale: string }
  const messages = getMessages(locale as 'fr' | 'en');
  const [email, setEmail] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [titleMoved, setTitleMoved] = useState(false)
  const [showEmailText, setShowEmailText] = useState(false)
  const [showPasswordInput, setShowPasswordInput] = useState(false)
  const [emailExiting, setEmailExiting] = useState(false)
  const [editingEmail, setEditingEmail] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const passwordContainerRef = useRef<HTMLDivElement | null>(null)

  // Timers pour séquencer proprement les animations
  const timerShowPasswordRef = useRef<number | null>(null)
  const timerShowInputRef = useRef<number | null>(null)

  const clearAnimationTimers = () => {
    if (timerShowPasswordRef.current) {
      clearTimeout(timerShowPasswordRef.current)
      timerShowPasswordRef.current = null
    }
    if (timerShowInputRef.current) {
      clearTimeout(timerShowInputRef.current)
      timerShowInputRef.current = null
    }
  }

  useEffect(() => {
    return () => {
      clearAnimationTimers()
    }
  }, [])

  useEffect(() => {
    if (showPasswordInput && passwordContainerRef.current) {
      const input = passwordContainerRef.current.querySelector('input') as HTMLInputElement | null
      input?.focus()
    }
  }, [showPasswordInput])

  const handleStartAnimation = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setEmailExiting(true)
    setTitleMoved(true)

    clearAnimationTimers()

    // Affiche le texte email et le step mot de passe après un léger délai
    timerShowPasswordRef.current = window.setTimeout(() => {
      setShowPassword(true)
      setShowEmailText(true)
    }, 500)

    // Affiche le champ mot de passe après la fin de l'étape précédente
    timerShowInputRef.current = window.setTimeout(() => {
      setShowPasswordInput(true)
      setIsAnimating(false)
    }, 1100)
  }

  const handleEditEmail = () => {
    setEditingEmail(true)
    setShowPasswordInput(false)
    setShowPassword(false)
    setShowEmailText(false)
    setTitleMoved(false)
    setEmailExiting(false)
    clearAnimationTimers()
    setIsAnimating(false)
  }

  const handleConfirmEmail = () => {
    setEditingEmail(false)
    setShowEmailText(false)
    setTitleMoved(false)
    setEmailExiting(false)
    
    // Relancer l'animation après un court délai
    setTimeout(() => {
      handleStartAnimation()
    }, 150)
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-[400px] pt-6">
        <h1 className={`text-[3rem] text-neutral-950 dark:text-neutral-100 font-bold flex flex-col leading-none transition-all duration-500 ease-in-out ${instrumentSans.className} ${titleMoved ? 'transform -translate-y-16 duration-1000' : 'transform -translate-y-4'
          }`}>
          <span>{messages?.login?.title?.line1 || "Log in,"}</span>
          <span>{messages?.login?.title?.line2 || "Create,"}</span>
          <span>{messages?.login?.title?.line3 || "Again."}</span>
        </h1>

        {showEmailText && !editingEmail && (
          <div
            onClick={handleEditEmail}
            role="button"
            title="Modifier l'email"
            className={`${showPasswordInput ? '-mb-10' : '-mb-6'} relative z-20 cursor-pointer text-sm text-neutral-500 dark:text-neutral-400 transition-all duration-700 ease-out opacity-0 animate-[fadeIn_0.7s_ease-out_0.2s_forwards] flex items-center gap-2`}
          >
            {email}
            <IconHighlight 
              className="size-3 cursor-pointer hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors" 
            />
          </div>
        )}

        <div className="mt-4">
          {/* Conteneur à hauteur fixe pour éviter tout décalage */}
          <div className="relative h-[96px]">
            {/* Calque EMAIL */}
            <div className={`absolute inset-0 z-10 flex flex-col gap-2 transition-all duration-500 ease-out ${
              (!showPassword || editingEmail) && !showPasswordInput ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'
            }`}>
              <div className="flex items-end gap-2">
                <TextField
                  placeholder={messages?.login?.placeholder?.email || "Email"}
                  label={messages?.login?.email || "Email"}
                  className="flex-1 text-neutral-950 dark:text-neutral-100"
                  value={email}
                  onChange={(value: string) => setEmail(value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !editingEmail) {
                      handleConfirmEmail()
                    } else if (e.key === 'Enter' && editingEmail) {
                      handleStartAnimation()
                    }
                  }}
                />
                <Button
                  className="bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 w-9 h-9 p-0"
                  onClick={editingEmail ? handleConfirmEmail : handleStartAnimation}
                >
                  <IconArrowRight className="size-4 !text-white dark:!text-neutral-950" />
                </Button>
              </div>
              
              {/* Lien vers inscription - affiché uniquement à l'étape email */}
              <div className="text-end -mt-2">
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {messages?.login?.noAccount || "Pas de compte ?"}
                </span>
                <Link 
                  href={`/${locale}/signup`}
                  className="text-xs text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors ml-1"
                >
                  {messages?.login?.signup || "S'inscrire"}
                </Link>
              </div>
            </div>

            {/* Calque PASSWORD */}
            <div ref={passwordContainerRef} className={`absolute inset-0 z-10 flex items-end gap-2 transition-all duration-700 ease-out ${
              showPasswordInput ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-1 pointer-events-none'
            }`}>
              <div className="flex-1 relative">
                <TextField
                  placeholder={messages?.login?.placeholder?.password || "Password"}
                  label={messages?.login?.password || "Password"}
                  className="w-full text-neutral-950 dark:text-neutral-100"
                  type={isPasswordVisible ? "text" : "password"}
                  onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        localStorage.setItem('isConnected', 'true')
                        window.location.href = `/${locale}`
                      }
                  }}
                />
                <button
                  type="button"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  className="absolute right-3 top-[55%] -translate-y-1/2 mt-2.75 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                >
                  {isPasswordVisible ? <IconEyeClosed className="size-4" /> : <IconEye className="size-4" />}
                </button>
              </div>
              <Button 
                className="bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 w-9 h-9 p-0"
                  onClick={() => {
                    localStorage.setItem('isConnected', 'true')
                    window.location.href = `/${locale}`
                  }}
              >
                <IconArrowRight className="size-4 !text-white dark:!text-neutral-950" />
              </Button>
            </div>
          </div>

          {/* Espace réservé pour le lien "Forgot password?" afin d'éviter les sauts */}
          <div className="h-6">
            <div className={`text-end transition-all duration-700 ease-out ${showPasswordInput ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <Link 
                href="#" 
                className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
              >
                {messages?.login?.forgot || "Forgot password?"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

