import { useSelector } from "react-redux"


const DashboardScript = () =>
{
    const jobs = useSelector(store => store.jobsReducer.jobs)
    const users = useSelector(store => store.adminReducer.users)


    return{
        jobs,
        users
    }
}

export default DashboardScript;