/* eslint-disable tailwindcss/classnames-order */

"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, Button, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertTitle, AspectRatio, Avatar, AvatarFallback, AvatarImage, Badge, Calendar, CardContent, CardDescription, CardTitle, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, HoverCard, HoverCardContent, HoverCardTrigger, InputShadcnUi, Label, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, Popover, PopoverContent, PopoverTrigger, Progress, RadioGroup, RadioGroupItem, ScrollArea, ScrollBar, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Skeleton, Slider, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, Toaster, Toggle, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, navigationMenuTriggerStyle, toast, toggleVariants, useFormField, useToast, type ToastActionElement, type ToastProps } from "@/components/ui"
import * as React from "react"
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image"

function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  return (
    <section>
      <div ref={ref}>
        <figure className="progress">
          <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </div>
    </section>
  );
}

const MoreInfo = () => {

  return (
    <section className="more_info relative min-h-[100vh] w-full max-w-[100%] overflow-y-auto overflow-x-hidden border">
      <div className="info_main_container relative z-10 mx-auto flex h-[2900px] max-w-[1200px] flex-col items-center justify-center space-y-24">
        <div className="hardware relative flex h-auto w-full flex-row items-start justify-center space-x-3">
          <div className="more_info_image h-[800px] w-[500px] border">
            <AspectRatio ratio={1 / 1} className="bg-muted h-[800px] w-[500px] rounded-lg">
              <Image
                src="/hardware.jpg"
                alt="best animated in the world"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
          <span className="more_info_description z-10 h-auto w-[500px] rounded-md border p-3 text-start">
            Hardware:Computer hardware is a collective term used to describe any of the physical components of an analog or digital computer.
            The term hardware distinguishes the tangible aspects of a computing device from software, which consists of written, machine-readable instructions
            or programs that tell physical components what to do and when to execute the instructions.
          </span>
          <motion.div
            drag
            className="blurry_gradient_hardware absolute bottom-0 right-0 z-[0] h-[550px] w-[550px] rounded-full">
          </motion.div>
        </div>
        <div className="software relative flex h-auto w-full flex-row items-start justify-center space-x-3">
        <span className="more_info_description z-10 h-auto w-[500px] rounded-md border p-3 text-start">
            Software:Computer hardware is a collective term used to describe any of the physical components of an analog or digital computer.
            The term hardware distinguishes the tangible aspects of a computing device from software, which consists of written, machine-readable instructions
            or programs that tell physical components what to do and when to execute the instructions.
          </span>
          <div className="more_info_image h-[800px] w-[500px] border">
            <AspectRatio ratio={1 / 1} className="bg-muted h-[800px] w-[500px] rounded-lg">
              <Image
                src="/software.jpg"
                alt="best animated in the world"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>

          <motion.div
            drag
            className="blurry_gradient_software absolute bottom-0 left-0 z-[0] h-[550px] w-[550px] rounded-full">
          </motion.div>
        </div>
        <div className="cloud relative flex h-auto w-full flex-row items-start justify-center space-x-3">
          <div className="more_info_image h-[800px] w-[500px] border">
            <AspectRatio ratio={1 / 1} className="bg-muted h-[800px] w-[500px] rounded-lg">
              <Image
                src="/cloud.jpg"
                alt="best animated in the world"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
          <span className="more_info_description z-10 h-auto w-[500px] rounded-md border p-3 text-start">
            Cloud:Computer hardware is a collective term used to describe any of the physical components of an analog or digital computer.
            The term hardware distinguishes the tangible aspects of a computing device from software, which consists of written, machine-readable instructions
            or programs that tell physical components what to do and when to execute the instructions.
          </span>
          <motion.div
            drag
            className="blurry_gradient_cloud absolute bottom-0 right-0 z-[0] h-[550px] w-[550px] rounded-full">
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MoreInfo