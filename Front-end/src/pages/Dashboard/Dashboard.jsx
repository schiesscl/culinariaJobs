
import DashboardScript from "./DashboardScript";

const Dashboard = () => 
{
    const { jobs, users, renderList, RenderUsersList, RenderWorksList } = DashboardScript();

    console.log( "trabajos: ", jobs)
    console.log( "usuarios: ", users)

    return (
        <div className="Dashboard-container">
            <div>
                <button onClick={RenderUsersList}>usuarios</button>
                <button onClick={RenderWorksList}>trabajos</button>
            </div>

            <div>
                {renderList}
            </div>
        </div>
    );
}

export default Dashboard;