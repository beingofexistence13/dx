import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  isOpen: false,
} as any

const sidebarSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++
    },
  },
})

export const { increment } = sidebarSlice.actions

export default sidebarSlice.reducer
