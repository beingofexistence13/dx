"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui"

export default function NotFound() {
  const [pageDetails, setPageDetails] = useState("Not Found")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const origin =
        typeof window !== "undefined" ? window.location.href : "gfdg"
      const regex = /\/([^/]+)$;/ // Matches the last word after the last '/' character
      const regex2 = /.[\w-]+,/g // Matches the last word after the last '/' character
      const regex3 = /[\w-]+/g // Matches the last word after the last '/' character

      const prematch1: any = origin.match(regex)
      const prematch2: any = prematch1 ? prematch1.match(regex2) : "Not Found"

      const inputString =
        "https://3000-beingofexistence-dx-efyw4mjsj19.ws-us104.gitpod.io/gfhddfgh"

      // Replace the input string with the matched pattern
      const result = origin.replace(/^(https:\/\/[^/]+)\//g, "")

      // console.log(result)

      const generateErrorMessage = (input: string) => {
        const parts = input.split("/") // Split the input string by "/"

        if (parts.length < 2) {
          return `There is no page such as ${input} in ${siteConfig.name}!!!`
        }

        const targetPage = parts.pop() // Get the last part as the target page
        const parameters = parts.join(" -> ") // Join the remaining parts with "~" as parameters

        return `This parameter ${parameters} has no page such as ${targetPage} in it maybe it 
        is in devlopment(coming soon!!!)`
      }

      const errorMessage = generateErrorMessage(result)

      // console.log(errorMessage)
      setPageDetails(errorMessage)
    }
  }, [])

  // console.log(pageDetails)
  return (
    <div className="flex min-h-screen w-full items-center justify-center border-r px-[10%]">
      <section className="border">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary-600 dark:text-primary-500 lg:text-9xl">
              404
            </h1>
            <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Something is missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we cannot find that page. You will find lots to explore on the
              home page.{" "}
            </p>
            <a
              href="#"
              className="my-4 inline-flex rounded-lg border px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center">
        <div className="m-0 rounded-md border p-5 text-lg font-bold">
          {pageDetails}
        </div>
        <div className="flex h-full w-full items-end justify-between pt-3">
          <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
            Dashboard
          </Link>
          <Link
            href="/docs"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Docs
          </Link>
        </div>
      </div>
    </div>
  )
}
