import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  isGuestLayout: false,
} as any

const guestLayoutSlice = createSlice({
  name: "guestLayout",
  initialState,
  reducers: {
    updateGuestLayout: (state, action) => {
      state.isGuestLayout = action.payload
    },
    on: (state, action) => {
      state.isGuestLayout = true
    },
    off: (state, action) => {
      state.isGuestLayout = false
    },
  },
})

export const { updateGuestLayout, on, off } = guestLayoutSlice.actions

export default guestLayoutSlice.reducer
