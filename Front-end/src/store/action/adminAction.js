import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getUsers = createAsyncThunk("getUsers", async () => 
{
    try
    {
        const response = await axios.get("")
        return {
            users: response.data.users
        }
    }
    catch (error)
    {
        console.log(error)
    }
})

