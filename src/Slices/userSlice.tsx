import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'user',
  initialState:{
      user:null
  },
  reducers: {
    setUser:(state,action)=>{
        state.user=action.payload
    },
  },
});



export const { setUser} = counterSlice.actions;
export default counterSlice.reducer;
