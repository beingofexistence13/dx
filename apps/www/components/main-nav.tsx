"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { NavigationMenuDropdown } from "./navigatioin-menu"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="hidden lg:flex">
      <Link href="/" className="flex items-center space-x-2 pr-2 ">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block rounded-lg p-2 hover:border ">
          {siteConfig.name}
        </span>
      </Link>
      {/* <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          HackIn
        </Link>
        <Link
          href="/docs/components"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Components
        </Link>
        <Link
          href="/examples"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/examples")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Examples
        </Link>
        <Link
          href={siteConfig.links.github}
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          GitHub
        </Link>
      </nav> */}
      <NavigationMenuDropdown />
    </div>
  )
}
