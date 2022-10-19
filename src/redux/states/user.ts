import { UserInfo } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const EmptyUserState:UserInfo={
    name: '',
    gender: '',
    status: ''
}

export const userSlice= createSlice({
name:'user',
initialState: EmptyUserState,
reducers:{
    createUser:(state, action)=> action.payload,
    modifyUser:(state, action)=>({...state,...action.payload}),
    resetUser:()=>EmptyUserState
}
});

export const {createUser,modifyUser, resetUser}= userSlice.actions;

export default userSlice.reducer;