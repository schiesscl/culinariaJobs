import { createReducer } from "@reduxjs/toolkit";
import { createJob, editJob, getJobs, getJobByID, deleteJob } from "../action/jobsAction";

const inicialStateJobs = {
    jobs: [
        {id:1, title:"Trabajo1"},
        {id:2, title:"Trabajo1"},
        {id:3, title:"Trabajo1"},
    ]
}


const jobsReducer = createReducer(inicialStateJobs, (builder) => builder
    .addCase(createJob.fulfilled, (state, action) => {
        return{
            ...state,
            jobs: action.payload.jobs
        }
    })
    .addCase(editJob.fulfilled, (state, action) => {
        return{
            ...state,
            jobs: action.payload.jobs
        }
    })
    .addCase(getJobs.fulfilled, (state, action) => {
        return{
            ...state,
            jobs: action.payload.jobs
        }
    })
    .addCase(getJobByID.fulfilled, (state, action) => {
        return{
            ...state,
            jobs: action.payload.jobs
        }
    })
    .addCase(deleteJob.fulfilled, (state, action) => {
        return{
            ...state,
            jobs: action.payload.jobs
        }
    })
)

export default jobsReducer;