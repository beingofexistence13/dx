import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  isUserLayout: false,
} as any

const userLayoutSlice = createSlice({
  name: "userLayout",
  initialState,
  reducers: {
    updateUserLayout: (state, action) => {
      state.isUserLayout = action.payload
    },
    on: (state, action) => {
      state.isUserLayout = true
    },
    off: (state, action) => {
      state.isUserLayout = false
    },
  },
})

export const { updateUserLayout, on, off } = userLayoutSlice.actions

export default userLayoutSlice.reducer
