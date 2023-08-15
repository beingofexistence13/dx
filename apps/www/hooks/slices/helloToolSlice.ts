import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  isDev: false,
} as any;

const helloToolSlice = createSlice({
  name: "dev",
  initialState,
  reducers: {
    updateHello: (state,action) => {
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

export const { updateHello,on,off } = helloToolSlice.actions;

export default helloToolSlice.reducer;
