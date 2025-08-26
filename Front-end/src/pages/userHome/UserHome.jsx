import WorkByCategory from "../../props/workByCategory/WorkByCategory";
import "./UserHomeStyle.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserHome = () => {
    return (
        <div className="user-home-container">
            <div className="user-home-top">
                <h1>Bienvenido</h1>
            </div>
            <div className="work-category-section">
                <WorkByCategory />
            </div>
        </div>
    );
};

export default UserHome;