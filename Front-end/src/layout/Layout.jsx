import { Outlet } from "react-router-dom";

import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";

import './LayoutStyle.css';


const Layout = () =>
{
    return(
        <>
            <Header />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout;