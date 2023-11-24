/* eslint-disable tailwindcss/classnames-order */
"use client";

import Image from 'next/image'
import * as React from "react"
import LandingPage from "@/components/landing-page"
import { GuestHeader } from "@/components/guest-header"
// import { Button, Card, CardFooter, Image as ImageNext, Input, } from "@nextui-org/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, Button as ButtonShadcnUi, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertTitle, AspectRatio, Avatar, AvatarFallback, AvatarImage, Badge, Calendar, CardContent, CardDescription, CardTitle, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, HoverCard, HoverCardContent, HoverCardTrigger, InputShadcnUi, Label, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, Popover, PopoverContent, PopoverTrigger, Progress, RadioGroup, RadioGroupItem, ScrollArea, ScrollBar, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Skeleton, Slider, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, Toaster, Toggle, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, navigationMenuTriggerStyle, toast, toggleVariants, useFormField, useToast, type ToastActionElement, type ToastProps } from "@/components/ui"
import { ChevronRight } from 'lucide-react';
// import "./styles.css";
import { motion, Variants } from "framer-motion";
import { Button, Card, CardFooter, Image as ImageNext, Input, } from "@nextui-org/react";

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    x: 300,
    y: 100,
  },
  onscreen: {
    x: 0,
    y: 0,
    rotate: -0,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.9
    }
  }
};

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <GuestHeader />
      {/* Info */}
      <section className="info h-[130vh] w-full flex items-center justify-center flex-col space-y-5 overflow-x-hidden overflow-y-auto">
        {/* Navbar */}
        {/* <nav className="navbar"></nav> */}
        {/* Dx-Www asks */}
        <div className="info-features border w-auto max-w-[90%] text-center rounded-full px-3 py-1 flex items-center justify-center flex-row hover:bg-[--code-foreground] ">
          <span className="text-center">Introducing dx-www Asks</span>
          <ChevronRight />
        </div>
        {/* Title header */}
        <span className="titleHeader">
          <h1 className="developText">Develop.</h1>
          <h1 className="previewText">Preview.</h1>
          <h1 className="OnlineText">Online.</h1>
        </span>
        {/* Title footer */}
        <span className="textMuted text-xs text-center w-[300px] h-auto rounded-sm">
          Meet the new standard for modern software development.
          Streamline issues, sprints, and product roadmaps.
        </span>
        {/* Info Actions */}
        {/* Info Video */}
        {/* Anime Image */}
        <div className="infoVideo border w-[90%] max-w-[1200px] h-[75vh] rounded-md hover:bg-[--code-foreground]"></div>
        {/* <Card
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
        </Card> */}
        {/* <Image
          src="/user-two.jpg"
          alt="Vercel Logo"
          className="dark:invert"
          fill
          quality={100}
        /> */}
      </section>
      {/* Popups */}
      <section className="popup min-h-[100vh] max-w-[1200px] mx-auto rounded-md flex items-center justify-start flex-col space-y-3">
        {/* Dragon */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 1 }}
          className="popupOne h-auto w-full flex items-center justify-between lg:flex-row flex-col space-y-3 lg:space-x-3 p-3 lg:p-0">
          <div className="popupLeft h-[300px] lg:w-1/2 w-full rounded-md p-3">
            <span className="popupText h-full w-full flex items-center justify-center text-center">
              How to create scroll-linked and scroll-triggered animations in Framer Motion.
              There are two predominant types of scroll animations, both of which can be achieved with Framer Motion.
            </span>
          </div>
          <motion.div
            className='popupRight h-[300px] lg:w-1/2 w-full rounded-md border flex items-center justify-center'
            variants={cardVariants}>
            <Image
              src="/qrcode.png"
              alt="Picture of the author"
              width={300} 
              height={300} 
              placeholder="blur"
              blurDataURL="data:..."
            />
          </motion.div>
        </motion.div>
        {/* Ship */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 1 }}
          className="popupTwo h-auto w-full flex items-center justify-between lg:flex-row flex-col space-y-3 lg:space-x-3 p-3 lg:p-0">

          <motion.div
            className='popupRight h-[300px] lg:w-1/2 w-full rounded-md border flex items-center justify-center'
            variants={cardVariants}>
            <Image
              src="/qrcode.png"
              alt="Picture of the author"
              width={300} 
              height={300} 
              placeholder="blur"
              blurDataURL="data:..."
            />
          </motion.div>

          <div className="popupLeft h-[300px] lg:w-1/2 w-full rounded-md p-3">
            <span className="popupText h-full w-full flex items-center justify-center text-center">
              How to create scroll-linked and scroll-triggered animations in Framer Motion.
              There are two predominant types of scroll animations, both of which can be achieved with Framer Motion.
            </span>
          </div>
        </motion.div>
        {/* Nature */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 1 }}
          className="popupThree h-auto w-full flex items-center justify-between lg:flex-row flex-col space-y-3 lg:space-x-3 p-3 lg:p-0">
          <div className="popupLeft h-[300px] lg:w-1/2 w-full rounded-md p-3">
            <span className="popupText h-full w-full flex items-center justify-center text-center">
              How to create scroll-linked and scroll-triggered animations in Framer Motion.
              There are two predominant types of scroll animations, both of which can be achieved with Framer Motion.
            </span>
          </div>
          <motion.div
            className='popupRight h-[300px] lg:w-1/2 w-full rounded-md border flex items-center justify-center'
            variants={cardVariants}>
            {/* <Avatar className="pulsate-fwd hidden h-full w-full rounded-md">
              <AvatarImage src="/user-15.webp" alt="@sumon" />
              <AvatarFallback>An Ai generated image will be here.</AvatarFallback>
            </Avatar> */}
            <Card
              isFooterBlurred
              radius="lg"
              className="min-h-[350px] border-none"
            >
              <AspectRatio ratio={16 / 9}>
                <ImageNext
                  alt="Woman listing to music"
                  className="object-cover"
                  height={200}
                  src="/qrcode.png"
                  width={200}
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
          </motion.div>
        </motion.div>
      </section>
      {/* HorizentalSscroll */}

    </>

  )
}
