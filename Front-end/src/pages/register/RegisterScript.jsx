import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { userRegister } from '../../store/action/userAction';

const RegisterScript = () => 
{

    /*
    Testiado - funciona perfecto
    */

    const dispatch = useDispatch();

    const [registerData, setRegisterData] = useState({
        name: '',
        last_name: '',
        email: '',
        password: '',
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

        console.log(registerData)

        try {
            dispatch(userRegister(registerData));
        } catch (error) {
            console.error('Error en la acción userRegister:', error);
        }

    }

    return {
        handleInput,
        handleRegister
    }
}

export default RegisterScript;