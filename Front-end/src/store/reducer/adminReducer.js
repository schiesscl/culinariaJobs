import { createReducer } from "@reduxjs/toolkit";
import { getUsers, getUserById, deleteUserByAdmin } from "../action/adminAction";

const inicialStateAdmin = {
    users: null
}

const adminReducer = createReducer(inicialStateAdmin, 
    (builder) => builder
    .addCase( getUsers.fulfilled, (state, action) => {
        return {
            ...state,
            users: action.payload.users
        }
    })
    .addCase( getUserById.fulfilled, (state, action) => {
        return {
            ...state,
            users: action.payload.users
        }
    })
    .addCase( deleteUserByAdmin.fulfilled, (state, action) => {
        return{
            ...state,
            user: action.payload.user
        }
    })
)


export default adminReducer