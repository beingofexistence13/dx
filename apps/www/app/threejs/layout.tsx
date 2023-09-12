/* eslint-disable tailwindcss/classnames-order */
import "@/styles/globals.css"
import { Metadata } from "next"
import Script from "next/script"

import { fontSans } from "@/config/fonts"
import { siteConfig } from "@/config/website"
import { cn } from "@/lib/utils"
import SiteLayout from "@/components/site-layout"


export const metadata: Metadata = {
  metadataBase: new URL("https://acme.com"),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server SiteLayout",
    "Radix UI",
  ],
  authors: [
    {
      name: "beingofexistence",
      url: "https://beingofexistence.com",
    },
  ],
  creator: "beingofexistence",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
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
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@beingofexistence",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/dashvars/dashvar/dist/base.css"
      />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/dashvars/dashvar/dist/dashvar.css"
      />

      <body
        className={cn(
          "bg-background min-h-screen overflow-hidden font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
        <Script src="https://cdn.jsdelivr.net/gh/dashvars/dashvar/dist/dashvar-helpers.js" />
        <Script src="./node_modules/preline/dist/preline.js" />
      </body>
    </html>
  )
}
