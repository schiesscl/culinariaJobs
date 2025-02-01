import Btn from '../../props/button/Btn'

import './NavBarStyle.css'

const NavBar = ({userActive}) => {

    return (
        <nav className="NavBarContainer">
            <div className='navMenu'>
                <Btn title="Inicio" style={"btn_menu"} to="/app/userHome" />
                <Btn title="Perfil" style={"btn_menu"} to={`/app/userProfile/${userActive.id}`} />
                {
                    userActive.rol == 'admin' ? <Btn title="Dashboard" style={"btn_menu"} to="/app/dashboard" /> : null
                }
                <Btn title="Salir" style={"btn_menu"} to="/" />
            </div>
        </nav>
    )
}

export default NavBar