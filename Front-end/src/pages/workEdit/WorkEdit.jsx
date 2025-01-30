import { useParams } from "react-router-dom"


const WorkEdit = () => 
{

    const {id} = useParams()


    return(
        <>
        <h1>
            Editar trabajo {id}
        </h1>
        </>
    )
}

export default WorkEdit