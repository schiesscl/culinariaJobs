import DashboardScript from "./DashboardScript";
import './DashboardStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
    const { jobs, users, renderList, RenderUsersList, RenderWorksList, RenderCreateWorks } = DashboardScript();

    console.log("trabajos: ", jobs)
    console.log("usuarios: ", users)

    return (
        <div className="Dashboard-container">
            <div className="Dashboard-container-menu">
                <div className="Dashboard-but-menu">
                    <button className="btn-dasboard" onClick={RenderUsersList}>Ver usuarios</button>
                    <button className="btn-dasboard" onClick={RenderWorksList}>Ver trabajos</button>
                    <button className="btn-dasboard" onClick={RenderCreateWorks}>Crear trabajo</button>
                </div>
            </div>

            {
                renderList != null ?
                    <div className="Dashboard-Vew">
                        {renderList}
                    </div> : null
            }


        </div>
    );
}

export default Dashboard;