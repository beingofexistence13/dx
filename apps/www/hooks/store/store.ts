import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import sidebarReducer from "../slices/sidebarSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      sidebar: sidebarReducer,

    },
  });
}



export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
