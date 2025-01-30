import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getJobs } from "../../store/action/jobsAction";

import "./UserHomeStyle.css";
import ListWork from "../../props/listWork/ListWork";

const UserHome = () => {
    const jobs = useSelector(store => store.jobsReducer.jobs) || [];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobs());
    }, [dispatch]);

    return (
        <div className="user-home-container">
            <h1>User Home</h1>
            <ListWork data={jobs} />
        </div>
    );
};

export default UserHome;
