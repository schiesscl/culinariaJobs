import { createReducer } from "@reduxjs/toolkit";
import { getUsers } from "../action/adminAction";

const inicialStateAdmin = {
    users: []
}

const adminReducer = createReducer(inicialStateAdmin, 
    (builder) => builder
    .addCase( getUsers.fulfilled, (state, action) => {
        return {
            ...state,
            users: action.payload.users
        }
    })
)


