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

    return {
        jobs,
        users,
        renderList,
        RenderUsersList,
        RenderWorksList
    };
};

export default DashboardScript;
