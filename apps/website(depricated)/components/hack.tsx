/* eslint-disable tailwindcss/classnames-order */
"use client"

import { renderProviderText, notTranslation as useTranslations } from "../utils"
import { FileIcon, LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { DialogProps } from "@radix-ui/react-alert-dialog"
import React,{ useState,Suspense,useEffect } from "react"
import useAddToNetwork from "../hooks/useAddToNetwork"
import { zodResolver } from "@hookform/resolvers/zod"
import { generateChainData } from "../utils/fetch"
import PhoneInput from "react-phone-input-2"
import useAccount from "../hooks/useAccount"
import { Icons } from "@/components/icons"
import { docsConfig } from "@/config/docs"
import { useForm } from "react-hook-form"
import { useTheme } from "next-themes"
import { AdBanner } from "./ad-banner"
import { useChain } from "../stores"
import { format } from "date-fns"
import Script from "next/script"
import { cn } from "@/lib/utils"
import RPCList from "./rpc-list"
import Image from "next/image"
import Layout from "./layout"
import Link from "next/link"
import Chain from "./chain"
import {
  Button,
  Card,
  CardFooter,
  Image as ImageNext,
  Input,
} from "@nextui-org/react"
import {
  AsYouType,
  getCountryCallingCode,
  parsePhoneNumber,
} from "libphonenumber-js"
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
import { z } from "zod"
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
  CreditCard,
  Plus,
  QrCode,
  Settings,
  Settings2,
  Shield,
  Smile,
  User,
  X,
} from "lucide-react"

// Some Important Initionalizations
const Typewriter: React.FC<TypewriterProps> = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return (
    <div
      id="scroll-container"
      className="flex h-[30px] flex-1 items-center justify-start overflow-x-auto overflow-y-hidden whitespace-nowrap rounded-lg border px-3"
    >
      <p id="scroll-text" className="text-md">
        {currentText}
      </p>
    </div>
  )
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
        // window.alert(
        //   `Canvas loaded in ${performance.now() - startTime} milliseconds`
        // )
      }
    }
  }, [canvasRef])

  return isLoading ? (
    <div className="image-container glassmorphisum fixed left-0 top-0 min-h-screen w-[100%] rounded-lg border">
      <Image priority src="/night-shy.jpeg" fill alt="Sukuna" />
    </div>
  ) : null
}
const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  dev_mode: z.boolean(),
  hello_tool: z.boolean(),
})
interface TypewriterProps {
  text: string
  delay: number
}
export const items = [
  {
    label: "Shading",
    id: "shading",
  },
  {
    label: "Colorfull",
    id: "colorfull",
  },
  {
    label: "Paused",
    id: "paused",
  },
  {
    label: "Random Splates",
    id: "randomSplates",
  },
] as const
interface Props {
  canvasRef: React.RefObject<HTMLCanvasElement>
}
// Uhh.. Some Important Initionalizations End || Such a good and usefull comment :) || I know, I am genius tell me something I do't know
export default function Hack(this: any, { ...props }: DialogProps) {
  const searchParams = useSearchParams() // LOL just intertionally making this bigger and bigger and more bigger for style
  const [emailAndPhoneNumbber, setEmailAndPhoneNumbber] = useState("")
  const testnets = searchParams ? searchParams.get("testnets") : ""
  const [isExtraSafetyOpen, setIsExtraSafetyOpen] = useState(false)
  const testnet = searchParams ? searchParams.get("testnet") : ""
  const search = searchParams ? searchParams.get("search") : ""
  const [fluidSimulation, setFluidSimulation] = useState(false)
  const [pendingContent, setPendingContent] = useState(false)
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const toggleVisibility = () => setIsVisible(!isVisible)
  const [isFridayOpen, setIsFridayOpen] = useState(false)
  const [isQRCodeOpen, setIsQRCodeOpen] = useState(false)
  const [marginLeft, setMarginLeft] = useState("-00px")
  const [file, setFile] = useState<File | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [chains, setChains] = useState<Chain[]>([])
  const [sunrays, setSunrays] = useState(false)
  const [capture, setCapture] = useState(false)
  const [bloom, setBloom] = useState(false)
  const [number, setNumber] = useState("")
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const [phone, setPhone] = useState("")
  const { setTheme } = useTheme()
  const router = useRouter()
  // Definetly some important stuffs  but this to big to hava make a documentation about plus I definetly not get paid enough for this
  // ohh I forget I donot get paid anything not a single penny and that's why I am broke
  const includeTestnets = (typeof testnets === "string" && testnets === "true") || (typeof testnet === "string" && testnet === "true")
  const sortedChains = includeTestnets || typeof search !== "string" || search === ""  ? chains : chains.filter((item,index) => {
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
  const filteredChains = !search || typeof search !== "string" || search === "" ? sortedChains : sortedChains.filter((chain) => {
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
  const validateEmailPlus = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      setFile(files[0])
    }
  }
  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])
  const validationEmailAndPhoneNumbberState = React.useMemo(() => {
    if (emailAndPhoneNumbber === "") return undefined
    return validateEmailPlus(emailAndPhoneNumbber) ||
      validatePhoneNumberPlus(emailAndPhoneNumbber)
      ? "valid"
      : "invalid"
  }, [emailAndPhoneNumbber])
  const buttonRef = React.useRef<HTMLButtonElement | null>(null)
  const validationPhoneNumberState = React.useMemo(() => {
    if (number === "") return undefined
    return validatePhoneNumber(number) ? "valid" : "invalid"
  }, [number])
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
  const validatePhoneNumberPlus = (value: string) => {
    const regex = /^(\+\d{1,3}[- ]?)?\d{10}$/
    return regex.test(value)
  }
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
      dev_mode: false,
      hello_tool: true,
    },
  })
  const validatePhoneNumber = (value: string) => {
    const regex = /^(\+\d{1,3}[- ]?)?\d{10}$/
    return regex.test(value)
  }
  const validationState = React.useMemo(() => {
    if (value === "") return undefined
    return validateEmail(value) || validatePhoneNumber(value)
      ? "valid"
      : "invalid"
  }, [value])
  function logoLetter(title: string): string {
    let text = title
    let firstLetter = text.charAt(0).toUpperCase()
    let lastLetter = text.charAt(text.length - 1).toUpperCase()
    let result = firstLetter + lastLetter
    return result
  }
  const handleButtonShadcnUiClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }
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
  React.useEffect(() => {
    async function fetchData() {
      const sortedChains = await generateChainData()
      setChains(sortedChains)
    }
    fetchData()
  }, [])
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
  // If anyone else me seeing this code || not in billion years || but still anyone new seeing this code then my advice is just try to get a permanent job and make some grands so that you can fly those grands like MR. Beast or just fly those money for nothing and again be broke
  // And I am not telling this thing to me cause I donot think that I will ever get a chance to get some grands for my ultra good luck
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="nav-toggles flex h-[35px] w-[35px] items-center justify-center">
            <Icons.hack className="h-4 w-4 fill-current" />
          </div>
        </DialogTrigger>
        <DialogContent className="hack 2xs:px-1 xs:px-3 m-0 flex min-h-[100vh] min-w-[100%] items-center justify-center border-0">
          <CanvasLoader canvasRef={canvasRef} />
          <canvas className="fluid-simulation-container" ref={canvasRef} />
          <Script src="./fluid-simulation.js" />
          <Suspense fallback={<p>Loading Canvas...</p>}>
            <div className="hack-container glassmorphisum mx-auto flex h-auto w-[425px] max-w-[90%] flex-col items-center space-y-3 rounded-md  border py-5">
              <div className="tab-header flex h-auto w-[90%] items-center justify-start space-x-1.5 pr-[40px]">
                <div className="help flex h-[35px] w-[35px] items-center justify-center rounded-full border">
                  <BrainCircuit />
                </div>
                <div className="speaker flex h-[35px] w-[35px] items-center justify-center rounded-full border">
                  <Icons.speaker className="h-4 w-4 fill-current" />
                </div>

                <Typewriter
                  text="Tips: Are Easy And Makes Jobs More Faster"
                  delay={125}
                />
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="speaker flex h-[35px] w-[35px] items-center justify-center rounded-full border">
                      <Cog />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="fluid-simulation-container h-[500px] w-[360px] max-w-[90%] space-y-3 overflow-y-auto overflow-x-hidden rounded-lg border p-5">
                    <h1 className="bold text-md flex h-[50px] w-full items-start justify-center rounded-lg p-3 hover:animate-bounce hover:items-center hover:bg-[--code-foreground]">
                      Fluid Simulation Controller
                    </h1>
                    <div className="quality-container flex w-full items-start justify-between">
                      <span className="rounded-md p-2 text-sm hover:bg-[--code-foreground]">
                        Quality
                      </span>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select a Quality" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="medium">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="very-low">Very Low</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="simResolution-container flex w-full items-start justify-between">
                      <span className="rounded-md p-2 text-sm hover:bg-[--code-foreground]">
                        Sim Re..
                      </span>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue
                            className="w-[150px] text-ellipsis whitespace-nowrap text-sm placeholder:text-red-600"
                            placeholder="Select a Sim R.."
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="medium">32</SelectItem>
                            <SelectItem value="medium">64</SelectItem>
                            <SelectItem value="low">128</SelectItem>
                            <SelectItem value="very-low">258</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="fluild-simulation-slider-conatainer mt-3 flex h-auto w-full flex-col items-center justify-between space-y-2 rounded-lg border p-3">
                      <div className="fluild-simulation-slider-content flex w-full flex-row items-start justify-between">
                        <span className="fluild-simulation-slider-title rounded-md text-sm hover:bg-[--code-highlighted]">
                          Density Diffution
                        </span>
                        <div className="fluild-simulation-slider-rate rounded-xl bg-[--code-foreground] p-2.5 text-xs hover:bg-[--code-highlighted]">
                          2.0
                        </div>
                      </div>
                      <div className="fluild-simulation-slider w-full">
                        <Slider defaultValue={[2.0]} max={4} step={0.1} />
                      </div>
                    </div>
                    <div className="fluild-simulation-slider-conatainer mt-3 flex h-auto w-full flex-col items-center justify-between space-y-2 rounded-lg border p-3">
                      <div className="fluild-simulation-slider-content flex w-full flex-row items-start justify-between">
                        <span className="fluild-simulation-slider-title rounded-md text-sm hover:bg-[--code-highlighted]">
                          Velocity Diffution
                        </span>
                        <div className="fluild-simulation-slider-rate rounded-xl bg-[--code-foreground] p-2.5 text-xs hover:bg-[--code-highlighted]">
                          2.0
                        </div>
                      </div>
                      <div className="fluild-simulation-slider w-full">
                        <Slider defaultValue={[2.0]} max={4} step={0.1} />
                      </div>
                    </div>
                    <div className="fluild-simulation-slider-conatainer mt-3 flex h-auto w-full flex-col items-center justify-between space-y-2 rounded-lg border p-3">
                      <div className="fluild-simulation-slider-content flex w-full flex-row items-start justify-between">
                        <span className="fluild-simulation-slider-title rounded-md text-sm hover:bg-[--code-highlighted]">
                          Pressure
                        </span>
                        <div className="fluild-simulation-slider-rate rounded-xl bg-[--code-foreground] p-2.5 text-xs hover:bg-[--code-highlighted]">
                          2.0
                        </div>
                      </div>
                      <div className="fluild-simulation-slider w-full">
                        <Slider defaultValue={[2.0]} max={4} step={0.1} />
                      </div>
                    </div>
                    <div className="fluild-simulation-slider-conatainer mt-3 flex h-auto w-full flex-col items-center justify-between space-y-2 rounded-lg border p-3">
                      <div className="fluild-simulation-slider-content flex w-full flex-row items-start justify-between">
                        <span className="fluild-simulation-slider-title rounded-md text-sm hover:bg-[--code-highlighted]">
                          Velocity
                        </span>
                        <div className="fluild-simulation-slider-rate rounded-xl bg-[--code-foreground] p-2.5 text-xs hover:bg-[--code-highlighted]">
                          2.0
                        </div>
                      </div>
                      <div className="fluild-simulation-slider w-full">
                        <Slider defaultValue={[2.0]} max={4} step={0.1} />
                      </div>
                    </div>
                    <div className="fluild-simulation-slider-conatainer mt-3 flex h-auto w-full flex-col items-center justify-between space-y-2 rounded-lg border p-3">
                      <div className="fluild-simulation-slider-content flex w-full flex-row items-start justify-between">
                        <span className="fluild-simulation-slider-title rounded-md text-sm hover:bg-[--code-highlighted]">
                          Splat Radius
                        </span>
                        <div className="fluild-simulation-slider-rate rounded-xl bg-[--code-foreground] p-2.5 text-xs hover:bg-[--code-highlighted]">
                          2.0
                        </div>
                      </div>
                      <div className="fluild-simulation-slider w-full">
                        <Slider defaultValue={[2.0]} max={4} step={0.1} />
                      </div>
                    </div>

                    <Form {...form}>
                      <form className="h-auto w-full">
                        <FormField
                          control={form.control}
                          name="items"
                          render={({ field }) => (
                            <div className="space-y-3">
                              {items.map((item) => (
                                <FormItem
                                  key={item.id}
                                  className={cn(
                                    buttonVariants({
                                      variant: "ghost",
                                    }),
                                    "flex h-[50px] flex-row items-center justify-between rounded-lg border"
                                  )}
                                >
                                  <FormLabel className="flex items-center justify-center font-normal">
                                    {item.label}
                                  </FormLabel>
                                  <FormControl className="m-0 flex items-center justify-center p-0">
                                    <Checkbox
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                            ...field.value,
                                            item.id,
                                          ])
                                          : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.id
                                            )
                                          )
                                      }}
                                    />
                                  </FormControl>
                                </FormItem>
                              ))}
                            </div>
                          )}
                        />
                      </form>
                    </Form>

                    <Collapsible
                      open={bloom}
                      onOpenChange={setBloom}
                      className="w-full space-y-2"
                    >
                      <div className="flex items-center justify-between px-1">
                        <h4 className="text-sm font-semibold">Bloom</h4>
                        <CollapsibleTrigger asChild>
                          <ButtonShadcnUi
                            variant="ghost"
                            size="sm"
                            className="ronded-lg w-9 border p-0"
                          >
                            <ChevronsUpDown className="h-4 w-4" />
                            <span className="sr-only">Toggle</span>
                          </ButtonShadcnUi>
                        </CollapsibleTrigger>
                      </div>
                      <div className="flex items-center justify-between rounded-md border px-4 py-3 font-mono text-sm">
                        <h1>Enabled</h1>
                        <Checkbox id="bloom" />
                      </div>
                      <CollapsibleContent className="space-y-2">
                        <div className="fluild-simulation-slider-conatainer mt-3 flex h-auto w-full flex-col items-center justify-between space-y-2 rounded-lg border p-3">
                          <div className="fluild-simulation-slider-content flex w-full flex-row items-start justify-between">
                            <span className="fluild-simulation-slider-title rounded-md text-sm hover:bg-[--code-highlighted]">
                              Intensity
                            </span>
                            <div className="fluild-simulation-slider-rate rounded-xl bg-[--code-foreground] p-2.5 text-xs hover:bg-[--code-highlighted]">
                              2.0
                            </div>
                          </div>
                          <div className="fluild-simulation-slider w-full">
                            <Slider defaultValue={[2.0]} max={4} step={0.1} />
                          </div>
                        </div>
                        <div className="fluild-simulation-slider-conatainer mt-3 flex h-auto w-full flex-col items-center justify-between space-y-2 rounded-lg border p-3">
                          <div className="fluild-simulation-slider-content flex w-full flex-row items-start justify-between">
                            <span className="fluild-simulation-slider-title rounded-md text-sm hover:bg-[--code-highlighted]">
                              Theshold
                            </span>
                            <div className="fluild-simulation-slider-rate rounded-xl bg-[--code-foreground] p-2.5 text-xs hover:bg-[--code-highlighted]">
                              2.0
                            </div>
                          </div>
                          <div className="fluild-simulation-slider w-full">
                            <Slider defaultValue={[2.0]} max={4} step={0.1} />
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                    <Collapsible
                      open={sunrays}
                      onOpenChange={setSunrays}
                      className="w-full space-y-2"
                    >
                      <div className="flex items-center justify-between px-1">
                        <h4 className="text-sm font-semibold">Sunrays</h4>
                        <CollapsibleTrigger asChild>
                          <ButtonShadcnUi
                            variant="ghost"
                            size="sm"
                            className="ronded-lg w-9 border p-0"
                          >
                            <ChevronsUpDown className="h-4 w-4" />
                            <span className="sr-only">Toggle</span>
                          </ButtonShadcnUi>
                        </CollapsibleTrigger>
                      </div>
                      <div className="flex items-center justify-between rounded-md border px-4 py-3 font-mono text-sm">
                        <h1>Enabled</h1>
                        <Checkbox id="sunrays" />
                      </div>
                      <CollapsibleContent className="space-y-2">
                        <div className="fluild-simulation-slider-conatainer mt-3 flex h-auto w-full flex-col items-center justify-between space-y-2 rounded-lg border p-3">
                          <div className="fluild-simulation-slider-content flex w-full flex-row items-start justify-between">
                            <span className="fluild-simulation-slider-title rounded-md text-sm hover:bg-[--code-highlighted]">
                              Weight
                            </span>
                            <div className="fluild-simulation-slider-rate rounded-xl bg-[--code-foreground] p-2.5 text-xs hover:bg-[--code-highlighted]">
                              2.0
                            </div>
                          </div>
                          <div className="fluild-simulation-slider w-full">
                            <Slider defaultValue={[2.0]} max={4} step={0.1} />
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                    <Collapsible
                      open={capture}
                      onOpenChange={setCapture}
                      className="w-full space-y-2"
                    >
                      <div className="flex items-center justify-between px-1">
                        <h4 className="text-sm font-semibold">Capture</h4>
                        <CollapsibleTrigger asChild>
                          <ButtonShadcnUi
                            variant="ghost"
                            size="sm"
                            className="ronded-lg w-9  border p-0"
                          >
                            <ChevronsUpDown className="h-4 w-4" />
                            <span className="sr-only">Toggle</span>
                          </ButtonShadcnUi>
                        </CollapsibleTrigger>
                      </div>
                      <div className="flex items-center justify-between rounded-md border px-4 py-3 font-mono text-sm">
                        <h1>Transparent</h1>
                        <Checkbox id="capture" />
                      </div>

                      <CollapsibleContent className="space-y-2">
                        <div className="flex items-center justify-between rounded-md border px-4 py-3 font-mono text-sm">
                          <h1>Background Color</h1>
                          <h1>(coming soon)</h1>
                        </div>
                        <div className="rounded-md border px-4 py-3 font-mono text-sm">
                          Take A Screenshot
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </PopoverContent>
                </Popover>
              </div>
              <Tabs
                defaultValue="hackIn"
                className="hackTabs h-[400px] w-[100%] space-y-3 overflow-y-auto overflow-x-hidden lg:h-[500px]"
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
                  <div className="flex h-auto w-full flex-col items-center justify-start">
                    {/* Email and Password */}
                    <form className="email-and-password w-full">
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
                        className="mt-3 w-full"
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
                              <Icons.eyeOpen className="text-default-400 pointer-events-none text-2xl" />
                            ) : (
                              <Icons.eyeClose className="text-default-400 pointer-events-none text-2xl" />
                            )}
                          </button>
                        }
                        type={isVisible ? "text" : "password"}
                        className="mt-3 w-full"
                      />
                    </form>
                    {/* Divider */}
                    <div className="divider item-center mt-1 flex w-full flex-row justify-center space-x-3">
                      <div className="left-divider my-auto h-[2.5px]  w-full flex-1 rounded-lg bg-[--code-foreground]"></div>
                      <span className="divider-title">or</span>
                      <div className="right-divider my-auto h-[2.5px]  w-full flex-1 rounded-lg bg-[--code-foreground]"></div>
                    </div>
                    {/* HackIn Search */}
                    <Command className="glassmorphisum rounded-lg border shadow-md">
                      <CommandInput placeholder="Type a command or search..." />
                      <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Social Medias">
                          {docsConfig.passport
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
                      </CommandList>
                    </Command>
                    {/* Social Media */}
                    <div className="hackIn-connect-container mt-1 flex h-[110px] w-full flex-wrap items-center justify-between overflow-y-auto overflow-x-hidden rounded-lg border p-2">
                      {docsConfig.passport.map((item, index) => (
                        <div
                          key={index}
                          className="m-1 flex h-[40px] w-[40px] items-center justify-center rounded-lg border text-center text-[12.5px]"
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
                    <div className="hackIn-connect-container mt-1.5 flex h-[110px] w-full flex-wrap items-center justify-between overflow-y-auto overflow-x-hidden rounded-lg border p-2">
                      {docsConfig.wallet.map((item, index) => (
                        <div
                          key={index}
                          className="m-1 flex h-[40px] w-[40px] items-center justify-center rounded-lg border text-center text-[12.5px]"
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
                    <div className="divider item-center mt-1 flex w-full flex-row justify-center space-x-3">
                      <div className="left-divider my-auto h-[2.5px]  w-full flex-1 rounded-lg bg-[--code-foreground]"></div>
                      <span className="divider-title">or</span>
                      <div className="right-divider my-auto h-[2.5px]  w-full flex-1 rounded-lg bg-[--code-foreground]"></div>
                    </div>
                    {/* Friday Factor */}
                    <div className="friday-factor grid min-h-max w-full grid-cols-2 gap-2">
                      <div className="friday glassmorphisum hoverGlassmorphisum flex h-[50px] w-full items-center justify-center rounded-lg">
                        Friday
                      </div>
                      <div className="qr-code glassmorphisum hoverGlassmorphisum flex h-[50px] w-full items-center justify-center rounded-lg">
                        QR Code
                      </div>
                      <div className="authenticator glassmorphisum hoverGlassmorphisum flex h-[50px] w-full items-center justify-center rounded-lg">
                        Authenticator
                      </div>
                      <div className="face glassmorphisum hoverGlassmorphisum flex h-[50px] w-full items-center justify-center rounded-lg">
                        Face
                      </div>
                    </div>
                    {/* Footer */}
                    <div className="hackIn-footer mt-3 flex w-full items-center justify-between">
                      <Button
                        ref={buttonRef}
                        disableRipple
                        className="after:bg-background/40 relative max-w-[175px] overflow-visible rounded-full border bg-[--code-foreground] p-0 px-12 shadow-xl after:absolute after:inset-0 after:z-[-1] after:rounded-full after:transition after:!duration-500 after:content-[''] hover:-translate-y-1 hover:after:scale-150 hover:after:opacity-0"
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
                  <div className="flex h-auto w-full flex-row items-start justify-start overflow-hidden">
                    {/* Personal Details */}
                    <form
                      style={{ marginLeft: `${marginLeft}` }}
                      onSubmit={form.handleSubmit(onSubmit)}
                      className={`web2 flex h-auto min-w-full flex-col items-center justify-start rounded-sm`}
                    >
                      <div className="flex w-full items-center justify-between rounded-xl border text-sm">
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
                        className="mt-3 w-full"
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
                        className="mt-3 w-full"
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
                              <Icons.eyeOpen className="text-default-400 pointer-events-none text-2xl" />
                            ) : (
                              <Icons.eyeClose className="text-default-400 pointer-events-none text-2xl" />
                            )}
                          </button>
                        }
                        type={isVisible ? "text" : "password"}
                        className="mt-3 w-full"
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
                              <Icons.eyeOpen className="text-default-400 pointer-events-none text-2xl" />
                            ) : (
                              <Icons.eyeClose className="text-default-400 pointer-events-none text-2xl" />
                            )}
                          </button>
                        }
                        type={isVisible ? "text" : "password"}
                        className="mt-3 w-full"
                      />
                      <Form {...form}>
                        <div className="glassmorphisum mt-3 w-full">
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
                                    className="z-[10000000000000000000000000000000] w-auto p-0"
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
                        className="glassmorphisum border-input bg-background ring-offset-background placeholder:text-muted-foreground mt-3 flex h-24 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none"
                        defaultValue={""}
                      />

                      <div className="mt-7 flex h-[60px] w-full flex-row items-center justify-start space-x-2 overflow-x-auto overflow-y-hidden rounded-xl border px-3 py-1.5">
                        <span className="border-3 flex min-w-max items-center justify-center rounded-full border-red-500 bg-red-200 px-2 py-1 text-sm text-red-600">
                          Avatar
                        </span>
                        <span className="border-3 flex min-w-max items-center justify-center rounded-full border-red-500 bg-red-200 px-2 py-1 text-sm text-red-600">
                          Name
                        </span>
                        <span className="border-3 flex min-w-max items-center justify-center rounded-full border-red-500 bg-red-200 px-2 py-1 text-sm text-red-600">
                          Email
                        </span>
                        <span className="border-3 flex min-w-max items-center justify-center rounded-full border-red-500 bg-red-200 px-2 py-1 text-sm text-red-600">
                          Phone Number
                        </span>
                        <span className="border-3 flex min-w-max items-center justify-center rounded-full border-red-500 bg-red-200 px-2 py-1 text-sm text-red-600">
                          Password
                        </span>
                      </div>

                      <div className="hackIn-footer mt-3 flex w-full items-center justify-between">
                        <Button
                          ref={buttonRef}
                          disableRipple
                          className="after:bg-background/40 relative max-w-[175px] overflow-visible rounded-full border bg-[--code-foreground] p-0 px-12 shadow-xl after:absolute after:inset-0 after:z-[-1] after:rounded-full after:transition after:!duration-500 after:content-[''] hover:-translate-y-1 hover:after:scale-150 hover:after:opacity-0"
                          size="lg"
                          onPress={handleConfetti}
                        >
                          Continue as Guest
                        </Button>
                        <ButtonShadcnUi
                          onClick={() => setMarginLeft("-100%")}
                          variant="outline"
                          className="rounded-full"
                        >
                          Next
                        </ButtonShadcnUi>
                      </div>
                    </form>
                    {/* Connect */}
                    <div className="connect flex h-auto min-w-full flex-col items-start justify-center">
                      <Command className="glassmorphisum h-[175px] w-full rounded-lg border shadow-md">
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

                      <div className="mx-auto h-[450px] w-full overflow-auto">
                        <div className="hackIn-connect-container mt-1.5 flex h-[60px] w-full flex-row items-center justify-start overflow-hidden rounded-md border">
                          {docsConfig.passport.map((item, index) => (
                            <div
                              key={index}
                              className="m-1 flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg border text-center text-[12.5px]"
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

                        <div className="hackIn-connect-container mt-1.5 flex h-[60px] w-full flex-row items-center justify-start overflow-x-auto overflow-y-hidden rounded-md border">
                          {docsConfig.wallet.map((item, index) => (
                            <div
                              key={index}
                              className="m-1 flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg border text-center text-[12.5px]"
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

                        <div className="divider item-center mt-1 flex w-full flex-row justify-center space-x-3">
                          <div className="left-divider my-auto h-[2.5px]  w-full flex-1 rounded-lg bg-[--code-foreground]"></div>
                          <span className="divider-title">
                            wallets according chains
                          </span>
                          <div className="right-divider my-auto h-[2.5px]  w-full flex-1 rounded-lg bg-[--code-foreground]"></div>
                        </div>

                        <div className="flex h-[250px] w-[100%] flex-row items-center justify-start space-x-3 overflow-x-auto overflow-y-hidden rounded-md text-black dark:text-[#B3B3B3]">
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

                      <div className="mt-7 flex h-[60px] w-full  flex-row items-center justify-between rounded-xl border px-3 py-1.5 ">
                        {pendingContent ? (
                          <div className="pending-content flex h-full w-full flex-1 flex-row items-center justify-start space-x-2 overflow-x-auto overflow-y-hidden">
                            <span className="border-3 flex min-w-max items-center justify-center rounded-full border-red-500 bg-red-200 px-2 py-1 text-sm text-red-700 hover:bg-red-400">
                              Cleared
                            </span>
                          </div>
                        ) : (
                          <div className="pending-content flex h-full w-full flex-1 flex-row items-center justify-start space-x-2 overflow-x-auto overflow-y-hidden">
                            <span className="border-3 flex min-w-max items-center justify-center rounded-full border-red-500 bg-red-200 px-2 py-1 text-sm text-red-700 hover:bg-red-400">
                              Social Media
                            </span>
                            <span className="border-3 flex min-w-max items-center justify-center rounded-full border-red-500 bg-red-200 px-2 py-1 text-sm text-red-700 hover:bg-red-400">
                              Wallet
                            </span>
                          </div>
                        )}

                        <ButtonShadcnUi
                          onClick={() => setPendingContent(!pendingContent)}
                          className="pending-clear rounded-full border p-3"
                          variant="outline"
                        >
                          <Icons.close className="h-4 w-4" />
                        </ButtonShadcnUi>
                      </div>

                      <div className="hackIn-footer mt-3 flex w-full items-center justify-between">
                        <ButtonShadcnUi onClick={() => setMarginLeft("-00px")}>
                          Back
                        </ButtonShadcnUi>
                        <ButtonShadcnUi
                          className="rounded-full"
                          onClick={() => setMarginLeft("-200%")}
                          variant="outline"
                        >
                          Next
                        </ButtonShadcnUi>
                      </div>
                    </div>
                    {/* Friday Factor */}
                    <div className="friday-factor flex h-auto min-w-full flex-col items-start justify-center">
                      <Collapsible
                        open={isFridayOpen}
                        onOpenChange={setIsFridayOpen}
                        className="w-full space-y-2"
                      >
                        <div className="flex items-center justify-between space-x-4 px-1">
                          <h4 className="text-md flex flex-row items-center justify-center font-semibold">
                            <Bot className="mr-2" />
                            Configure Friday
                          </h4>
                          <CollapsibleTrigger asChild>
                            <ButtonShadcnUi
                              variant="ghost"
                              size="sm"
                              className="w-9 border p-0"
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
                            className="mt-3 w-full"
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
                              className="mt-3 w-full"
                            />
                          </form>

                          <ContextMenu>
                            <ContextMenuTrigger className="relative flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                              <span className="text-md p-5 text-center">
                                Your Friday Recovary Code will Appear Here When
                                You Will Create A New Assistence. You Might Need
                                To Save This Recovary Code, In A Safe Place
                              </span>

                              <ButtonShadcnUi
                                onClick={toggleVisibility}
                                className="pending-clear absolute right-1 top-1 rounded-full border p-3"
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
                        className="mt-2 w-full space-y-2"
                      >
                        <div className="flex items-center justify-between space-x-4 ">
                          <h4 className="text-md flex flex-row items-center justify-center font-semibold">
                            <QrCode className="mr-2" />
                            Configure QR Code
                          </h4>
                          <CollapsibleTrigger asChild>
                            <ButtonShadcnUi
                              variant="ghost"
                              size="sm"
                              className="w-9 border p-0"
                            >
                              <ChevronsUpDown className="h-4 w-4" />
                              <span className="sr-only">Toggle</span>
                            </ButtonShadcnUi>
                          </CollapsibleTrigger>
                        </div>
                        <Textarea placeholder="Type Your Prompt For QR Code." />

                        <CollapsibleContent className="space-y-2">
                          <Textarea placeholder="Type Your Negative Prompt For QR Code." />
                          <div className="flex w-full items-center justify-between rounded-xl border text-sm">
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
                          <div className="qrCode-slider-conatainer mt-3 flex h-auto w-full flex-col items-center justify-between space-y-2 rounded-lg border p-3">
                            <div className="qrCode-slider-content flex w-full flex-row items-start justify-between">
                              <span className="qrCode-slider-title text-md rounded-md hover:bg-[--code-highlighted]">
                                Seed
                              </span>
                              <div className="qrCode-slider-rate rounded-xl bg-[--code-foreground] p-2.5 text-xs hover:bg-[--code-highlighted]">
                                3.3
                              </div>
                            </div>
                            <div className="qrCode-slider w-full">
                              <Slider defaultValue={[33]} max={100} step={1} />
                            </div>
                          </div>
                          <div className="qrCode-slider-conatainer mt-3 flex h-auto w-full flex-col items-center justify-between space-y-2 rounded-lg border p-3">
                            <div className="qrCode-slider-content flex w-full flex-row items-start justify-between">
                              <span className="qrCode-slider-title text-md rounded-md hover:bg-[--code-highlighted]">
                                Strength
                              </span>
                              <div className="qrCode-slider-rate rounded-xl bg-[--code-foreground] p-2.5 text-xs hover:bg-[--code-highlighted]">
                                6.6
                              </div>
                            </div>
                            <div className="qrCode-slider w-full">
                              <Slider defaultValue={[66]} max={100} step={1} />
                            </div>
                          </div>
                          <div className="qrCode-slider-conatainer mt-3 flex h-auto w-full flex-col items-center justify-between space-y-2 rounded-lg border p-3">
                            <div className="qrCode-slider-content flex w-full flex-row items-start justify-between">
                              <span className="qrCode-slider-title text-md rounded-md hover:bg-[--code-highlighted]">
                                Guidence Scale
                              </span>
                              <div className="qrCode-slider-rate rounded-xl bg-[--code-foreground] p-2.5 text-xs hover:bg-[--code-highlighted]">
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
                            className="min-h-[350px] border-none"
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

                            <CardFooter className="rounded-large border-1 shadow-small absolute bottom-3 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden border-white/20 py-1 before:rounded-xl before:bg-white/10">
                              <p className="text-tiny text-white/80">
                                Support Developers At Huggingfacfe.
                              </p>
                              <Button
                                className="text-tiny bg-black/20 text-white"
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
                        className="mt-2 w-full space-y-2"
                      >
                        <div className="flex items-center justify-between space-x-4 ">
                          <h4 className="flex flex-row items-center justify-center text-sm font-semibold">
                            <Shield className="mr-2" />
                            Configure Extra Safety
                          </h4>
                          <CollapsibleTrigger asChild>
                            <ButtonShadcnUi
                              variant="ghost"
                              size="sm"
                              className="w-9 border p-0"
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
                            className="mt-3 w-full"
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
                              className="mt-3 w-full"
                              isClearable
                            />
                            <ContextMenu>
                              <ContextMenuTrigger className="relative mt-3 flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
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

                      <div className="mt-7 flex h-[60px] w-full  flex-row items-center justify-between rounded-xl border px-3 py-1.5 ">
                        {pendingContent ? (
                          <div className="pending-content flex h-full w-full flex-1 flex-row items-center justify-start space-x-2 overflow-x-auto overflow-y-hidden">
                            <span className="border-3 flex min-w-max items-center justify-center rounded-full border-red-500 bg-red-200 px-2 py-1 text-sm text-red-700 hover:bg-red-400">
                              Cleared
                            </span>
                          </div>
                        ) : (
                          <div className="pending-content flex h-full w-full flex-1 flex-row items-center justify-start space-x-2 overflow-x-auto overflow-y-hidden">
                            <span className="border-3 flex min-w-max items-center justify-center rounded-full border-red-500 bg-red-200 px-2 py-1 text-sm text-red-700 hover:bg-red-400">
                              Friday
                            </span>
                            <span className="border-3 flex min-w-max items-center justify-center rounded-full border-red-500 bg-red-200 px-2 py-1 text-sm text-red-700 hover:bg-red-400">
                              QR Code
                            </span>
                            <span className="border-3 flex min-w-max items-center justify-center rounded-full border-red-500 bg-red-200 px-2 py-1 text-sm text-red-700 hover:bg-red-400">
                              Authenticator
                            </span>
                          </div>
                        )}

                        <ButtonShadcnUi
                          onClick={() => setPendingContent(!pendingContent)}
                          className="pending-clear rounded-full border p-3"
                          variant="outline"
                        >
                          <Icons.close className="h-4 w-4" />
                        </ButtonShadcnUi>
                      </div>
                      <div className="hackIn-footer mt-3 flex w-full items-center justify-between">
                        <ButtonShadcnUi
                          className="rounded-full"
                          onClick={() => setMarginLeft("-100%")}
                        >
                          Back
                        </ButtonShadcnUi>
                        <Button
                          ref={buttonRef}
                          disableRipple
                          className="after:bg-background/40 relative max-w-[175px] overflow-visible rounded-full border bg-[--code-foreground] p-0 px-12 shadow-xl after:absolute after:inset-0 after:z-[-1] after:rounded-full after:transition after:!duration-500 after:content-[''] hover:-translate-y-1 hover:after:scale-150 hover:after:opacity-0"
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
