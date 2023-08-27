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
import { Icons } from "@/components/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  ScrollArea,
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  function logoLetter(title: string): string {
    let text = title
    let firstLetter = text.charAt(0).toUpperCase()
    let lastLetter = text.charAt(text.length - 1).toUpperCase()
    let result = firstLetter + lastLetter
    return result
  }

  function transformString(str: string): string {
    return str.replace(/\b(\w)(\w*)\b/g, (match, firstLetter, restOfWord) => {
      return firstLetter.toUpperCase() + restOfWord.toLowerCase()
    })
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
      <SheetContent side="left" className="sheetLeft px-10">
        <MobileLink
          href="/"
          className="flex items-center justify-center p-0 m-0 py-1 mr-3 border rounded-md hover:bg-[--code-foreground]"
          onOpenChange={setOpen}
        >
          <Avatar className=" font-bold">
            <AvatarImage src="/logo.svg" alt="@shadcn" />
            <AvatarFallback>DX</AvatarFallback>
          </Avatar>
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>

        <ScrollArea className="mt-2 h-[100vh] pb-32 ">
          <Accordion type="multiple" className="w-full">
            {/* Products */}
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
                                <Avatar className="h-[25px] w-[25px] rounded-sm">
                                  <AvatarImage
                                    src={`/docs/${item.title
                                      .replace(/\s\s\s/g, " ")
                                      .replace(/\s\s/g, " ")
                                      .replace(/\s/g, "-")
                                      .replace(/'s/g, "-")
                                      .toLowerCase()}.jpg`}
                                    alt="Dx"
                                  />
                                  <AvatarFallback>
                                    {item.title ? logoLetter(item.title) : "Dx"}
                                  </AvatarFallback>
                                </Avatar>
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

            {/* More */}
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
                                <Avatar className="h-[25px] w-[25px] rounded-sm">
                                  <AvatarImage
                                    src={`/docs/${item.title
                                      .replace(/\s\s\s/g, " ")
                                      .replace(/\s\s/g, " ")
                                      .replace(/\s/g, "-")
                                      .replace(/'s/g, "-")
                                      .toLowerCase()}.jpg`}
                                    alt="Dx"
                                  />
                                  <AvatarFallback>
                                    {item.title ? logoLetter(item.title) : "Dx"}
                                  </AvatarFallback>
                                </Avatar>
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

            {/* Extra NavItem */}
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
                                <Avatar className="h-[25px] w-[25px] rounded-sm">
                                  <AvatarImage
                                    src={`/docs/${item.title
                                      .replace(/\s\s\s/g, " ")
                                      .replace(/\s\s/g, " ")
                                      .replace(/\s/g, "-")
                                      .replace(/'s/g, "-")
                                      .toLowerCase()}.jpg`}
                                    alt="Dx"
                                  />
                                  <AvatarFallback>
                                    {item.title ? logoLetter(item.title) : "Dx"}
                                  </AvatarFallback>
                                </Avatar>
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

            {/* Main NavItems */}
            <div className="flex flex-col space-y-3">
              {docsConfig.sidebarNav.map((item, index) => (
                <div key={index} className="flex flex-col space-y-3">
                  <AccordionItem value={item.title}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent className="w-full">
                      {item?.items?.length &&
                        item?.items?.map((item) => (
                          <React.Fragment key={item.href}>
                            {!item.disabled &&
                              (item.href ? (
                                <div className="w-full flex flex-row items-center justify-between h-12">
                                  <div className="products-logo">
                                    <div className="items-logo-container rainbow-text h-[32.5px] w-[32.5px] border text-center text-[12.5px] rounded-lg flex items-center justify-center ">
                                      <Avatar className="h-[25px] w-[25px] rounded-sm">
                                        <AvatarImage
                                          src={
                                            item.logo
                                              ? `/docs/${item.title
                                                  .replace(/\s\s\s/g, " ")
                                                  .replace(/\s\s/g, " ")
                                                  .replace(/\s/g, "-")
                                                  .replace(/'s/g, "-")
                                                  .toLowerCase()}.jpg`
                                              : ""
                                          }
                                          alt="Dx"
                                        />
                                        <AvatarFallback>
                                          {item.title
                                            ? logoLetter(item.title)
                                            : "Dx"}
                                        </AvatarFallback>
                                      </Avatar>
                                    </div>
                                  </div>
                                  <div className="products-title flex-1 items-center justify-center">
                                    <MobileLink
                                      key={item.href}
                                      href={item.href}
                                      onOpenChange={setOpen}
                                      className="w-full flex flex-row items-center justify-center"
                                    >
                                      {transformString(
                                        item.title.replace(/-/g, " ")
                                      )}
                                    </MobileLink>
                                  </div>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <div className="main-navitem-action h-[32.5px] w-[32.5px] border text-center text-[12.5px] rounded-full flex items-center justify-center">
                                        <Icons.moreHorizental className="h-4 w-4" />
                                      </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      {item.website_url ? (
                                        <DropdownMenuItem className="flex items-center justify-center">
                                          <Link
                                            key={index}
                                            href={item.website_url}
                                            target={
                                              item.external ? "_blank" : ""
                                            }
                                            rel={
                                              item.external ? "noreferrer" : ""
                                            }
                                          >
                                            Website
                                          </Link>
                                        </DropdownMenuItem>
                                      ) : (
                                        ""
                                      )}

                                      {item.appStore &&
                                      item.playStore &&
                                      item.webStore ? (
                                        <div>
                                          <DropdownMenuItem className="flex items-center justify-center">
                                            <Link
                                              key={index}
                                              href={item.appStore}
                                              target={
                                                item.external ? "_blank" : ""
                                              }
                                              rel={
                                                item.external
                                                  ? "noreferrer"
                                                  : ""
                                              }
                                              className="appStore hover:underline"
                                            >
                                              AppStore
                                            </Link>
                                          </DropdownMenuItem>
                                          <DropdownMenuItem className="flex items-center justify-center">
                                            <Link
                                              key={index}
                                              href={item.playStore}
                                              target={
                                                item.external ? "_blank" : ""
                                              }
                                              rel={
                                                item.external
                                                  ? "noreferrer"
                                                  : ""
                                              }
                                              className="playStore hover:underline"
                                            >
                                              PlayStore
                                            </Link>
                                          </DropdownMenuItem>
                                          <DropdownMenuItem className="flex items-center justify-center">
                                            <Link
                                              key={index}
                                              href={item.webStore}
                                              target={
                                                item.external ? "_blank" : ""
                                              }
                                              rel={
                                                item.external
                                                  ? "noreferrer"
                                                  : ""
                                              }
                                              className="webStore hover:underline"
                                            >
                                              WebStore
                                            </Link>
                                          </DropdownMenuItem>
                                        </div>
                                      ) : (
                                        ""
                                      )}
                                      {item.download &&
                                      item.star &&
                                      item.version &&
                                      item.updated ? (
                                        <div>
                                          <DropdownMenuItem className="flex items-center justify-center">
                                            Downloads({item.download})
                                          </DropdownMenuItem>
                                          <DropdownMenuItem className="flex items-center justify-center">
                                            Stars({item.star})
                                          </DropdownMenuItem>
                                          <DropdownMenuItem className="flex items-center justify-center">
                                            Version({item.version})
                                          </DropdownMenuItem>
                                          <DropdownMenuItem className="flex items-center justify-center">
                                            Updated({item.updated})
                                          </DropdownMenuItem>
                                        </div>
                                      ) : (
                                        ""
                                      )}

                                      {item.github_repo ? (
                                        <DropdownMenuItem className="flex items-center justify-center">
                                          <Link
                                            key={index}
                                            href={item.github_repo}
                                            target={
                                              item.external ? "_blank" : ""
                                            }
                                            rel={
                                              item.external ? "noreferrer" : ""
                                            }
                                          >
                                            Github
                                          </Link>
                                        </DropdownMenuItem>
                                      ) : (
                                        ""
                                      )}
                                    </DropdownMenuContent>
                                  </DropdownMenu>
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
          <h5 className="flex w-full items-start justify-center mt-8 h-[5000px]">
            Build By Sumon & Loved By You!!!
            <Avatar>
              <AvatarImage src={"/docs/metamask.jpg"} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
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
