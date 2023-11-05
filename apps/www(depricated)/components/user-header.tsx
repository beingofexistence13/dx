/* eslint-disable tailwindcss/classnames-order */

"use client"

import React, { Suspense, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link, { LinkProps } from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Script from "next/script"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@nextui-org/react"
import { DialogProps } from "@radix-ui/react-dialog"
import { FileIcon, LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Command as CommandPrimitive } from "cmdk"
import { format } from "date-fns"
import {
  AsYouType,
  getCountryCallingCode,
  parsePhoneNumber,
} from "libphonenumber-js"
import {
  ArrowDownToLine,
  Bot,
  BrainCircuit,
  Calculator,
  CalendarDays,
  CalendarIcon,
  Check,
  ChevronDown,
  ChevronsUpDown,
  ClipboardCheck,
  ClipboardCopy,
  ClipboardList,
  ClipboardPaste,
  Cloud,
  Cog,
  CreditCard,
  Github,
  ImagePlus,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Mic,
  Plus,
  PlusCircle,
  QrCode,
  Search,
  Settings,
  Settings2,
  Shield,
  Smile,
  User,
  UserPlus,
  Users,
  X,
} from "lucide-react"
import { useTheme } from "next-themes"
import { usePress } from "react-aria"
import { useForm } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import { any, z } from "zod"

import { docsConfig } from "@/config/docs"
import { more, products } from "@/config/navbar"
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
  badgeVariants,
  Button,
  buttonVariants,
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
  // Dialog,
  // DialogContent,
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
  navigationMenuTriggerStyle,
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
  Sheet,
  SheetContent,
  SheetTrigger,
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
  toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  Toaster,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Toggle,
  toggleVariants,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  useFormField,
  useToast,
  type ToastActionElement,
  type ToastProps,
} from "@/components/ui"
import { Dialog, DialogContent } from "@/registry/default/ui/dialog"

import useAccount from "../hooks/useAccount"
import useAddToNetwork from "../hooks/useAddToNetwork"
import { useChain } from "../stores"
import { renderProviderText, notTranslation as useTranslations } from "../utils"
import { generateChainData } from "../utils/fetch"
import { AdBanner } from "./ad-banner"
import Chain from "./chain"
import { FridayAction } from "./friday"
import Hack from "./hack"
import Layout from "./layout"
import { MoreAction } from "./more"
import { NavigationMenuDropdown } from "./navigatioin-menu"
import { NotificationAction } from "./notification"
import { PrimarySidebar } from "./primary-sidebar"
import { RightSidebar } from "./right-sidebar"
import RPCList from "./rpc-list"
import SocialMedias from "./socialMedia"
import { UserAction } from "./user"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center hover:border-b" cmdk-input-wrapper="">
    <div className="text-muted-foreground flex h-[35px] w-full items-center justify-center space-x-2 px-2 text-sm">
      <div className="search  flex items-center justify-center rounded-full border p-1">
        <Search className="h-3.5 w-3.5" />
      </div>
      <CommandPrimitive.Input
        ref={ref}
        className={cn(
          "placeholder:text-muted-foreground flex h-11 w-full flex-1 rounded-md border-none bg-transparent text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50 ",
          className
        )}
        {...props}
      />
      <div className="chatgpt flex items-center justify-center rounded-full border p-1">
        <Icons.chatgpt className="h-2 w-2 fill-current" />
      </div>
      <div className="mic  flex items-center justify-center  rounded-full border p-1">
        <Mic className="h-3.5 w-3.5" />
      </div>
      <div className="media  flex items-center justify-center rounded-full border p-1">
        <ImagePlus className="h-3.5 w-3.5" />
      </div>
    </div>
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("h-auto overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "glassmorphisum text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("bg-border -mx-1 h-px", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "aria-selected:bg-accent aria-selected:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export function UserHeader() {
  const [open, setOpen] = React.useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { pressProps } = usePress({
    onPressStart: (event) => console.log("onPressStart:", event.pointerType),
    onPressEnd: (event) => console.log("onPressEnd:", event.pointerType),
    onPress: (event) => console.log("onPress:", event.pointerType),
    onPressUp: (event) => console.log("onPressUp:", event.pointerType),
  })
  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])
  function logoLetter(title: string): string {
    let text = title
    let firstLetter = text.charAt(0).toUpperCase()
    let lastLetter = text.charAt(text.length - 1).toUpperCase()
    let result = firstLetter + lastLetter
    return result
  }
  return (
    <header className="supports-backdrop-blur:bg-background/60 bg-background/95 sticky left-[50px] top-0 z-[100px] m-0 flex h-[55px] w-full items-center justify-center border-b p-0 backdrop-blur">
      <div className="container m-0 flex h-14 items-center justify-center p-0 lg:w-[99%] lg:max-w-[100%]">
        {/* Menubar -> hover + PrimarySidebar -> onclick */}
        <PrimarySidebar />
        {/* Website Name and Logo */}
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="mr-1 hidden rounded-lg hover:bg-[--code-foreground] sm:inline-block lg:flex">
              <div className="space-x-.5 flex items-center pr-2 ">
                <Icons.logo className="navbar-logo-icon" />
                <span className="hidden text-sm font-bold sm:flex  ">
                  {siteConfig.nameShort}
                </span>
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="ml-[70px] flex h-[35px] w-80 items-center justify-center">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>DX</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-muted-foreground text-xs">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        {/* Blockchain Stuffs */}
        <div className="blockchain_status hidden h-auto w-auto flex-row items-center justify-start space-x-1 lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="wallet_status py-.5 relative flex h-[35px] w-[150px] flex-row items-center justify-evenly space-x-1 overflow-hidden rounded-md border px-1">
                <Avatar className="flex max-h-[15px] max-w-[15px] items-center justify-center text-center">
                  <AvatarImage src="/docs/metamask.jpg" alt="@wallet" />
                  <AvatarFallback className="p-1"></AvatarFallback>
                </Avatar>

                <span className="text-truncate text-muted overflow-none whitespace-none w-[75px] truncate text-xs">
                  Gkjkaljfkldsjfkldsjfkldsfjkjkjkjlk
                </span>

                <div className="h-2 w-2 rounded-full bg-green-400"></div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Wallets Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {docsConfig.wallet.map((item, index) => (
                <div key={index}>
                  <DropdownMenuItem className="flex items-center justify-center rounded-lg text-center text-[12.5px]">
                    <Avatar className="h-[27px] w-[27px] rounded-sm">
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
                      <AvatarFallback className="glassmorphisum mr-2 h-4 w-4 border-none">
                        {item.title ? logoLetter(item.title) : "Dx"}
                      </AvatarFallback>
                    </Avatar>
                    <span>{item.title}</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </div>
              ))}
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="node_status py-.5 relative flex h-[35px] w-[150px] flex-row items-center justify-evenly space-x-1 overflow-hidden rounded-md border px-1">
                <Avatar className="flex max-h-[15px] max-w-[15px] items-center justify-center text-center">
                  <AvatarImage src="/docs/fandomland.jpg" alt="@node" />
                  <AvatarFallback className="flex items-center justify-center text-center text-[5px]"></AvatarFallback>
                </Avatar>

                <span className="text-truncate text-muted overflow-none whitespace-none w-[75px] truncate text-xs">
                  0.0000000001
                </span>

                <div className="flex h-5 w-5 items-center justify-center rounded-full">
                  <ChevronDown className="h-3 w-3" />
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Node Status</DropdownMenuLabel>
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
          </DropdownMenu>
        </div>
        {/* Header Right Stuffs */}
        <div className="flex flex-1 items-center justify-between space-x-2 lg:justify-end">
          <Avatar {...pressProps} ref={ref} className="lg:hidden">
            <AvatarImage src="/logo.svg" alt="@shadcn" />
            <AvatarFallback>DX</AvatarFallback>
          </Avatar>
          <div
            className={`w-full flex-1 lg:w-auto lg:flex-none  ${
              open ? "h-[350px]" : "h-[35px]"
            }`}
          >
            <Command className="glassmorphisum rounded-lg border shadow-md">
              <CommandInput
                onClick={() => {
                  setOpen(!open)
                }}
                placeholder="Search for joy"
              />

              <CommandList className={`bg-red-500 ${open ? "" : "hidden"}`}>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Wallets,Social Medias,Nodes">
                  {docsConfig.passport
                    .filter((navitem) => !navitem.external)
                    .map((navItem, index) => (
                      <Link
                        key={index}
                        href={navItem.href ? navItem.href : "/"}
                      >
                        <CommandItem value={navItem.title}>
                          <Avatar className="h-[27px] w-[27px] rounded-sm">
                            <AvatarImage
                              src={
                                navItem.logo
                                  ? `/docs/${navItem.title
                                      .replace(/\s/g, "-")
                                      .toLowerCase()}.jpg`
                                  : ""
                              }
                              alt="Dx"
                            />
                            <AvatarFallback className="glassmorphisum border-none">
                              {navItem.title ? logoLetter(navItem.title) : "Dx"}
                            </AvatarFallback>
                          </Avatar>
                          <span className="ml-3">{navItem.title}</span>
                        </CommandItem>
                      </Link>
                    ))}
                </CommandGroup>
                <CommandGroup heading="Blockchain Wallets">
                  {docsConfig.wallet
                    .filter((navitem) => !navitem.external)
                    .map((navItem, index) => (
                      <Link
                        key={index}
                        href={navItem.href ? navItem.href : "/"}
                      >
                        <CommandItem value={navItem.title}>
                          <Avatar className="h-[27px] w-[27px] rounded-sm">
                            <AvatarImage
                              src={
                                navItem.logo
                                  ? `/docs/${navItem.title
                                      .replace(/\s/g, "-")
                                      .toLowerCase()}.jpg`
                                  : ""
                              }
                              alt="Dx"
                            />
                            <AvatarFallback className="glassmorphisum border-none">
                              {navItem.title ? logoLetter(navItem.title) : "Dx"}
                            </AvatarFallback>
                          </Avatar>
                          <span className="ml-3">{navItem.title}</span>
                        </CommandItem>
                      </Link>
                    ))}
                </CommandGroup>
              </CommandList>
              <CommandList className="hidden">
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Wallets,Social Medias,Nodes">
                  {docsConfig.passport
                    .filter((navitem) => !navitem.external)
                    .map((navItem, index) => (
                      <Link
                        key={index}
                        href={navItem.href ? navItem.href : "/"}
                      >
                        <CommandItem value={navItem.title}>
                          <Avatar className="h-[27px] w-[27px] rounded-sm">
                            <AvatarImage
                              src={
                                navItem.logo
                                  ? `/docs/${navItem.title
                                      .replace(/\s/g, "-")
                                      .toLowerCase()}.jpg`
                                  : ""
                              }
                              alt="Dx"
                            />
                            <AvatarFallback className="glassmorphisum border-none">
                              {navItem.title ? logoLetter(navItem.title) : "Dx"}
                            </AvatarFallback>
                          </Avatar>
                          <span className="ml-3">{navItem.title}</span>
                        </CommandItem>
                      </Link>
                    ))}
                </CommandGroup>
                <CommandGroup heading="Blockchain Wallets">
                  {docsConfig.wallet
                    .filter((navitem) => !navitem.external)
                    .map((navItem, index) => (
                      <Link
                        key={index}
                        href={navItem.href ? navItem.href : "/"}
                      >
                        <CommandItem value={navItem.title}>
                          <Avatar className="h-[27px] w-[27px] rounded-sm">
                            <AvatarImage
                              src={
                                navItem.logo
                                  ? `/docs/${navItem.title
                                      .replace(/\s/g, "-")
                                      .toLowerCase()}.jpg`
                                  : ""
                              }
                              alt="Dx"
                            />
                            <AvatarFallback className="glassmorphisum border-none">
                              {navItem.title ? logoLetter(navItem.title) : "Dx"}
                            </AvatarFallback>
                          </Avatar>
                          <span className="ml-3">{navItem.title}</span>
                        </CommandItem>
                      </Link>
                    ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
          <div className="separator mx-1 h-[25px] w-[1px]"></div>
          <nav className="flex items-center">
            <MoreAction />
            <FridayAction />
            <RightSidebar />
            <NotificationAction />
            <UserAction />
          </nav>
        </div>
      </div>
    </header>
  )
}
