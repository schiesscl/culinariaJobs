import { useSelector, useDispatch } from "react-redux";
import { getJobs } from "../../store/action/jobsAction";
import { useEffect, useState } from "react";
import Btn from "../button/Btn";
import { Row, Col, Card, CardBody, CardTitle, CardText, FormGroup, Label, Input } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './WorkByCategory.css';

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
            <div className="category-filters">
                {['Cocina', 'Servicio', 'Bebidas', 'Repostería', 'Administración'].map(category => (
                    <FormGroup check inline key={category}>
                        <Label check>
                            <Input
                                type="checkbox"
                                value={category}
                                checked={selectedCategories.includes(category)}
                                onChange={() => handleCheckboxChange(category)}
                            />
                            {category}
                        </Label>
                    </FormGroup>
                ))}
            </div>

            {filteredWorks && filteredWorks.length > 0 ? (
                <Row className="work-list">
                    {filteredWorks.map(work => (
                        <Col sm="6" md="4" lg="3" key={work.id} className="mb-4">
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">{work.title}</CardTitle>
                                    <CardText>
                                        <div>Categoría: {work.category}</div>
                                        <div>Salario: {work.salario}</div>
                                        <div>Restaurante: {work.restaurante}</div>
                                        <div>Turno: {work.turno}</div>
                                    </CardText>
                                    <a href={`/app/workDetail/${work.id}`} className="btn-more-info">Más info</a>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <div>No hay trabajos disponibles en estas categorías.</div>
            )}
        </>
    );
}

export default WorkByCategory;