"use client"

import * as React from "react"
import { useState } from "react"
import { Suspense } from "react"
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Script from "next/script"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Button,
  Card,
  CardFooter,
  Image as ImageNext,
  Input,
} from "@nextui-org/react"
import { DialogProps } from "@radix-ui/react-alert-dialog"
import { FileIcon, LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import {
  AsYouType,
  getCountryCallingCode,
  parsePhoneNumber,
} from "libphonenumber-js"
import {
  ArrowDownToLine,
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
  CreditCard,
  Plus,
  Settings,
  Settings2,
  Smile,
  User,
  X,
} from "lucide-react"
import { useTheme } from "next-themes"
import { useForm } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import { z } from "zod"

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
  Button as ButtonShadcnUi,
  Calendar,
  CardContent,
  CardDescription,
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

import useAccount from "../hooks/useAccount"
import useAddToNetwork from "../hooks/useAddToNetwork"
import { useChain } from "../stores"
// import { useTranslations } from "next-intl";
import { renderProviderText, notTranslation as useTranslations } from "../utils"
import { generateChainData } from "../utils/fetch"
import { AdBanner } from "./AdBanner"
import Layout from "./Layout"
import RPCList from "./RPCList"
import Chain from "./chain"
interface TypewriterProps {
  text: string;
  delay: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <div id="scroll-container" className="flex-1 h-[30px] flex items-center justify-start overflow-y-hidden overflow-x-auto whitespace-nowrap border rounded-lg px-3">
      <p id="scroll-text" className="text-xs">{currentText}</p>
    </div>
  );
};

interface Props {
  canvasRef: React.RefObject<HTMLCanvasElement>
}

const CanvasLoader: React.FC<Props> = ({ canvasRef }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [startTime, setStartTime] = useState(performance.now())

  useEffect(() => {
    if (canvasRef.current) {
      const img = new globalThis.Image()
      img.src = canvasRef.current.toDataURL()
      img.onload = () => {
        setIsLoading(false)
        window.alert(
          `Canvas loaded in ${performance.now() - startTime} milliseconds`
        )
      }
    }
  }, [canvasRef])

  return isLoading ? <p>This canvas content is loading... please wait</p> : null
}

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
})

export default function Hack(this: any, { ...props }: DialogProps) {
  const [fluidSimulation, setFluidSimulation] = React.useState(false)
  const [marginLeft, setMarginLeft] = useState("-00px")
  const [phone, setPhone] = useState("")
  const [isFridayOpen, setIsFridayOpen] = React.useState(false)
  const [isQRCodeOpen, setIsQRCodeOpen] = React.useState(false)
  const [isExtraSafetyOpen, setIsExtraSafetyOpen] = React.useState(false)
  const [pendingContent, setPendingContent] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const { setTheme } = useTheme()
  const [value, setValue] = React.useState("")
  const [emailAndPhoneNumbber, setEmailAndPhoneNumbber] = React.useState("")
  const [number, setNumber] = React.useState("")
  const [file, setFile] = React.useState<File | null>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      setFile(files[0])
    }
  }
  const handleButtonShadcnUiClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }
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
    console.log(`The margin value is now ${marginLeft}px`)
  }, [marginLeft])

  // ChainList
  interface Chain {
    chain: any
    chainId: any
    nativeCurrency: any
    chainSlug: any
    name: string
    title: string
    network: string
    // ...
  }
  const [chains, setChains] = React.useState<Chain[]>([])
  React.useEffect(() => {
    async function fetchData() {
      const sortedChains = await generateChainData()
      setChains(sortedChains)
    }
    fetchData()
  }, [])
  const searchParams = useSearchParams()
  const testnets = searchParams ? searchParams.get("testnets") : ""
  const testnet = searchParams ? searchParams.get("testnet") : ""
  const search = searchParams ? searchParams.get("search") : ""
  const includeTestnets =
    (typeof testnets === "string" && testnets === "true") ||
    (typeof testnet === "string" && testnet === "true")
  const sortedChains = !includeTestnets
    ? chains.filter((item) => {
        const testnet =
          item.name?.toLowerCase().includes("test") ||
          item.title?.toLowerCase().includes("test") ||
          item.network?.toLowerCase().includes("test")
        const devnet =
          item.name?.toLowerCase().includes("devnet") ||
          item.title?.toLowerCase().includes("devnet") ||
          item.network?.toLowerCase().includes("devnet")
        return !testnet && !devnet
      })
    : chains
  const filteredChains =
    !search || typeof search !== "string" || search === ""
      ? sortedChains
      : sortedChains.filter((chain) => {
          //filter
          return (
            chain.chain.toLowerCase().includes(search.toLowerCase()) ||
            chain.chainId
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            chain.name.toLowerCase().includes(search.toLowerCase()) ||
            (chain.nativeCurrency ? chain.nativeCurrency.symbol : "")
              .toLowerCase()
              .includes(search.toLowerCase())
          )
        })
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
  const buttonRef = React.useRef<HTMLButtonElement | null>(null)

  const handleConfetti = async () => {
    const { clientWidth, clientHeight } = document.documentElement
    const boundingBox = buttonRef.current?.getBoundingClientRect?.()

    const targetY = boundingBox?.y ?? 0
    const targetX = boundingBox?.x ?? 0
    const targetWidth = boundingBox?.width ?? 0

    const targetCenterX = targetX + targetWidth / 2
    const confetti = (await import("canvas-confetti")).default

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 70,
      origin: {
        y: targetY / clientHeight,
        x: targetCenterX / clientWidth,
      },
    })
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="nav-toggles h-[35px] w-[35px] flex items-center justify-center">
            <Icons.hack className="h-4 w-4 fill-current" />
          </div>
        </DialogTrigger>
        <DialogContent className="hack min-h-[100vh] min-w-[100%] border-0 flex items-center justify-center 2xs:px-1 xs:px-3 m-0">
          {/* <CanvasLoader canvasRef={canvasRef} />
          <canvas className="fluid-simulation-container" ref={canvasRef} />
          <Script src="./fluid-simulation.js" /> */}

          {/* <Script id="console">
            {`console.log("Op Bolta,fluid simulation is")`}
          </Script> */}
          <Suspense fallback={<p>Loading Canvas...</p>}>
            <div className="hack-container glassmorphisum pt-5 pb-5 flex flex-col items-center border rounded-md w-[425px] max-w-[90%]  space-y-3 h-auto mx-auto">
              <div className="tab-header w-[90%] h-auto flex items-center justify-start space-x-1.5 pr-[40px]">
                <div className="help h-[35px] w-[35px] flex items-center justify-center rounded-full border">
                  <BrainCircuit />
                </div>
                <div className="speaker h-[35px] w-[35px] flex items-center justify-center rounded-full border">
                  <Icons.speaker className="h-4 w-4 fill-current" />
                </div>

                {/* <div id="scroll-container" className="flex-1 max-h-[30px] border">
                  <div id="scroll-text">Tips: Try To Fill As Many Feilds As You Can For High Security</div>
                </div> */}
                <Typewriter text="Tips: Are Easy And Makes Jobs More Faster " delay={100} />

                <div className="speaker h-[35px] w-[35px] flex items-center justify-center rounded-full border">
                  <Cog />
                </div>
                {/* <div
                  onClick={() => setFluidSimulation(false)}
                  className="close h-[35px] w-[35px] items-center justify-center rounded-full border hidden"
                >
                  <Icons.close className="h-4 w-4 fill-current" />
                </div> */}
              </div>
              <Tabs
                defaultValue="hackUp"
                className="hackTabs w-[100%] space-y-3 h-[400px] overflow-y-auto overflow-x-hidden lg:h-[500px]"
              >
                <TabsList className="hackTabList glassmorphisum mx-auto grid w-[90%] grid-cols-2">
                  <TabsTrigger value="hackIn" className="hackTabTriggers">
                    HackIn
                  </TabsTrigger>
                  <TabsTrigger value="hackUp" className="hackTabTriggers">
                    HackUp
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="hackIn">
                  <div className="h-auto w-full flex justify-start items-center flex-col">
                    {/* Email and Password */}
                    <form className="email-and-password">
                      <Input
                        autoComplete="on"
                        value={emailAndPhoneNumbber}
                        type="search"
                        placeholder="Enter Email or Phone Number"
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
                        autoComplete="on"
                        variant="bordered"
                        placeholder="Enter Your Password"
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
                    {/* Divider */}
                    <div className="divider w-full flex flex-row item-center justify-center space-x-3 mt-1">
                      <div className="left-divider flex-1 h-[2.5px]  rounded-lg bg-[--code-foreground] w-full my-auto"></div>
                      <span className="divider-title">or</span>
                      <div className="right-divider flex-1 h-[2.5px]  rounded-lg bg-[--code-foreground] w-full my-auto"></div>
                    </div>
                    {/* HackIn Search */}
                    <Command className="glassmorphisum rounded-lg border shadow-md">
                      <CommandInput placeholder="Type a command or search..." />
                      <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Social Medias">
                          {docsConfig.passport
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
                                    {navItem.title
                                      ? logoLetter(navItem.title)
                                      : "Dx"}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="ml-3">{navItem.title}</span>
                              </CommandItem>
                            ))}
                        </CommandGroup>
                        <CommandGroup heading="Blockchain Wallets">
                          {docsConfig.wallet
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
                                    {navItem.title
                                      ? logoLetter(navItem.title)
                                      : "Dx"}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="ml-3">{navItem.title}</span>
                              </CommandItem>
                            ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                    {/* Social Media */}
                    <div className="hackIn-connect-container h-[110px] w-full rounded-lg border flex flex-wrap p-2 items-center justify-between overflow-x-hidden overflow-y-auto mt-1">
                      {docsConfig.passport.map((item, index) => (
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
                            <AvatarFallback className="glassmorphisum border-none">
                              {item.title ? logoLetter(item.title) : "Dx"}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      ))}
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
                    {/* Divider */}
                    <div className="divider w-full flex flex-row item-center justify-center space-x-3 mt-1">
                      <div className="left-divider flex-1 h-[2.5px]  rounded-lg bg-[--code-foreground] w-full my-auto"></div>
                      <span className="divider-title">or</span>
                      <div className="right-divider flex-1 h-[2.5px]  rounded-lg bg-[--code-foreground] w-full my-auto"></div>
                    </div>
                    {/* Friday Factor */}
                    <div className="friday-factor w-full h-auto grid grid-cols-2 gap-2">
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
                      <Button
                        ref={buttonRef}
                        disableRipple
                        className="p-0 bg-[--code-foreground] max-w-[175px] relative border overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
                        size="lg"
                        onPress={handleConfetti}
                      >
                        Continue as Guest
                      </Button>
                      <ButtonShadcnUi
                        className="rounded-full"
                        variant="outline"
                      >
                        Confrom
                      </ButtonShadcnUi>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="hackUp">
                  <div className="h-auto w-full flex justify-center items-start flex-row space-x-5 overflow-hidden">
                    <form
                      // style={{ marginLeft: `${marginLeft}` }}
                      onSubmit={form.handleSubmit(onSubmit)}
                      className={`web2 h-[650px] min-w-full rounded-sm flex justify-start items-center flex-col`}
                    >
                      <div className="w-full flex items-center justify-between border rounded-xl text-sm">
                        <input
                          type="file"
                          style={{ display: "none" }}
                          ref={fileInputRef}
                          onChange={handleFileChange}
                        />
                        <ButtonShadcnUi
                          variant="link"
                          onClick={handleButtonShadcnUiClick}
                          className="text-muted-foreground"
                        >
                          Choose Your Avatar
                        </ButtonShadcnUi>
                        {file && <p>Selected file: {file.name}</p>}
                      </div>
                      <Input
                        autoComplete="on"
                        type="search"
                        placeholder="Enter Your Name"
                        variant="bordered"
                        className="w-full mt-3"
                        isClearable
                      />
                      <Input
                        autoComplete="on"
                        value={value}
                        type="email"
                        placeholder="Enter Your Email"
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
                      <PhoneInput
                        country={"us"}
                        value={phone}
                        onChange={setPhone}
                      />
                      <Input
                        autoComplete="on"
                        variant="bordered"
                        placeholder="Enter Your Password"
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
                      <Input
                        autoComplete="on"
                        variant="bordered"
                        placeholder="Confrom Your Password"
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
                      <Form {...form}>
                        <div className="glassmorphisum w-full mt-3">
                          <FormField
                            control={form.control}
                            name="dob"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <ButtonShadcnUi
                                        variant={"outline"}
                                        className={cn(
                                          "w-full text-left font-normal",
                                          !field.value &&
                                            "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>Choose Your Birthday</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </ButtonShadcnUi>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent
                                    className="w-auto p-0 z-[10000000000000000000000000000000]"
                                    align="start"
                                  >
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) =>
                                        date > new Date() ||
                                        date < new Date("1900-01-01")
                                      }
                                      initialFocus
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </Form>
                      <textarea
                        placeholder="Enter Your Bio"
                        rows={4}
                        className="glassmorphisum flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none mt-3"
                        defaultValue={""}
                      />

                      <div className="border h-[60px] rounded-xl w-full overflow-y-hidden overflow-x-auto flex justify-start items-center flex-row py-1.5 px-3 mt-7 space-x-2">
                        <span className="bg-red-200 text-red-600 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
                          Avatar
                        </span>
                        <span className="bg-red-200 text-red-600 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
                          Name
                        </span>
                        <span className="bg-red-200 text-red-600 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
                          Email
                        </span>
                        <span className="bg-red-200 text-red-600 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
                          Phone Number
                        </span>
                        <span className="bg-red-200 text-red-600 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
                          Password
                        </span>
                      </div>

                      <div className="hackIn-footer w-full mt-3 flex items-center justify-between">
                        <Button
                          ref={buttonRef}
                          disableRipple
                          className="p-0 bg-[--code-foreground] max-w-[175px] relative border overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
                          size="lg"
                          onPress={handleConfetti}
                        >
                          Continue as Guest
                        </Button>
                        <ButtonShadcnUi
                          onClick={() => setMarginLeft("-386.19px")}
                          variant="outline"
                          className="rounded-full"
                        >
                          Next
                        </ButtonShadcnUi>
                      </div>
                    </form>
                    {/* Connect */}
                    <div className="connect h-auto min-w-full flex justify-center items-start flex-col">
                      <Command className="glassmorphisum rounded-lg border shadow-md h-[175px] w-full">
                        <CommandInput placeholder="Wallets,Chains,Medias..." />
                        <CommandList>
                          <CommandEmpty>No results found.</CommandEmpty>
                          <CommandGroup heading="Blockchain Wallets">
                            {docsConfig.wallet
                              .filter((navitem) => !navitem.external)
                              .map((navItem, index) => (
                                <CommandItem
                                  key={index}
                                  value={navItem.title}
                                  onSelect={() => {
                                    runCommand(() =>
                                      router.push(navItem.href as string)
                                    )
                                  }}
                                >
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
                                      {navItem.title
                                        ? logoLetter(navItem.title)
                                        : "Dx"}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className="ml-3">{navItem.title}</span>
                                </CommandItem>
                              ))}
                          </CommandGroup>
                          <CommandGroup heading="Chains">
                            {filteredChains.map((chain, index) => (
                              <CommandItem
                                key={index}
                                value={chain.chainId}
                                onSelect={() => {
                                  runCommand(() =>
                                    router.push(`/chain/${chain.chainId}`)
                                  )
                                }}
                              >
                                <Avatar className="h-[27px] w-[27px] rounded-sm">
                                  <AvatarImage
                                    src={
                                      chain.chainSlug
                                        ? `https://icons.llamao.fi/icons/chains/rsz_${chain.chainSlug}.jpg`
                                        : "/unknown-logo.png"
                                    }
                                    alt="Dx"
                                  />
                                  <AvatarFallback className="glassmorphisum border-none">
                                    {chain.name ? logoLetter(chain.name) : "Dx"}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="ml-3">{chain.name}</span>
                              </CommandItem>
                            ))}
                          </CommandGroup>
                          <CommandGroup heading="Social Medias">
                            {docsConfig.passport.map((navItem, index) => (
                              <CommandItem
                                key={index}
                                value={navItem.title}
                                onSelect={() => {
                                  runCommand(() =>
                                    router.push(navItem.href as string)
                                  )
                                }}
                              >
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
                                    {navItem.title
                                      ? logoLetter(navItem.title)
                                      : "Dx"}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="ml-3">{navItem.title}</span>
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>

                      <div className="h-[450px] w-full mx-auto overflow-y-auto overflow-x-auto">
                        <div className="hackIn-connect-container h-[60px] w-full overflow-y-hidden overflow-x-hidden flex justify-start items-center flex-row border rounded-md mt-1.5">
                          {docsConfig.passport.map((item, index) => (
                            <div
                              key={index}
                              className="min-h-[40px] min-w-[40px] border text-center text-[12.5px] rounded-lg flex items-center justify-center m-1"
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
                                <AvatarFallback className="glassmorphisum border-none">
                                  {item.title ? logoLetter(item.title) : "Dx"}
                                </AvatarFallback>
                              </Avatar>
                            </div>
                          ))}
                        </div>

                        <div className="hackIn-connect-container h-[60px] w-full overflow-y-hidden overflow-x-auto flex justify-start items-center flex-row border rounded-md mt-1.5">
                          {docsConfig.wallet.map((item, index) => (
                            <div
                              key={index}
                              className="min-h-[40px] min-w-[40px] border text-center text-[12.5px] rounded-lg flex items-center justify-center m-1"
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

                        <div className="divider w-full flex flex-row item-center justify-center space-x-3 mt-1">
                          <div className="left-divider flex-1 h-[2.5px]  rounded-lg bg-[--code-foreground] w-full my-auto"></div>
                          <span className="divider-title">
                            wallets according chains
                          </span>
                          <div className="right-divider flex-1 h-[2.5px]  rounded-lg bg-[--code-foreground] w-full my-auto"></div>
                        </div>

                        <div className="dark:text-[#B3B3B3] text-black h-[250px] w-[100%] overflow-y-hidden overflow-x-auto flex justify-start items-center flex-row rounded-md space-x-3">
                          {filteredChains.map((chain, idx) => {
                            if (idx === 2) {
                              return (
                                <React.Fragment
                                  key={
                                    JSON.stringify(chain) + "en" + "with-banner"
                                  }
                                >
                                  <AdBanner />
                                  <Chain
                                    chain={chain}
                                    lang="en"
                                    buttonOnly={undefined}
                                  />
                                </React.Fragment>
                              )
                            }

                            return (
                              <Chain
                                chain={chain}
                                key={JSON.stringify(chain) + "en"}
                                lang="en"
                                buttonOnly={undefined}
                              />
                            )
                          })}
                        </div>
                      </div>

                      <div className="border h-[60px] rounded-xl w-full  flex justify-between items-center flex-row py-1.5 px-3 mt-7 ">
                        {pendingContent ? (
                          <div className="pending-content h-full w-full flex justify-start items-center flex-row flex-1 overflow-y-hidden overflow-x-auto space-x-2">
                            <span className="bg-red-200 hover:bg-red-400 text-red-700 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
                              Cleared
                            </span>
                          </div>
                        ) : (
                          <div className="pending-content h-full w-full flex justify-start items-center flex-row flex-1 overflow-y-hidden overflow-x-auto space-x-2">
                            <span className="bg-red-200 hover:bg-red-400 text-red-700 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
                              Social Media
                            </span>
                            <span className="bg-red-200 hover:bg-red-400 text-red-700 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
                              Wallet
                            </span>
                          </div>
                        )}

                        <ButtonShadcnUi
                          onClick={() => setPendingContent(!pendingContent)}
                          className="pending-clear border p-3 rounded-full"
                          variant="outline"
                        >
                          <Icons.close className="h-4 w-4" />
                        </ButtonShadcnUi>
                      </div>

                      <div className="hackIn-footer w-full mt-3 flex items-center justify-between">
                        <ButtonShadcnUi
                          onClick={() => setMarginLeft("-386.19px")}
                        >
                          Back
                        </ButtonShadcnUi>
                        <ButtonShadcnUi
                          className="rounded-full"
                          onClick={() => setMarginLeft("-772.38px")}
                          variant="outline"
                        >
                          Next
                        </ButtonShadcnUi>
                      </div>
                    </div>
                    {/* Friday Factor */}
                    <div className="friday-factor h-auto min-w-full flex justify-center items-start flex-col">
                      <Collapsible
                        open={isFridayOpen}
                        onOpenChange={setIsFridayOpen}
                        className="w-full space-y-2"
                      >
                        <div className="flex items-center justify-between space-x-4">
                          <h4 className="text-sm font-semibold">
                            Configure Friday
                          </h4>
                          <CollapsibleTrigger asChild>
                            <ButtonShadcnUi
                              variant="ghost"
                              size="sm"
                              className="w-9 p-0 border"
                            >
                              <ChevronsUpDown className="h-4 w-4" />
                              <span className="sr-only">Toggle</span>
                            </ButtonShadcnUi>
                          </CollapsibleTrigger>
                        </div>
                        <form>
                          <Input
                            autoComplete="on"
                            variant="bordered"
                            placeholder="Enter Your Assistance Name"
                            endContent={
                              <button
                                className="focus:outline-none"
                                type="button"
                                onClick={toggleVisibility}
                              >
                                {isVisible ? <Check /> : <Plus />}
                              </button>
                            }
                            type={isVisible ? "text" : "password"}
                            className="w-full mt-3"
                          />
                        </form>

                        <CollapsibleContent className="space-y-2">
                          <form>
                            <Input
                              autoComplete="on"
                              variant="bordered"
                              placeholder="Connect Your Friday"
                              endContent={
                                <button
                                  className="focus:outline-none"
                                  type="button"
                                  onClick={toggleVisibility}
                                >
                                  {isVisible ? (
                                    <ClipboardPaste />
                                  ) : (
                                    <ClipboardList />
                                  )}
                                </button>
                              }
                              type={isVisible ? "text" : "password"}
                              className="w-full mt-3"
                            />
                          </form>

                          <ContextMenu>
                            <ContextMenuTrigger className="relative flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                              <span className="text-xs p-5 text-center">
                                Your Friday Recovary Code will Appear Here When
                                You Will Create A New Assistence. You Might Need
                                To Save This Recovary Code, In A Safe Place
                              </span>

                              <ButtonShadcnUi
                                onClick={toggleVisibility}
                                className="pending-clear absolute top-1 right-1 border p-3 rounded-full"
                                variant="outline"
                              >
                                {isVisible ? (
                                  <ClipboardCheck />
                                ) : (
                                  <ClipboardCopy />
                                )}
                              </ButtonShadcnUi>
                            </ContextMenuTrigger>
                            <ContextMenuContent className="w-64">
                              <ContextMenuItem inset>
                                Back
                                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                              </ContextMenuItem>
                              <ContextMenuItem inset disabled>
                                Forward
                                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                              </ContextMenuItem>
                              <ContextMenuItem inset>
                                Reload
                                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                              </ContextMenuItem>
                              <ContextMenuSub>
                                <ContextMenuSubTrigger inset>
                                  More Tools
                                </ContextMenuSubTrigger>
                                <ContextMenuSubContent className="w-48">
                                  <ContextMenuItem>
                                    Save Page As...
                                    <ContextMenuShortcut>
                                      ⇧⌘S
                                    </ContextMenuShortcut>
                                  </ContextMenuItem>
                                  <ContextMenuItem>
                                    Create Shortcut...
                                  </ContextMenuItem>
                                  <ContextMenuItem>
                                    Name Window...
                                  </ContextMenuItem>
                                  <ContextMenuSeparator />
                                  <ContextMenuItem>
                                    Developer Tools
                                  </ContextMenuItem>
                                </ContextMenuSubContent>
                              </ContextMenuSub>
                              <ContextMenuSeparator />
                              <ContextMenuCheckboxItem checked>
                                Show Bookmarks Bar
                                <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                              </ContextMenuCheckboxItem>
                              <ContextMenuCheckboxItem>
                                Show Full URLs
                              </ContextMenuCheckboxItem>
                              <ContextMenuSeparator />
                              <ContextMenuRadioGroup value="pedro">
                                <ContextMenuLabel inset>
                                  People
                                </ContextMenuLabel>
                                <ContextMenuSeparator />
                                <ContextMenuRadioItem value="pedro">
                                  Pedro Duarte
                                </ContextMenuRadioItem>
                                <ContextMenuRadioItem value="colm">
                                  Colm Tuite
                                </ContextMenuRadioItem>
                              </ContextMenuRadioGroup>
                            </ContextMenuContent>
                          </ContextMenu>
                        </CollapsibleContent>
                      </Collapsible>
                      <Collapsible
                        open={isQRCodeOpen}
                        onOpenChange={setIsQRCodeOpen}
                        className="w-full space-y-2 mt-2"
                      >
                        <div className="flex items-center justify-between space-x-4 ">
                          <h4 className="text-sm font-semibold">
                            Configure QR Code
                          </h4>
                          <CollapsibleTrigger asChild>
                            <ButtonShadcnUi
                              variant="ghost"
                              size="sm"
                              className="w-9 p-0 border"
                            >
                              <ChevronsUpDown className="h-4 w-4" />
                              <span className="sr-only">Toggle</span>
                            </ButtonShadcnUi>
                          </CollapsibleTrigger>
                        </div>
                        <Textarea placeholder="Type Your Prompt For QR Code." />

                        <CollapsibleContent className="space-y-2">
                          <Textarea placeholder="Type Your Negative Prompt For QR Code." />
                          <div className="w-full flex items-center justify-between border rounded-xl text-sm">
                            <form>
                              <input
                                type="file"
                                style={{ display: "none" }}
                                ref={fileInputRef}
                                onChange={handleFileChange}
                              />
                              <ButtonShadcnUi
                                variant="link"
                                onClick={handleButtonShadcnUiClick}
                                className="text-muted-foreground"
                              >
                                Use An Image To Generate QR Code
                              </ButtonShadcnUi>
                              {file && <p>Selected file: {file.name}</p>}
                            </form>
                          </div>
                          <div className="qrCode-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
                            <div className="qrCode-slider-content flex items-start justify-between flex-row w-full">
                              <span className="qrCode-slider-title text-md hover:bg-[--code-highlighted] rounded-md">
                                Seed
                              </span>
                              <div className="qrCode-slider-rate bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
                                3.3
                              </div>
                            </div>
                            <div className="qrCode-slider w-full">
                              <Slider defaultValue={[33]} max={100} step={1} />
                            </div>
                          </div>
                          <div className="qrCode-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
                            <div className="qrCode-slider-content flex items-start justify-between flex-row w-full">
                              <span className="qrCode-slider-title text-md hover:bg-[--code-highlighted] rounded-md">
                                Strength
                              </span>
                              <div className="qrCode-slider-rate bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
                                6.6
                              </div>
                            </div>
                            <div className="qrCode-slider w-full">
                              <Slider defaultValue={[66]} max={100} step={1} />
                            </div>
                          </div>
                          <div className="qrCode-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
                            <div className="qrCode-slider-content flex items-start justify-between flex-row w-full">
                              <span className="qrCode-slider-title text-md hover:bg-[--code-highlighted] rounded-md">
                                Guidence Scale
                              </span>
                              <div className="qrCode-slider-rate bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
                                9.9
                              </div>
                            </div>
                            <div className="qrCode-slider w-full">
                              <Slider defaultValue={[99]} max={100} step={1} />
                            </div>
                          </div>

                          <Card
                            isFooterBlurred
                            radius="lg"
                            className="border-none min-h-[350px]"
                          >
                            <AspectRatio ratio={16 / 9}>
                              <ImageNext
                                alt="Woman listing to music"
                                className="object-cover"
                                height={450}
                                src="/qrcode.png"
                                width={450}
                              />
                            </AspectRatio>

                            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-3 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                              <p className="text-tiny text-white/80">
                                Support Developers At Huggingfacfe.
                              </p>
                              <Button
                                className="text-tiny text-white bg-black/20"
                                variant="flat"
                                color="default"
                                radius="lg"
                                size="sm"
                              >
                                Regenerate
                              </Button>
                            </CardFooter>
                          </Card>
                        </CollapsibleContent>
                      </Collapsible>
                      <Collapsible
                        open={isExtraSafetyOpen}
                        onOpenChange={setIsExtraSafetyOpen}
                        className="w-full space-y-2 mt-2"
                      >
                        <div className="flex items-center justify-between space-x-4 ">
                          <h4 className="text-sm font-semibold">
                            Configure Extra Safety
                          </h4>
                          <CollapsibleTrigger asChild>
                            <ButtonShadcnUi
                              variant="ghost"
                              size="sm"
                              className="w-9 p-0 border"
                            >
                              <ChevronsUpDown className="h-4 w-4" />
                              <span className="sr-only">Toggle</span>
                            </ButtonShadcnUi>
                          </CollapsibleTrigger>
                        </div>
                        <form action="">
                          <Input
                            autoComplete="on"
                            type="tel"
                            placeholder="Type Your Authentication Code"
                            variant="bordered"
                            className="w-full mt-3"
                          />
                        </form>
                        <CollapsibleContent className="space-y-2">
                          <form>
                            <Input
                              autoComplete="on"
                              value={emailAndPhoneNumbber}
                              type="search"
                              placeholder="Set A Recovary Email Or Phone Number"
                              variant="bordered"
                              color={
                                validationEmailAndPhoneNumbberState ===
                                "invalid"
                                  ? "danger"
                                  : "success"
                              }
                              errorMessage={
                                validationEmailAndPhoneNumbberState ===
                                  "invalid" &&
                                "Set A Recovary Email Or Phone Number Proccess Crashed"
                              }
                              validationState={
                                validationEmailAndPhoneNumbberState
                              }
                              onValueChange={setEmailAndPhoneNumbber}
                              className="w-full mt-3"
                              isClearable
                            />
                            <ContextMenu>
                              <ContextMenuTrigger className="relative flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm mt-3">
                                <input
                                  type="file"
                                  style={{ display: "none" }}
                                  ref={fileInputRef}
                                  onChange={handleFileChange}
                                />
                                <ButtonShadcnUi
                                  variant="link"
                                  onClick={handleButtonShadcnUiClick}
                                  className="text-muted-foreground"
                                >
                                  Choose Or Drop A Pic Of Yourself
                                </ButtonShadcnUi>
                                {file && <p>Selected file: {file.name}</p>}
                              </ContextMenuTrigger>
                              <ContextMenuContent className="w-64">
                                <ContextMenuItem inset>
                                  Back
                                  <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                                </ContextMenuItem>
                                <ContextMenuItem inset disabled>
                                  Forward
                                  <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                                </ContextMenuItem>
                                <ContextMenuItem inset>
                                  Reload
                                  <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                                </ContextMenuItem>
                                <ContextMenuSub>
                                  <ContextMenuSubTrigger inset>
                                    More Tools
                                  </ContextMenuSubTrigger>
                                  <ContextMenuSubContent className="w-48">
                                    <ContextMenuItem>
                                      Save Page As...
                                      <ContextMenuShortcut>
                                        ⇧⌘S
                                      </ContextMenuShortcut>
                                    </ContextMenuItem>
                                    <ContextMenuItem>
                                      Create Shortcut...
                                    </ContextMenuItem>
                                    <ContextMenuItem>
                                      Name Window...
                                    </ContextMenuItem>
                                    <ContextMenuSeparator />
                                    <ContextMenuItem>
                                      Developer Tools
                                    </ContextMenuItem>
                                  </ContextMenuSubContent>
                                </ContextMenuSub>
                                <ContextMenuSeparator />
                                <ContextMenuCheckboxItem checked>
                                  Show Bookmarks Bar
                                  <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                                </ContextMenuCheckboxItem>
                                <ContextMenuCheckboxItem>
                                  Show Full URLs
                                </ContextMenuCheckboxItem>
                                <ContextMenuSeparator />
                                <ContextMenuRadioGroup value="pedro">
                                  <ContextMenuLabel inset>
                                    People
                                  </ContextMenuLabel>
                                  <ContextMenuSeparator />
                                  <ContextMenuRadioItem value="pedro">
                                    Pedro Duarte
                                  </ContextMenuRadioItem>
                                  <ContextMenuRadioItem value="colm">
                                    Colm Tuite
                                  </ContextMenuRadioItem>
                                </ContextMenuRadioGroup>
                              </ContextMenuContent>
                            </ContextMenu>
                          </form>
                        </CollapsibleContent>
                      </Collapsible>

                      <div className="border h-[60px] rounded-xl w-full  flex justify-between items-center flex-row py-1.5 px-3 mt-7 ">
                        {pendingContent ? (
                          <div className="pending-content h-full w-full flex justify-start items-center flex-row flex-1 overflow-y-hidden overflow-x-auto space-x-2">
                            <span className="bg-red-200 hover:bg-red-400 text-red-700 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
                              Cleared
                            </span>
                          </div>
                        ) : (
                          <div className="pending-content h-full w-full flex justify-start items-center flex-row flex-1 overflow-y-hidden overflow-x-auto space-x-2">
                            <span className="bg-red-200 hover:bg-red-400 text-red-700 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
                              Friday
                            </span>
                            <span className="bg-red-200 hover:bg-red-400 text-red-700 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
                              QR Code
                            </span>
                            <span className="bg-red-200 hover:bg-red-400 text-red-700 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
                              Authenticator
                            </span>
                          </div>
                        )}

                        <ButtonShadcnUi
                          onClick={() => setPendingContent(!pendingContent)}
                          className="pending-clear border p-3 rounded-full"
                          variant="outline"
                        >
                          <Icons.close className="h-4 w-4" />
                        </ButtonShadcnUi>
                      </div>
                      <div className="hackIn-footer w-full mt-3 flex items-center justify-between">
                        <ButtonShadcnUi
                          className="rounded-full"
                          onClick={() => setMarginLeft("-765px")}
                        >
                          Back
                        </ButtonShadcnUi>
                        <Button
                          ref={buttonRef}
                          disableRipple
                          className="p-0 bg-[--code-foreground] max-w-[175px] relative border overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
                          size="lg"
                          onPress={handleConfetti}
                        >
                          Create Account
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </Suspense>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// <div
//         onClick={() => setFluidSimulation(true)}
//         className="nav-toggles h-[35px] w-[35px] flex items-center justify-center"
//       >
//         <Icons.hack className="h-4 w-4 fill-current" />
//       </div>

//       {fluidSimulation ? (
//         <div className="hack min-h-screen min-w-screen">
//           {/*
//             <canvas className="fluid-simulation-container"></canvas>
//             <Script src="./dat-gui.js" />
//             <Script src="./fluid-simulation.js" />
//             <Script id="console">
//               {`console.log("Op Bolta,fluid simulation is ${fluidSimulation}")`}
//             </Script>
//           */}
//           <div className="hack-container glassmorphisum pt-5 pb-5 flex flex-col items-center border rounded-md max-w-[92.5%] w-[425px] space-y-3 h-auto">
//             <div className="tab-header w-[90%] h-auto flex items-center justify-start space-x-1.5">
//               <div className="help h-[35px] w-[35px] flex items-center justify-center rounded-full border">
//                 <Icons.circleDashed className="h-4 w-4 fill-current" />
//               </div>
//               <div className="speaker h-[35px] w-[35px] flex items-center justify-center rounded-full border">
//                 <Icons.speaker className="h-4 w-4 fill-current" />
//               </div>
//               <div className="tips flex-1 rounded-lg border h-[30px] flex items-center justify-center">
//                 Tips are easy!!!
//               </div>
//               <div className="hack-setting h-[35px] w-[35px] flex items-center justify-center rounded-full border">
//                 <Popover>
//                   <PopoverTrigger>
//                     <Icons.hackSetting className="h-4 w-4 fill-current" />
//                   </PopoverTrigger>
//                   <PopoverContent className="bg-red-500 z-[100000000000000000000000000000000000000000000000]">
//                     Place content for the popover here.
//                   </PopoverContent>
//                 </Popover>
//               </div>
//               <div
//                 onClick={() => setFluidSimulation(false)}
//                 className="close h-[35px] w-[35px] flex items-center justify-center rounded-full border"
//               >
//                 <Icons.close className="h-4 w-4 fill-current" />
//               </div>
//             </div>
//             <Tabs
//               defaultValue="hackUp"
//               className="hackTabs w-[100%] space-y-3 h-[400px] overflow-y-auto overflow-x-hidden lg:h-[500px]"
//             >
//               <TabsList className="hackTabList glassmorphisum mx-auto grid w-[90%] grid-cols-2">
//                 <TabsTrigger value="hackIn" className="hackTabTriggers">
//                   HackIn
//                 </TabsTrigger>
//                 <TabsTrigger value="hackUp" className="hackTabTriggers">
//                   HackUp
//                 </TabsTrigger>
//               </TabsList>
//               <TabsContent value="hackIn">
//                 <div className="h-auto w-full flex justify-start items-center flex-col">
//                   {/* Email and Password */}
//                   <form
//                     className="
//                 email-and-password"
//                   >
//                     <Input
//                       autoComplete="on"
//                       value={emailAndPhoneNumbber}
//                       type="search"
//                       placeholder="Enter Email or Phone Number"
//                       variant="bordered"
//                       color={
//                         validationEmailAndPhoneNumbberState === "invalid"
//                           ? "danger"
//                           : "success"
//                       }
//                       errorMessage={
//                         validationEmailAndPhoneNumbberState === "invalid" &&
//                         "Please enter a valid email or phone number"
//                       }
//                       validationState={validationEmailAndPhoneNumbberState}
//                       onValueChange={setEmailAndPhoneNumbber}
//                       className="w-full mt-3"
//                       isClearable
//                     />
//                     <Input
//                       autoComplete="on"
//                       variant="bordered"
//                       placeholder="Enter Your Password"
//                       endContent={
//                         <button
//                           className="focus:outline-none"
//                           type="button"
//                           onClick={toggleVisibility}
//                         >
//                           {isVisible ? (
//                             <Icons.eyeOpen className="text-2xl text-default-400 pointer-events-none" />
//                           ) : (
//                             <Icons.eyeClose className="text-2xl text-default-400 pointer-events-none" />
//                           )}
//                         </button>
//                       }
//                       type={isVisible ? "text" : "password"}
//                       className="w-full mt-3"
//                     />
//                   </form>
//                   {/* Divider */}
//                   <div className="divider w-full flex flex-row item-center justify-center space-x-3 mt-1">
//                     <div className="left-divider flex-1 h-[2.5px]  rounded-lg bg-[--code-foreground] w-full my-auto"></div>
//                     <span className="divider-title">or</span>
//                     <div className="right-divider flex-1 h-[2.5px]  rounded-lg bg-[--code-foreground] w-full my-auto"></div>
//                   </div>
//                   {/* HackIn Search */}
//                   <Command className="glassmorphisum rounded-lg border shadow-md">
//                     <CommandInput placeholder="Type a command or search..." />
//                     <CommandList>
//                       <CommandEmpty>No results found.</CommandEmpty>
//                       <CommandGroup heading="Social Medias">
//                         {docsConfig.passport
//                           .filter((navitem) => !navitem.external)
//                           .map((navItem) => (
//                             <CommandItem
//                               key={navItem.href}
//                               value={navItem.title}
//                               onSelect={() => {
//                                 runCommand(() =>
//                                   router.push(navItem.href as string)
//                                 )
//                               }}
//                             >
//                               <Avatar className="h-[27px] w-[27px] rounded-sm">
//                                 <AvatarImage
//                                   src={
//                                     navItem.logo
//                                       ? `/docs/${navItem.title
//                                           .replace(/\s/g, "-")
//                                           .toLowerCase()}.jpg`
//                                       : ""
//                                   }
//                                   alt="Dx"
//                                 />
//                                 <AvatarFallback className="glassmorphisum border-none">
//                                   {navItem.title
//                                     ? logoLetter(navItem.title)
//                                     : "Dx"}
//                                 </AvatarFallback>
//                               </Avatar>
//                               <span className="ml-3">{navItem.title}</span>
//                             </CommandItem>
//                           ))}
//                       </CommandGroup>
//                       <CommandGroup heading="Blockchain Wallets">
//                         {docsConfig.wallet
//                           .filter((navitem) => !navitem.external)
//                           .map((navItem) => (
//                             <CommandItem
//                               key={navItem.href}
//                               value={navItem.title}
//                               onSelect={() => {
//                                 runCommand(() =>
//                                   router.push(navItem.href as string)
//                                 )
//                               }}
//                             >
//                               <Avatar className="h-[27px] w-[27px] rounded-sm">
//                                 <AvatarImage
//                                   src={
//                                     navItem.logo
//                                       ? `/docs/${navItem.title
//                                           .replace(/\s/g, "-")
//                                           .toLowerCase()}.jpg`
//                                       : ""
//                                   }
//                                   alt="Dx"
//                                 />
//                                 <AvatarFallback className="glassmorphisum border-none">
//                                   {navItem.title
//                                     ? logoLetter(navItem.title)
//                                     : "Dx"}
//                                 </AvatarFallback>
//                               </Avatar>
//                               <span className="ml-3">{navItem.title}</span>
//                             </CommandItem>
//                           ))}
//                       </CommandGroup>
//                     </CommandList>
//                   </Command>
//                   {/* Social Media */}
//                   <div className="hackIn-connect-container h-[110px] w-full rounded-lg border flex flex-wrap p-2 items-center justify-between overflow-x-hidden overflow-y-auto mt-1">
//                     {docsConfig.passport.map((item, index) => (
//                       <div
//                         key={index}
//                         className="h-[40px] w-[40px] border text-center text-[12.5px] rounded-lg flex items-center justify-center m-1"
//                       >
//                         <Avatar className="h-[27px] w-[27px] rounded-sm">
//                           <AvatarImage
//                             src={
//                               item.logo
//                                 ? `/docs/${item.title
//                                     .replace(/\s/g, "-")
//                                     .toLowerCase()}.jpg`
//                                 : ""
//                             }
//                             alt="Dx"
//                           />
//                           <AvatarFallback className="glassmorphisum border-none">
//                             {item.title ? logoLetter(item.title) : "Dx"}
//                           </AvatarFallback>
//                         </Avatar>
//                       </div>
//                     ))}
//                   </div>
//                   {/* Wallet */}
//                   <div className="hackIn-connect-container h-[110px] w-full rounded-lg border flex flex-wrap p-2 items-center justify-between overflow-x-hidden overflow-y-auto mt-1.5">
//                     {docsConfig.wallet.map((item, index) => (
//                       <div
//                         key={index}
//                         className="h-[40px] w-[40px] border text-center text-[12.5px] rounded-lg flex items-center justify-center m-1"
//                       >
//                         <Avatar className="h-[27px] w-[27px] rounded-sm">
//                           <AvatarImage
//                             src={
//                               item.logo
//                                 ? `/docs/${item.title
//                                     .replace(/\s/g, "-")
//                                     .toLowerCase()}.jpg`
//                                 : ""
//                             }
//                             alt="Dx"
//                           />
//                           <AvatarFallback className="glassmorphisum  border-none">
//                             {item.title ? logoLetter(item.title) : "Dx"}
//                           </AvatarFallback>
//                         </Avatar>
//                       </div>
//                     ))}
//                   </div>
//                   {/* Divider */}
//                   <div className="divider w-full flex flex-row item-center justify-center space-x-3 mt-1">
//                     <div className="left-divider flex-1 h-[2.5px]  rounded-lg bg-[--code-foreground] w-full my-auto"></div>
//                     <span className="divider-title">or</span>
//                     <div className="right-divider flex-1 h-[2.5px]  rounded-lg bg-[--code-foreground] w-full my-auto"></div>
//                   </div>
//                   {/* Friday Factor */}
//                   <div className="friday-factor w-full h-auto grid grid-cols-2 gap-2">
//                     <div className="friday glassmorphisum hoverGlassmorphisum w-full h-[50px] rounded-lg flex items-center justify-center">
//                       Friday
//                     </div>
//                     <div className="qr-code glassmorphisum hoverGlassmorphisum w-full h-[50px] rounded-lg flex items-center justify-center">
//                       QR Code
//                     </div>
//                     <div className="authenticator glassmorphisum hoverGlassmorphisum w-full h-[50px] rounded-lg flex items-center justify-center">
//                       Authenticator
//                     </div>
//                     <div className="face glassmorphisum hoverGlassmorphisum w-full h-[50px] rounded-lg flex items-center justify-center">
//                       Face
//                     </div>
//                   </div>
//                   {/* Footer */}
//                   <div className="hackIn-footer w-full mt-3 flex items-center justify-between">
//                     <Button
//                       ref={buttonRef}
//                       disableRipple
//                       className="p-0 bg-[--code-foreground] max-w-[175px] relative border overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
//                       size="lg"
//                       onPress={handleConfetti}
//                     >
//                       Continue as Guest
//                     </Button>
//                     <ButtonShadcnUi className="rounded-full" variant="outline">
//                       Confrom
//                     </ButtonShadcnUi>
//                   </div>
//                 </div>
//               </TabsContent>
//               <TabsContent value="hackUp">
//                 <div className="h-auto w-full flex justify-center items-start flex-row space-x-5 overflow-hidden">
//                   <form
//                     style={{ marginLeft: `${marginLeft}` }}
//                     onSubmit={form.handleSubmit(onSubmit)}
//                     className={`web2 h-[650px] min-w-full rounded-sm flex justify-start items-center flex-col`}
//                   >
//                     <div className="w-full flex items-center justify-between border rounded-xl text-sm">
//                       <input
//                         type="file"
//                         style={{ display: "none" }}
//                         ref={fileInputRef}
//                         onChange={handleFileChange}
//                       />
//                       <ButtonShadcnUi
//                         variant="link"
//                         onClick={handleButtonShadcnUiClick}
//                         className="text-muted-foreground"
//                       >
//                         Choose Your Avatar
//                       </ButtonShadcnUi>
//                       {file && <p>Selected file: {file.name}</p>}
//                     </div>
//                     <Input
//                       autoComplete="on"
//                       type="search"
//                       placeholder="Enter Your Name"
//                       variant="bordered"
//                       className="w-full mt-3"
//                       isClearable
//                     />
//                     <Input
//                       autoComplete="on"
//                       value={value}
//                       type="email"
//                       placeholder="Enter Your Email"
//                       variant="bordered"
//                       color={
//                         validationState === "invalid" ? "danger" : "success"
//                       }
//                       errorMessage={
//                         validationState === "invalid" &&
//                         "Please enter a valid email or phone number"
//                       }
//                       validationState={validationState}
//                       onValueChange={setValue}
//                       className="w-full mt-3"
//                       isClearable
//                     />
//                     <PhoneInput
//                       country={"us"}
//                       value={phone}
//                       onChange={setPhone}
//                     />
//                     <Input
//                       autoComplete="on"
//                       variant="bordered"
//                       placeholder="Enter Your Password"
//                       endContent={
//                         <button
//                           className="focus:outline-none"
//                           type="button"
//                           onClick={toggleVisibility}
//                         >
//                           {isVisible ? (
//                             <Icons.eyeOpen className="text-2xl text-default-400 pointer-events-none" />
//                           ) : (
//                             <Icons.eyeClose className="text-2xl text-default-400 pointer-events-none" />
//                           )}
//                         </button>
//                       }
//                       type={isVisible ? "text" : "password"}
//                       className="w-full mt-3"
//                     />
//                     <Input
//                       autoComplete="on"
//                       variant="bordered"
//                       placeholder="Confrom Your Password"
//                       endContent={
//                         <button
//                           className="focus:outline-none"
//                           type="button"
//                           onClick={toggleVisibility}
//                         >
//                           {isVisible ? (
//                             <Icons.eyeOpen className="text-2xl text-default-400 pointer-events-none" />
//                           ) : (
//                             <Icons.eyeClose className="text-2xl text-default-400 pointer-events-none" />
//                           )}
//                         </button>
//                       }
//                       type={isVisible ? "text" : "password"}
//                       className="w-full mt-3"
//                     />
//                     <Form {...form}>
//                       <div className="glassmorphisum w-full mt-3">
//                         <FormField
//                           control={form.control}
//                           name="dob"
//                           render={({ field }) => (
//                             <FormItem className="flex flex-col">
//                               <Popover>
//                                 <PopoverTrigger asChild>
//                                   <FormControl>
//                                     <ButtonShadcnUi
//                                       variant={"outline"}
//                                       className={cn(
//                                         "w-full text-left font-normal",
//                                         !field.value && "text-muted-foreground"
//                                       )}
//                                     >
//                                       {field.value ? (
//                                         format(field.value, "PPP")
//                                       ) : (
//                                         <span>Choose Your Birthday</span>
//                                       )}
//                                       <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                                     </ButtonShadcnUi>
//                                   </FormControl>
//                                 </PopoverTrigger>
//                                 <PopoverContent
//                                   className="w-auto p-0 z-[10000000000000000000000000000000]"
//                                   align="start"
//                                 >
//                                   <Calendar
//                                     mode="single"
//                                     selected={field.value}
//                                     onSelect={field.onChange}
//                                     disabled={(date) =>
//                                       date > new Date() ||
//                                       date < new Date("1900-01-01")
//                                     }
//                                     initialFocus
//                                   />
//                                 </PopoverContent>
//                               </Popover>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />
//                       </div>
//                     </Form>
//                     <textarea
//                       placeholder="Enter Your Bio"
//                       rows={4}
//                       className="glassmorphisum flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none mt-3"
//                       defaultValue={""}
//                     />

//                     <div className="border h-[60px] rounded-xl w-full overflow-y-hidden overflow-x-auto flex justify-start items-center flex-row py-1.5 px-3 mt-7 space-x-2">
//                       <span className="bg-red-200 text-red-600 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
//                         Avatar
//                       </span>
//                       <span className="bg-red-200 text-red-600 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
//                         Name
//                       </span>
//                       <span className="bg-red-200 text-red-600 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
//                         Email
//                       </span>
//                       <span className="bg-red-200 text-red-600 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
//                         Phone Number
//                       </span>
//                       <span className="bg-red-200 text-red-600 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
//                         Password
//                       </span>
//                     </div>

//                     <div className="hackIn-footer w-full mt-3 flex items-center justify-between">
//                       <Button
//                         ref={buttonRef}
//                         disableRipple
//                         className="p-0 bg-[--code-foreground] max-w-[175px] relative border overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
//                         size="lg"
//                         onPress={handleConfetti}
//                       >
//                         Continue as Guest
//                       </Button>
//                       <ButtonShadcnUi
//                         onClick={() => setMarginLeft("-386.19px")}
//                         variant="outline"
//                         className="rounded-full"
//                       >
//                         Next
//                       </ButtonShadcnUi>
//                     </div>
//                   </form>
//                   {/* Connect */}
//                   <div className="connect h-auto min-w-full flex justify-center items-start flex-col">
//                     <Command className="glassmorphisum rounded-lg border shadow-md h-[175px] w-full">
//                       <CommandInput placeholder="Wallets,Chains,Medias..." />
//                       <CommandList>
//                         <CommandEmpty>No results found.</CommandEmpty>
//                         <CommandGroup heading="Blockchain Wallets">
//                           {docsConfig.wallet
//                             .filter((navitem) => !navitem.external)
//                             .map((navItem, index) => (
//                               <CommandItem
//                                 key={index}
//                                 value={navItem.title}
//                                 onSelect={() => {
//                                   runCommand(() =>
//                                     router.push(navItem.href as string)
//                                   )
//                                 }}
//                               >
//                                 <Avatar className="h-[27px] w-[27px] rounded-sm">
//                                   <AvatarImage
//                                     src={
//                                       navItem.logo
//                                         ? `/docs/${navItem.title
//                                             .replace(/\s/g, "-")
//                                             .toLowerCase()}.jpg`
//                                         : ""
//                                     }
//                                     alt="Dx"
//                                   />
//                                   <AvatarFallback className="glassmorphisum border-none">
//                                     {navItem.title
//                                       ? logoLetter(navItem.title)
//                                       : "Dx"}
//                                   </AvatarFallback>
//                                 </Avatar>
//                                 <span className="ml-3">{navItem.title}</span>
//                               </CommandItem>
//                             ))}
//                         </CommandGroup>
//                         <CommandGroup heading="Chains">
//                           {filteredChains.map((chain, index) => (
//                             <CommandItem
//                               key={index}
//                               value={chain.chainId}
//                               onSelect={() => {
//                                 runCommand(() =>
//                                   router.push(`/chain/${chain.chainId}`)
//                                 )
//                               }}
//                             >
//                               <Avatar className="h-[27px] w-[27px] rounded-sm">
//                                 <AvatarImage
//                                   src={
//                                     chain.chainSlug
//                                       ? `https://icons.llamao.fi/icons/chains/rsz_${chain.chainSlug}.jpg`
//                                       : "/unknown-logo.png"
//                                   }
//                                   alt="Dx"
//                                 />
//                                 <AvatarFallback className="glassmorphisum border-none">
//                                   {chain.name ? logoLetter(chain.name) : "Dx"}
//                                 </AvatarFallback>
//                               </Avatar>
//                               <span className="ml-3">{chain.name}</span>
//                             </CommandItem>
//                           ))}
//                         </CommandGroup>
//                         <CommandGroup heading="Social Medias">
//                           {docsConfig.passport.map((navItem, index) => (
//                             <CommandItem
//                               key={index}
//                               value={navItem.title}
//                               onSelect={() => {
//                                 runCommand(() =>
//                                   router.push(navItem.href as string)
//                                 )
//                               }}
//                             >
//                               <Avatar className="h-[27px] w-[27px] rounded-sm">
//                                 <AvatarImage
//                                   src={
//                                     navItem.logo
//                                       ? `/docs/${navItem.title
//                                           .replace(/\s/g, "-")
//                                           .toLowerCase()}.jpg`
//                                       : ""
//                                   }
//                                   alt="Dx"
//                                 />
//                                 <AvatarFallback className="glassmorphisum border-none">
//                                   {navItem.title
//                                     ? logoLetter(navItem.title)
//                                     : "Dx"}
//                                 </AvatarFallback>
//                               </Avatar>
//                               <span className="ml-3">{navItem.title}</span>
//                             </CommandItem>
//                           ))}
//                         </CommandGroup>
//                       </CommandList>
//                     </Command>

//                     <div className="h-[450px] w-full mx-auto overflow-y-auto overflow-x-auto">
//                       <div className="hackIn-connect-container h-[60px] w-full overflow-y-hidden overflow-x-hidden flex justify-start items-center flex-row border rounded-md mt-1.5">
//                         {docsConfig.passport.map((item, index) => (
//                           <div
//                             key={index}
//                             className="min-h-[40px] min-w-[40px] border text-center text-[12.5px] rounded-lg flex items-center justify-center m-1"
//                           >
//                             <Avatar className="h-[27px] w-[27px] rounded-sm">
//                               <AvatarImage
//                                 src={
//                                   item.logo
//                                     ? `/docs/${item.title
//                                         .replace(/\s/g, "-")
//                                         .toLowerCase()}.jpg`
//                                     : ""
//                                 }
//                                 alt="Dx"
//                               />
//                               <AvatarFallback className="glassmorphisum border-none">
//                                 {item.title ? logoLetter(item.title) : "Dx"}
//                               </AvatarFallback>
//                             </Avatar>
//                           </div>
//                         ))}
//                       </div>

//                       <div className="hackIn-connect-container h-[60px] w-full overflow-y-hidden overflow-x-auto flex justify-start items-center flex-row border rounded-md mt-1.5">
//                         {docsConfig.wallet.map((item, index) => (
//                           <div
//                             key={index}
//                             className="min-h-[40px] min-w-[40px] border text-center text-[12.5px] rounded-lg flex items-center justify-center m-1"
//                           >
//                             <Avatar className="h-[27px] w-[27px] rounded-sm">
//                               <AvatarImage
//                                 src={
//                                   item.logo
//                                     ? `/docs/${item.title
//                                         .replace(/\s/g, "-")
//                                         .toLowerCase()}.jpg`
//                                     : ""
//                                 }
//                                 alt="Dx"
//                               />
//                               <AvatarFallback className="glassmorphisum  border-none">
//                                 {item.title ? logoLetter(item.title) : "Dx"}
//                               </AvatarFallback>
//                             </Avatar>
//                           </div>
//                         ))}
//                       </div>

//                       <div className="divider w-full flex flex-row item-center justify-center space-x-3 mt-1">
//                         <div className="left-divider flex-1 h-[2.5px]  rounded-lg bg-[--code-foreground] w-full my-auto"></div>
//                         <span className="divider-title">
//                           wallets according chains
//                         </span>
//                         <div className="right-divider flex-1 h-[2.5px]  rounded-lg bg-[--code-foreground] w-full my-auto"></div>
//                       </div>

//                       <div className="dark:text-[#B3B3B3] text-black h-[250px] w-[100%] overflow-y-hidden overflow-x-auto flex justify-start items-center flex-row rounded-md space-x-3">
//                         {filteredChains.map((chain, idx) => {
//                           if (idx === 2) {
//                             return (
//                               <React.Fragment
//                                 key={
//                                   JSON.stringify(chain) + "en" + "with-banner"
//                                 }
//                               >
//                                 <AdBanner />
//                                 <Chain
//                                   chain={chain}
//                                   lang="en"
//                                   buttonOnly={undefined}
//                                 />
//                               </React.Fragment>
//                             )
//                           }

//                           return (
//                             <Chain
//                               chain={chain}
//                               key={JSON.stringify(chain) + "en"}
//                               lang="en"
//                               buttonOnly={undefined}
//                             />
//                           )
//                         })}
//                       </div>
//                     </div>

//                     <div className="border h-[60px] rounded-xl w-full  flex justify-between items-center flex-row py-1.5 px-3 mt-7 ">
//                       {pendingContent ? (
//                         <div className="pending-content h-full w-full flex justify-start items-center flex-row flex-1 overflow-y-hidden overflow-x-auto space-x-2">
//                           <span className="bg-red-200 hover:bg-red-400 text-red-700 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
//                             Cleared
//                           </span>
//                         </div>
//                       ) : (
//                         <div className="pending-content h-full w-full flex justify-start items-center flex-row flex-1 overflow-y-hidden overflow-x-auto space-x-2">
//                           <span className="bg-red-200 hover:bg-red-400 text-red-700 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
//                             Social Media
//                           </span>
//                           <span className="bg-red-200 hover:bg-red-400 text-red-700 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
//                             Wallet
//                           </span>
//                         </div>
//                       )}

//                       <ButtonShadcnUi
//                         onClick={() => setPendingContent(!pendingContent)}
//                         className="pending-clear border p-3 rounded-full"
//                         variant="outline"
//                       >
//                         <Icons.close className="h-4 w-4" />
//                       </ButtonShadcnUi>
//                     </div>

//                     <div className="hackIn-footer w-full mt-3 flex items-center justify-between">
//                       <ButtonShadcnUi
//                         onClick={() => setMarginLeft("-386.19px")}
//                       >
//                         Back
//                       </ButtonShadcnUi>
//                       <ButtonShadcnUi
//                         className="rounded-full"
//                         onClick={() => setMarginLeft("-772.38px")}
//                         variant="outline"
//                       >
//                         Next
//                       </ButtonShadcnUi>
//                     </div>
//                   </div>
//                   {/* Friday Factor */}
//                   <div className="friday-factor h-auto min-w-full flex justify-center items-start flex-col">
//                     <Collapsible
//                       open={isFridayOpen}
//                       onOpenChange={setIsFridayOpen}
//                       className="w-full space-y-2"
//                     >
//                       <div className="flex items-center justify-between space-x-4">
//                         <h4 className="text-sm font-semibold">
//                           Configure Friday
//                         </h4>
//                         <CollapsibleTrigger asChild>
//                           <ButtonShadcnUi
//                             variant="ghost"
//                             size="sm"
//                             className="w-9 p-0 border"
//                           >
//                             <ChevronsUpDown className="h-4 w-4" />
//                             <span className="sr-only">Toggle</span>
//                           </ButtonShadcnUi>
//                         </CollapsibleTrigger>
//                       </div>
//                       <form>
//                         <Input
//                           autoComplete="on"
//                           variant="bordered"
//                           placeholder="Enter Your Assistance Name"
//                           endContent={
//                             <button
//                               className="focus:outline-none"
//                               type="button"
//                               onClick={toggleVisibility}
//                             >
//                               {isVisible ? <Check /> : <Plus />}
//                             </button>
//                           }
//                           type={isVisible ? "text" : "password"}
//                           className="w-full mt-3"
//                         />
//                       </form>

//                       <CollapsibleContent className="space-y-2">
//                         <form>
//                           <Input
//                             autoComplete="on"
//                             variant="bordered"
//                             placeholder="Connect Your Friday"
//                             endContent={
//                               <button
//                                 className="focus:outline-none"
//                                 type="button"
//                                 onClick={toggleVisibility}
//                               >
//                                 {isVisible ? (
//                                   <ClipboardPaste />
//                                 ) : (
//                                   <ClipboardList />
//                                 )}
//                               </button>
//                             }
//                             type={isVisible ? "text" : "password"}
//                             className="w-full mt-3"
//                           />
//                         </form>

//                         <ContextMenu>
//                           <ContextMenuTrigger className="relative flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
//                             <span className="text-xs p-5 text-center">
//                               Your Friday Recovary Code will Appear Here When
//                               You Will Create A New Assistence. You Might Need
//                               To Save This Recovary Code, In A Safe Place
//                             </span>

//                             <ButtonShadcnUi
//                               onClick={toggleVisibility}
//                               className="pending-clear absolute top-1 right-1 border p-3 rounded-full"
//                               variant="outline"
//                             >
//                               {isVisible ? (
//                                 <ClipboardCheck />
//                               ) : (
//                                 <ClipboardCopy />
//                               )}
//                             </ButtonShadcnUi>
//                           </ContextMenuTrigger>
//                           <ContextMenuContent className="w-64">
//                             <ContextMenuItem inset>
//                               Back
//                               <ContextMenuShortcut>⌘[</ContextMenuShortcut>
//                             </ContextMenuItem>
//                             <ContextMenuItem inset disabled>
//                               Forward
//                               <ContextMenuShortcut>⌘]</ContextMenuShortcut>
//                             </ContextMenuItem>
//                             <ContextMenuItem inset>
//                               Reload
//                               <ContextMenuShortcut>⌘R</ContextMenuShortcut>
//                             </ContextMenuItem>
//                             <ContextMenuSub>
//                               <ContextMenuSubTrigger inset>
//                                 More Tools
//                               </ContextMenuSubTrigger>
//                               <ContextMenuSubContent className="w-48">
//                                 <ContextMenuItem>
//                                   Save Page As...
//                                   <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
//                                 </ContextMenuItem>
//                                 <ContextMenuItem>
//                                   Create Shortcut...
//                                 </ContextMenuItem>
//                                 <ContextMenuItem>
//                                   Name Window...
//                                 </ContextMenuItem>
//                                 <ContextMenuSeparator />
//                                 <ContextMenuItem>
//                                   Developer Tools
//                                 </ContextMenuItem>
//                               </ContextMenuSubContent>
//                             </ContextMenuSub>
//                             <ContextMenuSeparator />
//                             <ContextMenuCheckboxItem checked>
//                               Show Bookmarks Bar
//                               <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
//                             </ContextMenuCheckboxItem>
//                             <ContextMenuCheckboxItem>
//                               Show Full URLs
//                             </ContextMenuCheckboxItem>
//                             <ContextMenuSeparator />
//                             <ContextMenuRadioGroup value="pedro">
//                               <ContextMenuLabel inset>People</ContextMenuLabel>
//                               <ContextMenuSeparator />
//                               <ContextMenuRadioItem value="pedro">
//                                 Pedro Duarte
//                               </ContextMenuRadioItem>
//                               <ContextMenuRadioItem value="colm">
//                                 Colm Tuite
//                               </ContextMenuRadioItem>
//                             </ContextMenuRadioGroup>
//                           </ContextMenuContent>
//                         </ContextMenu>
//                       </CollapsibleContent>
//                     </Collapsible>
//                     <Collapsible
//                       open={isQRCodeOpen}
//                       onOpenChange={setIsQRCodeOpen}
//                       className="w-full space-y-2 mt-2"
//                     >
//                       <div className="flex items-center justify-between space-x-4 ">
//                         <h4 className="text-sm font-semibold">
//                           Configure QR Code
//                         </h4>
//                         <CollapsibleTrigger asChild>
//                           <ButtonShadcnUi
//                             variant="ghost"
//                             size="sm"
//                             className="w-9 p-0 border"
//                           >
//                             <ChevronsUpDown className="h-4 w-4" />
//                             <span className="sr-only">Toggle</span>
//                           </ButtonShadcnUi>
//                         </CollapsibleTrigger>
//                       </div>
//                       <Textarea placeholder="Type Your Prompt For QR Code." />

//                       <CollapsibleContent className="space-y-2">
//                         <Textarea placeholder="Type Your Negative Prompt For QR Code." />
//                         <div className="w-full flex items-center justify-between border rounded-xl text-sm">
//                           <form>
//                             <input
//                               type="file"
//                               style={{ display: "none" }}
//                               ref={fileInputRef}
//                               onChange={handleFileChange}
//                             />
//                             <ButtonShadcnUi
//                               variant="link"
//                               onClick={handleButtonShadcnUiClick}
//                               className="text-muted-foreground"
//                             >
//                               Use An Image To Generate QR Code
//                             </ButtonShadcnUi>
//                             {file && <p>Selected file: {file.name}</p>}
//                           </form>
//                         </div>
//                         <div className="qrCode-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
//                           <div className="qrCode-slider-content flex items-start justify-between flex-row w-full">
//                             <span className="qrCode-slider-title text-md hover:bg-[--code-highlighted] rounded-md">
//                               Seed
//                             </span>
//                             <div className="qrCode-slider-rate bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
//                               3.3
//                             </div>
//                           </div>
//                           <div className="qrCode-slider w-full">
//                             <Slider defaultValue={[33]} max={100} step={1} />
//                           </div>
//                         </div>
//                         <div className="qrCode-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
//                           <div className="qrCode-slider-content flex items-start justify-between flex-row w-full">
//                             <span className="qrCode-slider-title text-md hover:bg-[--code-highlighted] rounded-md">
//                               Strength
//                             </span>
//                             <div className="qrCode-slider-rate bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
//                               6.6
//                             </div>
//                           </div>
//                           <div className="qrCode-slider w-full">
//                             <Slider defaultValue={[66]} max={100} step={1} />
//                           </div>
//                         </div>
//                         <div className="qrCode-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
//                           <div className="qrCode-slider-content flex items-start justify-between flex-row w-full">
//                             <span className="qrCode-slider-title text-md hover:bg-[--code-highlighted] rounded-md">
//                               Guidence Scale
//                             </span>
//                             <div className="qrCode-slider-rate bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
//                               9.9
//                             </div>
//                           </div>
//                           <div className="qrCode-slider w-full">
//                             <Slider defaultValue={[99]} max={100} step={1} />
//                           </div>
//                         </div>

//                         <Card
//                           isFooterBlurred
//                           radius="lg"
//                           className="border-none min-h-[350px]"
//                         >
//                           <AspectRatio ratio={16 / 9}>
//                             <Image
//                               alt="Woman listing to music"
//                               className="object-cover"
//                               height={450}
//                               src="/qrcode.png"
//                               width={450}
//                             />
//                           </AspectRatio>

//                           <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-3 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
//                             <p className="text-tiny text-white/80">
//                               Support Developers At Huggingfacfe.
//                             </p>
//                             <Button
//                               className="text-tiny text-white bg-black/20"
//                               variant="flat"
//                               color="default"
//                               radius="lg"
//                               size="sm"
//                             >
//                               Regenerate
//                             </Button>
//                           </CardFooter>
//                         </Card>
//                       </CollapsibleContent>
//                     </Collapsible>
//                     <Collapsible
//                       open={isExtraSafetyOpen}
//                       onOpenChange={setIsExtraSafetyOpen}
//                       className="w-full space-y-2 mt-2"
//                     >
//                       <div className="flex items-center justify-between space-x-4 ">
//                         <h4 className="text-sm font-semibold">
//                           Configure Extra Safety
//                         </h4>
//                         <CollapsibleTrigger asChild>
//                           <ButtonShadcnUi
//                             variant="ghost"
//                             size="sm"
//                             className="w-9 p-0 border"
//                           >
//                             <ChevronsUpDown className="h-4 w-4" />
//                             <span className="sr-only">Toggle</span>
//                           </ButtonShadcnUi>
//                         </CollapsibleTrigger>
//                       </div>
//                       <form action="">
//                         <Input
//                           autoComplete="on"
//                           type="tel"
//                           placeholder="Type Your Authentication Code"
//                           variant="bordered"
//                           className="w-full mt-3"
//                         />
//                       </form>
//                       <CollapsibleContent className="space-y-2">
//                         <form>
//                           <Input
//                             autoComplete="on"
//                             value={emailAndPhoneNumbber}
//                             type="search"
//                             placeholder="Set A Recovary Email Or Phone Number"
//                             variant="bordered"
//                             color={
//                               validationEmailAndPhoneNumbberState === "invalid"
//                                 ? "danger"
//                                 : "success"
//                             }
//                             errorMessage={
//                               validationEmailAndPhoneNumbberState ===
//                                 "invalid" &&
//                               "Set A Recovary Email Or Phone Number Proccess Crashed"
//                             }
//                             validationState={
//                               validationEmailAndPhoneNumbberState
//                             }
//                             onValueChange={setEmailAndPhoneNumbber}
//                             className="w-full mt-3"
//                             isClearable
//                           />
//                           <ContextMenu>
//                             <ContextMenuTrigger className="relative flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm mt-3">
//                               <input
//                                 type="file"
//                                 style={{ display: "none" }}
//                                 ref={fileInputRef}
//                                 onChange={handleFileChange}
//                               />
//                               <ButtonShadcnUi
//                                 variant="link"
//                                 onClick={handleButtonShadcnUiClick}
//                                 className="text-muted-foreground"
//                               >
//                                 Choose Or Drop A Pic Of Yourself
//                               </ButtonShadcnUi>
//                               {file && <p>Selected file: {file.name}</p>}
//                             </ContextMenuTrigger>
//                             <ContextMenuContent className="w-64">
//                               <ContextMenuItem inset>
//                                 Back
//                                 <ContextMenuShortcut>⌘[</ContextMenuShortcut>
//                               </ContextMenuItem>
//                               <ContextMenuItem inset disabled>
//                                 Forward
//                                 <ContextMenuShortcut>⌘]</ContextMenuShortcut>
//                               </ContextMenuItem>
//                               <ContextMenuItem inset>
//                                 Reload
//                                 <ContextMenuShortcut>⌘R</ContextMenuShortcut>
//                               </ContextMenuItem>
//                               <ContextMenuSub>
//                                 <ContextMenuSubTrigger inset>
//                                   More Tools
//                                 </ContextMenuSubTrigger>
//                                 <ContextMenuSubContent className="w-48">
//                                   <ContextMenuItem>
//                                     Save Page As...
//                                     <ContextMenuShortcut>
//                                       ⇧⌘S
//                                     </ContextMenuShortcut>
//                                   </ContextMenuItem>
//                                   <ContextMenuItem>
//                                     Create Shortcut...
//                                   </ContextMenuItem>
//                                   <ContextMenuItem>
//                                     Name Window...
//                                   </ContextMenuItem>
//                                   <ContextMenuSeparator />
//                                   <ContextMenuItem>
//                                     Developer Tools
//                                   </ContextMenuItem>
//                                 </ContextMenuSubContent>
//                               </ContextMenuSub>
//                               <ContextMenuSeparator />
//                               <ContextMenuCheckboxItem checked>
//                                 Show Bookmarks Bar
//                                 <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
//                               </ContextMenuCheckboxItem>
//                               <ContextMenuCheckboxItem>
//                                 Show Full URLs
//                               </ContextMenuCheckboxItem>
//                               <ContextMenuSeparator />
//                               <ContextMenuRadioGroup value="pedro">
//                                 <ContextMenuLabel inset>
//                                   People
//                                 </ContextMenuLabel>
//                                 <ContextMenuSeparator />
//                                 <ContextMenuRadioItem value="pedro">
//                                   Pedro Duarte
//                                 </ContextMenuRadioItem>
//                                 <ContextMenuRadioItem value="colm">
//                                   Colm Tuite
//                                 </ContextMenuRadioItem>
//                               </ContextMenuRadioGroup>
//                             </ContextMenuContent>
//                           </ContextMenu>
//                         </form>
//                       </CollapsibleContent>
//                     </Collapsible>

//                     <div className="border h-[60px] rounded-xl w-full  flex justify-between items-center flex-row py-1.5 px-3 mt-7 ">
//                       {pendingContent ? (
//                         <div className="pending-content h-full w-full flex justify-start items-center flex-row flex-1 overflow-y-hidden overflow-x-auto space-x-2">
//                           <span className="bg-red-200 hover:bg-red-400 text-red-700 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
//                             Cleared
//                           </span>
//                         </div>
//                       ) : (
//                         <div className="pending-content h-full w-full flex justify-start items-center flex-row flex-1 overflow-y-hidden overflow-x-auto space-x-2">
//                           <span className="bg-red-200 hover:bg-red-400 text-red-700 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
//                             Friday
//                           </span>
//                           <span className="bg-red-200 hover:bg-red-400 text-red-700 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
//                             QR Code
//                           </span>
//                           <span className="bg-red-200 hover:bg-red-400 text-red-700 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
//                             Authenticator
//                           </span>
//                         </div>
//                       )}

//                       <ButtonShadcnUi
//                         onClick={() => setPendingContent(!pendingContent)}
//                         className="pending-clear border p-3 rounded-full"
//                         variant="outline"
//                       >
//                         <Icons.close className="h-4 w-4" />
//                       </ButtonShadcnUi>
//                     </div>
//                     <div className="hackIn-footer w-full mt-3 flex items-center justify-between">
//                       <ButtonShadcnUi
//                         className="rounded-full"
//                         onClick={() => setMarginLeft("-765px")}
//                       >
//                         Back
//                       </ButtonShadcnUi>
//                       <Button
//                         ref={buttonRef}
//                         disableRipple
//                         className="p-0 bg-[--code-foreground] max-w-[175px] relative border overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
//                         size="lg"
//                         onPress={handleConfetti}
//                       >
//                         Create Account
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </div>
//       ) : (
//         ""
//       )}
