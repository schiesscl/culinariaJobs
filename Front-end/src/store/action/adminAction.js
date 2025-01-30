import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = '';

export const getUsers = createAsyncThunk("getUsers", async () => 
{
    try
    {
        //const response = await axios.get(`${BASE_URL}`)
        return {
            users: [
                {id:2,name:"Norma",lastName:"Tamos",photo:"", email:"",phone:"",profession:[],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"},
                {id:3,name:"Antonio",lastName:"Fill",photo:"", email:"",phone:"",profession:[],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"},
                {id:4,name:"Paco",lastName:"Perez",photo:"", email:"",phone:"",profession:[],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"},
                {id:5,name:"Norma",lastName:"Tamos",photo:"", email:"",phone:"",profession:[],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"},
                {id:6,name:"Auriel",lastName:"Tamos",photo:"", email:"",phone:"",profession:[],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"}
            ]
        }
    }
    catch (error)
    {
        console.log("error al traer todos los usario" + error)
    }
})

export const getUserById = createAsyncThunk("getUserById", async (obj) =>
{
    try
    {
        //const response = await axios.get(`${BASE_URL}/${obj}`)
        return{
            users: {id:4,name:"Paco",lastName:"Perez",photo:"", email:"",phone:"",profession:[],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"}
        }
    }
    catch(error)
    {
        console.log("error al traer usario por id" + error)
    }
})
