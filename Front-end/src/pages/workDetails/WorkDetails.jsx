import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getJobByID } from "../../store/action/jobsAction"

const WorkDetails = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getJobByID(id))
    }, [dispatch,id])

    const workView = useSelector(store => store.jobsReducer.jobs)

    console.log("estoy viendo el trabajo", workView)

    return(
        <>
        <h1>
            estoy en el trabajo: {id}
        </h1>
        </>
    )
}

export default WorkDetails