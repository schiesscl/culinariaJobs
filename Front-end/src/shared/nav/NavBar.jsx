import Btn from '../../props/button/Btn'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBarStyle.css'
import { useDispatch } from 'react-redux'
import { userLogout } from '../../store/action/userAction'

const NavBar = ({userActive}) => {

    const dispatch = useDispatch()

    const HandleSalir = () => 
    {
        dispatch(userLogout())
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Btn title="Inicio" style="nav-link" to="/app/userHome" />
                <Btn title="Perfil" style="nav-link" to={`/app/userProfile/${userActive.id}`} />
                {
                    userActive.role.id == 2 ? <Btn title="Dashboard" style="nav-link" to="/app/dashboard" /> : null
                }
                <Btn title="Salir" style="nav-link" to="/" onClick={HandleSalir} />
            </div>
        </nav>
    )
}

export default NavBar