import Btn from '../../props/button/Btn'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBarStyle.css'

const NavBar = ({userActive}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Btn title="Inicio" style="nav-link" to="/app/userHome" />
                <Btn title="Perfil" style="nav-link" to={`/app/userProfile/${userActive.id}`} />
                {
                    userActive.rol == 'admin' ? <Btn title="Dashboard" style="nav-link" to="/app/dashboard" /> : null
                }
                <Btn title="Salir" style="nav-link" to="/" />
            </div>
        </nav>
    )
}

export default NavBar