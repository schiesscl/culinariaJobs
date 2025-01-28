
import DashboardScript from "./DashboardScript";

const Dashboard = () => 
{
    const { jobs, users } = DashboardScript();

    console.log(jobs)
    console.log(users)

    return (
        <div className="Dashboard-container">

        </div>
    );
}

export default Dashboard;