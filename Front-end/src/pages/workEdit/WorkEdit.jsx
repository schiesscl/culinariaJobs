import { useParams } from "react-router-dom"


const WorkEdit = () => {

    const { id } = useParams()


    return (
        <div>
            <div>
                <h1>
                    Editar trabajo {id}
                </h1>
            </div>
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
                <button>Editar</button>
                <button>Volver</button>
            </form>
        </div>
    )
}

export default WorkEdit