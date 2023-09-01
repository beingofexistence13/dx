"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import Script from "next/script"
import { Input } from "@nextui-org/react"
import { DialogProps } from "@radix-ui/react-alert-dialog"
import { FileIcon, LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"
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
  const [fluidSimulation, setFluidSimulation] = React.useState(true)
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const { setTheme } = useTheme()
  const [value, setValue] = React.useState("")
  const [emailAndPhoneNumbber, setEmailAndPhoneNumbber] = React.useState("")
  const [number, setNumber] = React.useState("")
  const validatePhoneNumber = (value: string) => {
    const regex = /^(\+\d{1,3}[- ]?)?\d{10}$/
    return regex.test(value)
  }
  const validationPhoneNumberState = React.useMemo(() => {
    if (number === "") return undefined

    return validatePhoneNumber(number) ? "valid" : "invalid"
  }, [number])
  const validateEmailPlus = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
  const validatePhoneNumberPlus = (value: string) => {
    const regex = /^(\+\d{1,3}[- ]?)?\d{10}$/
    return regex.test(value)
  }
  const validationEmailAndPhoneNumbberState = React.useMemo(() => {
    if (emailAndPhoneNumbber === "") return undefined
    return validateEmailPlus(emailAndPhoneNumbber) ||
      validatePhoneNumberPlus(emailAndPhoneNumbber)
      ? "valid"
      : "invalid"
  }, [emailAndPhoneNumbber])

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
  const validationState = React.useMemo(() => {
    if (value === "") return undefined
    return validateEmail(value) || validatePhoneNumber(value)
      ? "valid"
      : "invalid"
  }, [value])
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

  return (
    <div>
      <div
        onClick={() => setFluidSimulation(true)}
        className="nav-toggles h-[35px] w-[35px] flex items-center justify-center"
      >
        <Icons.hack className="h-4 w-4 fill-current" />
      </div>
      {/* <Script id="testing">
        {`console.log("Next script op bolta")`}
      </Script> */}

      {fluidSimulation ? (
        <div className="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center min-h-screen min-w-full">
          {/* <canvas className="fluid-simulation-container"></canvas>
          <Script src="./fluid-simulation.js" /> */}

          <div className="hack-container glassmorphisum pt-5 pb-5 px-2 flex flex-col items-center border rounded-md max-w-[92.5%] w-[425px] z-[100000000000000000000] space-y-3 h-auto">
            <div className="tab-header w-[95%] h-auto flex items-center justify-start space-x-1.5">
              <div className="help h-[35px] w-[35px] flex items-center justify-center rounded-full border">
                <Icons.circleDashed className="h-4 w-4 fill-current" />
              </div>
              <div className="speaker h-[35px] w-[35px] flex items-center justify-center rounded-full border">
                <Icons.speaker className="h-4 w-4 fill-current" />
              </div>
              <div className="tips flex-1 rounded-lg border h-[30px] flex items-center justify-center">
                Tips are easy!!!
              </div>
              <div className="hack-setting h-[35px] w-[35px] flex items-center justify-center rounded-full border">
                <Icons.hackSetting className="h-4 w-4 fill-current" />
              </div>
              <div
                onClick={() => setFluidSimulation(false)}
                className="close h-[35px] w-[35px] flex items-center justify-center rounded-full border"
              >
                <Icons.close className="h-4 w-4 fill-current" />
              </div>
            </div>
            <Tabs defaultValue="hackIn" className="w-[95%] space-y-3">
              <TabsList className="hackTabList glassmorphisum mx-auto grid w-full grid-cols-2">
                <TabsTrigger value="hackIn" className="hackTabTriggers">
                  HackIn
                </TabsTrigger>
                <TabsTrigger value="hackUp" className="hackTabTriggers">
                  HackUp
                </TabsTrigger>
              </TabsList>
              <TabsContent value="hackIn">
                {/* HackIn Search */}
                <div className="hackIn-searchbar rounded-2xl border w-full h-[50px] flex items-center m-0 ">
                  <div className="text-sm text-muted-foreground flex items-center space-x-2 w-full px-3">
                    <div
                      onClick={() => setOpen(true)}
                      {...props}
                      className="search  flex items-center justify-center rounded-full border p-2"
                    >
                      <Icons.search className="h-4 w-4 fill-current" />
                    </div>
                    <span className="flex-1 w-full ">
                      wallets & social medias
                    </span>
                    <div className="chatgpt  flex items-center justify-center rounded-full border p-2">
                      <Icons.chatgpt className="h-4 w-4 fill-current" />
                    </div>
                    <div className="mic  flex items-center justify-center  rounded-full border p-2">
                      <Icons.mic className="h-4 w-4 fill-current" />
                    </div>
                    <div className="media  flex items-center justify-center rounded-full border p-2">
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
                <form
                  className="
                email-and-password"
                >
                  <Input
                    value={emailAndPhoneNumbber}
                    type="search"
                    placeholder="Email or Phone Number"
                    variant="bordered"
                    color={
                      validationEmailAndPhoneNumbberState === "invalid"
                        ? "danger"
                        : "success"
                    }
                    errorMessage={
                      validationEmailAndPhoneNumbberState === "invalid" &&
                      "Please enter a valid email or phone number"
                    }
                    validationState={validationEmailAndPhoneNumbberState}
                    onValueChange={setEmailAndPhoneNumbber}
                    className="w-full mt-3"
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
                    className="w-full mt-3"
                  />
                </form>
                {/* Social Media */}
                <div className="hackIn-connect-container h-[110px] w-full rounded-lg border flex flex-wrap p-2 items-center justify-between overflow-x-hidden overflow-y-auto mt-3">
                  {docsConfig.passport.map((item, index) => (
                    <div
                      key={index}
                      className="h-[40px] w-[40px] border text-center text-[12.5px] rounded-lg flex items-center justify-center m-1"
                    >
                      <Avatar className="glassmorphisum h-[27px] w-[27px] rounded-sm">
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
                        <AvatarFallback className="glassmorphisum border-none">
                          {item.title ? logoLetter(item.title) : "Dx"}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  ))}
                </div>
                {/* Divider */}
                <div className="divider w-full flex flex-row item-center justify-center space-x-3 mt-1">
                  <div className="left-divider flex-1 h-[2.5px] bg-[--code-highlighted] w-full my-auto"></div>
                  <span className="divider-title">or</span>
                  <div className="right-divider flex-1 h-[2.5px] bg-[--code-highlighted] w-full my-auto"></div>
                </div>
                {/* Wallet */}
                <div className="hackIn-connect-container h-[110px] w-full rounded-lg border flex flex-wrap p-2 items-center justify-between overflow-x-hidden overflow-y-auto mt-1.5">
                  {docsConfig.wallet.map((item, index) => (
                    <div
                      key={index}
                      className="h-[40px] w-[40px] border text-center text-[12.5px] rounded-lg flex items-center justify-center m-1"
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
                        <AvatarFallback className="glassmorphisum  border-none">
                          {item.title ? logoLetter(item.title) : "Dx"}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  ))}
                </div>
                {/* Friday Factor */}
                <div className="friday-factor w-full h-auto grid grid-cols-2 gap-2 mt-3">
                  <div className="friday glassmorphisum hoverGlassmorphisum w-full h-[50px] rounded-lg flex items-center justify-center">
                    Friday
                  </div>
                  <div className="qr-code glassmorphisum hoverGlassmorphisum w-full h-[50px] rounded-lg flex items-center justify-center">
                    QR Code
                  </div>
                  <div className="authenticator glassmorphisum hoverGlassmorphisum w-full h-[50px] rounded-lg flex items-center justify-center">
                    Authenticator
                  </div>
                  <div className="face glassmorphisum hoverGlassmorphisum w-full h-[50px] rounded-lg flex items-center justify-center">
                    Face
                  </div>
                </div>
                {/* Footer */}
                <div className="hackIn-footer w-full mt-3 flex items-center justify-between">
                  <Button>Continue as Guest</Button>
                  <Button variant="outline">Confrom</Button>
                </div>
              </TabsContent>
              <TabsContent value="hackUp">
                <div className="w-full overflow-y-hidden overflow-x-auto flex justify-start items-center flex-row p-3 space-x-">
                  {/* Web2 */}
                  <form className="web2 h-[300px] min-w-full rounded-sm flex justify-start items-center flex-col">
                    <Input
                      type="search"
                      placeholder="Enter your Name"
                      variant="bordered"
                      className="w-full mt-3"
                      isClearable
                    />
                    <Input
                      value={value}
                      type="email"
                      placeholder="Enter your Email"
                      variant="bordered"
                      color={
                        validationState === "invalid" ? "danger" : "success"
                      }
                      errorMessage={
                        validationState === "invalid" &&
                        "Please enter a valid email or phone number"
                      }
                      validationState={validationState}
                      onValueChange={setValue}
                      className="w-full mt-3"
                      isClearable
                    />
                    <Input
                      value={number}
                      type="tel"
                      placeholder="Phone Number"
                      variant="bordered"
                      color={
                        validationPhoneNumberState === "invalid"
                          ? "danger"
                          : "success"
                      }
                      errorMessage={
                        validationPhoneNumberState === "invalid" &&
                        "Please enter a valid phone number"
                      }
                      validationState={validationPhoneNumberState}
                      onValueChange={setNumber}
                      className="w-full mt-3"
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
                      className="w-full mt-3"
                    />
                  </form>

                  {/* Web3 */}
                  <div className="web3 h-[300px] min-w-full  rounded-sm flex justify-center items-center">
                    Web3
                  </div>
                  {/* Friday Factor */}
                  <div className="friday-factor h-[300px] min-w-full rounded-sm flex justify-center items-center bg-pink-600">
                    Friday Factor
                  </div>
                </div>
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

// function App() {
//   const [number, setNumber] = React.useState("")

//   const validatePhoneNumber = (value: string) => {
//     const regex = /^(\+\d{1,3}[- ]?)?\d{10}$/
//     return regex.test(value)
//   }

//   const validationPhoneNumberState = React.useMemo(() => {
//     if (number === "") return undefined

//     return validatePhoneNumber(number) ? "valid" : "invalid"
//   }, [number])

//   return (
//     <Input
//       value={number}
//       type="tel"
//       label="Phone Number"
//       variant="bordered"
//       color={validationPhoneNumberState === "invalid" ? "danger" : "success"}
//       errorMessage={
//         validationPhoneNumberState === "invalid" &&
//         "Please enter a valid phone number"
//       }
//       validationState={validationPhoneNumberState}
//       onValueChange={setNumber}
//       className="max-w-xs"
//     />
//   )
// }

// function App() {
//   const [emailAndPhoneNumbber, setEmailAndPhoneNumbber] = React.useState("")

//   const validateEmailPlus = (value: string) =>
//     value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)

//   const validatePhoneNumberPlus = (value: string) => {
//     const regex = /^(\+\d{1,3}[- ]?)?\d{10}$/
//     return regex.test(value)
//   }

//   const validationEmailAndPhoneNumbberState = React.useMemo(() => {
//     if (emailAndPhoneNumbber === "") return undefined

//     return validateEmailPlus(emailAndPhoneNumbber) ||
//       validatePhoneNumberPlus(emailAndPhoneNumbber)
//       ? "valid"
//       : "invalid"
//   }, [emailAndPhoneNumbber])

//   return (
//     <Input
//       value={emailAndPhoneNumbber}
//       type="text"
//       label="Email or Phone Number"
//       variant="bordered"
//       color={
//         validationEmailAndPhoneNumbberState === "invalid" ? "danger" : "success"
//       }
//       errorMessage={
//         validationEmailAndPhoneNumbberState === "invalid" &&
//         "Please enter a valid email or phone number"
//       }
//       validationState={validationEmailAndPhoneNumbberState}
//       onValueChange={setEmailAndPhoneNumbber}
//       className="max-w-xs"
//     />
//   )
// }
