import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  isDevMode: false,
} as any;

const devModeSlice = createSlice({
  name: "dev",
  initialState,
  reducers: {
    updateDevMode: (state,action) => {
      state.isDevMode = action.payload;
    },
    on: (state,action) => {
      state.isDevMode = true;
    },
    off: (state,action) => {
      state.isDevMode = false;
    },
  },

});

export const { updateDevMode,on,off } = devModeSlice.actions;

export default devModeSlice.reducer;
