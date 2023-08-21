import { configureStore } from "@reduxjs/toolkit"

import devModeReducer from "./slices/devModeSlice"
import helloToolReducer from "./slices/helloToolSlice"
import sidebarReducer from "./slices/sidebarSlice"
import userReducer from "./slices/userSlice"

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      sidebar: sidebarReducer,
      devMode: devModeReducer,
      helloTool: helloToolReducer,
    },
  })
}

export const store = makeStore()
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
