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
  useToast,
  type ToastActionElement,
  type ToastProps,
} from "@/components/ui"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = ({
  className,
  ...props
}: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal className={cn(className)} {...props} />
)
DialogPortal.displayName = DialogPrimitive.Portal.displayName

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        className
      )}
      {...props}
    >
      <div className="relative max-w-[95%]">
        {children}
        <DialogPrimitive.Close className="absolute h-[35px] w-[35px] flex items-center justify-center rounded-full border right-1 top-2 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </div>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
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
      <DialogContent className="rounded-md max-w-[90%] sm:max-w-[375px] overflow-y-auto overflow-x-hidden flex flex-col items-center justify-start h-[500px] px-0 py-5">
        <Tabs defaultValue="vlog" className="">
          <DialogHeader>
            <DialogTitle>
              <TabsList className="absolute left-1 top-1 w-[200px]">
                <TabsTrigger value="vlog">Vlog</TabsTrigger>
                <TabsTrigger value="gaming">Gaming</TabsTrigger>
                <TabsTrigger value="react">React</TabsTrigger>
              </TabsList>
            </DialogTitle>
            <DialogDescription className="social_media_container w-full h-auto p-0">
              <TabsContent value="vlog" className="p-0">
                <div className="grid grid-cols-2 justify-stretch gap-3">
                  {socialMediaConfig.platformVlog?.map(
                    (item) =>
                      item.href && (
                        <span
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
                    (item) =>
                      item.href && (
                        <span
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
                    (item) =>
                      item.href && (
                        <span
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
//     <div
// {cn(
//         buttonVariants({
//           variant: "ghost",
//         }),
//         " flex h-[75px] items-center justify-center rounded-md border"
//       )}
//       {...props}
//     >
//       {children}
//     </div>
//   )
// }

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
//   InputShadcnUi,
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
//   toast,
//   toggleVariants,
//   useFormField,
//   useToast,
//   type ToastActionElement,
//   type ToastProps,
// } from "@/components/ui"

// export default function SocialMedias() {
//   const [open, setOpen] = React.useState(false)
//   const ref = React.useRef<HTMLDivElement>(null)

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
//       <DialogContent className="w-full rounded-md pb-3 pl-2 pr-0 pt-0 sm:w-[360px]">
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
//                       item.href && <div key={item.href}>{item.title}</div>
//                   )}
//                 </div>
//               </TabsContent>
//               <TabsContent value="gaming">
//                 <div className="grid grid-cols-2 justify-stretch gap-3 ">
//                   {socialMediaConfig.platformGaming?.map(
//                     (item) =>
//                       item.href && <div key={item.href}>{item.title}</div>
//                   )}
//                 </div>
//               </TabsContent>
//               <TabsContent value="react">
//                 <div className="grid grid-cols-2 justify-stretch gap-3 ">
//                   {socialMediaConfig.platformReact?.map(
//                     (item) =>
//                       item.href && <div key={item.href}>{item.title}</div>
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
