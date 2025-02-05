import useHeaderScript from "./HeaderScript";
import "./HeaderStyle.css";
import NavBar from '../nav/NavBar';

const Header = () => {
    const { ShowMenu, isMenuOpen, UserActive } = useHeaderScript();

    console.log(UserActive)

    return (
        <>
            <header onClick={ShowMenu} className={isMenuOpen ? "headerContainer_open" : "headerContainer"}>
                <div className="headerContent">
                    <figure className="logoContainer">
                        <img src="/Logo.svg" alt="Logo" />
                    </figure>
                    <div className="userBox">
                        <div className="containerUserName">
                            <h4 className="userName">
                                {UserActive.name + " " + UserActive.last_name}
                            </h4>
                            <p className="userDes">
                                {UserActive.profession[0]}
                            </p>
                        </div>
                        <figure>
                            <img className="userPhoto" src={UserActive.photo} alt="" />
                        </figure>
                    </div>
                </div>
            </header>
            {isMenuOpen && <NavBar userActive={UserActive} />}
        </>
    );
}

export default Header;