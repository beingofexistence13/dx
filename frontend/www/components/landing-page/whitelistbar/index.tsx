"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, Button, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertTitle, AspectRatio, Avatar, AvatarFallback, AvatarImage, Badge, Calendar, CardContent, CardDescription, CardTitle, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, HoverCard, HoverCardContent, HoverCardTrigger, InputShadcnUi, Label, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, Popover, PopoverContent, PopoverTrigger, Progress, RadioGroup, RadioGroupItem, ScrollArea, ScrollBar, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Skeleton, Slider, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, Toaster, Toggle, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, navigationMenuTriggerStyle, toast, toggleVariants, useFormField, useToast, type ToastActionElement, type ToastProps } from "@/components/ui"
import { ChevronUp } from "lucide-react"
import "./whitelistbar.css"
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";

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



const Whitelistbar = () => {

  return (
    <div className="fixed bottom-0 left-[50%] z-30 h-12 w-[650px] max-w-[90%] translate-x-[-50%]">
      <div className="blurry_gradient_whitelistbar absolute left-0 top-0 h-[550px] w-[550px] rounded-full"></div>
      <motion.div
        whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.8 }}
        className="whitelistbar relative mt-1.5 flex flex-row items-center justify-between rounded-tl-2xl rounded-tr-xl border-x border-t px-3 py-1">
        <div className="waitlist_onboarding">Join Waitlist</div>
        <div className="waitlist_preferences flex flex-row items-center justify-center space-x-3">
          <span className="event_date">31/12/2023</span>
          <span className="event_date rounded-md border px-3 py-1">Subscribe</span>
          <div className="flex items-center justify-center rounded-full border p-1">
            <ChevronUp />
          </div>
        </div>
      </motion.div>

    </div>
  )
}

export default Whitelistbar