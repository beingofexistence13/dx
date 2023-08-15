import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  isDev: false,
} as any;

const devModeSlice = createSlice({
  name: "dev",
  initialState,
  reducers: {
    updateDev: (state,action) => {
      state.isDev = action.payload;
    },
    on: (state,action) => {
      state.isDev = true;
    },
    off: (state,action) => {
      state.isDev = false;
    },
  },

});

export const { updateDev,on,off } = devModeSlice.actions;

export default devModeSlice.reducer;
