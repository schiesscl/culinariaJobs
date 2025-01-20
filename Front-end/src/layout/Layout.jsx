import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";


const Layout = ([children]) =>
{
    return(
        <>
            <Header />
                {children}
            <Footer/>
        </>
    )
}

export default Layout;