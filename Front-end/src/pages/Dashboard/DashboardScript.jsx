import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getUsers } from "../../store/action/adminAction";
import { getJobs } from "../../store/action/jobsAction";

import ListUser from "../../props/listUser/ListUser";
import ListWork from "../../props/listWork/ListWork";

const DashboardScript = () => {
    const jobs = useSelector(store => store.jobsReducer.jobs);
    const users = useSelector(store => store.adminReducer.users);

    const dispatch = useDispatch();
    const [renderList, setRenderList] = useState(null);

    useEffect(() => {
        dispatch(getUsers());
        dispatch(getJobs())
    }, [dispatch]);

    const RenderUsersList = () => {
        setRenderList(<ListUser title="Usuarios" data={users} />);
    };

    const RenderWorksList = () => {
        setRenderList(<ListWork data={jobs} />);
    };

    const RenderCreateWorks = () => {
        setRenderList(
            <form className="container mt-4">
                <div className="mb-3">
                    <label htmlFor="jobTitle" className="form-label">Trabajo</label>
                    <input type="text" className="form-control" id="jobTitle" />
                </div>
                <div className="mb-3">
                    <label htmlFor="jobSalary" className="form-label">Salario</label>
                    <input type="number" className="form-control" id="jobSalary" />
                </div>
                <button type="submit" className="btn btn-dark">Crear trabajo</button>
            </form>
        )
    }

    return {
        jobs,
        users,
        renderList,
        RenderUsersList,
        RenderWorksList,
        RenderCreateWorks
    };
};

export default DashboardScript;
