import { useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import { userLogin } from '../../store/action/userAction';

const LoginScript = () => 
{
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: '', 
        password: ''
    });

    const handleInput = (event) => 
    {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const handleSignIn = async (user) => 
    {
        user.preventDefault();
        try {
            dispatch(userLogin({
                data: formData
            }));
        } catch (error) {
            console.log(error);
        }
    }

    return {
        handleInput,
        handleSignIn
    }
}

export default LoginScript;