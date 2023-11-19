"use client"

import React from "react"
import { useSelector } from "react-redux"

import { Toaster as DefaultToaster } from "@/registry/default/ui/toaster"
import { Toaster as NewYorkToaster } from "@/registry/new-york/ui/toaster"

import { DevMode } from "./dev-mode"
import { HelloTool } from "./hello-tool"
import { GuestHeader } from "./guest-header"
import { TailwindIndicator } from "./tailwind-indicator"
import LandingPage from "./landing-page"

const GuestLayout = () => {
  const DevModeSelector = useSelector((state: any) => state.devMode.isDevMode)
  const HelloToolSelector = useSelector(
    (state: any) => state.helloTool.isHelloTool
  )

  return (
    <div>

      {DevModeSelector ? "" : <GuestHeader />}
      {HelloToolSelector ? "" : <HelloTool />}
      {/* Landing Page - will conditionally render later; for now I will just try to make a working landing page */}
      {/* <LandingPage /> */}

      <TailwindIndicator />
      <DefaultToaster />
      <NewYorkToaster />
      <DevMode />

    </div>
  )
}

export default GuestLayout
