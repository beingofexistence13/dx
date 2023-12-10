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
    <section className="more_info min-h-[100vh] w-full max-w-[100%] overflow-x-hidden overflow-y-auto relative border">
      <div className="info_main_container h-[2900px] max-w-[1200px] mx-auto flex flex-col items-center justify-center space-y-24 relative z-10">
        <div className="hardware h-auto w-full flex items-start justify-center space-x-3 flex-row relative">
          <div className="more_info_image h-[800px] w-[500px] border">
            <AspectRatio ratio={1 / 1} className="bg-muted rounded-lg h-[800px] w-[500px]">
              <Image
                src="/hardware.jpg"
                alt="best animated in the world"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
          <span className="more_info_description rounded-md h-auto w-[500px] text-start border p-3 z-10">
            Hardware:Computer hardware is a collective term used to describe any of the physical components of an analog or digital computer.
            The term hardware distinguishes the tangible aspects of a computing device from software, which consists of written, machine-readable instructions
            or programs that tell physical components what to do and when to execute the instructions.
          </span>
          <motion.div
            drag
            className="blurry_gradient_hardware h-[550px] w-[550px] rounded-full absolute bottom-0 right-0 z-[0]">
          </motion.div>
        </div>
        <div className="software h-auto w-full flex items-start justify-center space-x-3 flex-row relative">
        <span className="more_info_description rounded-md h-auto w-[500px] text-start border p-3 z-10">
            Software:Computer hardware is a collective term used to describe any of the physical components of an analog or digital computer.
            The term hardware distinguishes the tangible aspects of a computing device from software, which consists of written, machine-readable instructions
            or programs that tell physical components what to do and when to execute the instructions.
          </span>
          <div className="more_info_image h-[800px] w-[500px] border">
            <AspectRatio ratio={1 / 1} className="bg-muted rounded-lg h-[800px] w-[500px]">
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
            className="blurry_gradient_software h-[550px] w-[550px] rounded-full absolute bottom-0 left-0 z-[0]">
          </motion.div>
        </div>
        <div className="cloud h-auto w-full flex items-start justify-center space-x-3 flex-row relative">
          <div className="more_info_image h-[800px] w-[500px] border">
            <AspectRatio ratio={1 / 1} className="bg-muted rounded-lg h-[800px] w-[500px]">
              <Image
                src="/cloud.jpg"
                alt="best animated in the world"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
          <span className="more_info_description rounded-md h-auto w-[500px] text-start border p-3 z-10">
            Cloud:Computer hardware is a collective term used to describe any of the physical components of an analog or digital computer.
            The term hardware distinguishes the tangible aspects of a computing device from software, which consists of written, machine-readable instructions
            or programs that tell physical components what to do and when to execute the instructions.
          </span>
          <motion.div
            drag
            className="blurry_gradient_cloud h-[550px] w-[550px] rounded-full absolute bottom-0 right-0 z-[0]">
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MoreInfo