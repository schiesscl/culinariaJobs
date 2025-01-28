import { useSelector } from "react-redux";

const HeaderScript = () => {

    const data = useSelector(store => store.userReducer);

    const ShowMenu = () => {
        if (data.user != null && data.user.rol === "user") {
            return (
                <div>
                    <a href="/perfil">Perfil</a>
                    <a href="/logout">Salir</a>
                </div>
            );
        }
        return null;
    }
    return { 
        ShowMenu
     };
}

export default HeaderScript;