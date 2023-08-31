"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

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
  Input,
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

export default function SocialMedias() {
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

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
                      item.href && <div key={item.href}>{item.title}</div>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="gaming">
                <div className="grid grid-cols-2 justify-stretch gap-3 ">
                  {socialMediaConfig.platformGaming?.map(
                    (item) =>
                      item.href && <div key={item.href}>{item.title}</div>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="react">
                <div className="grid grid-cols-2 justify-stretch gap-3 ">
                  {socialMediaConfig.platformReact?.map(
                    (item) =>
                      item.href && <div key={item.href}>{item.title}</div>
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

// interface SocialMediaProps extends LinkProps {
//     onOpenChange?: (open: boolean) => void
//     children: React.ReactNode
//     className?: string
//   }

//   function SocialMedia({
//     href,
//     onOpenChange,
//     className,
//     children,
//     ...props
//   }: SocialMediaProps) {
//     const router = useRouter()
//     return (
//       <Link
//         href={href}
//         onClick={() => {
//           router.push(href.toString())
//           onOpenChange?.(false)
//         }}
//         className={cn(
//           buttonVariants({
//             variant: "ghost",
//           }),
//           " flex h-[75px] items-center justify-center rounded-md border"
//         )}
//         {...props}
//       >
//         {children}
//       </Link>
//     )
//   }

// "use client"

// import * as React from "react"
// import Link, { LinkProps } from "next/link"
// import { useRouter } from "next/router"
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
// import { useTheme } from "next-themes"

// import { socialMediaConfig } from "@/config/social-media"
// import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
//   Alert,
//   AlertDescription,
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
//   AlertTitle,
//   AspectRatio,
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
//   Badge,
//   Button,
//   Calendar,
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
//   Checkbox,
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
//   Command,
//   CommandDialog,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
//   CommandSeparator,
//   CommandShortcut,
//   ContextMenu,
//   ContextMenuCheckboxItem,
//   ContextMenuContent,
//   ContextMenuGroup,
//   ContextMenuItem,
//   ContextMenuLabel,
//   ContextMenuPortal,
//   ContextMenuRadioGroup,
//   ContextMenuRadioItem,
//   ContextMenuSeparator,
//   ContextMenuShortcut,
//   ContextMenuSub,
//   ContextMenuSubContent,
//   ContextMenuSubTrigger,
//   ContextMenuTrigger,
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuPortal,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuSub,
//   DropdownMenuSubContent,
//   DropdownMenuSubTrigger,
//   DropdownMenuTrigger,
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
//   Input,
//   Label,
//   Menubar,
//   MenubarCheckboxItem,
//   MenubarContent,
//   MenubarGroup,
//   MenubarItem,
//   MenubarLabel,
//   MenubarMenu,
//   MenubarPortal,
//   MenubarRadioGroup,
//   MenubarRadioItem,
//   MenubarSeparator,
//   MenubarShortcut,
//   MenubarSub,
//   MenubarSubContent,
//   MenubarSubTrigger,
//   MenubarTrigger,
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
//   Progress,
//   RadioGroup,
//   RadioGroupItem,
//   ScrollArea,
//   ScrollBar,
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectSeparator,
//   SelectTrigger,
//   SelectValue,
//   Separator,
//   Skeleton,
//   Slider,
//   Switch,
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
//   Textarea,
//   Toast,
//   ToastAction,
//   ToastClose,
//   ToastDescription,
//   ToastProvider,
//   ToastTitle,
//   ToastViewport,
//   Toaster,
//   Toggle,
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
//   badgeVariants,
//   buttonVariants,
//   navigationMenuTriggerStyle,
//   toggleVariants,
//   useFormField,
//   useToast,
//   type ToastActionElement,
//   type ToastProps,
// } from "@/components/ui"
// import { useState } from "react"

// export default function SocialMedias() {
//   const [open, setOpen] = useState(false)

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <div
//           className={cn(
//             buttonVariants({
//               variant: "ghost",
//             }),
//             "nav-toggles social-media w-9 px-0"
//           )}
//         >
//           <Icons.chevronDown className="h-4 w-4" />
//           <span className="sr-only">Social Medias</span>
//         </div>
//       </DialogTrigger>
//       <DialogContent className="w-[90%] rounded-md pb-3 pl-2 pr-0 pt-0 sm:w-[360px]">
//         <Tabs defaultValue="vlog" className="">
//           <DialogHeader>
//             <DialogTitle>
//               <TabsList className="absolute left-4 top-3 w-[200px]">
//                 <TabsTrigger value="vlog">Vlog</TabsTrigger>
//                 <TabsTrigger value="gaming">Gaming</TabsTrigger>
//                 <TabsTrigger value="react">React</TabsTrigger>
//               </TabsList>
//             </DialogTitle>
//             <DialogDescription className="social_media_container h-[350px] overflow-y-auto overflow-x-hidden pt-0">
//               <TabsContent value="vlog">
//                 <div className="grid grid-cols-2 justify-stretch gap-3">
//                   {socialMediaConfig.platformVlog?.map(
//                     (item) =>
//                       item.href && (
//                         <SocialMedia
//                           key={item.href}
//                           href={item.href}
//                           onOpenChange={setOpen}
//                         >
//                           {item.title}
//                         </SocialMedia>
//                       )
//                   )}
//                 </div>
//               </TabsContent>
//               <TabsContent value="gaming">
//                 <div className="grid grid-cols-2 justify-stretch gap-3 ">
//                   {socialMediaConfig.platformGaming?.map(
//                     (item) =>
//                       item.href && (
//                         <SocialMedia
//                           key={item.href}
//                           href={item.href}
//                           onOpenChange={setOpen}
//                         >
//                           {item.title}
//                         </SocialMedia>
//                       )
//                   )}
//                 </div>
//               </TabsContent>
//               <TabsContent value="react">
//                 <div className="grid grid-cols-2 justify-stretch gap-3 ">
//                   {socialMediaConfig.platformReact?.map(
//                     (item) =>
//                       item.href && (
//                         <SocialMedia
//                           key={item.href}
//                           href={item.href}
//                           onOpenChange={setOpen}
//                         >
//                           {item.title}
//                         </SocialMedia>
//                       )
//                   )}
//                 </div>
//               </TabsContent>
//             </DialogDescription>
//           </DialogHeader>
//         </Tabs>
//       </DialogContent>
//     </Dialog>
//   )
// }

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
