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

interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams({ params }: DocPageProps) {
  const doc = params.slug?.join("/") || ""
  // const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    null
  }

  return doc
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    return {}
  }
// doc is now slug
  return {
    title: "Not Found(coming soon!!!)",
    description:  "Not Found(coming soon!!!)",
    openGraph: {
      title:  "Not Found(coming soon!!!)",
      description:  "Not Found(coming soon!!!)",
      type: "article",
      url: absoluteUrl(doc),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:  "Not Found(coming soon!!!)",
      description: "Not Found(coming soon!!!)",
      images: [siteConfig.ogImage],
      creator: "@beingofexistence",
    },
  }
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }))
}

// async function DocPage({ params }: DocPageProps) {
//   const doc = await getDocFromParams({ params })

//   if (!doc) {
//     notFound()
//   }

// }

export default async function NotFound({ params }: DocPageProps) {

  const doc = await getDocFromParams({ params })

  if (!doc) {
    notFound()
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <h2 className="text-lg font-bold">
        {`This ${doc} page in devlopment(coming soon!!ghfgh!)`}
      </h2>
    </div>
  )
}

