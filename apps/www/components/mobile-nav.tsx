"use client"

import * as React from "react"
import Image from "next/image"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { ViewVerticalIcon } from "@radix-ui/react-icons"

import { docsConfig } from "@/config/docs"
import { more, products } from "@/config/navbar"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Icons } from "@/components/icons"
import { Button } from "@/registry/new-york/ui/button"
import { ScrollArea } from "@/registry/new-york/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/registry/new-york/ui/sheet"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  function logoLetter(title: string): string {
    let text = title
    let firstLetter = text.charAt(0).toUpperCase()
    let lastLetter = text.charAt(text.length - 1).toUpperCase()
    let result = firstLetter + lastLetter
    return result
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="nav-toggles h-24 px-2 py-5 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>

          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 w-full">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Avatar className=" font-bold">
            <AvatarImage src="/logo.svg" alt="@shadcn" />
            <AvatarFallback>DX</AvatarFallback>
          </Avatar>
          <span className="ml-3 font-bold">{siteConfig.name}</span>
        </MobileLink>

        <ScrollArea className="mt-2 h-[100vh] pb-20 ">
          {/* <div className="flex flex-col space-y-3 text-[#73737a]">
            {products.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    <HoverCard>
                      <HoverCardTrigger className="flex h-[35px] w-full items-center ">
                        <Avatar className="rainbow-text mr-2 h-[32.5px] w-[32.5px] border text-center text-[12.5px]">
                          <AvatarImage
                            src={`https://logo.clearbit.com/${item.title}.com`}
                          />
                          <AvatarFallback>
                            {item.title ? logoLetter(item.title) : "Dx"}
                          </AvatarFallback>
                        </Avatar>
                        {item.title}
                      </HoverCardTrigger>
                      <HoverCardContent>{item.description}</HoverCardContent>
                    </HoverCard>
                  </MobileLink>
                )
            )}
          </div>
          <div className="mt-3 flex flex-col space-y-3 text-[#73737a]">
            {more.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    <HoverCard>
                      <HoverCardTrigger className="flex h-[35px] w-full items-center ">
                        <Avatar className="rainbow-text mr-2 h-[32.5px] w-[32.5px] border text-center text-[12.5px]">
                          <AvatarImage
                            src={`https://logo.clearbit.com/${item.title}.com`}
                          />
                          <AvatarFallback>
                            {item.title ? logoLetter(item.title) : "Dx"}
                          </AvatarFallback>
                        </Avatar>
                        {item.title}
                      </HoverCardTrigger>
                      <HoverCardContent>{item.description}</HoverCardContent>
                    </HoverCard>
                  </MobileLink>
                )
            )}
          </div>

          <div className="mt-3 flex flex-col space-y-3">
            {docsConfig.mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    <HoverCard>
                      <HoverCardTrigger className="flex h-[35px] w-full items-center ">
                        <Avatar className="rainbow-text mr-2 h-[32.5px] w-[32.5px] border text-center text-[12.5px]">
                          <AvatarImage
                            src={
                              item.logo
                                ? item.logo
                                : `https://logo.clearbit.com/${item.title}.com`
                            }
                          />
                          <AvatarFallback>
                            {item.title ? logoLetter(item.title) : "Dx"}
                          </AvatarFallback>
                        </Avatar>
                        {item.title}
                      </HoverCardTrigger>
                      <HoverCardContent>{item.description}</HoverCardContent>
                    </HoverCard>
                  </MobileLink>
                )
            )}
          </div>
          <div className="mt-3 flex flex-col space-y-2">
            {docsConfig.sidebarNav.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">
                  {index} number item is {item.title}
                </h4>
                {item?.items?.length &&
                  item.items.map((item) => (
                    <React.Fragment key={item.href}>
                      {!item.disabled &&
                        (item.href ? (
                          <MobileLink
                            href={item.href}
                            onOpenChange={setOpen}
                            className="text-muted-foreground"
                          >
                            <HoverCard>
                              <HoverCardTrigger className="flex h-[35px] w-full items-center ">
                                <div className="items-logo-container rainbow-text mr-2 h-[32.5px] w-[32.5px] border text-center text-[12.5px] rounded-full flex items-center justify-center ">
                                  {item.logo ? (
                                    <Image
                                      src={`/docs/${item.title
                                        .replace(/\s/g, "")
                                        .toLowerCase()}.png`}
                                      height={25}
                                      width={25}
                                      sizes="(max-width: 30px) 100vw"
                                      quality={100}
                                      style={{ objectFit: "contain" }}
                                      loading="lazy"
                                      alt={
                                        item.title
                                          ? logoLetter(item.title)
                                          : "Dx"
                                      }
                                    />
                                  ) : (
                                    <div className="item-logo-fallback">
                                      {item.title
                                        ? logoLetter(item.title)
                                        : "Dx"}
                                    </div>
                                  )}
                                </div>

                                {item.title}
                              </HoverCardTrigger>
                              <HoverCardContent>
                                {item.description}
                              </HoverCardContent>
                            </HoverCard>
                          </MobileLink>
                        ) : (
                          item.title
                        ))}
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div> */}
          <Accordion type="multiple" className="w-full pr-6">
            {/* // Products */}
            <div className="flex flex-col space-y-3">
              <AccordionItem value="products">
                <AccordionTrigger>All Products</AccordionTrigger>
                <AccordionContent className="w-full ">
                  {products.map(
                    (item) =>
                      item.href && (
                        <div className="w-full flex flex-row items-center justify-between h-12">
                          <div className="products-logo">
                            <div className="items-logo-container rainbow-text h-[32.5px] w-[32.5px] border text-center text-[12.5px] rounded-full flex items-center justify-center ">
                              <div className="item-logo-fallback">
                                {item.title ? logoLetter(item.title) : "Dx"}
                              </div>
                            </div>
                          </div>
                          <div className="products-title flex-1 items-center justify-center">
                            <MobileLink
                              key={item.href}
                              href={item.href}
                              onOpenChange={setOpen}
                              className="w-full flex flex-row items-center justify-center"
                            >
                              {item.title}
                            </MobileLink>
                          </div>
                          <div className="products-action h-[32.5px] w-[32.5px] border text-center text-[12.5px] rounded-full flex items-center justify-center">
                            <Icons.moreHorizental className="h-4 w-4" />
                          </div>
                        </div>
                      )
                  )}
                </AccordionContent>
              </AccordionItem>
            </div>
            <div className="flex flex-col space-y-3">
              <AccordionItem value="more">
                <AccordionTrigger>More</AccordionTrigger>
                <AccordionContent className="w-full ">
                  {more.map(
                    (item) =>
                      item.href && (
                        <div className="w-full flex flex-row items-center justify-between h-12">
                          <div className="products-logo">
                            <div className="items-logo-container rainbow-text h-[32.5px] w-[32.5px] border text-center text-[12.5px] rounded-full flex items-center justify-center ">
                              <div className="item-logo-fallback">
                                {item.title ? logoLetter(item.title) : "Dx"}
                              </div>
                            </div>
                          </div>
                          <div className="products-title flex-1 items-center justify-center">
                            <MobileLink
                              key={item.href}
                              href={item.href}
                              onOpenChange={setOpen}
                              className="w-full flex flex-row items-center justify-center"
                            >
                              {item.title}
                            </MobileLink>
                          </div>
                          <div className="products-action h-[32.5px] w-[32.5px] border text-center text-[12.5px] rounded-full flex items-center justify-center">
                            <Icons.moreHorizental className="h-4 w-4" />
                          </div>
                        </div>
                      )
                  )}
                </AccordionContent>
              </AccordionItem>
            </div>
            <div className="flex flex-col space-y-3">
              <AccordionItem value="extra-navitems">
                <AccordionTrigger>Extra NavItems</AccordionTrigger>
                <AccordionContent className="w-full ">
                  {docsConfig.mainNav.map(
                    (item) =>
                      item.href && (
                        <div className="w-full flex flex-row items-center justify-between h-12">
                          <div className="products-logo">
                            <div className="items-logo-container rainbow-text h-[32.5px] w-[32.5px] border text-center text-[12.5px] rounded-full flex items-center justify-center ">
                              <div className="item-logo-fallback">
                                {item.title ? logoLetter(item.title) : "Dx"}
                              </div>
                            </div>
                          </div>
                          <div className="products-title flex-1 items-center justify-center">
                            <MobileLink
                              key={item.href}
                              href={item.href}
                              onOpenChange={setOpen}
                              className="w-full flex flex-row items-center justify-center"
                            >
                              {item.title}
                            </MobileLink>
                          </div>
                          <div className="products-action h-[32.5px] w-[32.5px] border text-center text-[12.5px] rounded-full flex items-center justify-center">
                            <Icons.moreHorizental className="h-4 w-4" />
                          </div>
                        </div>
                      )
                  )}
                </AccordionContent>
              </AccordionItem>
            </div>
            {/* // More */}
            {/* <div className="flex flex-col space-y-3">
              <AccordionItem value="more">
                <AccordionTrigger>More</AccordionTrigger>
                <AccordionContent className="w-full flex flex-col items-center justify-between">
                  {more.map(
                    (item) =>
                      item.href && (
                        <MobileLink
                          key={item.href}
                          href={item.href}
                          onOpenChange={setOpen}
                        >
                          <div className="more-logo">
                            <div className="items-logo-container rainbow-text h-[32.5px] w-[32.5px] border text-center text-[12.5px] rounded-full flex items-center justify-center ">
                              <div className="item-logo-fallback">
                                {item.title ? logoLetter(item.title) : "Dx"}
                              </div>
                            </div>
                          </div>
                          <div className="more-title flex-1">{item.title}</div>
                          <div className="more-action h-[32.5px] w-[32.5px] border text-center text-[12.5px] rounded-full flex items-center justify-center">
                            <Icons.moreHorizental className="h-4 w-4" />
                          </div>
                        </MobileLink>
                      )
                  )}
                </AccordionContent>
              </AccordionItem>
            </div> */}
            {/* // Extra NavItems */}
            {/* <div className="flex flex-col space-y-3">
              <AccordionItem value="extra-navitem">
                <AccordionTrigger>Extra NavItems</AccordionTrigger>
                <AccordionContent className="w-full flex flex-col items-center justify-between">
                  {docsConfig.mainNav.map(
                    (item) =>
                      item.href && (
                        <MobileLink
                          key={item.href}
                          href={item.href}
                          onOpenChange={setOpen}
                        >
                          <div className="extra-navitem-logo">
                            <div className="items-logo-container rainbow-text h-[32.5px] w-[32.5px] border text-center text-[12.5px] rounded-full flex items-center justify-center ">
                              <div className="item-logo-fallback">
                                {item.title ? logoLetter(item.title) : "Dx"}
                              </div>
                            </div>
                          </div>
                          <div className="extra-navitem-title flex-1">
                            {item.title}
                          </div>
                          <div className="extra-navitem-action h-[32.5px] w-[32.5px] border text-center text-[12.5px] rounded-full flex items-center justify-center">
                            <Icons.moreHorizental className="h-4 w-4" />
                          </div>
                        </MobileLink>
                      )
                  )}
                </AccordionContent>
              </AccordionItem>
            </div> */}
            {/* // Main NavItems */}
            <div className="flex flex-col space-y-3">
              {docsConfig.sidebarNav.map((item, index) => (
                <div key={index} className="flex flex-col space-y-3">
                  <AccordionItem value="main-navitem">
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent className="w-full flex flex-row items-center justify-between">
                      {item?.items?.length &&
                        item?.items?.map((item) => (
                          <React.Fragment key={item.href}>
                            {!item.disabled &&
                              (item.href ? (
                                <div className="w-full flex flex-row items-center justify-between h-12">
                                  <div className="products-logo">
                                    <div className="items-logo-container rainbow-text h-[32.5px] w-[32.5px] border text-center text-[12.5px] rounded-full flex items-center justify-center ">
                                      {item.logo ? (
                                        <Image
                                          src={`/docs/${item.title
                                            .replace(/\s/g, "")
                                            .toLowerCase()}.jpg`}
                                          height={25}
                                          width={25}
                                          sizes="(max-width: 30px) 100vw"
                                          quality={100}
                                          style={{ objectFit: "contain" }}
                                          loading="lazy"
                                          alt={
                                            item.title
                                              ? logoLetter(item.title)
                                              : "Dx"
                                          }
                                        />
                                      ) : (
                                        <div className="item-logo-fallback">
                                          {item.title
                                            ? logoLetter(item.title)
                                            : "Dx"}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="products-title flex-1 items-center justify-center">
                                    <MobileLink
                                      key={item.href}
                                      href={item.href}
                                      onOpenChange={setOpen}
                                      className="w-full flex flex-row items-center justify-center"
                                    >
                                      {item.title}
                                    </MobileLink>
                                  </div>
                                  <div className="main-navitem-action h-[32.5px] w-[32.5px] border text-center text-[12.5px] rounded-full flex items-center justify-center">
                                    <Icons.moreHorizental className="h-4 w-4" />
                                  </div>
                                </div>
                              ) : (
                                item.title
                              ))}
                          </React.Fragment>
                        ))}
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </div>
          </Accordion>
          <h5 className="flex w-full items-center justify-center text-center h-24">
            Build By Sumon & Loved By You!!!
          </h5>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

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
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
