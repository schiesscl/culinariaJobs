import { createReducer } from "@reduxjs/toolkit"
import { userLogin, userLogout, userRegister } from "../action/userAction"


const incialStateUser = {
    user: null,
    token: null
}

const userReducer = createReducer(incialStateUser,
    (builder) => builder 
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
            user: action.payload.user,
            token: action.payload.token
        }
    })
    .addCase(userRegister.fulfilled, (state, action) => {
        return{
            ...state,
            user:action.payload
        }
    })
)

export default userReducer