import HeaderScript from "./HeaderScript";
import "./HeaderStyle.css";

const Header = () => {
    const { ShowMenu } = HeaderScript();

    return (
        <header className="headerContainer">
            <figure>
                CulinariJobs
            </figure>
            <nav>
                { ShowMenu() }
            </nav>
        </header>
    );
}

export default Header;