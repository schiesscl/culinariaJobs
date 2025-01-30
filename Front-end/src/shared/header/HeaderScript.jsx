import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogout } from "../../store/action/userAction";

import Btn from "../../props/button/Btn";

const HeaderScript = () => {

    const userActive = useSelector(store => store.userReducer.user);

    const dispatch = useDispatch()

    const handleSignOut = () =>
    {
        dispatch(userLogout())
        setTimeout(() => {
            window.location.reload()
        }, 1)
    }


    const [showMenu, setShowMenu] = useState(null)

    const ShowMenu = () => {
        setShowMenu(
            <div>
                <Btn title="Home" to="/app/userHome" />
                <Btn title="Perfil" to={`/app/userProfile/${userActive.id}`} />
                {
                userActive.rol === "admin" ? 
                <Btn title="Dasboard" to="/app/dashboard" /> : null
                }
                <button onClick={handleSignOut}>Salir</button>
            </div>
        )
    }

    return {
        ShowMenu,
        showMenu
    };
}

export default HeaderScript;