
import DashboardScript from "./DashboardScript";

const Dashboard = () => 
{
    const { jobs, users, renderList, RenderUsersList, RenderWorksList, RenderCreateWorks } = DashboardScript();

    console.log( "trabajos: ", jobs)
    console.log( "usuarios: ", users)

    return (
        <div className="Dashboard-container">
            <div>
                <button onClick={RenderUsersList}>ver usuarios</button>
                <button onClick={RenderWorksList}>ver trabajos</button>
                <button onClick={RenderCreateWorks}>crear trabajo</button>
            </div>

            <div>
                {renderList}
            </div>
        </div>
    );
}

export default Dashboard;