"use client"

import React from "react"
import { useSelector } from "react-redux"

import { Toaster as DefaultToaster } from "@/registry/default/ui/toaster"
import { Toaster as NewYorkToaster } from "@/registry/new-york/ui/toaster"

import { Analytics } from "./analytics"
import { DevMode } from "./devMode"
import { HelloTool } from "./hello-tool"
import { GuestHeader } from "./guest-header"
import { TailwindIndicator } from "./tailwind-indicator"

const GuestLayout = () => {
  const DevModeSelector = useSelector((state: any) => state.devMode.isDevMode)
  const HelloToolSelector = useSelector(
    (state: any) => state.helloTool.isHelloTool
  )

  return (
    <div>
      {DevModeSelector ? "" : <GuestHeader />}
      {HelloToolSelector ? "" : <HelloTool />}

      <TailwindIndicator />
      <DefaultToaster />

      {/* <NewYorkToaster /> */}
      {/* <DevMode /> */}
    </div>
  )
}

export default GuestLayout
