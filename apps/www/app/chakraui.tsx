"use client"

import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"

export interface ProvidersProps {
  children: React.ReactNode
}

export function Chakraui({ children }: ProvidersProps) {
  return <ChakraProvider>{children}</ChakraProvider>
}
