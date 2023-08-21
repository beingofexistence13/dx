import { notFound } from "next/navigation"
import { allDocs } from "contentlayer/generated"

import "@/styles/mdx.css"
import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRightIcon } from "@radix-ui/react-icons"
import Balancer from "react-wrap-balancer"

import { siteConfig } from "@/config/site"
import { getTableOfContents } from "@/lib/toc"
import { absoluteUrl, cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Mdx } from "@/components/mdx-components"
import { DocsPager } from "@/components/pager"
import { DashboardTableOfContents } from "@/components/toc"
import { badgeVariants } from "@/registry/new-york/ui/badge"
import { ScrollArea } from "@/registry/new-york/ui/scroll-area"

export default async function NotFound() {

  let doc = "Docs"

  return (
    <div className="flex h-full w-full items-center justify-center">
      <h2 className="rounded-md border p-5 text-lg font-bold">
        {`This page may be in devlopment or we donot have this page(coming soon!!!)`}
      </h2>
    </div>
  )
}
