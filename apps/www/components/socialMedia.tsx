/* eslint-disable tailwindcss/classnames-order */

"use client"

import * as React from "react"
import { useState } from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { socialMediaConfig } from "@/config/social-media"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
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
  toggleVariants,
  useFormField,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  useToast,
  type ToastActionElement,
  type ToastProps,
} from "@/components/ui"


export {

}

export default function SocialMedias() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog>
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
      <DialogContent className="flex h-[500px] max-w-[90%] flex-col items-center justify-start overflow-y-auto overflow-x-hidden rounded-md px-0 py-5 sm:max-w-[375px]">
        <Tabs defaultValue="vlog" className="">
          <DialogHeader>
            <DialogTitle>
              <TabsList className="absolute left-1 top-1 w-[200px]">
                <TabsTrigger value="vlog">Vlog</TabsTrigger>
                <TabsTrigger value="gaming">Gaming</TabsTrigger>
                <TabsTrigger value="react">React</TabsTrigger>
              </TabsList>
            </DialogTitle>
            <DialogDescription className="social_media_container h-auto w-full p-0">
              <TabsContent value="vlog" className="p-0">
                <div className="grid grid-cols-2 justify-stretch gap-3">
                  {socialMediaConfig.platformVlog?.map(
                    (item, index) =>
                      item.href && (
                        <span
                          key={index}
                          className={cn(
                            buttonVariants({
                              variant: "ghost",
                            }),
                            " flex h-[75px] items-center justify-center rounded-md border"
                          )}
                        >
                          {item.title}
                        </span>
                      )
                  )}
                </div>
              </TabsContent>
              <TabsContent value="gaming">
                <div className="grid grid-cols-2 justify-stretch gap-3 ">
                  {socialMediaConfig.platformGaming?.map(
                    (item, index) =>
                      item.href && (
                        <span
                          key={index}
                          className={cn(
                            buttonVariants({
                              variant: "ghost",
                            }),
                            " flex h-[75px] items-center justify-center rounded-md border"
                          )}
                        >
                          {item.title}
                        </span>
                      )
                  )}
                </div>
              </TabsContent>
              <TabsContent value="react">
                <div className="grid grid-cols-2 justify-stretch gap-3 ">
                  {socialMediaConfig.platformReact?.map(
                    (item, index) =>
                      item.href && (
                        <span
                          key={index}
                          className={cn(
                            buttonVariants({
                              variant: "ghost",
                            }),
                            " flex h-[75px] items-center justify-center rounded-md border"
                          )}
                        >
                          {item.title}
                        </span>
                      )
                  )}
                </div>
              </TabsContent>
            </DialogDescription>
          </DialogHeader>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
