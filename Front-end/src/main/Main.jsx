import { Outlet } from "react-router-dom";

import Layout from "../layout/Layout";



const Main = () => {


    return(
        <>
            <Layout>
                    <Outlet />
            </Layout>
        </>
    )
}

export default Main;