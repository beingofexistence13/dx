"use client"

import React from "react"
import Image from "next/image"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { ScrollArea } from "@radix-ui/react-scroll-area"

import { siteConfig } from "@/config/site"
import { socialMediaConfig } from "@/config/social-media"
import { cn } from "@/lib/utils"
// Socail Media
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/registry/new-york/ui/sheet"

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 lg:justify-end">
          <div className=" h-full w-[40px] lg:hidden">
            <Image
              src="logo.svg"
              width={30}
              height={20}
              alt="Dashboard"
              className="hidden dark:block"
            />
          </div>
          <div className="w-full flex-1 lg:w-auto lg:flex-none ">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.chevronDown className="h-4 w-4" />
                <span className="sr-only">Social Medias</span>
              </div>
            </Link> */}
            <Dialog>
              <DialogTrigger asChild>
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 px-0"
                  )}
                >
                  <Icons.chevronDown className="h-4 w-4" />
                  <span className="sr-only">Social Medias</span>
                </div>
                {/* <Button variant="outline">Edit Profile</Button> */}
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Social Medias</DialogTitle>
                  <DialogDescription className="mt-3  h-[300px] overflow-y-auto overflow-x-hidden py-3">
                    <div className="grid grid-cols-2 justify-stretch gap-3 ">
                      {socialMediaConfig.platform?.map(
                        (item) =>
                          item.href && (
                            <MobileLink
                              key={item.href}
                              href={item.href}
                              onOpenChange={setOpen}
                            >
                              {item.title}
                            </MobileLink>
                          )
                      )}
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <ModeToggle />
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.hack className="h-4 w-4 fill-current" />
                <span className="sr-only">HackIn</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

//

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        " flex h-[50px] items-center justify-center rounded-md border"
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
