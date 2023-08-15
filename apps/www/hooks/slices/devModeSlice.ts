import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  isDev: false,
} as any;

const devModeSlice = createSlice({
  name: "dev",
  initialState,
  reducers: {
    update: (state,action) => {
      state.isDev = action.payload.isDev;
    },
  },

});

export const { update } = devModeSlice.actions;

export default devModeSlice.reducer;
