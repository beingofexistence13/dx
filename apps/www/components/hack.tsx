"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Script from "next/script"
import { Input } from "@nextui-org/react"
import { DialogProps } from "@radix-ui/react-alert-dialog"
import { FileIcon, LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"
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
  const [file, setFile] = React.useState<File | null>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      setFile(files[0])
    }
  }
  const handleButtonClick = () => {
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
  }, [])

  // ChainList
  interface Chain {
    chain: any
    chainId: any
    nativeCurrency: any
    chainSlug:any
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

  // Chainlist Search
  // const t = useTranslations("Common", "en");
  // const pathname = usePathname()
  // const icon = React.useMemo(() => {
  //   return chains.chainSlug ? `https://icons.llamao.fi/icons/chains/rsz_${chains.chainSlug}.jpg` : "/unknown-logo.png";
  // }, [chains]);
  // const chainId = useChain((state) => state.id);
  // const updateChain = useChain((state) => state.updateChain);
  // const handleClick = () => {
  //   if (chains.chainId === chainId) {
  //     updateChain(null);
  //   } else {
  //     updateChain(chains.chainId);
  //   }
  // };
  // const showAddlInfo = chains.chainId === chainId;
  // const { data: accountData } = useAccount();
  // const address = accountData?.address ?? null;
  // const { mutate: addToNetwork } = useAddToNetwork();
  // if (!chains) {
  //   return <></>;
  // }

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
                {/* Email and Password */}
                <form
                  className="
                email-and-password"
                >
                  <Input
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
                  <div className="left-divider flex-1 h-[1px] bg-[--code] w-full my-auto"></div>
                  <span className="divider-title">or</span>
                  <div className="right-divider flex-1 h-[1px] bg-[--code] w-full my-auto"></div>
                </div>
                {/* HackIn Search */}
                <Command className="rounded-lg border shadow-md">
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
                  <div className="left-divider flex-1 h-[1px] bg-[--code] w-full my-auto"></div>
                  <span className="divider-title">or</span>
                  <div className="right-divider flex-1 h-[1px] bg-[--code] w-full my-auto"></div>
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
                  <Button>Continue as Guest</Button>
                  <Button variant="outline">Confrom</Button>
                </div>
              </TabsContent>
              <TabsContent value="hackUp">
                <div className="h-auto w-full overflow-y-hidden overflow-x-auto flex justify-start items-center flex-row">
                  {/* <form className="h-auto web2 min-w-full rounded-sm flex justify-start items-center flex-col">
                    <div className="w-full flex items-center justify-between border rounded-xl text-sm">
                      <input
                        type="file"
                        style={{ display: "none" }}
                        ref={fileInputRef}
                        onChange={handleFileChange}
                      />
                      <Button
                        variant="link"
                        onClick={handleButtonClick}
                        className="text-muted-foreground"
                      >
                        Choose Your Avatar
                      </Button>
                      {file && <p>Selected file: {file.name}</p>}
                    </div>
                    <Input
                      type="search"
                      placeholder="Enter Your Name"
                      variant="bordered"
                      className="w-full mt-3"
                      isClearable
                    />
                    <Input
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
                    <Input
                      value={number}
                      type="tel"
                      placeholder="Enter Your Phone Number"
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

                    <textarea
                      placeholder="Enter Your Bio"
                      rows={4}
                      className="flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none mt-3"
                      defaultValue={""}
                    />
                    <textarea
                      placeholder="Drop A Note For Your Profile Viewer"
                      rows={4}
                      className="flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none mt-3"
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
                      <Button>Continue as Guest</Button>
                      <Button variant="outline">Next</Button>
                    </div>
                  </form> */}

                  <div className="connect h-[675px] min-w-full flex justify-start items-center flex-col">
                    <Command className="rounded-lg border shadow-md h-[175px] w-full">
                      <CommandInput placeholder="Wallets,Medias,Chains..." />
                      <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Chains">
                          {filteredChains.map((chain) => (
                            <CommandItem
                              key={chain.chainId}
                              value={chain.chainId}
                              onSelect={() => {
                                runCommand(() =>
                                  router.push(`/chain/${chain.chainId}`)
                                )
                              }}
                            >
                              <Avatar className="h-[27px] w-[27px] rounded-sm">
                                <AvatarImage src={chain.chainSlug ? `https://icons.llamao.fi/icons/chains/rsz_${chain.chainSlug}.jpg` : "/unknown-logo.png"} alt="Dx" />
                                <AvatarFallback className="glassmorphisum border-none">
                                  {chain.name ? logoLetter(chain.name) : "Dx"}
                                </AvatarFallback>
                              </Avatar>
                              <span className="ml-3">{chain.name}</span>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                        <CommandGroup heading="Social Medias">
                          {docsConfig.passport.map((navItem) => (
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
                    <div className="max-h-[375px] w-full mx-auto overflow-y-auto overflow-x-hidden">
                      <div className="hackIn-connect-container h-[60px] w-full overflow-y-hidden overflow-x-auto flex justify-start items-center flex-row border rounded-md mt-1.5">
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
                        <div className="left-divider flex-1 h-[1px] bg-[--code] w-full my-auto"></div>
                        <span className="divider-title">
                          wallets according chians
                        </span>
                        <div className="right-divider flex-1 h-[1px] bg-[--code] w-full my-auto"></div>
                      </div>

                      <div className="dark:text-[#B3B3B3] text-black grid gap-1 grid-cols-1 place-content-between p-1 isolate grid-flow-dense">
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

                    <div className="border h-[60px] rounded-xl w-full overflow-y-hidden overflow-x-auto flex justify-start items-center flex-row py-1.5 px-3 mt-7 space-x-2">
                      <span className="bg-red-200 hover:bg-red-400 text-red-700 border-red-500 text-sm rounded-full flex items-center justify-center px-2 py-1 min-w-max border-3">
                        Avatar
                      </span>
                    </div>
                    <div className="hackIn-footer w-full mt-3 flex items-center justify-between">
                      <Button>Back</Button>
                      <Button variant="outline">Next</Button>
                    </div>
                  </div>
                  {/* Friday Factor */}
                  {/* <div className="friday-factor h-[300px] min-w-full rounded-sm flex justify-center items-center bg-pink-600">
                    Friday Factor
                  </div> */}
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
