import "@/styles/globals.css"
import { Metadata } from "next"
import { Link } from "@nextui-org/link"
import clsx from "clsx"

import { fontSans } from "@/config/fonts"
// import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/providers"
import SiteLayout from "@/components/site-layout"
import { siteConfig } from "@/config/website"

import { Providers } from "./providers"
import { Redux } from "./redux"


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
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-hidden",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {/* <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextUI</p>
              </Link>
            </footer>
          </div> */}
          <Redux>
            <main className="flex-1">
              <SiteLayout />
              {children}
            </main>
          </Redux>
        </Providers>
      </body>
    </html>
  )
}
