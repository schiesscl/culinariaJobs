import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";


export const userLogin = createAsyncThunk('user_login', async (obj) => {
    try {
        const { data } = await axios.post('', obj.data)
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))

        return {
            user: data.response.user,
            token: data.response.token
        }
        
    } catch (error) {
        console.log(error)
        return {
            user: null
        }
    }
})

export const userLogout = createAsyncThunk('user_logout', async () => {
    try {

        let url = ''
        let token = localStorage.getItem('token')
        let configs = { headers: { 'Authorization': `Bearer ${token}` } }
        axios.post(url, null, configs)

        localStorage.removeItem('token');
        localStorage.removeItem('user');

        return {
            user: null,
            token: null
        }
    } catch (error) {
        console.log(error);
        return false;
    }
})

export const userSignUp = createAsyncThunk('user_sign_up', async (obj) => {
    try {
        const { data } = await axios.post('', obj)
        console.log("funSignUp", data)

        return {
            user: data.response

        }
    } catch (error) {
        console.log(error)
    }
})