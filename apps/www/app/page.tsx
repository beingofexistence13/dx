"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import * as z from "zod"

// import { items } from "@/config/dev-mode"
import { socialMediaConfig } from "@/config/social-media"
import { cn } from "@/lib/utils"
import { updateDevMode } from "@/hooks/slices/devModeSlice"
import { updateHello } from "@/hooks/slices/helloToolSlice"
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

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  dev_mode: z.boolean(),
  hello_tool: z.boolean(),
})
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
export default function Home() {
  const [bloom, setBloom] = React.useState(false)
  const [sunrays, setSunrays] = React.useState(false)
  const [capture, setCapture] = React.useState(false)
  const dispatch = useDispatch()
  const { toast } = useToast()
  const [DevMode, setDevMode] = React.useState(true)
  const [HelloTool, setHelloTool] = React.useState(true)
  const DevModeSelector = useSelector((state: any) => state.devMode.isDevMode)
  const HelloToolSelector = useSelector(
    (state: any) => state.helloTool.isHelloTool
  )

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
      dev_mode: false,
      hello_tool: true,
    },
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

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* <div className="fluid-simulation-container w-[360px] max-w-[90%] h-[500px] overflow-y-auto overflow-x-hidden border rounded-lg p-5 space-y-3">
        <h1 className="w-full h-[50px] p-3 flex items-start justify-center hover:items-center hover:bg-[--code-foreground] bold text-md rounded-lg hover:animate-bounce">
          Fluid Simulation Controller
        </h1>
        <div className="quality-container flex items-start justify-between w-full">
          <span className="text-sm rounded-md hover:bg-[--code-foreground] p-2">
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
        <div className="simResolution-container flex items-start justify-between w-full">
          <span className="text-sm rounded-md hover:bg-[--code-foreground] p-2">
            Sim Re..
          </span>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue
                className="whitespace-nowrap w-[150px] text-sm text-ellipsis placeholder:text-red-600"
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

        <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
          <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
            <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
              Density Diffution
            </span>
            <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
              2.0
            </div>
          </div>
          <div className="fluild-simulation-slider w-full">
            <Slider defaultValue={[2.0]} max={4} step={0.1} />
          </div>
        </div>
        <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
          <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
            <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
              Velocity Diffution
            </span>
            <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
              2.0
            </div>
          </div>
          <div className="fluild-simulation-slider w-full">
            <Slider defaultValue={[2.0]} max={4} step={0.1} />
          </div>
        </div>
        <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
          <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
            <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
              Pressure
            </span>
            <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
              2.0
            </div>
          </div>
          <div className="fluild-simulation-slider w-full">
            <Slider defaultValue={[2.0]} max={4} step={0.1} />
          </div>
        </div>
        <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
          <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
            <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
              Velocity
            </span>
            <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
              2.0
            </div>
          </div>
          <div className="fluild-simulation-slider w-full">
            <Slider defaultValue={[2.0]} max={4} step={0.1} />
          </div>
        </div>
        <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
          <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
            <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
              Splat Radius
            </span>
            <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
              2.0
            </div>
          </div>
          <div className="fluild-simulation-slider w-full">
            <Slider defaultValue={[2.0]} max={4} step={0.1} />
          </div>
        </div>

        <Form {...form}>
          <form
            className="h-auto w-full"
          >
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
                      <FormControl className="flex items-center justify-center m-0 p-0">
                        <Checkbox
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.id])
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
                className="w-9 p-0 border ronded-lg"
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
            <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
              <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
                <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
                  Intensity
                </span>
                <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
                  2.0
                </div>
              </div>
              <div className="fluild-simulation-slider w-full">
                <Slider defaultValue={[2.0]} max={4} step={0.1} />
              </div>
            </div>
            <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
              <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
                <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
                  Theshold
                </span>
                <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
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
                className="w-9 p-0 border ronded-lg"
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
            <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
              <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
                <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
                  Weight
                </span>
                <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
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
                className="w-9 p-0  border ronded-lg"
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
      </div> */}
    </section>
  )
}
