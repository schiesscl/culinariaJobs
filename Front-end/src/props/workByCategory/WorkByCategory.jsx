import { useSelector, useDispatch } from "react-redux";
import { getJobs } from "../../store/action/jobsAction";
import { useEffect, useState } from "react";
import Btn from "../button/Btn";

const WorkByCategory = () => {
    const dispatch = useDispatch();
    const works = useSelector(store => store.jobsReducer.jobs);
    const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        dispatch(getJobs());
    }, [dispatch]);

    const handleCheckboxChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const filteredWorks = works && selectedCategories.length > 0 
        ? works.filter(work => selectedCategories.includes(work.category))
        : works;

    return (
        <>
            <div>
                <label>
                    <input
                        type="checkbox"
                        value="Cocina"
                        checked={selectedCategories.includes("Cocina")}
                        onChange={() => handleCheckboxChange("Cocina")}
                    />
                    Cocina
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="Servicio"
                        checked={selectedCategories.includes("Servicio")}
                        onChange={() => handleCheckboxChange("Servicio")}
                    />
                    Servicio
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="Bebidas"
                        checked={selectedCategories.includes("Bebidas")}
                        onChange={() => handleCheckboxChange("Bebidas")}
                    />
                    Bebidas
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="Repostería"
                        checked={selectedCategories.includes("Repostería")}
                        onChange={() => handleCheckboxChange("Repostería")}
                    />
                    Repostería
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="Administración"
                        checked={selectedCategories.includes("Administración")}
                        onChange={() => handleCheckboxChange("Administración")}
                    />
                    Administración
                </label>
            </div>

            {filteredWorks && filteredWorks.length > 0 ? (
                <div>
                    {filteredWorks.map(work => (
                        <div key={work.id}>
                            <div>Categoría: {work.category}</div>
                            <div>Título: {work.title}</div>
                            <div>Salario: {work.salario}</div>
                            <div>Restaurante: {work.restaurante}</div>
                            <div>Turno: {work.turno}</div>
                            <Btn title="más info" to={`/app/workDetail/${work.id}`} />
                        </div>
                    ))}
                </div>
            ) : (
                <div>No hay trabajos disponibles en estas categorías.</div>
            )}
        </>
    );
}

export default WorkByCategory;
