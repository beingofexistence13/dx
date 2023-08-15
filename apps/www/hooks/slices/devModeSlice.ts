import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  isDev: false,
} as any;

const devModeSlice = createSlice({
  name: "dev",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isDev = true;
    },
  },

});

export const { toggle } = devModeSlice.actions;

export default devModeSlice.reducer;
