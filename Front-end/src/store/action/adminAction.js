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
                {id:2,name:"Norma",lastName:"Tamos",photo:"https://i0.wp.com/www.buenossaborespanama.com/wp-content/uploads/2020/10/handsome-chef-pouring-olive-oil-on-meal.jpg?fit=1200%2C800&ssl=1", email:"",phone:"",profession:["Chef","Auxiliar Cocina"],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"},
                {id:3,name:"Antonio",lastName:"Fill",photo:"https://www.peru.travel/Contenido/Evento/Imagen/es/741/1.1/Evento/chef-desktop.jpg", email:"",phone:"",profession:["Jefe de cocina"],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"},
                {id:4,name:"Paco",lastName:"Perez",photo:"https://www.csftw.edu/wp-content/uploads/Types-of-Chefs.jpg", email:"",phone:"",profession:["Chef"],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"},
                {id:5,name:"Norma",lastName:"Tamos",photo:"https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D", email:"",phone:"",profession:["Chef","Auxiliar Cocina"],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"},
                {id:6,name:"Norma",lastName:"Tamos",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05IYtyxuySluqa17CmZQI8l5i3-85kcLNMYVtsKfzvu_mL9HLAeA831-Y2NHeG0dvbu4&usqp=CAU", email:"",phone:"",profession:["Auxiliar Cocina", "Mozo"],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"},
                {id:7,name:"Norma",lastName:"Tamos",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05IYtyxuySluqa17CmZQI8l5i3-85kcLNMYVtsKfzvu_mL9HLAeA831-Y2NHeG0dvbu4&usqp=CAU", email:"",phone:"",profession:["Auxiliar Cocina", "Mozo"],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"},
                {id:8,name:"Norma",lastName:"Tamos",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05IYtyxuySluqa17CmZQI8l5i3-85kcLNMYVtsKfzvu_mL9HLAeA831-Y2NHeG0dvbu4&usqp=CAU", email:"",phone:"",profession:["Auxiliar Cocina", "Mozo"],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"},
                {id:9,name:"Norma",lastName:"Tamos",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05IYtyxuySluqa17CmZQI8l5i3-85kcLNMYVtsKfzvu_mL9HLAeA831-Y2NHeG0dvbu4&usqp=CAU", email:"",phone:"",profession:["Auxiliar Cocina", "Mozo"],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"},
                {id:10,name:"Norma",lastName:"Tamos",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05IYtyxuySluqa17CmZQI8l5i3-85kcLNMYVtsKfzvu_mL9HLAeA831-Y2NHeG0dvbu4&usqp=CAU", email:"",phone:"",profession:["Auxiliar Cocina", "Mozo"],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"},
                {id:11,name:"Norma",lastName:"Tamos",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05IYtyxuySluqa17CmZQI8l5i3-85kcLNMYVtsKfzvu_mL9HLAeA831-Y2NHeG0dvbu4&usqp=CAU", email:"",phone:"",profession:["Auxiliar Cocina", "Mozo"],experience:[{}],education:[{}],skills:[],aboutMe:"",cv:"",rol:"user"},
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
