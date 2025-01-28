import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { userRegister } from '../../store/action/userAction';

const RegisterScript = () => 
{
    const dispatch = useDispatch();

    const [registerData, setRegisterData] = useState({
        userName: '',
        userLastName: '',
        email: '',
        password: '',
        confirmpassword: ''
    })

    const handleInput = async (event) => 
    {
        setRegisterData({
            ...registerData,
            [event.target.name]: event.target.value
        })
    };


    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            dispatch(userRegister(registerData));
        } catch (error) {
            console.error('Error en la acción userRegister:', error);
        }

    }

    console.log(registerData)

    return {
        handleInput,
        handleRegister
    }
}

export default RegisterScript;