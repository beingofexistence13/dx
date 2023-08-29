"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/react"
import { DialogProps } from "@radix-ui/react-alert-dialog"
import {
  CircleIcon,
  FileIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { docsConfig } from "@/config/docs"
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

export default function Hack({ ...props }: DialogProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)
  const [fluidSimulation, setFluidSimulation] = React.useState(false)
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const { setTheme } = useTheme()
  const [value, setValue] = React.useState("junior2nextui.org")
  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)

  const validationState = React.useMemo(() => {
    if (value === "") return undefined

    return validateEmail(value) ? "valid" : "invalid"
  }, [value])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <div>
      <div
        onClick={() => setFluidSimulation(true)}
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
          "  w-9 px-0"
        )}
      >
        <Icons.hack className="h-4 w-4 fill-current" />
      </div>
      {fluidSimulation ? (
        <div className=" fixed top-0 left-0 flex items-center justify-center min-h-screen min-w-full p-10 ">
          <div className="hack-container py-3 flex flex-col items-center border rounded-md max-w-[90%] w-[500px] z-[100000000000000000000] h-[500px] space-y-3">
            {/* <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "nav-toggles social-media p-5"
              )}
              onClick={() => setFluidSimulation(false)}
            >
              <Icons.close className="h-4 w-4 fill-current" />
            </div> */}
            <div className="tab-header w-[95%] h-auto flex items-center justify-start space-x-1.5">
              <div className="help h-[35px] w-[35px] flex items-center justify-center rounded-full border">
                <Icons.circleDashed className="h-4 w-4 fill-current" />
              </div>
              <div className="speaker h-[35px] w-[35px] flex items-center justify-center rounded-full border">
                <Icons.speaker className="h-4 w-4 fill-current" />
              </div>
              <div className="tips flex-1 rounded-lg border h-[30px] flex items-center justify-center">
                Tips made job easy!!!
              </div>
              <div className="hack-setting h-[35px] w-[35px] flex items-center justify-center rounded-full border">
                <Icons.hackSetting className="h-4 w-4 fill-current" />
              </div>
              <div className="close h-[35px] w-[35px] flex items-center justify-center rounded-full border">
                <Icons.close className="h-4 w-4 fill-current" />
              </div>
            </div>
            <Tabs defaultValue="hackIn" className="w-[95%] space-y-3">
              {/* <div className="tab-header w-[95%] h-[35px] flex items-center justify-start space-y-2 ">
                <div className="help w-[30] h-[30px] flex items-center justify-center rounded-xl border">
                  <Icons.circleDashed className="h-4 w-4 fill-current" />
                </div>
                <div className="speaker w-[30] h-[30px] flex items-center justify-center rounded-xl border">
                  <Icons.speaker className="h-4 w-4 fill-current" />
                </div>
                <div className="tips flex-1 rounded-lg border h-[30px] flex items-center justify-center">
                  Tips made job easy!!!
                </div>
                <div className="hack-setting">
                  <Icons.hackSetting className="h-4 w-4 fill-current" />
                </div>
                <div className="close w-[30] h-[30px] flex items-center justify-center rounded-xl border">
                  <Icons.close className="h-4 w-4 fill-current" />
                </div>
              </div> */}
              <TabsList className="mx-auto grid w-full grid-cols-2 ">
                <TabsTrigger value="hackIn">HackIn</TabsTrigger>
                <TabsTrigger value="hackUp">HackUp</TabsTrigger>
              </TabsList>
              <TabsContent value="hackIn">
                {/* HackIn Search */}
                <div className="hackIn-searchbar rounded-2xl border w-full h-[50px] flex items-center m-0 ">
                  <div className="text-sm text-muted-foreground flex items-center space-x-2 w-full px-5">
                    <div
                      onClick={() => setOpen(true)}
                      {...props}
                      className="search w-[30] h-[30px] flex items-center justify-center rounded-xl border "
                    >
                      <Icons.search className="h-4 w-4 fill-current" />
                    </div>
                    <span className="flex-1 w-full ">
                      Search wallets and social medias
                    </span>
                    <div className="chatgpt w-[30] h-[30px] flex items-center justify-center rounded-xl border">
                      <Icons.chatgpt className="h-4 w-4 fill-current" />
                    </div>
                    <div className="mic">
                      <Icons.mic className="h-4 w-4 fill-current" />
                    </div>
                    <div className="media w-[30] h-[30px] flex items-center justify-center rounded-xl border">
                      <Icons.media className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                  <CommandDialog open={open} onOpenChange={setOpen}>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup heading="Links">
                        {docsConfig.mainNav
                          .filter((navitem) => !navitem.external)
                          .map((navItem) => (
                            <CommandItem
                              key={navItem.href}
                              value={navItem.title}
                              onSelect={() => {
                                runCommand(() =>
                                  router.push(navItem.href as string)
                                )
                              }}
                            >
                              <FileIcon className="mr-2 h-4 w-4" />
                              {navItem.title}
                            </CommandItem>
                          ))}
                      </CommandGroup>
                      {/* {docsConfig.sidebarNav.map((group) => (
                        <CommandGroup key={group.title} heading={group.title}>
                          {group.items.map((navItem) => (
                            <CommandItem
                              key={navItem.href}
                              value={navItem.title}
                              onSelect={() => {
                                runCommand(() =>
                                  router.push(navItem.href as string)
                                )
                              }}
                            >
                              <div className="mr-2 flex h-4 w-4 items-center justify-center">
                                <CircleIcon className="h-3 w-3" />
                              </div>
                              {navItem.title}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      ))} */}
                      <CommandSeparator />
                      <CommandGroup heading="Theme">
                        <CommandItem
                          onSelect={() => runCommand(() => setTheme("light"))}
                        >
                          <SunIcon className="mr-2 h-4 w-4" />
                          Light
                        </CommandItem>
                        <CommandItem
                          onSelect={() => runCommand(() => setTheme("dark"))}
                        >
                          <MoonIcon className="mr-2 h-4 w-4" />
                          Dark
                        </CommandItem>
                        <CommandItem
                          onSelect={() => runCommand(() => setTheme("system"))}
                        >
                          <LaptopIcon className="mr-2 h-4 w-4" />
                          System
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </CommandDialog>
                </div>
                {/* Emain and Password */}
                {/* <div className="
                email-and-password">
                  <Input
                    placeholder="Enter your Email"
                    value={value}
                    type="email"
                    variant="bordered"
                    color={validationState === "invalid" ? "danger" : "success"}
                    errorMessage={
                      validationState === "invalid" &&
                      "Please enter a valid email"
                    }
                    validationState={validationState}
                    onValueChange={setValue}
                    className="max-w-xs"
                    onClear={() => console.log("input cleared")}
                    isClearable
                  />
                  <Input
                    variant="bordered"
                    placeholder="Enter your password"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <Icons.eyeOpen className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <Icons.eyeClose className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                    className="max-w-xs"
                    isClearable
                  />
                </div> */}
                {/* <Button color="danger">Danger</Button> */}
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
