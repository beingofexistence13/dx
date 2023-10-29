"use client"

import React, { useEffect, useState } from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { BrainCircuit } from "lucide-react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import * as z from "zod"

import { items } from "@/config/dev-mode"
import { socialMediaConfig } from "@/config/social-media"
import { cn } from "@/lib/utils"
import { updateDevMode } from "@/hooks/slices/devModeSlice"
import { updateHello } from "@/hooks/slices/helloToolSlice"
// import { toast } from "@/components/ui/use-toast"
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
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
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
interface TypewriterProps {
  text: string
  delay: number
}
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

export function DevMode() {
  const dispatch = useDispatch()
  const { toast } = useToast()
  const [DevMode, setDevMode] = React.useState(true)
  const [HelloTool, setHelloTool] = React.useState(true)
  const DevModeSelector = useSelector((state: any) => state.devMode.isDevMode)
  const HelloToolSelector = useSelector(
    (state: any) => state.helloTool.isHelloTool
  )

  // if (typeof window !== "undefined") {
  //   console.log("Allhamdhulilla")
  // }

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
    <Popover>
      <PopoverTrigger asChild>
        {/* <div className="devMode border-top fixed bottom-16 right-5 flex h-[50px] w-[50px] flex-row items-center justify-center overflow-hidden rounded-full p-2 xs:bottom-20 sm:bottom-3 z-[100000000000000000000] ">
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "flex h-[50px] w-[50px] items-center justify-center rounded-full p-0"
            )}
          >
            <Icons.devMode className="h-2 w-2" />
          </div>
        </div> */}
        <div
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "m-0 flex h-[30px] w-[30px] items-center justify-center rounded-lg p-0"
          )}
        >
          <Icons.devMode className="h-2 w-2" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="devMode-container flex h-[500px] w-full flex-col items-center justify-start overflow-hidden rounded-sm">
        <div className="tab-header flex h-auto w-[100%] items-center justify-start space-x-1.5 px-3 py-2">
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
          <div className="speaker flex h-[35px] w-[35px] items-center justify-center rounded-full border">
            <Icons.hackSetting className="h-4 w-4 fill-current" />
          </div>
          <div className="speaker flex h-[35px] w-[35px] items-center justify-center rounded-full border">
            <Icons.close className="h-4 w-4 fill-current" />
          </div>
        </div>

        <div className="devMode-header px-3 pt-3">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <div>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="dev_mode"
                    render={({ field }) => (
                      <FormItem className="flex min-w-full flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Dev Mode</FormLabel>
                          <FormDescription>
                            This is only for developers who are working on
                            components and want to develop them in a blank
                            page!!!
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            onClick={() => {
                              setDevMode(!DevMode)
                              dispatch(updateDevMode(DevMode))
                              toast({
                                title: `DevMode is switch to ${!DevModeSelector}`,
                                description:
                                  "You Can Now Make Your Components Without Any Disturbance",
                                action: (
                                  <ToastAction altText="Goto schedule to undo">
                                    Confirm
                                  </ToastAction>
                                ),
                              })
                            }}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="hello_tool"
                    render={({ field }) => (
                      <FormItem className="flex w-full flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Hello Tool</FormLabel>
                          <FormDescription>
                            Hangouts with loved ones Seamlessly and spend
                            momemts beyond Glass
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            onClick={() => {
                              setHelloTool(!HelloTool)
                              dispatch(updateHello(HelloTool))
                              toast({
                                title: `Hello Tool is  switch to ${HelloToolSelector}`,
                                description:
                                  "Enjoy Every Single Moments Of Your Existence",
                                action: (
                                  <ToastAction altText="Goto schedule to undo">
                                    Confirm
                                  </ToastAction>
                                ),
                              })
                            }}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </form>
          </Form>
        </div>
        <div className="horizantalDivider"></div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="devMode-content h-[425px] w-full space-y-0 overflow-y-auto overflow-x-hidden pb-3 pl-2 pr-0 pt-[10px]"
          >
            <FormField
              control={form.control}
              name="items"
              render={({ field }) => (
                <div className="space-y-1">
                  {items.map((item) => (
                    <FormItem
                      key={item.id}
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "flex h-[25px] flex-row items-center justify-start space-x-3 space-y-0 rounded-lg py-4 pl-2"
                      )}
                    >
                      <FormControl className="flex items-center justify-center">
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
                      <FormLabel className="flex items-center justify-center font-normal">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  ))}
                </div>
              )}
            />
            {/* <Button type="submit">Add to tasks</Button> */}
            {/* <NavigationMenuDemo /> */}
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  )
}
