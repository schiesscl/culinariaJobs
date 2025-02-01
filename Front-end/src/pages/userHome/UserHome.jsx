import WorkByCategory from "../../props/workByCategory/workByCategory";

import "./UserHomeStyle.css";


const UserHome = () => {

    return (
        <div className="user-home-container">
            <div className="user-home-top">
                <h1>Bienvenido</h1>
            </div>
            <div>
                <WorkByCategory />
            </div>
        </div>
    );
};

export default UserHome;
