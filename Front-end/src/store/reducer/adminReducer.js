import { createReducer } from "@reduxjs/toolkit";
import { getUsers } from "../action/adminAction";

const inicialStateAdmin = {
    users: [
        {id:2,name:"Norma",lastName:"Tamos",photo:"", email:"",phone:"",profession:[],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"},
        {id:3,name:"Antonio",lastName:"Fill",photo:"", email:"",phone:"",profession:[],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"},
        {id:4,name:"Paco",lastName:"Perez",photo:"", email:"",phone:"",profession:[],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"},
        {id:5,name:"Norma",lastName:"Tamos",photo:"", email:"",phone:"",profession:[],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"},
        {id:6,name:"Norma",lastName:"Tamos",photo:"", email:"",phone:"",profession:[],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"}
    ]
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


export default adminReducer