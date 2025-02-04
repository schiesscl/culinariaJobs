import Btn from "../../props/button/Btn";
import WorkDetailsScript from "./WorkDetailsScript";

const WorkDetails = () => {

    const { workView, userActiveRol, id} = WorkDetailsScript()

    console.log(userActiveRol);
    console.log("estoy viendo el trabajo", workView);

    return (
        <>
            <h1>estoy en el trabajo: { id }</h1>
            <div>
                {userActiveRol === "admin" ? (
                    <div>
                        <button>eliminar</button>
                        <Btn title="Editar" to={`/app/workEdit/${id}`} />
                    </div>
                ) : null}
            </div>
            <div>
                {userActiveRol === "user" ? (
                    <button>postularse</button>
                ) : null}
            </div>
        </>
    );
};

export default WorkDetails;
