"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, Button as ButtonShadcnUi, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertTitle, AspectRatio, Avatar, AvatarFallback, AvatarImage, Badge, Calendar, CardContent, CardDescription, CardTitle, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, HoverCard, HoverCardContent, HoverCardTrigger, InputShadcnUi, Label, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, Popover, PopoverContent, PopoverTrigger, Progress, RadioGroup, RadioGroupItem, ScrollArea, ScrollBar, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Skeleton, Slider, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, Toaster, Toggle, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, navigationMenuTriggerStyle, toast, toggleVariants, useFormField, useToast, type ToastActionElement, type ToastProps } from "@/components/ui"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const items = [
  {
    label: "Navbar",
    id: "navbar",
  },
  {
    label: "Friday",
    id: "friday",
  },
  {
    label: "Hello Mode",
    id: "hello-mode",
  },
  {
    label: "Multiverse",
    id: "multiverse",
  },
  {
    label: "Blockchain Status",
    id: "blockchain-status",
  },
  {
    label: "Activitybar",
    id: "activitybar",
  },
  {
    label: "Primary Sidebar",
    id: "primary-sidebar",
  },
  {
    label: "Secondary Sidebar",
    id: "secondary-sidebar",
  },
  {
    label: "Bottombar",
    id: "bottombar",
  },
  {
    label: "Dockbar",
    id: "dockbar",
  },
  {
    label: "Video Player",
    id: "video-player",
  },
  {
    label: "Hello 3d",
    id: "hello-3d",
  },
  {
    label: "Theme",
    id: "theme",
  },
  {
    label: "Keyboard Shortcuts",
    id: "keyboard-shortcuts",
  },
  {
    label: "Search",
    id: "search",
  },
  {
    label: "Command Palette",
    id: "command-palette",
  },
  {
    label: "Footer",
    id: "footer",
  },
  // {
  //   id: "navbar",
  //   label: "Navbar",
  // },
  // {
  //   id: "hack",
  //   label: "Hack",
  // },
  // {
  //   id: "sidebar",
  //   label: "Sidebar",
  // },
  // {
  //   id: "bottombar",
  //   label: "Bottombar",
  // },
  // {
  //   id: "applebar",
  //   label: "Applebar",
  // },
  // {
  //   id: "ui",
  //   label: "Ui",
  // },
  // {
  //   id: "redux,3d,360degree,ar,vr,webassembly,prisma",
  //   label: "redux,3d,360degree,ar,vr,webassembly,prisma",
  // },
  // {
  //   id: "circleci plus swr and trpc",
  //   label: "circleci plus swr and trpc",
  // },
  // {
  //   id: "ux",
  //   label: "Ux",
  // },
  // {
  //   id: "testing and github-actions",
  //   label: "Testing And Github-Actions",
  // },
  // {
  //   id: "prettier plus dx and sanity",
  //   label: "prettier plus dx and sanity",
  // },
] as const

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

export default function Todo() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mb-4  space-y-8 pb-4"
      >
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                {/* <FormLabel className="text-base">Tasks</FormLabel> */}
                {/* <FormDescription>
                  This tasks should be done untill (10/08/2023 - Thursday)
                </FormDescription> */}
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
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
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Button type="submit">Add to tasks</Button> */}
        {/* <NavigationMenuDemo /> */}
      </form>
    </Form>
  )
}

// "use client"
