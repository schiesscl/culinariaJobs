import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { userLogin } from '../../store/action/userAction';
import userReducer from '../../store/reducer/userReducer';

const LoginScript = () => 
{
    const dispatch = useDispatch();

    const [loginData, setLoginData] = useState({
        userName: '', 
        password: ''
    });

    const testo = useSelector(store => store.userReducer);

    const handleInput = async (event) => 
    {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        });
    };

    const handleLogin = async (event) => 
    {
        event.preventDefault();
        try {
            dispatch(userLogin({
                data: loginData
            }));
        } catch (error) {
            console.log('Error en la acción userLogin:', error);
        }
    }

    console.log('testo:', testo);
    console.log('loginData:', loginData);

    return {
        handleInput,
        handleLogin
    }
}

export default LoginScript;