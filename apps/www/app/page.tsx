"use client"

import * as React from "react"
import Head from "next/head"
import NextLink from "next/link"
// import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation"
import { Code } from "@nextui-org/code"
import { Link } from "@nextui-org/link"
import { Input } from "@nextui-org/react"
import { Snippet } from "@nextui-org/snippet"
import { button as buttonStyles } from "@nextui-org/theme"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/icons"
import { subtitle, title } from "@/components/primitives"

import { AdBanner } from "../components/AdBanner"
import Layout from "../components/Layout"
import Chain from "../components/chain"
import { generateChainData } from "../utils/fetch"

export default function Home() {
  interface Chain {
    chain: any
    chainId: any
    nativeCurrency: any
    name: string
    title: string
    network: string
    // ...
  }
  const [chains, setChains] = React.useState<Chain[]>([])
  React.useEffect(() => {
    async function fetchData() {
      const sortedChains = await generateChainData()
      setChains(sortedChains)
    }
    fetchData()
  }, [])
  const searchParams = useSearchParams()
  const testnets = searchParams ? searchParams.get("testnets") : ""
  const testnet = searchParams ? searchParams.get("testnet") : ""
  const search = searchParams ? searchParams.get("search") : ""
  const includeTestnets =
    (typeof testnets === "string" && testnets === "true") ||
    (typeof testnet === "string" && testnet === "true")
  const sortedChains = !includeTestnets
    ? chains.filter((item) => {
        const testnet =
          item.name?.toLowerCase().includes("test") ||
          item.title?.toLowerCase().includes("test") ||
          item.network?.toLowerCase().includes("test")
        const devnet =
          item.name?.toLowerCase().includes("devnet") ||
          item.title?.toLowerCase().includes("devnet") ||
          item.network?.toLowerCase().includes("devnet")
        return !testnet && !devnet
      })
    : chains
  const filteredChains =
    !search || typeof search !== "string" || search === ""
      ? sortedChains
      : sortedChains.filter((chain) => {
          //filter
          return (
            chain.chain.toLowerCase().includes(search.toLowerCase()) ||
            chain.chainId
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            chain.name.toLowerCase().includes(search.toLowerCase()) ||
            (chain.nativeCurrency ? chain.nativeCurrency.symbol : "")
              .toLowerCase()
              .includes(search.toLowerCase())
          )
        })

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Web beautiful&nbsp;</h1>
        <br />
      </div> */}

      {/* <Layout lang={undefined}>
        <React.Suspense fallback={<div className="h-screen"></div>}>
          <div className="dark:text-[#B3B3B3] text-black grid gap-5 grid-cols-1 place-content-between pb-4 sm:pb-10 sm:grid-cols-[repeat(auto-fit,_calc(50%_-_15px))] 3xl:grid-cols-[repeat(auto-fit,_calc(33%_-_20px))] isolate grid-flow-dense">
            {filteredChains.map((chain, idx) => {
              if (idx === 2) {
                return (
                  <React.Fragment
                    key={JSON.stringify(chain) + "en" + "with-banner"}
                  >
                    <AdBanner />
                    <Chain chain={chain} lang="en" buttonOnly={undefined} />
                  </React.Fragment>
                )
              }

              return (
                <Chain
                  chain={chain}
                  key={JSON.stringify(chain) + "en"}
                  lang="en"
                  buttonOnly={undefined}
                />
              )
            })}
          </div>
        </React.Suspense>
      </Layout> */}
    </section>
  )
}
