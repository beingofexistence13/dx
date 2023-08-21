import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  isHelloTool: false,
} as any

const helloToolSlice = createSlice({
  name: "helloTool",
  initialState,
  reducers: {
    updateHello: (state, action) => {
      state.isHelloTool = action.payload
    },
    on: (state, action) => {
      state.isHelloTool = true
    },
    off: (state, action) => {
      state.isHelloTool = false
    },
  },
})

export const { updateHello, on, off } = helloToolSlice.actions

export default helloToolSlice.reducer
