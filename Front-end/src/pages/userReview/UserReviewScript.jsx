import { useSelector,useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import { getUserById, deleteUserByAdmin } from "../../store/action/adminAction";
import { useEffect } from "react";

const UserReviewScript = () => {

    const data = useSelector(store => store.adminReducer.users);

    const { id } = useParams()

    const dispatch = useDispatch()

    const professions = () => {
        if (data.profession == null) {
            return "Sin profesión";
        } else {
            return data.profession.map((prof) => prof + "").join(" - ");
        }
    }
    
    
    useEffect(() => {
        dispatch(getUserById(id))
    },[dispatch, id])
    


    const DeleteUser = () => {
        dispatch(deleteUserByAdmin(id))
    }


    return {
        data,
        professions,
        DeleteUser
    };
}

export default UserReviewScript;
