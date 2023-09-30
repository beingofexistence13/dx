"use client"

import React, { useRef } from "react"
import Image from "next/image"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { usePress } from "react-aria"
import { any } from "zod"

import { socialMediaConfig } from "@/config/social-media"
import { siteConfig } from "@/config/website"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"

import Hack from "./hack"
import SocialMedias from "./socialMedia"
import { Button as NextuiButton, ButtonGroup } from "@nextui-org/react";
import RainbowHover from "./rainbow-hover"
import { BarChart3, Calendar, Cog, Cpu, FileSearch, GitFork, Headphones, HelpCircle, LayoutDashboard, Terminal } from "lucide-react"

export function Activitybar() {
  const [open, setOpen] = React.useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { pressProps } = usePress({
    onPressStart: (event) => console.log("onPressStart:", event.pointerType),
    onPressEnd: (event) => console.log("onPressEnd:", event.pointerType),
    onPress: (event) => console.log("onPress:", event.pointerType),
    onPressUp: (event) => console.log("onPressUp:", event.pointerType),
  })

  return (
    <nav className="supports-backdrop-blur:bg-background/60 bg-background/95 fixed top-[55.5px] left-0 backdrop-blur min-w-[50px] h-[94.75vh] border-r space-y-1 pt-1 flex flex-col items-center justify-center">

      <div className="activitybar-main w-full h-[300px] max-h-[50vh] flex flex-col items-center justify-start space-y-2 overflowx-x-hidden overflow-y-auto border-b">
        <div className="jello-vertical w-[35px] h-[35px] rounded-md animate-jump animate-infinite animate-ease-linear flex items-center justify-center">
          <FileSearch className="h-4 w-4" />
        </div>
        <div className="jello-vertical w-[35px] h-[35px] rounded-md animate-jump animate-infinite animate-ease-linear flex items-center justify-center">
          <GitFork className="h-4 w-4" />
        </div>
        <div className="jello-vertical w-[35px] h-[35px] rounded-md animate-jump animate-infinite animate-ease-linear flex items-center justify-center">
          <LayoutDashboard className="h-4 w-4" />
        </div>
        <div className="jello-vertical w-[35px] h-[35px] rounded-md animate-jump animate-infinite animate-ease-linear flex items-center justify-center">
          <Calendar className="h-4 w-4" />
        </div>
        <div className="jello-vertical w-[35px] h-[35px] rounded-md animate-jump animate-infinite animate-ease-linear flex items-center justify-center">
          <BarChart3 className="h-4 w-4" />
        </div>
        <div className="jello-vertical w-[35px] h-[35px] rounded-md animate-jump animate-infinite animate-ease-linear flex items-center justify-center">
          <Cpu className="h-4 w-4" />
        </div>
        <div className="jello-vertical w-[35px] h-[35px] rounded-md animate-jump animate-infinite animate-ease-linear flex items-center justify-center">
          <Terminal className="h-4 w-4" />
        </div>
      </div>

      <div className="activitybar-gap w-full flex-1 flex flex-col items-center justify-end space-y-2 overflowx-x-hidden overflow-y-auto border-b"></div>

      <div className="activitybar-extra w-full h-[125px] flex flex-col items-center justify-center space-y-2 overflowx-x-hidden overflow-y-auto border-b">
        <div className="jello-vertical w-[35px] h-[35px] rounded-md animate-jump animate-infinite animate-ease-linear flex items-center justify-center">
          <HelpCircle className="h-4 w-4" />
        </div>
        <div className="jello-vertical w-[35px] h-[35px] rounded-md animate-jump animate-infinite animate-ease-linear flex items-center justify-center">
          <Headphones className="h-4 w-4" />
        </div>
        <div className="jello-vertical w-[35px] h-[35px] rounded-md animate-jump animate-infinite animate-ease-linear flex items-center justify-center">
          <Cog className="h-4 w-4" />
        </div>
      </div>
    </nav>
  )
}
