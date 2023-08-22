"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui"

// import { useRouter } from "next/router"

// import { useRouter } from 'next/router';

export default function NotFound() {
  const [urls, setUrls] = useState("Not Found")

  useEffect(() => {
    if (typeof window !== "undefined") {
      // const router = useRouter()

      // const { param1, param2 } = router.query
      // You can safely use window here
      // window.addEventListener('scroll', handleScroll);
      const origin =
        typeof window !== "undefined" ? window.location.href : "gfdg"
      // const inputString = "https://3000-beingofexistence-dx-efyw4mjsj19.ws-us104.gitpod.io/dgdfsgfdsc";
      const regex = /\/([^/]+)$;/ // Matches the last word after the last '/' character
      const regex2 = /.[\w-]+,/g // Matches the last word after the last '/' character
      const regex3 = /[\w-]+/g // Matches the last word after the last '/' character

      const prematch1: any = origin.match(regex)
      const prematch2: any = prematch1 ? prematch1.match(regex2) : "Not Found"
      // const match: any = prematch2 ? prematch2.match(regex3) : "Not Found"
      // const match = prematch ? prematch.replace(regex2, "") : "Not Found";

      // let lastWord: any = match ? match[1] : "Not Found";
      // Use a regular expression to extract the last word before "/"
      // const match = origin.match(/\/([^/]+)$/)
      // const match = origin.replace(/https:..[\w-]+.[\w-]+.[\w-]+.[\w-]+./g,"")

      // if (match) {
      //   // const lastWord = match[1]
      //   setUrls(match)

      //   console.log(match) // This will print "gfhddfgh"
      // } else {
      //   console.log("No match found")
      // }
      const inputString = "https://3000-beingofexistence-dx-efyw4mjsj19.ws-us104.gitpod.io/gfhddfgh";

      // Use a regular expression to match the desired pattern
      
      // Replace the input string with the matched pattern
      const result = origin.replace(/^(https:\/\/[^/]+)\//g,"");
      
      console.log(result);
      
        // const extractedUrl = result[1]
        // console.log(result) // This will print "https://3000-beingofexistence-dx-efyw4mjsj19.ws-us104.gitpod.io"
        // const match = origin.replace(result, "")
        const generateErrorMessage = (input: string) => {
          const parts = input.split("/") // Split the input string by "/"

          if (parts.length < 2) {
            return "Invalid input format"
          }

          const targetPage = parts.pop() // Get the last part as the target page
          const parameters = parts.join("~") // Join the remaining parts with "~" as parameters

          return `parameter ${parameters} has no page such as ${targetPage} in it`
        }

        const errorMessage = generateErrorMessage(result)

        console.log(errorMessage)
        setUrls(errorMessage)
  
      // const url = `${match}`
      // console.log(origin)
    }
  }, [])

  console.log(urls)
  return (
    <div className="flex min-h-screen w-full items-center justify-center border-r">
      <div className="flex flex-col items-center justify-center">
      <div className="m-0 rounded-md border p-5 text-lg font-bold">
        {`This ${urls} maybe it 
      is in devlopment(coming soon!!!)`}
      </div>
      <div className="flex h-full w-full items-end justify-between pt-3">
        <Link

          href="/"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
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
