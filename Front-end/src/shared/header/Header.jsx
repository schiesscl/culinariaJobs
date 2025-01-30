import HeaderScript from "./HeaderScript";
import "./HeaderStyle.css";

const Header = () => {
    const { showMenu, ShowMenu } = HeaderScript();

    return (
        <header className="headerContainer">
            <figure>
                CulinariJobs
            </figure>
            <nav>
                <div onClick={ShowMenu}>
                    <h1>Menu</h1>
                </div>
                {
                    showMenu
                }
            </nav>
        </header>
    );
}

export default Header;