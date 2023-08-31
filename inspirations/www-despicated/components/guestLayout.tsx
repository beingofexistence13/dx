"use client"

import React from "react"
import { useSelector } from "react-redux"

import { Toaster as DefaultToaster } from "@/registry/default/ui/toaster"
import { Toaster as NewYorkToaster } from "@/registry/new-york/ui/toaster"

import { Analytics } from "./analytics"
import { DevMode } from "./devMode"
import { HelloTool } from "./hello-tool"
import { SiteHeader } from "./site-header"
import { TailwindIndicator } from "./tailwind-indicator"

const GuestLayout = () => {
  const DevModeSelector = useSelector((state: any) => state.devMode.isDevMode)
  const HelloToolSelector = useSelector(
    (state: any) => state.helloTool.isHelloTool
  )

  return (
    <div>
      {DevModeSelector ? "" : <SiteHeader />}
      {HelloToolSelector ? "" : <HelloTool />}

      <DevMode />
      {/* <Analytics /> */}
      <TailwindIndicator />
      {/* <NewYorkToaster /> */}
      <DefaultToaster />
    </div>
  )
}

export default GuestLayout
