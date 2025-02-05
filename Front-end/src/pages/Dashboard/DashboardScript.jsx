import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getUsers } from "../../store/action/adminAction";
import { getJobs, createJob } from "../../store/action/jobsAction";

import ListUser from "../../props/listUser/ListUser";
import ListWork from "../../props/listWork/ListWork";

const DashboardScript = () => {
    const jobs = useSelector(store => store.jobsReducer.jobs);
    const users = useSelector(store => store.adminReducer.users);
    const [dataJobs, setDataJobs] = useState({
        title:null,
        categoria: [],
        salario: null,
        place: null,
        turno: null
    })

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

    const handleInput = async (event) => {
        setDataJobs({
            ...dataJobs,
            [event.target.name]: event.target.value
        })
    }

    const RenderCreateWorks = () => {
        setRenderList(
            <form>
                <label htmlFor="">Trabajo
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">Categoria
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">Salario
                    <input type="number" name="" id="" />
                </label>
                <label htmlFor="">Lugar
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">Turno
                    <input type="text" name="" id="" />
                </label>
                <button>Crear trabajo</button>
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
