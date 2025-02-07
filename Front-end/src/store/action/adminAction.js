import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'https://back-end-latest-ggv4.onrender.com';

export const getUsers = createAsyncThunk("getUsers", async () => {
    try {
        let token = localStorage.getItem('token');
        let configs = { headers: { 'Authorization': `Bearer ${token}` } }
        const response = await axios.get(`${BASE_URL}/users`, configs)

        return {
            users: response.data
        }
    }
    catch (error) {
        console.log("error al traer todos los usario" + error)
    }
})

export const getUserById = createAsyncThunk("getUserById", async (obj) => {
    try {

        let token = localStorage.getItem('token');
        let configs = { headers: { 'Authorization': `Bearer ${token}` } }

        const response = await axios.get(`${BASE_URL}/users/${obj}`, configs)
        return {
            users: response.data
        }
    }
    catch (error) {
        console.log("error al traer usario por id" + error)
        return {
            users: null
        }
    }
})


export const deleteUserByAdmin = createAsyncThunk("deleteUserByAdmin", async(id) => {
    try{

        let token = localStorage.getItem('token');
        let configs = { headers: { 'Authorization': `Bearer ${token}` } }

        await axios.delete(`${BASE_URL}/auth/by-id/${id}`, configs);

        return {
            success: true
        };
    } catch (error) {
        console.error('Error deleting user:', error);
        return {
            success: false
        };
    }
})