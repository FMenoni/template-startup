"use client"

import { Button } from "@/components/ui/button"
import { TextField } from "@/components/ui/text-field"
import { instrumentSans } from "@/lib/primitive"
import { IconArrowRight, IconHighlight, IconEye, IconEyeClosed } from "@intentui/icons"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

interface LoginProps {
  messages?: any
}

export default function Login({ messages }: LoginProps) {
  const [email, setEmail] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [titleMoved, setTitleMoved] = useState(false)
  const [showEmailText, setShowEmailText] = useState(false)
  const [showPasswordInput, setShowPasswordInput] = useState(false)
  const [emailExiting, setEmailExiting] = useState(false)
  const [editingEmail, setEditingEmail] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const pathname = usePathname()
  const currentLocale = pathname.startsWith("/fr") ? "fr" : "en"

  const handleStartAnimation = () => {
    setEmailExiting(true)
    setTitleMoved(true)

    setTimeout(() => {
      setShowPassword(true)
      setShowEmailText(true)
    }, 500)

    setTimeout(() => setShowPasswordInput(true), 1200)
  }

  const handleEditEmail = () => {
    setEditingEmail(true)
    setShowPasswordInput(false)
    setShowPassword(false)
    setShowEmailText(false)
    setTitleMoved(false)
    setEmailExiting(false)
  }

  const handleConfirmEmail = () => {
    setEditingEmail(false)
    setShowEmailText(false)
    setTitleMoved(false)
    setEmailExiting(false)
    
    // Relancer l'animation après un court délai
    setTimeout(() => {
      handleStartAnimation()
    }, 100)
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="relative w-full max-w-[400px]">
        <h1 className={`text-[3rem] text-neutral-950 dark:text-neutral-100 font-bold flex flex-col leading-none transition-all duration-500 ease-in-out ${instrumentSans.className} ${titleMoved ? 'transform -translate-y-16 duration-1000' : 'transform -translate-y-4'
          }`}>
          <span>{messages?.login?.title?.line1 || "Log in,"}</span>
          <span>{messages?.login?.title?.line2 || "Create,"}</span>
          <span>{messages?.login?.title?.line3 || "Again."}</span>
        </h1>

        {showEmailText && !editingEmail && (
          <div className="absolute top-32 left-0 right-0 text-sm text-neutral-500 dark:text-neutral-400 transition-all duration-700 ease-out opacity-0 animate-[fadeIn_0.7s_ease-out_forwards] flex items-center gap-2">
            {email}
            <IconHighlight 
              className="size-3 cursor-pointer hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors" 
              onClick={handleEditEmail}
            />
          </div>
        )}

        <div className="absolute top-38 left-0 right-0">
          {(!showPassword || editingEmail) && (
            <div className={`flex items-end gap-2 transition-all duration-500 ease-out ${
              emailExiting && !editingEmail ? 'transform translate-y-8 opacity-0' : 'transform translate-y-0 opacity-100'
            }`}>
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
          )}

          {showPasswordInput && (
            <>
              <div className="flex items-end gap-2 transition-all duration-700 ease-out opacity-0 animate-[fadeIn_0.7s_ease-out_forwards]">
                <div className="flex-1 relative">
                  <TextField
                    placeholder={messages?.login?.placeholder?.password || "Password"}
                    label={messages?.login?.password || "Password"}
                    className="w-full text-neutral-950 dark:text-neutral-100"
                    type={isPasswordVisible ? "text" : "password"}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        localStorage.setItem('isConnected', 'true')
                        window.location.href = `/${currentLocale}`
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 pt-7 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                  >
                    {isPasswordVisible ? <IconEyeClosed className="size-4" /> : <IconEye className="size-4" />}
                  </button>
                </div>
                <Button 
                  className="bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 w-9 h-9 p-0"
                  onClick={() => {
                    localStorage.setItem('isConnected', 'true')
                    window.location.href = `/${currentLocale}`
                  }}
                >
                  <IconArrowRight className="size-4 !text-white dark:!text-neutral-950" />
                </Button>
              </div>
              
              <div className="text-end mt-2 transition-all duration-700 ease-out opacity-0 animate-[fadeIn_0.7s_ease-out_0.5s_forwards]">
                <Link 
                  href="#" 
                  className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                >
                  {messages?.login?.forgot || "Forgot password?"}
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
