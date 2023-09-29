"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/website"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { NavigationMenuDropdown } from "./navigatioin-menu"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="hidden lg:flex">
      <Link href="/" className="flex items-center space-x-2 pr-2 ">
        <Icons.logo className="navbar-logo-icon h-6 w-6" />
        <span className="hidden rounded-lg p-2 px-5 font-bold hover:bg-[--code-foreground] sm:inline-block ">
          {siteConfig.name}
        </span>
      </Link>

      <NavigationMenuDropdown />
    </div>
  )
}
