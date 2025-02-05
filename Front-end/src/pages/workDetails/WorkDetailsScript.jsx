import { useParams } from "react-router-dom"
import { getJobByID } from "../../store/action/jobsAction"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"



const WorkDetailsScript = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const workView = useSelector(store => store.jobsReducer.jobs)
    const userActiveRol = useSelector(store => store.userReducer.user.role.id)

    
    useEffect(() => {
        dispatch(getJobByID(id))
    }, [dispatch, id])
    

    console.log("test_: " , workView)


    return {
        workView,
        userActiveRol,
        id
    }
}

export default WorkDetailsScript;