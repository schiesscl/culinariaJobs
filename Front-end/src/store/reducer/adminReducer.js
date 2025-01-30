import { createReducer } from "@reduxjs/toolkit";
import { getUsers, getUserById } from "../action/adminAction";

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
)


export default adminReducer