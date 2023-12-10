/* eslint-disable tailwindcss/classnames-order */
"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, Button, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertTitle, AspectRatio, Avatar, AvatarFallback, AvatarImage, Badge, Calendar, CardContent, CardDescription, CardTitle, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, HoverCard, HoverCardContent, HoverCardTrigger, InputShadcnUi, Label, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, Popover, PopoverContent, PopoverTrigger, Progress, RadioGroup, RadioGroupItem, ScrollArea, ScrollBar, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Skeleton, Slider, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, Toaster, Toggle, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, navigationMenuTriggerStyle, toast, toggleVariants, useFormField, useToast, type ToastActionElement, type ToastProps } from "@/components/ui"
import { motion } from "framer-motion";
import * as React from "react"
import { Check, ChevronsUpDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRef } from "react";

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
    const constraintsRef = useRef(null);

    return (
        <section className="info relative h-[100vh] w-full max-w-[100%] overflow-y-auto overflow-x-hidden">

            <div className="blurry_gradient_top absolute left-0 top-[25vh] z-[0] h-[550px] w-[550px] rounded-full">
            </div>
            <div className="blurry_gradient_bottom absolute bottom-[50vh] right-0 z-[0] h-[550px] w-[550px] rounded-full">
            </div>

            <div className="info_main_container relative z-10 mx-auto mt-28 flex max-w-[1200px] flex-col items-center justify-center">
                {/* FeatureShotcut Rounded Border -  h-12 w-[250px] rounded-full flex flex-row items-center justify-center */}
                <div className="feature_shotcut_container bg-[--code-foreground]  flex items-center justify-center border hover:text-green-400">
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
                <div className="text-muted-foreground flex h-auto w-auto flex-col items-center justify-center text-[1rem]">
                    <span className="first-line">Meet the new standard for modern hardware,software,cloud development.</span>
                    <span className="last-line">Thoughtout issues, sprints, and product roadmaps dx is best.</span>
                </div>
                {/* Guest + Dowload Button */}
                <div className="button_container m-5 flex flex-row items-center justify-center space-x-3">
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
                <div
                    ref={constraintsRef}
                    className="blurred_container flex h-auto w-[1000px] items-center justify-center p-5 rounded-lg border">
                    <motion.div
                        drag
                        dragConstraints={constraintsRef}
                        dragSnapToOrigin={true}
                        className="h-full w-full">
                        <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
                            <video controls loop className="h-full w-full rounded-lg object-cover"
                                poster="suzume-no-tojimari.jpeg">
                                <source src="/mylivewallpapers.com-Chilling-with-my-Cat-4K.mp4" type="video/mp4" />
                            </video>
                        </AspectRatio>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Info;