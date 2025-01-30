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
        const response = await axios.get(`${BASE_URL}`)
        return {
            jobs: [
                {id:1, title:"Trabajo1"},
                {id:2, title:"Trabajo1"},
                {id:3, title:"Trabajo1"},
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