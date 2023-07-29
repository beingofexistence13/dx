import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
// Socail Media
import { Button } from "@/src/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { CommandMenu } from "@/src/components/command-menu"
import { Icons } from "@/src/components/icons"
import { MainNav } from "@/src/components/main-nav"
import { MobileNav } from "@/src/components/mobile-nav"
import { ModeToggle } from "@/src/components/mode-toggle"
import { buttonVariants } from "@/registry/new-york/ui/button"

export function SiteHeader() {
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
                  <DialogDescription>
                    Follow Me To In Social Medias
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
