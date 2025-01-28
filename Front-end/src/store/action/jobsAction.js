import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const createJob = createAsyncThunk("createJob", async(obj) => 
{
    try{
        const { data } = await axios.post('', obj)

        return{
            jobs: data.response.jobs
        }
    } catch (error)
    {
        console.log(error)
    }
})

export const editJob = createAsyncThunk("editJob", async(obj) => 
{
    try
    {
        const { data } = await axios.put('', obj)
    }
    catch(error)
    {
        console.log(error)
    }
})

// traigo todos los trabajos
export const getJobs = createAsyncThunk("getJobs", async () => 
{
    try 
    {
        const response = await axios.get("")
        return {
            jobs: response.data.jobs
        }
    } catch (error)
    {
        console.log(error)
    }
})

// traigo los trabajos por ID
export const getJobByID = createAsyncThunk("getJobByID", async (obj) => 
{
    try 
    {
        const response = await axios.get(`${obj.id}`)
        return {
            jobs: response.data.jobs
        }
    } catch (error)
    {
        console.log(error)
    }
})

export const deleteJob = createAsyncThunk("deleteJob", async() => 
{
    try{
        const response = await axios.delete(`${obj.id}`)
    }
    catch (error)
    {
        console.log(error)
    }
})