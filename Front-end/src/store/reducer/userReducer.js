import { createReducer } from "@reduxjs/toolkit"
import { userLogin, userLogout, userRegister, userDelete, userEdit, userPersistence } from "../action/userAction"


const inicialStateUser = {
    user: null,
    token: null
}

const userReducer = createReducer(inicialStateUser,(builder) => builder 
    .addCase(userLogin.fulfilled, (state, action) => {
        return {
            ...state,
            user: action.payload.user,
            token: action.payload.token
        }
    })
    .addCase(userLogout.fulfilled, (state, action) => {
        return{
            ...state,
            user: null,
            token: null
        }
    })
    .addCase(userRegister.fulfilled, (state, action) => {
        return{
            ...state,
            user:action.payload.user
        }
    })
    .addCase(userDelete.fulfilled, (state, action) => {
        return{
            ...state,
            user:action.payload.user
        }
    })
    .addCase(userEdit.fulfilled, (state, action) => {
        return{
            ...state,
            user:action.payload.user
        }
    })
    .addCase(userPersistence, (state, action) => {
        return{
            ...state,
            user:action.payload.user
        }
    })
)

export default userReducer;