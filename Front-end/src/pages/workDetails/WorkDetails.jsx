import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getJobByID } from "../../store/action/jobsAction"

import Btn from "../../props/button/Btn"

const WorkDetails = () => {

    const userActiveRol = useSelector(store => store.userReducer.user.rol)

    console.log(userActiveRol)

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getJobByID(id))
    }, [dispatch, id])

    const workView = useSelector(store => store.jobsReducer.jobs)

    console.log("estoy viendo el trabajo", workView)

    return (
        <>
            <h1>
                estoy en el trabajo: {id}
            </h1>
            <div>
                {
                    userActiveRol === "admin" ?
                        <div>
                            <button>
                                eliminar
                            </button>
                            <Btn title="Editar" to={`/app/workEdit/${id}`} />
                        </div>
                        : null
                }
            </div>
            <div>
                {
                    userActiveRol === "user" ? <button>
                        postularse
                    </button>
                        : null
                }
            </div>
        </>
    )
}

export default WorkDetails