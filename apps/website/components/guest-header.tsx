/* eslint-disable tailwindcss/classnames-order */

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
import { MobileNav } from "@/components/mobile-nav"
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
} from "@/components/ui"

import Hack from "./hack"
import SocialMedias from "./socialMedia"

export function GuestHeader() {
  const [open, setOpen] = React.useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { pressProps } = usePress({
    onPressStart: (event) => console.log("onPressStart:", event.pointerType),
    onPressEnd: (event) => console.log("onPressEnd:", event.pointerType),
    onPress: (event) => console.log("onPress:", event.pointerType),
    onPressUp: (event) => console.log("onPressUp:", event.pointerType),
  })

  return (
    <header className="navbar supports-backdrop-blur:bg-background/60 bg-background/95 sticky top-0 z-[100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000] w-full backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        <MobileNav />
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
