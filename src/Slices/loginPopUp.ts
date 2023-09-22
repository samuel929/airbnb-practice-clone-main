import { createSlice } from '@reduxjs/toolkit';

const logInPopUpSlice=createSlice({
    name:"popup",
    initialState:false,
    reducers:{
        open:(state:boolean)=>!state,
        close:(state:boolean)=>state=false
    }
})

export const {open,close}=logInPopUpSlice.actions;
export default logInPopUpSlice.reducer;