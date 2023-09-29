"use client"

import React, { useRef } from "react"
import Image from "next/image"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { usePress } from "react-aria"
import { any } from "zod"
import { socialMediaConfig } from "@/config/social-media"
import { siteConfig } from "@/config/website"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  InputShadcnUi,
  Label,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupItem,
  ScrollArea,
  ScrollBar,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  Skeleton,
  Slider,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Toaster,
  Toggle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  badgeVariants,
  buttonVariants,
  navigationMenuTriggerStyle,
  toast,
  toggleVariants,
  useFormField,
  useToast,
  type ToastActionElement,
  type ToastProps,
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui"
import Hack from "./hack"
import SocialMedias from "./socialMedia"
import { NavigationMenuDropdown } from "./navigatioin-menu"
import { docsConfig } from "@/config/docs"
import { more, products } from "@/config/navbar"
import { CalendarDays } from "lucide-react"
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

export function PrimarySidebar() {
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
      let titleName = firstLetter.toUpperCase() + restOfWord.toLowerCase()
      return titleName
    })
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              variant="ghost"
              className="nav-toggles h-24 px-2 py-5 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 2xs:hidden xs:hidden sm:hidden lg:flex"
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
          </HoverCardTrigger>
          <HoverCardContent className="w-48">
            {/* <div className="menubar_container w-full h-auto flex flex-col items-center justify-start">
<HoverCard>
  <HoverCardTrigger>Hover</HoverCardTrigger>
  <HoverCardContent>
    The React Framework created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>
<HoverCard>
  <HoverCardTrigger>Hover</HoverCardTrigger>
  <HoverCardContent>
    The React Framework created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>
<HoverCard>
  <HoverCardTrigger>Hover</HoverCardTrigger>
  <HoverCardContent>
    The React Framework created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>
</div>
            <div className="flex justify-between space-x-4 mb-3">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div> */}
            <Menubar className="w-full h-48 flex-col items-center justify-start">


              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    New Window <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>New Incognito Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Email link</MenubarItem>
                      <MenubarItem>Messages</MenubarItem>
                      <MenubarItem>Notes</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    Print... <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Find</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Search the web</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Find...</MenubarItem>
                      <MenubarItem>Find Next</MenubarItem>
                      <MenubarItem>Find Previous</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>Cut</MenubarItem>
                  <MenubarItem>Copy</MenubarItem>
                  <MenubarItem>Paste</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>
                    Always Show Full URLs
                  </MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarItem inset>
                    Reload <MenubarShortcut>⌘R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled inset>
                    Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Hide Sidebar</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Profiles</MenubarTrigger>
                <MenubarContent>
                  <MenubarRadioGroup value="benoit">
                    <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                    <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                    <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarItem inset>Edit...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Add Profile...</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Keyboard className="mr-2 h-4 w-4" />
                    <span>Keyboard shortcuts</span>
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4" />
                    <span>Team</span>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>Invite users</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          <span>Email</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          <span>Message</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <PlusCircle className="mr-2 h-4 w-4" />
                          <span>More...</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    <Plus className="mr-2 h-4 w-4" />
                    <span>New Team</span>
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LifeBuoy className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  <Cloud className="mr-2 h-4 w-4" />
                  <span>API</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}

          </HoverCardContent>
        </HoverCard>
      </SheetTrigger>
      <SheetContent side="left" className="sheetLeft m-0 p-0 z-[1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000]">
        <PrimarySidebarLink
          href="/"
          className="mx-8 mt-5 flex items-center justify-center rounded-md border p-10 py-1 hover:bg-[--code-foreground]"
          onOpenChange={setOpen}
        >
          <Avatar className=" font-bold">
            <AvatarImage src="/logo.svg" alt="@shadcn" />
            <AvatarFallback>DX</AvatarFallback>
          </Avatar>
          <span className="font-bold">{siteConfig.name}</span>
        </PrimarySidebarLink>

        <ScrollArea className="mobile-scroll mt-2 h-[100vh] px-8 pb-0 ">
          <Accordion type="multiple" className="w-full">
            {/* Products */}
            <div className="flex flex-col space-y-3">
              <AccordionItem value="products">
                <AccordionTrigger>All Products</AccordionTrigger>
                <AccordionContent className="w-full ">
                  {products.map(
                    (item, index) =>
                      item.href && (
                        <div
                          key={index}
                          className="flex h-12 w-full flex-row items-center justify-between"
                        >
                          <div className="products-logo">
                            <div className="items-logo-container rainbow-text flex h-[32.5px] w-[32.5px] items-center justify-center rounded-full border text-center text-[12.5px] ">
                              <div className="item-logo-fallback">
                                {item.title ? logoLetter(item.title) : "Dx"}
                              </div>
                            </div>
                          </div>
                          <div className="products-title flex-1 items-center justify-center">
                            <PrimarySidebarLink
                              key={item.href}
                              href={item.href}
                              onOpenChange={setOpen}
                              className="flex w-full flex-row items-center justify-center"
                            >
                              {item.title}
                            </PrimarySidebarLink>
                          </div>
                          <div className="products-action flex h-[32.5px] w-[32.5px] items-center justify-center rounded-full border text-center text-[12.5px]">
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
                    (item, index) =>
                      item.href && (
                        <div
                          key={index}
                          className="flex h-12 w-full flex-row items-center justify-between"
                        >
                          <div className="products-logo">
                            <div className="items-logo-container rainbow-text flex h-[32.5px] w-[32.5px] items-center justify-center rounded-full border text-center text-[12.5px] ">
                              <div className="item-logo-fallback">
                                {item.title ? logoLetter(item.title) : "Dx"}
                              </div>
                            </div>
                          </div>
                          <div className="products-title flex-1 items-center justify-center">
                            <PrimarySidebarLink
                              key={item.href}
                              href={item.href}
                              onOpenChange={setOpen}
                              className="flex w-full flex-row items-center justify-center"
                            >
                              {item.title}
                            </PrimarySidebarLink>
                          </div>
                          <div className="products-action flex h-[32.5px] w-[32.5px] items-center justify-center rounded-full border text-center text-[12.5px]">
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
                    (item, index) =>
                      item.href && (
                        <div
                          key={index}
                          className="flex h-12 w-full flex-row items-center justify-between"
                        >
                          <div className="products-logo">
                            <div className="items-logo-container rainbow-text flex h-[32.5px] w-[32.5px] items-center justify-center rounded-full border text-center text-[12.5px] ">
                              <div className="item-logo-fallback">
                                {item.title ? logoLetter(item.title) : "Dx"}
                              </div>
                            </div>
                          </div>
                          <div className="products-title flex-1 items-center justify-center">
                            <PrimarySidebarLink
                              key={item.href}
                              href={item.href}
                              onOpenChange={setOpen}
                              className="flex w-full flex-row items-center justify-center"
                            >
                              {item.title}
                            </PrimarySidebarLink>
                          </div>
                          <div className="products-action flex h-[32.5px] w-[32.5px] items-center justify-center rounded-full border text-center text-[12.5px]">
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
                                <div className="flex h-12 w-full flex-row items-center justify-between">
                                  <div className="products-logo">
                                    <div className="items-logo-container rainbow-text flex h-[32.5px] w-[32.5px] items-center justify-center rounded-lg border text-center text-[12.5px] ">
                                      <Avatar className="h-[25px] w-[25px] rounded-sm">
                                        <AvatarImage
                                          src={
                                            item.logo
                                              ? `/docs/${item.title
                                                .replace(/\s/g, "-")
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
                                    <PrimarySidebarLink
                                      key={item.href}
                                      href={item.href}
                                      onOpenChange={setOpen}
                                      className="flex w-full flex-row items-center justify-center"
                                    >
                                      {transformString(
                                        item.title.replace(/'S/g, "")
                                      )}
                                    </PrimarySidebarLink>
                                  </div>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <div className="main-navitem-action flex h-[32.5px] w-[32.5px] items-center justify-center rounded-full border text-center text-[12.5px]">
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
          <h5 className="mt-8 flex h-[250px] w-full items-start justify-center">
            Build By Sumon & Loved By You!!!
            {/* <Avatar>
              <AvatarImage src={"/docs/metamask.jpg"} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
          </h5>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface PrimarySidebarLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function PrimarySidebarLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: PrimarySidebarLinkProps) {
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

export function UserHeader() {
  const [open, setOpen] = React.useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { pressProps } = usePress({
    onPressStart: (event) => console.log("onPressStart:", event.pointerType),
    onPressEnd: (event) => console.log("onPressEnd:", event.pointerType),
    onPress: (event) => console.log("onPress:", event.pointerType),
    onPressUp: (event) => console.log("onPressUp:", event.pointerType),
  })

  return (
    <header className="navbar supports-backdrop-blur:bg-background/60 bg-background/95 sticky top-0 z-[100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000] w-full backdrop-blur p-0 m-0 justify-center">
      <div className="container flex h-14 items-center justify-center p-0 m-0 lg:max-w-[100%] lg:w-[98%]">
        {/* <MainNav /> */}
        {/* <div className="hidden lg:flex">
          <Link href="/" className="flex items-center space-x-2 pr-2 ">
            <Icons.logo className="navbar-logo-icon h-6 w-6" />
          </Link>
        </div> */}
        <PrimarySidebar />
        <div className="hidden lg:flex">
          <Link href="/" className="flex items-center space-x-2 pr-2 ">
            <Icons.logo className="navbar-logo-icon h-6 w-6" />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 lg:justify-end">
          <Avatar {...pressProps} ref={ref} className="lg:hidden">
            <AvatarImage src="/logo.svg" alt="@shadcn" />
            <AvatarFallback>DX</AvatarFallback>
          </Avatar>
          <div className="w-full flex-1 lg:w-auto lg:flex-none ">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            <SocialMedias />
            <ModeToggle />
            <Hack />
          </nav>
        </div>
      </div>
    </header>
  )
}

// interface SocialMediaProps extends LinkProps {
//   onOpenChange?: (open: boolean) => void
//   children: React.ReactNode
//   className?: string
// }
// function SocialMedia({
//   href,
//   onOpenChange,
//   className,
//   children,
//   ...props
// }: SocialMediaProps) {
//   const router = useRouter()
//   return (
//     <Link
//       href={href}
//       onClick={() => {
//         router.push(href.toString())
//         onOpenChange?.(false)
//       }}
//       className={cn(
//         buttonVariants({
//           variant: "ghost",
//         }),
//         " flex h-[75px] items-center justify-center rounded-md border"
//       )}
//       {...props}
//     >
//       {children}
//     </Link>
//   )
// }
{
  /* <Dialog>
              <DialogTrigger asChild>
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "nav-toggles social-media w-9 px-0"
                  )}
                >
                  <Icons.hack className="h-4 w-4 fill-current" />
                  <span className="sr-only">HackIn</span>
                </div>
              </DialogTrigger>
              <DialogContent className="hack flex items-center rounded-md p-3">
                <Tabs defaultValue="hackIn" className="w-full ">
                  <TabsList className="mx-auto grid w-full grid-cols-2">
                    <TabsTrigger value="hackIn">HackIn</TabsTrigger>
                    <TabsTrigger value="hackUp">HackUp</TabsTrigger>
                  </TabsList>
                  <TabsContent value="hackIn">
                    <Card>
                      <CardHeader>
                        <CardTitle>HackIn</CardTitle>
                        <CardDescription>
                          Make changes to your account here. Click save when
                          youre done.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="username">Username</Label>
                          <Input id="username" defaultValue="@peduarte" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Save changes</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  <TabsContent value="hackUp">
                    <Card>
                      <CardHeader>
                        <CardTitle>HackUp</CardTitle>
                        <CardDescription>
                          Change your password here. After saving, youll be
                          logged out.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <Label htmlFor="current">Current password</Label>
                          <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="new">New password</Label>
                          <Input id="new" type="password" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Save password</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog> */
}
{
  /* <div
        {...pressProps}
        ref={ref}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "lightgray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Press me
      </div> */
}
{
  /* <Dialog>
              <DialogTrigger asChild>
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "nav-toggles social-media w-9 px-0"
                  )}
                >
                  <Icons.chevronDown className="h-4 w-4" />
                  <span className="sr-only">Social Medias</span>
                </div>
              </DialogTrigger>
              <DialogContent className="w-[90%] rounded-md pb-3 pl-2 pr-0 pt-0 sm:w-[360px]">
                <Tabs defaultValue="vlog" className="">
                  <DialogHeader>
                    <DialogTitle>
                      <TabsList className="absolute left-4 top-3 w-[200px]">
                        <TabsTrigger value="vlog">Vlog</TabsTrigger>
                        <TabsTrigger value="gaming">Gaming</TabsTrigger>
                        <TabsTrigger value="react">React</TabsTrigger>
                      </TabsList>
                    </DialogTitle>
                    <DialogDescription className="social_media_container h-[350px] overflow-y-auto overflow-x-hidden pt-0">
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
            </Dialog> */
}
