import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state:number) => state + 1,
    decrement: (state:number) => {
        if(state < 1){
           return state =0;
        }else{
           return state - 1;
        }

    }
  },
});



export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
