import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/home/Home'
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';

import Main from '../main/Main';
import UserHome from '../pages/userHome/UserHome';
import UserProfile from '../pages/userProfile/UserProfile';

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
            },
            {
                path: "userProfile",
                element: <UserProfile />
            }
        ]
    }

])

export default router;