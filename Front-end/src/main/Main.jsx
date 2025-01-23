import { Outlet } from "react-router-dom";

import Layout from "../layout/Layout";

const Main = () => {


    return(
        <>
            <Layout>
                <main>
                    <Outlet />
                </main>
            </Layout>
        </>
    )
}

export default Main;