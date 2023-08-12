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

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="navbar supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 lg:justify-end">
          <Avatar className="lg:hidden">
            <AvatarImage src="/logo.svg" alt="@shadcn" />
            <AvatarFallback>DX</AvatarFallback>
          </Avatar>
          <div className="w-full flex-1 lg:w-auto lg:flex-none ">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            <Dialog>
              <DialogTrigger asChild>
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "social-media w-9 px-0"
                  )}
                >
                  <Icons.chevronDown className="h-4 w-4" />
                  <span className="sr-only">Social Medias</span>
                </div>
                {/* <Button variant="outline">Edit Profile</Button> */}
              </DialogTrigger>
              <DialogContent className=" pb-3 pl-2 pr-0">
                <Tabs defaultValue="vlog" className="">
                  <DialogHeader>
                    <DialogTitle>
                      <TabsList className="absolute left-4 top-3 w-[200px]">
                        <TabsTrigger value="vlog">Vlog</TabsTrigger>
                        <TabsTrigger value="gaming">Gaming</TabsTrigger>
                        <TabsTrigger value="react">React</TabsTrigger>
                      </TabsList>
                    </DialogTitle>
                    <DialogDescription className=" h-[330px] overflow-y-auto overflow-x-hidden pt-7">
                      <TabsContent value="vlog">
                        <div className="grid grid-cols-2 justify-stretch gap-3">
                          {socialMediaConfig.platformVlog?.map(
                            (item) =>
                              item.href && (
                                <SocialMedia
                                  key={item.href}
                                  href={item.href}
                                  onOpenChange={setOpen}
                                >
                                  {item.title}
                                </SocialMedia>
                              )
                          )}
                        </div>
                      </TabsContent>
                      <TabsContent value="gaming">
                        <div className="grid grid-cols-2 justify-stretch gap-3 ">
                          {socialMediaConfig.platformGaming?.map(
                            (item) =>
                              item.href && (
                                <SocialMedia
                                  key={item.href}
                                  href={item.href}
                                  onOpenChange={setOpen}
                                >
                                  {item.title}
                                </SocialMedia>
                              )
                          )}
                        </div>
                      </TabsContent>
                      <TabsContent value="react">
                        <div className="grid grid-cols-2 justify-stretch gap-3 ">
                          {socialMediaConfig.platformReact?.map(
                            (item) =>
                              item.href && (
                                <SocialMedia
                                  key={item.href}
                                  href={item.href}
                                  onOpenChange={setOpen}
                                >
                                  {item.title}
                                </SocialMedia>
                              )
                          )}
                        </div>
                      </TabsContent>
                    </DialogDescription>
                  </DialogHeader>
                </Tabs>
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

interface SocialMediaProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function SocialMedia({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: SocialMediaProps) {
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
        " flex h-[75px] items-center justify-center rounded-md border"
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
