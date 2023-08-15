"use client"

import React from "react"
import { useSelector } from "react-redux"
import GuestLayout from "./guestLayout"


const SiteLayout = () => {
  const DevModeSelector = useSelector((state: any) => state.devMode.isDev)
  const HelloToolSelector = useSelector((state: any) => state.helloTool.isDev)

  return (
    <div>
      {/* {DevModeSelector ? "" : <SiteHeader />} */}
      {/* {HelloToolSelector ? "" : <HelloTool />} */}
      <GuestLayout />

    </div>
  )
}

export default SiteLayout
