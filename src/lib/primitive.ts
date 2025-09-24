"use client"

import { composeRenderProps } from "react-aria-components"
import { type ClassNameValue, twMerge } from "tailwind-merge"
import { Instrument_Sans } from "next/font/google"

const instrumentSans = Instrument_Sans({ subsets: ["latin"] })

function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tailwind: ClassNameValue,
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tailwind, className))
}

export { composeTailwindRenderProps, instrumentSans }
