/* eslint-disable tailwindcss/classnames-order */

import "react-phone-input-2/lib/style.css"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "@/styles/globals.css"
import { Metadata } from "next"
import Script from "next/script"

import { fontSans } from "@/config/fonts"
import { siteConfig } from "@/config/website"
import { cn } from "@/lib/utils"
import SiteLayout from "@/components/site-layout"

// import { Chakraui } from "./chakraui"
// import { Mantine } from "./mantine"
// import { PrimeReact } from "./primereact"
import { Nextui } from "./nextui"
// import { Query } from "./query"
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
          "bg-background min-h-screen overflow-hidden font-sans antialiased",
          fontSans.variable
        )}
      >
        <Nextui themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <Redux>
            {/* <Query>
            </Query> */}
              {/* <Chakraui>
                <PrimeReact>
                  <Mantine>
                    <main className="flex-1">
                      <SiteLayout />
                      {children}
                    </main>
                    <Script src="https://cdn.jsdelivr.net/gh/dashvars/dashvar/dist/dashvar-helpers.js" />
                    <Script src="./node_modules/preline/dist/preline.js" />
                  </Mantine>
                </PrimeReact>
              </Chakraui> */}
              <main className="flex-1">
                <SiteLayout />
                {children}
              </main>

          </Redux>
        </Nextui>
      </body>
    </html>
  )
}

















// /* eslint-disable tailwindcss/classnames-order */

// import "@/styles/globals.css"
// import { Metadata } from "next"

// import { siteConfig } from "@/config/site"
// import { fontSans } from "@/lib/fonts"
// import { cn } from "@/lib/utils"
// import { Analytics } from "@/components/analytics"
// import { ThemeProvider } from "@/components/providers"
// import { SiteFooter } from "@/components/site-footer"
// import { SiteHeader } from "@/components/site-header"
// import { TailwindIndicator } from "@/components/tailwind-indicator"
// import { ThemeSwitcher } from "@/components/theme-switcher"
// import { Toaster as DefaultToaster } from "@/registry/default/ui/toaster"
// import { Toaster as NewYorkToaster } from "@/registry/new-york/ui/toaster"

// export const metadata: Metadata = {
//   metadataBase: new URL("https://acme.com"),
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   keywords: [
//     "Next.js",
//     "React",
//     "Tailwind CSS",
//     "Server SiteLayout",
//     "Radix UI",
//   ],
//   authors: [
//     {
//       name: "beingofexistence",
//       url: "https://beingofexistence.com",
//     },
//   ],
//   creator: "beingofexistence",
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: siteConfig.url,
//     title: siteConfig.name,
//     description: siteConfig.description,
//     siteName: siteConfig.name,
//     images: [
//       {
//         url: siteConfig.ogImage,
//         width: 1200,
//         height: 630,
//         alt: siteConfig.name,
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: siteConfig.name,
//     description: siteConfig.description,
//     images: [siteConfig.ogImage],
//     creator: "@beingofexistence",
//   },
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
//   manifest: `${siteConfig.url}/site.webmanifest`,
// }

// interface RootLayoutProps {
//   children: React.ReactNode
// }

// export default function RootLayout({ children }: RootLayoutProps) {
//   return (
//     <>
//       <html lang="en" suppressHydrationWarning>
//         <head />
//         <body
//           className={cn(
//             "bg-background min-h-screen font-sans antialiased",
//             fontSans.variable
//           )}
//         >
//           {/* <ThemeProvider
//             attribute="class"
//             defaultTheme="system"
//             enableSystem
//             disableTransitionOnChange
//           >
//             <div className="relative flex min-h-screen flex-col">
//               <SiteHeader />
//               <div className="flex-1">{children}</div>
//               <SiteFooter />
//             </div>
//             <TailwindIndicator />
//           </ThemeProvider>
//           <ThemeSwitcher />
//           <Analytics />
//           <NewYorkToaster />
//           <DefaultToaster /> */}
//           <h1>Shadcn UI</h1>
//         </body>
//       </html>
//     </>
//   )
// }
