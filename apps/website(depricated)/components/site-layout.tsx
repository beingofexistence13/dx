"use client"

import React from "react"
import { useSelector } from "react-redux"

import GuestLayout from "./guestLayout"
import UserLayout from "./userLayout"

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
