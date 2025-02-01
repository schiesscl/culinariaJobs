import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = '';

export const createJob = createAsyncThunk("createJob", async(obj) => 
{
    try{
        const { data } = await axios.post(`${BASE_URL}`, obj)

        return{
            jobs: data.response.jobs
        }
    } catch (error)
    {
        console.error('Error crearte job:', error);
        return {
            jobs: null
        };
    }
})

export const editJob = createAsyncThunk("editJob", async(obj) => 
{
    try
    {
        const { data } = await axios.put(`${BASE_URL}`, obj)
        return{
            jobs: data.response.jobs
        }
    }
    catch(error)
    {
        console.error('Error edit job:', error);
        return {
            jobs: null
        };
    }
})


export const getJobs = createAsyncThunk("getJobs", async () => 
{
    try 
    {
        //const response = await axios.get(`${BASE_URL}`)
        return {
            jobs: [
                { id: 1, title: "Chef", category: "Cocina", salario: "1000 USD", restaurante: "La Cocina Feliz", turno: "mañana" },
                { id: 2, title: "Auxiliar de cocina", category: "Cocina", salario: "700 USD", restaurante: "La Cocina Feliz", turno: "tarde" },
                { id: 3, title: "Mozo", category: "Servicio", salario: "600 USD", restaurante: "La Cocina Feliz", turno: "noche" },
                { id: 4, title: "Barista", category: "Bebidas", salario: "800 USD", restaurante: "Café del Cielo", turno: "mañana" },
                { id: 5, title: "Sommelier", category: "Bebidas", salario: "1200 USD", restaurante: "Café del Cielo", turno: "tarde" },
                { id: 6, title: "Pastelero", category: "Repostería", salario: "950 USD", restaurante: "Dulce Delicia", turno: "mañana" },
                { id: 7, title: "Camarero", category: "Servicio", salario: "600 USD", restaurante: "Dulce Delicia", turno: "tarde" },
                { id: 8, title: "Cocinero", category: "Cocina", salario: "1100 USD", restaurante: "Dulce Delicia", turno: "noche" },
                { id: 9, title: "Lavaplatos", category: "Cocina", salario: "500 USD", restaurante: "La Cocina Feliz", turno: "tarde" },
                { id: 10, title: "Gerente de restaurante", category: "Administración", salario: "1500 USD", restaurante: "La Cocina Feliz", turno: "mañana" },
                { id: 11, title: "Encargado de inventario", category: "Administración", salario: "900 USD", restaurante: "Café del Cielo", turno: "tarde" },
                { id: 12, title: "Maitre", category: "Servicio", salario: "1300 USD", restaurante: "Dulce Delicia", turno: "noche"}
            ]
        }
    } catch (error)
    {
        console.error('Error get job:', error);
        return {
            jobs: null
        };
    }
})


export const getJobByID = createAsyncThunk("getJobByID", async (obj) => 
{
    try 
    {
        const response = await axios.get(`${BASE_URL}/${obj.id}`)
        return {
            jobs: {id:2, title:"Trabajo1"},
        }
    } catch (error)
    {
        console.error('Error get job by id:', error);
        return {
            jobs: null
        };
    }
})

export const deleteJob = createAsyncThunk("deleteJob", async(obj) => 
{
    try{
        const response = await axios.delete(`${BASE_URL}`, {data:obj})
        return{
            jobs: [],
            success: true
        }
    }
    catch (error)
    {
        console.error('Error delete job:', error);
        return {
            success: false
        };
    }
})