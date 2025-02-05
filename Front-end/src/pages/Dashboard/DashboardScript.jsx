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
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="job" className="form-label">Trabajo</label>
                    <input type="text" className="form-control" id="job" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="category" className="form-label">Categoria</label>
                    <input type="text" className="form-control" id="category" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="salary" className="form-label">Salario</label>
                    <input type="number" className="form-control" id="salary" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="location" className="form-label">Lugar</label>
                    <input type="text" className="form-control" id="location" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="shift" className="form-label">Turno</label>
                    <input type="text" className="form-control" id="shift" />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn create-work-button" style={{ backgroundColor: '#FFD700', color: '#FFFFFF', hover: { backgroundColor: '#b39700' } }}>Crear trabajo</button>
                </div>
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
