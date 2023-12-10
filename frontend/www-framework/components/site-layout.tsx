"use client"

import React from "react"
import { useSelector } from "react-redux"

import GuestLayout from "./guest-layout"
import UserLayout from "./user-layout"

const SiteLayout = () => {
  const DevModeSelector = useSelector((state: any) => state.devMode.isDev)
  const HelloToolSelector = useSelector((state: any) => state.helloTool.isDev)

  return (
    <div>
      {/* Auth Check Will Added Here */}
      <UserLayout />
    </div>
  )
}

export default SiteLayout
