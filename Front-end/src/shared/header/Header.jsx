import useHeaderScript from "./HeaderScript";
import "./HeaderStyle.css";

const Header = () => {
    const { ShowMenu, tipeMenu, isMenuOpen, UserActive } = useHeaderScript();

    console.log(isMenuOpen)

    return (
        <>
            <header onClick={ShowMenu} className={isMenuOpen ? "headerContainer_open" : "headerContainer"}>
                <figure className="logoContainer">
                    <img src="/Logo.svg" alt="Logo" />
                </figure>
                <div className="userBox">
                    <div className="containerUserName">
                        <h4 className="userName">
                            {UserActive.name + " " + UserActive.lastName}
                        </h4>
                        <p className="userDes">
                            {UserActive.profession[0]}
                        </p>
                    </div>
                    <figure>
                        <img className="userPhoto" src={UserActive.photo} alt="" />
                    </figure>
                </div>
            </header>
            {tipeMenu}
        </>
    );
}

export default Header;
