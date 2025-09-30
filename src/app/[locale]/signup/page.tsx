"use client"

import { Button } from "@/components/ui/button"
import { TextField } from "@/components/ui/text-field"
import { instrumentSans } from "@/lib/primitive"
import { IconArrowRight } from "@intentui/icons"
import { useState } from "react"
import Link from "next/link"
import { getMessages } from "@/lib/translations"
import { useParams } from "next/navigation"

export default function SignupPage() {
  const { locale } = useParams() as { locale: string }
  const messages = getMessages(locale as 'fr' | 'en');
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="min-h-screen flex items-center justify-center -mt-42">
      <div className="w-full max-w-[400px]">
      <div className="relative w-full max-w-[400px]">
        <h1 className={`text-[3rem] text-neutral-950 dark:text-neutral-100 font-bold flex flex-col leading-none ${instrumentSans.className} transform -translate-y-4`}>
          <span>{messages?.signup?.title?.line1 || "Join,"}</span>
          <span>{messages?.signup?.title?.line2 || "Create,"}</span>
          <span>{messages?.signup?.title?.line3 || "Start."}</span>
        </h1>

        <div className="absolute top-38 left-0 right-0 space-y-4">
          <div className="flex gap-2">
            <TextField
              placeholder={messages?.signup?.placeholder?.firstName || "First name"}
              label={messages?.signup?.firstName || "First name"}
              className="flex-1"
              value={firstName}
              onChange={(value: string) => setFirstName(value)}
            />
            <TextField
              placeholder={messages?.signup?.placeholder?.lastName || "Last name"}
              label={messages?.signup?.lastName || "Last name"}
              className="flex-1"
              value={lastName}
              onChange={(value: string) => setLastName(value)}
            />
          </div>

          <TextField
            placeholder={messages?.signup?.placeholder?.phone || "Phone number"}
            label={messages?.signup?.phone || "Phone number"}
            className="w-full"
            value={phone}
            onChange={(value: string) => setPhone(value)}
          />

          <TextField
            placeholder={messages?.signup?.placeholder?.email || "Email"}
            label={messages?.signup?.email || "Email"}
            className="w-full"
            value={email}
            onChange={(value: string) => setEmail(value)}
          />

          <TextField
            placeholder={messages?.signup?.placeholder?.password || "Password"}
            label={messages?.signup?.password || "Password"}
            className="w-full"
            type="password"
            value={password}
            onChange={(value: string) => setPassword(value)}
          />

          <div className="flex items-end gap-2 pt-2">
            <div className="flex-1" />
            <Link href={`/${locale}`}>
              <Button className="bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 h-9 p-0">
                <span>{messages?.signup?.signup || "Sign up"}</span>
                <IconArrowRight className="size-4 !text-white dark:!text-neutral-950" />
              </Button>
            </Link>
          </div>
          
          <div className="text-center mt-4">
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              {messages?.signup?.alreadyHaveAccount || "Already have an account?"}
            </span>
            <Link 
              href={`/${locale}/login`}
              className="text-xs text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors ml-1"
            >
              {messages?.signup?.signIn || "Sign in"}
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

