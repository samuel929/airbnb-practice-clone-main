import { createSlice } from '@reduxjs/toolkit';

const popUpSlice=createSlice({
    name:"popup",
    initialState:false,
    reducers:{
        openPop:(state:boolean)=>!state,
        close:(state:boolean)=>state=false
    }
})

export const {openPop,close}=popUpSlice.actions;
export default popUpSlice.reducer;