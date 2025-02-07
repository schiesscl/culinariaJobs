import { Outlet } from "react-router-dom";

import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";

import './LayoutStyle.css';


const Layout = () =>
{
    return(
        <div className="content">
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;