"use client"

import * as React from "react"
import Script from "next/script"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { X } from "lucide-react"
import { useTheme } from "next-themes"

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

export default function Hack() {
  const [fluidSimulation, setFluidSimulation] = React.useState(false)
  return (
    <div>
      <div
        onClick={() => setFluidSimulation(true)}
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
          "nav-toggles social-media w-9 px-0"
        )}
      >
        <Icons.hack className="h-4 w-4 fill-current" />
      </div>
      {fluidSimulation ? (
        <div className="glassmorphisum fixed top-0 left-0 flex items-center justify-center min-h-screen min-w-full p-10 ">
          <div className="hack-container glassmorphisum flex flex-col items-center justify-center border rounded-md max-w-[90%] w-[500px] z-[100000000000000000000] h-auto">
            <div
              // className={cn(
              //   buttonVariants({
              //     variant: "ghost",
              //   }),
              //   "nav-toggles social-media p-5"
              // )}
              onClick={() => setFluidSimulation(false)}
            >
              <Icons.close className="h-4 w-4 fill-current" />
            </div>
            <Tabs defaultValue="hackIn" className="w-full p-5">
              <TabsList className="mx-auto grid w-full grid-cols-2 h-[50px] px-2 py-0">
                <TabsTrigger value="hackIn-tab min-h-full p-0">HackIn</TabsTrigger>
                <TabsTrigger value="hackUp-tab min-h-full p-0">HackUp</TabsTrigger>
              </TabsList>
              <TabsContent value="hackIn">
                {/* <div
                    className="close-fluid-simulation"
                    onClick={() => setFluidSimulation(false)}
                  >
                    close-fluid-simulation
                  </div> */}
                <Card>
                  <CardHeader>
                    <CardTitle>HackIn</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, youll be logged
                      out.
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
              <TabsContent value="hackUp">
                <Card>
                  <CardHeader>
                    <CardTitle>HackUp</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, youll be logged
                      out.
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
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

// <Dialog>
// <DialogTrigger asChild>
//   <div
//     onClick={() => setFluidSimulation(true)}
//     className={cn(
//       buttonVariants({
//         variant: "ghost",
//       }),
//       "nav-toggles social-media w-9 px-0"
//     )}
//   >
//     {fluidSimulation ? (
//       <>
//         <canvas className="fluid-simulation-container"></canvas>
//         <Script src="dat-gui.js" />
//         <Script src="script.js" />
//         <Script>
//           {`window.ga =
//         window.ga ||
//         function () {
//           ;(ga.q = ga.q || []).push(arguments)
//         }
//       ga.l = +new Date()
//       ga("create", "UA-105392568-1", "auto")
//       ga("send", "pageview")`}
//         </Script>
//       </>
//     ) : (
//       ""
//     )}

//     <Icons.hack className="h-4 w-4 fill-current" />
//   </div>
// </DialogTrigger>
// <DialogContent className="hack flex items-center rounded-md p-3">
//   <Tabs defaultValue="hackIn" className="w-full ">
//     <TabsList className="mx-auto grid w-full grid-cols-2">
//       <TabsTrigger value="hackIn">HackIn</TabsTrigger>
//       <TabsTrigger value="hackUp">HackUp</TabsTrigger>
//     </TabsList>
//     <TabsContent value="hackIn">
//       <div
//         className="close-fluid-simulation"
//         onClick={() => setFluidSimulation(false)}
//       >
//         close-fluid-simulation
//       </div>
//     </TabsContent>
//     <TabsContent value="hackUp">
//       <Card>
//         <CardHeader>
//           <CardTitle>HackUp</CardTitle>
//           <CardDescription>
//             Change your password here. After saving, youll be logged out.
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-2">
//           <div className="space-y-1">
//             <Label htmlFor="current">Current password</Label>
//             <Input id="current" type="password" />
//           </div>
//           <div className="space-y-1">
//             <Label htmlFor="new">New password</Label>
//             <Input id="new" type="password" />
//           </div>
//         </CardContent>
//         <CardFooter>
//           <Button>Save password</Button>
//         </CardFooter>
//       </Card>
//     </TabsContent>
//   </Tabs>
// </DialogContent>
// </Dialog>
