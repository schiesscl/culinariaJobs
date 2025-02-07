import Btn from "../../props/button/Btn";
import { useParams } from "react-router-dom";
import UserEditProfileScript from "./UserEditProfileScript";
import './UserEditStyle.css';

const UserEditProfile = () => {
  const { handleInput, handleCheckbox, handleEdit } = UserEditProfileScript();
  const { id } = useParams();

  return (
    <div className="cont-edit-perfile">
      <div className=''>
        <div>
          <h1 className='formTitle'>Editar Perfil</h1>
        </div>
        <div>
          <form className='formSection-EP'>
            <div className='laberContainer-EP'>
              <label htmlFor="name" className="label-EP-inputs">
                Nombre:
                <input className='' onChange={handleInput} type="text" name='name' id='name' />
              </label>
              <label htmlFor="lastName" className="label-EP-inputs">
                Apellido:
                <input className='' onChange={handleInput} type="text" name='last_name' id='lastName' />
              </label>
              <label htmlFor="photo" className="label-EP-inputs">
                Foto:
                <input className='' onChange={handleInput} type="text" name='photo' id='photo' />
              </label>
              <label htmlFor="phone" className="label-EP-inputs">
                Teléfono:
                <input className='' onChange={handleInput} type="text" name='phone' id='phone' />
              </label>
              <label>
                Profesión:
                <div className="cont-checkbox">
                  <label className="label-checkbox">
                    <input type="checkbox" name="profession" value="Chef" onChange={handleCheckbox} />
                    Chef
                  </label>
                  <label className="label-checkbox">
                    <input type="checkbox" name="profession" value="Auxiliar de cocina" onChange={handleCheckbox} />
                    Auxiliar de cocina
                  </label>
                  <label className="label-checkbox">
                    <input type="checkbox" name="profession" value="Auxiliar de cocina" onChange={handleCheckbox} />
                    Auxiliar de cocina
                  </label>
                </div>
              </label>
              <label>
                Habilidades:
                <div className="cont-checkbox">
                  <label className="label-checkbox">
                    <input type="checkbox" name="skills" value="Cocina rápida" onChange={handleCheckbox} />
                    Cocina rápida
                  </label>
                  <label className="label-checkbox">
                    <input type="checkbox" name="skills" value="Trabajo en equipo" onChange={handleCheckbox} />
                    Trabajo en equipo
                  </label>
                  <label className="label-checkbox">
                    <input type="checkbox" name="skills" value="Aprendizaje rápido" onChange={handleCheckbox} />
                    Aprendizaje rápido
                  </label>
                </div>
              </label>
              <label htmlFor="aboutMe" className="label-EP-inputs">
                Acerca de mí:
                <textarea className='' onChange={handleInput} name='aboutMe' id='aboutMe'></textarea>
              </label>
            </div>
            <div className='buttContainer-EP'>
              <Btn title="Guardar Cambios" style="btn btn-success" onClick={handleEdit} />
              <Btn to={`/app/userProfile/${id}`} title={"Volver"} style="btn btn-light" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserEditProfile;
