"use client"

import React from "react"
import { useSelector } from "react-redux"

import { Toaster as DefaultToaster } from "@/registry/default/ui/toaster"
import { Toaster as NewYorkToaster } from "@/registry/new-york/ui/toaster"

import { Analytics } from "./analytics"
import { DevMode } from "./devMode"
import { HelloTool } from "./hello-tool"
import { UserHeader } from "./user-header"
import { TailwindIndicator } from "./tailwind-indicator"
import { Activitybar } from "./activitybar"
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
  ScrollArea,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  buttonVariants,
} from "./ui"

const UserLayout = () => {
  const DevModeSelector = useSelector((state: any) => state.devMode.isDev)
  const HelloToolSelector = useSelector((state: any) => state.helloTool.isDev)

  return (
    <div>
      <UserHeader />
      <Activitybar />
      {HelloToolSelector ? "" : <HelloTool />}


      <NewYorkToaster />
      <DefaultToaster />
      <div className="favdrop absolute bottom-[75px] right-[17.5px] flex h-10 w-10 items-center justify-center rounded-md border">
        <Avatar className="pulsate-fwd h-[30px] w-[30px]">
          <AvatarImage src="/user-two.jpg" alt="@shadcn" />
          <AvatarFallback>3</AvatarFallback>
        </Avatar>
      </div>
      <div className="status-panel absolute bottom-0 right-0 flex h-auto w-full flex-row items-center justify-between text-xs">
        <div className="left flex h-full w-[50px] items-center justify-center space-x-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-rose-700 to-pink-600"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-lime-100 via-lime-300 to-lime-200"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-tl from-yellow-400 via-yellow-400 to-white"></div>
        </div>
        <div className="hello-controller flex h-auto w-full flex-1 items-center justify-center bg-red-500">
          <div className="controller mt-[50%] h-32 w-32 rounded-full border bg-gray-900 bg-clip-padding backdrop-blur-3xl"></div>
        </div>
        <div className="status-panel flex h-auto w-auto flex-row items-center justify-between space-x-3 rounded-tl-xl border-l border-t px-1.5 py-1 text-xs">
          <h1 className="flex items-center justify-center rounded-md p-1 text-center hover:bg-[--code-foreground]">50 backlinks</h1>
          <h1 className="flex items-center justify-center rounded-md p-1 text-center hover:bg-[--code-foreground]">99+ words</h1>
          <h1 className="flex items-center justify-center rounded-md p-1 text-center hover:bg-[--code-foreground]">13 caracters</h1>
        </div>

      </div>
    </div>
  )
}

export default UserLayout
{/* <DevMode /> */ }
{/* <TailwindIndicator /> */ }
{/* {DevModeSelector ? "" : <SiteHeader />} */ }
