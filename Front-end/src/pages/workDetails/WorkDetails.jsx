import Btn from "../../props/button/Btn";
import WorkDetailsScript from "./WorkDetailsScript";

import "./WorkDetailsStyle.css"

const WorkDetails = () => {

    const { workView, userActiveRol, id } = WorkDetailsScript()

    console.log(userActiveRol);
    console.log("estoy viendo el trabajo", workView);

    if (!workView) {
        return (<h1>Cargando</h1>)
    }

    return (
        <div className="container-workDetails">
            <div className="card-workDetails">
                <div>
                    <h1>
                        {workView.category}
                    </h1>
                    <h3>
                        {workView.title}
                    </h3>
                </div>
                <div>
                    <p>Restaurante:  {workView.restaurante}</p>
                    <p>Salario: ${workView.salario}</p>
                    <p>Turno: {workView.turno}</p>
                </div>
                <div>
                    {userActiveRol === 2 ? (
                        <div className="contaner-button-work">
                            <Btn title="Eliminar" style="btn btn-danger" to="/" />
                            <Btn style="btn btn-success" title="Editar" to={`/app/workEdit/${id}`} />
                        </div>
                    ) : null}
                </div>
                <div>
                    {userActiveRol === 1 ? (
                        <button>postularse</button>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default WorkDetails;
