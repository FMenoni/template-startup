"use client"

import { Button } from "@/components/ui/button"
import { TextField } from "@/components/ui/text-field"
import { instrumentSans } from "@/lib/primitive"
import { IconArrowRight } from "@intentui/icons"
import { useState } from "react"
import Image from "next/image"
import { getMessages } from "@/lib/translations"
import { useParams } from "next/navigation"

export default function ContactPage() {
  const { locale } = useParams() as { locale: string }
  const messages = getMessages(locale as 'fr' | 'en');
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="flex-1 flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto px-8 pt-20">
        <div className="order-2 lg:order-1">
          <div className="relative w-full max-w-[400px]">
            <h1 className={`text-[3rem] text-neutral-950 dark:text-neutral-100 font-bold flex flex-col leading-none ${instrumentSans.className} transform -translate-y-4 mb-8`}>
              <span>{messages?.contact?.title?.line1 || "Let's,"}</span>
              <span>{messages?.contact?.title?.line2 || "Talk,"}</span>
              <span>{messages?.contact?.title?.line3 || "Together."}</span>
            </h1>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-md">
              {messages?.contact?.description || "Ready to start your next project? Get in touch with us and let's create something amazing together."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextField
                  placeholder={messages?.contact?.form?.firstName || "First name"}
                  label={messages?.contact?.form?.firstName || "First name"}
                  className="w-full"
                  value={firstName}
                  onChange={(value: string) => setFirstName(value)}
                  isRequired
                />
                <TextField
                  placeholder={messages?.contact?.form?.lastName || "Last name"}
                  label={messages?.contact?.form?.lastName || "Last name"}
                  className="w-full"
                  value={lastName}
                  onChange={(value: string) => setLastName(value)}
                  isRequired
                />
              </div>

              <TextField
                placeholder={messages?.contact?.form?.email || "Email"}
                label={messages?.contact?.form?.email || "Email"}
                className="w-full"
                type="email"
                value={email}
                onChange={(value: string) => setEmail(value)}
                isRequired
              />

              <TextField
                placeholder={messages?.contact?.form?.phone || "Phone number"}
                label={messages?.contact?.form?.phone || "Phone number"}
                className="w-full"
                value={phone}
                onChange={(value: string) => setPhone(value)}
              />

              <TextField
                placeholder={messages?.contact?.form?.message || "Your message"}
                label={messages?.contact?.form?.message || "Your message"}
                className="w-full"
                value={message}
                onChange={(value: string) => setMessage(value)}
                isRequired
              />

              <div className="flex justify-end pt-2">
                <Button 
                  type="submit"
                  className="bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 h-10 px-6"
                >
                  <span>{messages?.contact?.form?.submit || "Send Message"}</span>
                  <IconArrowRight className="size-4 !text-white dark:!text-neutral-950 ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex lg:justify-end">
          <div className="relative">
            <Image
              src="/images/hero2.jpg"
              alt="Contact Hero"
              width={600}
              height={600}
              className="rounded-[32px] object-cover h-[500px] w-[400px] shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

