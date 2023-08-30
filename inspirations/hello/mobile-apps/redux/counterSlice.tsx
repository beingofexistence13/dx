// Imports
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Typescript 
export interface CounterState {
  value: number
  name: String,
  email: String,
}

const initialState: CounterState = {
  value: 100,
  name:"Emon",
  email:"manfromearth25@gmail.com",
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state,action) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    update: (state,action: PayloadAction<String>) => {
        
      state.name = action.playload.name;
      state.email = action.playload.email;
      
    },
    
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer;

