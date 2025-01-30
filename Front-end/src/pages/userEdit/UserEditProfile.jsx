
import { useParams } from "react-router-dom"

const UserEditProfile = () => {

    const {id} = useParams()

    return(
        <>
        <h1>Editar usuario {id} </h1>
        </>
    )
}

export default UserEditProfile;