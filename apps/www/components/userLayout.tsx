/* eslint-disable tailwindcss/classnames-order */

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

      {/* {DevModeSelector ? "" : <SiteHeader />} */}
      {/* <DevMode /> */}
      {/* <TailwindIndicator /> */}
      <NewYorkToaster />
      <DefaultToaster />
    </div>
  )
}

export default UserLayout
