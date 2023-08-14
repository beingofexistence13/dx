import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import sidebarReducer from "./slices/sidebarSlice";
import devReducer from "./slices/devSlice";

export function makeStore() {
  return configureStore({
    
    reducer: {
      user: userReducer,
      sidebar: sidebarReducer,
      dev: devReducer,

    },
  });
}



export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
