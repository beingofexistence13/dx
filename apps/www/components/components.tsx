"use client"

import React from "react"
import { useSelector } from "react-redux"

import { Toaster as DefaultToaster } from "@/registry/default/ui/toaster"
import { Toaster as NewYorkToaster } from "@/registry/new-york/ui/toaster"

import { Analytics } from "./analytics"
import { HelloTool } from "./hello-tool"
import { SiteHeader } from "./site-header"
import { TailwindIndicator } from "./tailwind-indicator"

const Components = () => {
  const DevModeSelector = useSelector((state: any) => state.devMode.isDev)
  const HelloToolSelector = useSelector((state: any) => state.helloTool.isDev)

  return (
    <div>
      {DevModeSelector ? "" : <SiteHeader />}
      {HelloToolSelector ? "" : <HelloTool />}
      
      

      <Analytics />
      <TailwindIndicator />
      <NewYorkToaster />
      <DefaultToaster />
    </div>
  )
}

export default Components
