import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getUserById } from "../../store/action/adminAction"


const UserReview = () => {

    const { id } = useParams()
    const distpach = useDispatch();

    useEffect(() => {
        distpach(getUserById(id))
    }, [distpach,id])

    const userView = useSelector(store => store.adminReducer.users)

    console.log("usuario traido por id: ",userView)

    return(
        <>
        <h1>
            estoy en la id: {id}
        </h1>
        <button>
            eliminar
        </button>
        </>
    )
}

export default UserReview;