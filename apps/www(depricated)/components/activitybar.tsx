/* eslint-disable tailwindcss/classnames-order */

"use client"

import React, { useRef } from "react"
import { usePress } from "react-aria"
import { BarChart3, Calendar, Cog, Cpu, FileSearch, GitFork, Headphones, HelpCircle, LayoutDashboard, Terminal } from "lucide-react"
import { ScrollArea } from "./ui"

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
    <nav className="supports-backdrop-blur:bg-background/60 bg-background/95 fixed left-0 top-[55.5px] flex h-[95vh] max-w-[50px] flex-col items-center justify-center space-y-1 border-r pb-10 pt-1 backdrop-blur">
      <ScrollArea className="h-full w-max">
        <div className="space-y-3 p-3">
          <div className="jello-vertical animate-jump animate-infinite animate-ease-linear flex h-[35px] w-[35px] items-center justify-center rounded-md">
            <FileSearch className="h-4 w-4" />
          </div>
          <div className="jello-vertical animate-jump animate-infinite animate-ease-linear flex h-[35px] w-[35px] items-center justify-center rounded-md">
            <GitFork className="h-4 w-4" />
          </div>
          <div className="jello-vertical animate-jump animate-infinite animate-ease-linear flex h-[35px] w-[35px] items-center justify-center rounded-md">
            <LayoutDashboard className="h-4 w-4" />
          </div>
          <div className="jello-vertical animate-jump animate-infinite animate-ease-linear flex h-[35px] w-[35px] items-center justify-center rounded-md">
            <Calendar className="h-4 w-4" />
          </div>
          <div className="jello-vertical animate-jump animate-infinite animate-ease-linear flex h-[35px] w-[35px] items-center justify-center rounded-md">
            <BarChart3 className="h-4 w-4" />
          </div>
          <div className="jello-vertical animate-jump animate-infinite animate-ease-linear flex h-[35px] w-[35px] items-center justify-center rounded-md">
            <Cpu className="h-4 w-4" />
          </div>
          <div className="jello-vertical animate-jump animate-infinite animate-ease-linear flex h-[35px] w-[35px] items-center justify-center rounded-md">
            <Terminal className="h-4 w-4" />
          </div>
        </div>
      </ScrollArea>

      <div className="activitybar-gap overflowx-x-hidden flex w-full flex-1 flex-col items-center justify-end space-y-2 overflow-y-auto border-b"></div>

      <div className="activitybar-extra overflowx-x-hidden flex h-[150px] w-full flex-col items-center justify-center space-y-2 overflow-hidden border-b">
        <div className="jello-vertical animate-jump animate-infinite animate-ease-linear flex h-[35px] w-[35px] items-center justify-center rounded-md">
          <HelpCircle className="h-4 w-4" />
        </div>
        <div className="jello-vertical animate-jump animate-infinite animate-ease-linear flex h-[35px] w-[35px] items-center justify-center rounded-md">
          <Headphones className="h-4 w-4" />
        </div>
        <div className="jello-vertical animate-jump animate-infinite animate-ease-linear flex h-[35px] w-[35px] items-center justify-center rounded-md">
          <Cog className="h-4 w-4" />
        </div>
      </div>
    </nav>
  )
}
