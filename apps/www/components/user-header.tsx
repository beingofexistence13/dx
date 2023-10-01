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
import { CalendarDays, ChevronDown, Mic } from "lucide-react"
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
  ImagePlus
} from "lucide-react"
import { NotificationAction } from "./notification"
import { UserAction } from "./user"
import { PrimarySidebar } from "./primary-sidebar"
import { RightSidebar } from "./right-sidebar"
import { FridayAction } from "./friday"
import { MoreAction } from "./more"
import { useState } from "react"
import { Suspense } from "react"
import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Input,
} from "@nextui-org/react"
import { FileIcon, LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"
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
  CalendarIcon,
  Check,
  ChevronsUpDown,
  ClipboardCheck,
  ClipboardCopy,
  ClipboardList,
  ClipboardPaste,
  Cog,

  QrCode,
  Settings2,
  Shield,
  Smile,
  X,
} from "lucide-react"
import { useTheme } from "next-themes"
import { useForm } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import { z } from "zod"
import useAccount from "../hooks/useAccount"
import useAddToNetwork from "../hooks/useAddToNetwork"
import { useChain } from "../stores"
import { renderProviderText, notTranslation as useTranslations } from "../utils"
import { generateChainData } from "../utils/fetch"
import { AdBanner } from "./AdBanner"
import Layout from "./Layout"
import RPCList from "./RPCList"
import Chain from "./chain"
import { DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"
import { Dialog, DialogContent } from "@/registry/default/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps { }

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
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
    <div className="flex w-full items-center space-x-2 px-3 text-sm text-muted-foreground">
      <div className="search  flex items-center justify-center rounded-full border p-1">
        <Search className="h-4 w-4" />
      </div>
      <CommandPrimitive.Input
        ref={ref}
        className={cn(
          "flex h-11 w-full flex-1 rounded-md bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-none ",
          className
        )}
        {...props}
      />
      <div className="chatgpt flex items-center justify-center rounded-full border p-1">
        <Icons.chatgpt className="h-2 w-2 fill-current" />
      </div>
      <div className="mic  flex items-center justify-center  rounded-full border p-1">
        <Mic className="h-4 w-4" />
      </div>
      <div className="media  flex items-center justify-center rounded-full border p-1">
        <ImagePlus className="h-4 w-4" />
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
      "glassmorphisum overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
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
    className={cn("-mx-1 h-px bg-border", className)}
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
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
        "ml-auto text-xs tracking-widest text-muted-foreground",
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
    <header className="supports-backdrop-blur:bg-background/60 bg-background/95 sticky top-0 left-[50px] w-full backdrop-blur p-0 m-0 border-b h-[55px] flex items-center justify-center z-[100px]">
      <div className="container flex h-14 items-center justify-center p-0 m-0 lg:max-w-[100%] lg:w-[99%]">
        {/* Menubar -> hover + PrimarySidebar -> onclick */}
        <PrimarySidebar />
        {/* Website Name and Logo */}
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="hidden lg:flex rounded-lg hover:bg-[--code-foreground] sm:inline-block mr-1">
              <Link href="/" className="flex items-center space-x-.5 pr-2 ">
                <Icons.logo className="navbar-logo-icon" />
                <span className="hidden font-bold text-sm sm:flex  ">
                  {siteConfig.nameShort}
                </span>
              </Link>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 ml-[70px] h-[35px] flex items-center justify-center">
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
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        {/* Blockchain Stuffs */}
        <div className="blockchain_status hidden lg:flex flex-row items-center justify-start w-auto h-auto space-x-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="wallet_status rounded-md border flex flex-row items-center justify-evenly w-[150px] h-[35px] space-x-1 px-1 py-.5 overflow-hidden relative">
                <Avatar className="max-h-[15px] max-w-[15px] flex items-center justify-center text-center">
                  <AvatarImage src="/docs/metamask.jpg" alt="@wallet" />
                  <AvatarFallback className="p-1"></AvatarFallback>
                </Avatar>

                <span className="text-xs w-[75px] text-truncate truncate text-muted overflow-none whitespace-none">Gkjkaljfkldsjfkldsjfkldsfjkjkjkjlk</span>

                <div className="h-2 rounded-full bg-green-400 w-2"></div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Wallets Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {docsConfig.wallet.map((item, index) => (
                <div
                  key={index}
                >
                  <DropdownMenuItem
                    className="flex items-center justify-center rounded-lg text-center text-[12.5px]"
                  >
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
              <div className="node_status rounded-md border flex flex-row items-center justify-evenly w-[150px] h-[35px] space-x-1 px-1 py-.5 overflow-hidden relative">
                <Avatar className="max-h-[15px] max-w-[15px] flex items-center justify-center text-center">
                  <AvatarImage src="/docs/fandomland.jpg" alt="@node" />
                  <AvatarFallback className="text-[5px] flex items-center justify-center text-center"></AvatarFallback>
                </Avatar>

                <span className="text-xs w-[75px] text-truncate truncate text-muted overflow-none whitespace-none">0.0000000001</span>

                <div className="h-5 rounded-full flex items-center justify-center w-5">
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
          <div className="w-full flex-1 lg:w-auto lg:flex-none h-[350px] fixed top-2 left-10 ">
            <Command className="glassmorphisum rounded-lg border shadow-md">
              <CommandInput
                onClick={() => {
                  setOpen(!open)
                }}
                placeholder="Search for joy"
              />

              <CommandList className={`bg-red-500 ${open ? "":"hidden"}`}>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Wallets,Social Medias,Nodes">
                  {docsConfig.passport
                    .filter((navitem) => !navitem.external)
                    .map((navItem, index) => (
                      <Link href={navItem.href ? navItem.href : "/"}
                        key={index}
                      >
                        <CommandItem
                          value={navItem.title}
                        >
                          <Avatar className="h-[27px] w-[27px] rounded-sm">
                            <AvatarImage
                              src={navItem.logo
                                ? `/docs/${navItem.title
                                  .replace(/\s/g, "-")
                                  .toLowerCase()}.jpg`
                                : ""}
                              alt="Dx" />
                            <AvatarFallback className="glassmorphisum border-none">
                              {navItem.title
                                ? logoLetter(navItem.title)
                                : "Dx"}
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
                      <Link href={navItem.href ? navItem.href : "/"}
                        key={index}
                      >
                        <CommandItem
                          value={navItem.title}
                        >
                          <Avatar className="h-[27px] w-[27px] rounded-sm">
                            <AvatarImage
                              src={navItem.logo
                                ? `/docs/${navItem.title
                                  .replace(/\s/g, "-")
                                  .toLowerCase()}.jpg`
                                : ""}
                              alt="Dx" />
                            <AvatarFallback className="glassmorphisum border-none">
                              {navItem.title
                                ? logoLetter(navItem.title)
                                : "Dx"}
                            </AvatarFallback>
                          </Avatar>
                          <span className="ml-3">{navItem.title}</span>
                        </CommandItem>
                      </Link>
                    ))}
                </CommandGroup>
              </CommandList><CommandList className="hidden">
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Wallets,Social Medias,Nodes">
                  {docsConfig.passport
                    .filter((navitem) => !navitem.external)
                    .map((navItem, index) => (
                      <Link href={navItem.href ? navItem.href : "/"}
                        key={index}
                      >
                        <CommandItem
                          value={navItem.title}
                        >
                          <Avatar className="h-[27px] w-[27px] rounded-sm">
                            <AvatarImage
                              src={navItem.logo
                                ? `/docs/${navItem.title
                                  .replace(/\s/g, "-")
                                  .toLowerCase()}.jpg`
                                : ""}
                              alt="Dx" />
                            <AvatarFallback className="glassmorphisum border-none">
                              {navItem.title
                                ? logoLetter(navItem.title)
                                : "Dx"}
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
                      <Link href={navItem.href ? navItem.href : "/"}
                        key={index}
                      >
                        <CommandItem
                          value={navItem.title}
                        >
                          <Avatar className="h-[27px] w-[27px] rounded-sm">
                            <AvatarImage
                              src={navItem.logo
                                ? `/docs/${navItem.title
                                  .replace(/\s/g, "-")
                                  .toLowerCase()}.jpg`
                                : ""}
                              alt="Dx" />
                            <AvatarFallback className="glassmorphisum border-none">
                              {navItem.title
                                ? logoLetter(navItem.title)
                                : "Dx"}
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
          <div className="separator h-[25px] w-[1px] mx-1"></div>
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


