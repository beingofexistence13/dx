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
      {/* Tailwind Positions */}
      <div className="favdrop absolute bottom-[75px] right-[17.5px] z-[100000000000000000000000000] h-10 w-10 rounded-md border"></div>
      <div className="status-panel absolute bottom-0 right-0 z-[100000000000000000000000000] flex h-auto w-full flex-row items-center justify-between border-t text-xs">
        <div className="left flex h-full w-[50px] items-center justify-center space-x-3 px-1">
          <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-yellow-500"></div>
        </div>

        <div className="status-panel flex h-auto w-auto flex-row items-center justify-between space-x-3 rounded-tl-xl border-l px-1.5 py-1 text-xs">
          <h1 className="rounded-md p-1 text-center hover:bg-[--code-foreground]">50 backlinks</h1>
          <h1 className="rounded-md p-1 text-center hover:bg-[--code-foreground]">99+ words</h1>
          <h1 className="rounded-md p-1 text-center hover:bg-[--code-foreground]">13 caracters</h1>
        </div>

      </div>
      {/* <div className="status-panel absolute bottom-0 right-0 flex h-auto w-auto flex-row items-center justify-between space-x-3 rounded-tl-xl border-l border-t px-2 py-1 text-xs">
        <h1 className="rounded-md p-1 text-center hover:bg-[--code-foreground]">50 backlinks</h1>
        <h1 className="rounded-md p-1 text-center hover:bg-[--code-foreground]">99+ words</h1>
        <h1 className="rounded-md p-1 text-center hover:bg-[--code-foreground]">13 caracters</h1>
      </div> */}
              {/* <div className="right flex h-full w-[75px] items-center justify-center space-x-1.5 border-l px-2">
        <h1 className="rounded-md text-center hover:bg-[--code-foreground]">5</h1>
        <h1 className="rounded-md text-center hover:bg-[--code-foreground]">9+</h1>
        <h1 className="rounded-md text-center hover:bg-[--code-foreground]">3</h1>
        </div> */}
    </div>
  )
}

export default UserLayout
{/* <DevMode /> */ }
{/* <TailwindIndicator /> */ }
{/* {DevModeSelector ? "" : <SiteHeader />} */ }
