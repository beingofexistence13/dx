"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, Button, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertTitle, AspectRatio, Avatar, AvatarFallback, AvatarImage, Badge, Calendar, CardContent, CardDescription, CardTitle, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, HoverCard, HoverCardContent, HoverCardTrigger, InputShadcnUi, Label, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, Popover, PopoverContent, PopoverTrigger, Progress, RadioGroup, RadioGroupItem, ScrollArea, ScrollBar, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Skeleton, Slider, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, Toaster, Toggle, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, navigationMenuTriggerStyle, toast, toggleVariants, useFormField, useToast, type ToastActionElement, type ToastProps } from "@/components/ui"
import { motion } from "framer-motion";
import * as React from "react"
import { Check, ChevronsUpDown, ChevronRight } from "lucide-react"
// import { Image } from "@nextui-org/react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import ReactPlayer from 'react-player';

const frameworks = [
    {
        value: "android",
        label: "Android",
    },
    {
        value: "ar",
        label: "Ar",
    },
    {
        value: "cli",
        label: "Cli",
    },
    {
        value: "ios",
        label: "Ios",
    },
    {
        value: "linux",
        label: "Linux",
    },
    {
        value: "mac",
        label: "Mac",
    },
    {
        value: "more665",
        label: "More665",
    },
    {
        value: "robot",
        label: "Robot",
    },
    {
        value: "vr",
        label: "Vr",
    },
    {
        value: "window",
        label: "Window",
    },
]

const Info = () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <section className="info h-[150vh] w-full max-w-[100%] overflow-x-hidden overflow-y-auto relative">

            <motion.div drag
                dragElastic={0.2} className="blurry_gradient_top h-[550px] w-[550px] rounded-full absolute top-10 left-0 z-[0]">
            </motion.div>
            <motion.div drag
                dragElastic={0.2} className="blurry_gradient_bottom h-[550px] w-[550px] rounded-full absolute bottom-[50vh] right-0 z-[0]">
            </motion.div>


            <div className="info_main_container max-w-[1200px] mx-auto flex flex-col items-center justify-center mt-40 relative z-10">
                {/* FeatureShotcjut Rounded Border -  h-12 w-[250px] rounded-full flex flex-row items-center justify-center */}
                <div className="glass feature_shotcut_container flex items-center justify-center hover:bg-[--foreground] hover:text-green-400 border">
                    <span className="feature_shotcut_text">Introducing Dx asks</span>
                    <ChevronRight />
                </div>
                {/* Gradient Title */}
                <div className="gradient_title flex items-center justify-center space-x-10">
                    <span className="plan_text">Plan.</span>
                    <span className="develop_text">Develop.</span>
                    <span className="online_text">Online.</span>
                </div>

                {/* Muted Description */}
                <div className="text-muted-foreground text-[1rem] h-auto w-auto flex flex-col items-center justify-center">
                    <span className="first-line">Meet the new standard for modern hardware,software,cloud development.</span>
                    <span className="last-line">Thoughtout issues, sprints, and product roadmaps dx is best.</span>
                </div>
                {/* Guest + Dowload Button */}
                <div className="button_container flex flex-row items-center justify-center space-x-3 m-5">
                    <Button variant="outline">Continue As Guest</Button>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="w-[130px] justify-between"
                            >
                                {value
                                    ? frameworks.find((framework) => framework.value === value)?.label
                                    : "Download"}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[500px] p-0">
                            <Command>
                                <CommandInput placeholder="Search framework..." />
                                <CommandEmpty>No framework found.</CommandEmpty>
                                <CommandGroup>
                                    {frameworks.map((framework) => (
                                        <CommandItem
                                            key={framework.value}
                                            value={framework.value}
                                            onSelect={(currentValue) => {
                                                setValue(currentValue === value ? "" : currentValue)
                                                setOpen(false)
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    value === framework.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {framework.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>
                {/* Blured Intereactive Livewallpaper(related to the project offcourse) */}
                <div className="blurred_container h-auto w-[1000px] flex items-center justify-center p-5">
                    <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
                        {/* <Image
                            src="/suzume-no-tojimari.jpeg"
                            alt="best animated in the world"
                            fill
                            className="rounded-md object-cover"
                        /> */}
                        <video controls loop className="h-full w-full rounded-md object-cover"
                            poster="suzume-no-tojimari.jpeg">
                            <source src="/mylivewallpapers.com-Chilling-with-my-Cat-4K.mp4" type="video/mp4" />
                        </video>
                        {/* <ReactPlayer
                            className="h-full w-full rounded-md"
                            url="<https://youtu.be/HR2C_7G_yRQ?si=RR2hatLgXFo7wSUc>"
                            controls
                        /> */}
                    </AspectRatio>
                </div>
                {/* <video controls width="100%">
                    <source src="/mylivewallpapers.com-Chilling-with-my-Cat-4K.mp4" type="video/mp4" />
                </video> */}
                {/* <video autoPlay controls loop muted height="220" width="390">
	<source src="/mylivewallpapers.com-Chilling-with-my-Cat-4K.mp4" type="video/mp4" />
</video> */}

            </div>


        </section>
    )
}

export default Info