import { useParams } from "react-router-dom";
import { useState } from "react";
import Btn from "../../props/button/Btn";
import './WorkEditStyle.css';

const WorkEdit = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    trabajo: '',
    categoria: '',
    salario: '',
    lugar: '',
    turno: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, como enviar los datos a una API
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="container-workEdit">
      <div className="card-workEdit">
        <div>
          <h1 className="title-edit-w">
            Editar trabajo {id}
          </h1>
        </div>
        <form className="form-edit-w" onSubmit={handleSubmit}>
          <div className="cont-input-edit-w">
            <label className="label-edit-w" htmlFor="trabajo">Trabajo
              <input
                className="input-edit-w"
                type="text"
                name="trabajo"
                id="trabajo"
                value={formData.trabajo}
                onChange={handleChange}
              />
            </label>
            <label className="label-edit-w" htmlFor="categoria">Categoría
              <select
                className="input-edit-w"
                name="categoria"
                id="categoria"
                value={formData.categoria}
                onChange={handleChange}
              >
                <option value="">Selecciona una categoría</option>
                <option value="chef">Chef</option>
                <option value="cocinero">Cocinero</option>
                <option value="pastelero">Pastelero</option>
                <option value="mesero">Mesero</option>
                <option value="bartender">Bartender</option>
              </select>
            </label>
            <label className="label-edit-w" htmlFor="salario">Salario
              <input
                className="input-edit-w"
                type="number"
                name="salario"
                id="salario"
                value={formData.salario}
                onChange={handleChange}
              />
            </label>
            <label className="label-edit-w" htmlFor="lugar">Lugar
              <input
                className="input-edit-w"
                type="text"
                name="lugar"
                id="lugar"
                value={formData.lugar}
                onChange={handleChange}
              />
            </label>
            <label className="label-edit-w" htmlFor="turno">Turno
              <select
                className="input-edit-w"
                name="turno"
                id="turno"
                value={formData.turno}
                onChange={handleChange}
              >
                <option value="">Selecciona un turno</option>
                <option value="mañana">Mañana</option>
                <option value="tarde">Tarde</option>
                <option value="noche">Noche</option>
              </select>
            </label>
          </div>
          <div className="contaner-button-work">
            <Btn title="Editar" style="btn btn-success" type="submit" />
            <Btn title="Volver" style="btn btn-secondary" to="/" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkEdit;
