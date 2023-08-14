import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  isDev: false,
} as any;

const devSlice = createSlice({
  name: "dev",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isDev = true;
    },
  },

});

export const { toggle } = devSlice.actions;

export default devSlice.reducer;
