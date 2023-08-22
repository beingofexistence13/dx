"use client"

import { useEffect, useState } from "react"

// import { useRouter } from 'next/router';

export default function NotFound() {
  const [urls, setUrls] = useState("Not Found")

  useEffect(() => {
    if (typeof window !== "undefined") {
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
      const match = origin.match(/\/([^/]+)$/)

      if (match) {
        const lastWord = match[1]
        setUrls(lastWord)

        console.log(lastWord) // This will print "gfhddfgh"
      } else {
        console.log("No match found")
      }
      const url = `${match}`
      console.log(origin)
    }
  }, [])
  // const router = useRouter();
  // const { asPath } = router;

  // if (typeof window !== "undefined") {
  //   // You can safely use window here
  //   // window.addEventListener('scroll', handleScroll);
  //   console.log(typeof window !== "undefined" ? window.location.href : "gfdg")
  // }
  console.log(urls)
  return (
    <div className="flex min-h-full w-full items-center justify-center border-r">
      <h2 className="mr-3 rounded-md border p-5 text-lg font-bold">
        {`This ${urls} page Is In Devlopment(coming soon!!!)`}
      </h2>
    </div>
  )
}
