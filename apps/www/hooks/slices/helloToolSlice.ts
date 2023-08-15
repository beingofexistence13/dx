import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  isDev: false,
} as any;

const helloToolSlice = createSlice({
  name: "dev",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isDev = true;
    },
  },

});

export const { toggle } = helloToolSlice.actions;

export default helloToolSlice.reducer;
