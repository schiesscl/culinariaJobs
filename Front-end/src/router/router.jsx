import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/home/Home'
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';

import Main from '../main/Main';
import UserHome from '../components/userHome/UserHome';
import userProfile from '../components/userProfile/UserProfile';

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
        path: "/app",
        element: <Main />,
        children: [
            {
                path: "userHome",
                element: <UserHome />
            }
        ]
    }

])

export default router;