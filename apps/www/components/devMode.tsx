"use client"

import React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { items } from "@/config/dev-mode"
import { socialMediaConfig } from "@/config/social-media"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  Separator,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  buttonVariants,
} from "./ui"

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

export function DevMode() {
  //   const [open, setOpen] = React.useState(false)
  const [dev, setDev] = React.useState(false)

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
    // <Menubar className="devMode fixed bottom-16 left-[90%] flex h-[50px] w-[50px] translate-x-[-50%] flex-row items-center justify-center overflow-hidden rounded-full p-2">
    //   {/* Magic */}
    //   <MenubarMenu>
    //     <MenubarTrigger className="rounded-lg">
    //       <div
    //         className={cn(
    //           buttonVariants({
    //             variant: "ghost",
    //           }),
    //           "flex h-[50px] w-[50px] items-center justify-center rounded-full p-0"
    //         )}
    //       >
    //         <Icons.devMode className="h-2 w-2" />
    //       </div>
    //     </MenubarTrigger>
    //     <MenubarContent className="w-[300px] ">
    //       <MenubarItem className="flex h-[35px] w-full flex-row items-center justify-start space-x-3 space-y-0">
    //         <Switch id="dev-mode" />
    //         <h6>Dev Mode</h6>
    //       </MenubarItem>
    //       <MenubarItem className="flex h-[35px] w-full flex-row items-center justify-start space-x-3 space-y-0">
    //         <Switch id="hello-tool" />
    //         <h6>Hello Tool</h6>
    //       </MenubarItem>

    //       <MenubarSeparator />

    //       <Form {...form}>
    //         <form onSubmit={form.handleSubmit(onSubmit)} className="">
    //           <FormField
    //             control={form.control}
    //             name="items"
    //             render={() => (
    //               <FormItem>
    //                 <div className="">
    //                   {/* <FormLabel className="text-base">Tasks</FormLabel> */}
    //                   {/* <FormDescription>
    //               This tasks should be done untill (10/08/2023 - Thursday)
    //             </FormDescription> */}
    //                 </div>
    //                 {items.map((item) => (
    //                   <FormField
    //                     key={item.id}
    //                     control={form.control}
    //                     name="items"
    //                     render={({ field }) => {
    //                       return (
    //                         <FormItem
    //                           key={item.id}
    //                           className="flex flex-row items-center justify-start space-x-3 space-y-0"
    //                         >
    //                           <MenubarItem className="flex h-[35px] w-full flex-row items-center justify-start space-x-3 space-y-0">
    //                             <FormControl className="flex items-center justify-center">
    //                               <Checkbox
    //                                 checked={field.value?.includes(item.id)}
    //                                 onCheckedChange={(checked) => {
    //                                   return checked
    //                                     ? field.onChange([
    //                                         ...field.value,
    //                                         item.id,
    //                                       ])
    //                                     : field.onChange(
    //                                         field.value?.filter(
    //                                           (value) => value !== item.id
    //                                         )
    //                                       )
    //                                 }}
    //                               />
    //                             </FormControl>
    //                             <FormLabel className="flex items-center justify-center font-normal">
    //                               {item.label}
    //                             </FormLabel>
    //                           </MenubarItem>
    //                         </FormItem>
    //                       )
    //                     }}
    //                   />
    //                 ))}
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />
    //           {/* <Button type="submit">Add to tasks</Button> */}
    //           {/* <NavigationMenuDemo /> */}
    //         </form>
    //       </Form>
    //     </MenubarContent>
    //   </MenubarMenu>
    // </Menubar>
    <Dialog>
      <DialogTrigger className="devMode fixed bottom-3 right-2 flex h-[50px] w-[50px] flex-row items-center justify-center overflow-hidden rounded-full border p-2">
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
      </DialogTrigger>
      <DialogContent className="devMode-container f h-[500px] ">
        <DialogHeader>
          <div className="devMode-header pl-3 pt-3">
            <div className="flex h-[35px] w-full flex-row items-center justify-start space-x-3 space-y-0">
              <Switch id="dev-mode" />
              <h6>Dev Mode</h6>
            </div>
            <div className="flex h-[35px] w-full flex-row items-center justify-start space-x-3 space-y-0">
              <Switch id="hello-tool" />
              <h6>Hello Tool</h6>
            </div>
          </div>

          <div className="horizantalDivider"></div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="devMode-content h-[400px] overflow-y-auto pb-3 pl-2 pr-0">
              <FormField
                control={form.control}
                name="items"
                render={() => (
                  <FormItem>
                    {items.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="items"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className={cn(
                                buttonVariants({
                                  variant: "ghost",
                                }),
                                "m-0 flex h-[20px] flex-row items-center justify-start space-x-3 space-y-0 rounded-lg py-4 pl-2"
                              )}
                            >
                              <FormControl className="flex items-center justify-center">
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
                              <FormLabel className="flex items-center justify-center font-normal">
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

          {/* <DialogTitle>Are you sure absolutely sure?</DialogTitle> */}
          {/* <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription> */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
