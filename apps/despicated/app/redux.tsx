"use client"

import { Provider } from "react-redux"
import * as React from "react";
import { store } from "../hooks/store"

export function Redux({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}
