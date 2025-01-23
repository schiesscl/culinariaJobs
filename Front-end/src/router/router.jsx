import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/home/Home'
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';

import Header from '../shared/header/Header';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/header",
        element: <Header />
    }

])

export default router;