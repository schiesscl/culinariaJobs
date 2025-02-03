import { useDispatch } from "react-redux";
import { useState } from "react";
import { userEdit } from "../../store/action/userAction";

const UserEditProfileScript = () => {
    const dispatch = useDispatch();

    const [editData, setEditData] = useState({
        name: '',
        lastName: '',
        photo: '',
        phone: '',
        profession: [],
        skills: [],
        aboutMe: '',
        cv: ''
    });

    const handleInput = (event) => {
        const { name, value } = event.target;
        setEditData({
            ...editData,
            [name]: value
        });
    };

    const handleCheckbox = (event) => {
        const { name, value } = event.target;
        setEditData((prevData) => {
            if (prevData[name].includes(value)) {
                return {
                    ...prevData,
                    [name]: prevData[name].filter((item) => item !== value)
                };
            } else {
                return {
                    ...prevData,
                    [name]: [...prevData[name], value]
                };
            }
        });
    };

    const handleEdit = async (event) => {
        event.preventDefault();
        try {
            dispatch(userEdit(editData));
        } catch (error) {
            console.error('Error en la acción userEdit:', error);
        }
    };

    console.log(editData)

    return {
        handleInput,
        handleCheckbox,
        handleEdit
    };
};

export default UserEditProfileScript;
