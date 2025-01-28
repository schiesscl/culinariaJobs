import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducer/userReducer';
import jobsReducer from './reducer/jobsReducer';
import adminReducer from './reducer/adminReducer';
 

const store = configureStore({
    reducer: {
        userReducer,
        jobsReducer,
        adminReducer
    }
})

export default store;