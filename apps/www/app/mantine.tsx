"use client"

import * as React from "react"
import { MantineProvider } from "@mantine/core"

export interface ProvidersProps {
  children: React.ReactNode
}

export function Mantine({ children }: ProvidersProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}
    >
      {children}
    </MantineProvider>
  )
}
