"use client"

import * as React from "react"
import { PrimeReactContext, PrimeReactProvider } from "primereact/api"

export interface ProvidersProps {
  children: React.ReactNode
}

export function PrimeReact({ children }: ProvidersProps) {
  return <PrimeReactProvider>{children}</PrimeReactProvider>
}
