import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getJobs } from "../../store/action/jobsAction";

import "./UserHomeStyle.css";
import ListWork from "../../props/listWork/ListWork";

const UserHome = () => {
    const jobs = useSelector(store => store.jobsReducer.jobs) || [];
    const user = useSelector(store => store.userReducer.user)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobs());
    }, [dispatch]);

    console.log("usuario activo: ", user)

    return (
        <div className="user-home-container">
            <h1>User Home</h1>
            <div>
                <ListWork data={jobs} />
            </div>
        </div>
    );
};

export default UserHome;
