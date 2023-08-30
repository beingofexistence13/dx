// Imports
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'



// Store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})





// Exports
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
