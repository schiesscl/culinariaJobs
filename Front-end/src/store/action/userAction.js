import { createAsyncThunk, createAction } from "@reduxjs/toolkit"
import axios from "axios";

const BASE_URL = 'https://back-end-latest-ggv4.onrender.com';

export const userLogin = createAsyncThunk('userLogin', async (obj) => {
    try {
        const { data } = await axios.post(`https://back-end-latest-ggv4.onrender.com/auth/login`, obj.data)

        console.log(data)

        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.loginUserResponses[0]))

        return {
            user: data.loginUserResponses[0],
            token: data.token
        }


    } catch (error) {

        console.error('Error logging in:', error);
        return {
            user: null,
            token: null
        }
    }
})

export const userLogout = createAsyncThunk('userLogout', async () => {
    try {

        localStorage.removeItem('token');
        localStorage.removeItem('user');

        return {
            user: null,
            token: null
        }
    } catch (error) {
        console.error('Error logging out:', error);
        return {
            user: null,
            token: null,
        }
    }
})

export const userRegister = createAsyncThunk('userRegister', async (obj) => {
    try {
        const { data } = await axios.post(`https://back-end-latest-ggv4.onrender.com/auth/register`, obj)

        console.log(data)
        return {
            user: data.response
        }
    } catch (error) {
        console.error('Error registering user:', error);
        return {
            user: null
        };
    }
})

export const userEdit = createAsyncThunk('userEdit', async ({ id, userData }) => {
    try {
        let token = localStorage.getItem('token');
        let configs = { headers: { 'Authorization': `Bearer ${token}` } };

        console.log('Token:', token);  
        console.log('Configs:', configs);  
        console.log('UserData:', userData);  

        const { data } = await axios.put(`${BASE_URL}/users/${id}`, userData, configs);
        return {
            user: data.response
        };
    } catch (error) {
        console.error('Error editing user:', error);
        return {
            user: null
        };
    }
});

export const userDelete = createAsyncThunk('userDelete', async (email) => {
    try {
        console.log(id)

        let token = localStorage.getItem('token');
        let configs = { headers: { 'Authorization': `Bearer ${token}` } }

        await axios.delete(`${BASE_URL}/auth/by-email/${email}`, configs);

        localStorage.removeItem('token');
        localStorage.removeItem('user');

        return {
            user: null,
            token: null,
            success: true
        };
    } catch (error) {
        console.error('Error deleting user:', error);
        return {
            success: false
        };
    }
});

export const userPersistence = createAction("userPersistence", (obj) => {
    return {
        payload: {
            user: obj,
        }
    }
})