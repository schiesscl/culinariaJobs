import Btn from "../../props/button/Btn";
import { useParams } from "react-router-dom";
import UserEditProfileScript from "./UserEditProfileScript";
import './UserEditStyle.css';

const UserEditProfile = () => {
  const { handleInput, handleCheckbox, handleEdit } = UserEditProfileScript();
  const { id } = useParams();

  return (
    <div className="">
      <div className=''>
        <h1 className='formTitle'>Editar Perfil</h1>
        <form onSubmit={handleEdit} className='formSection'>
          <div className='laberContainer'>
            <label htmlFor="name">
              Nombre:
              <input className='inputForm' onChange={handleInput} type="text" name='name' id='name' />
            </label>
            <label htmlFor="lastName">
              Apellido:
              <input className='inputForm' onChange={handleInput} type="text" name='lastName' id='lastName' />
            </label>
            <label htmlFor="photo">
              Foto:
              <input className='inputForm' onChange={handleInput} type="text" name='photo' id='photo' />
            </label>
            <label htmlFor="phone">
              Teléfono:
              <input className='inputForm' onChange={handleInput} type="text" name='phone' id='phone' />
            </label>
            <label>
              Profesión:
              <div>
                <label>
                  <input type="checkbox" name="profession" value="Chef" onChange={handleCheckbox} />
                  Chef
                </label>
                <label>
                  <input type="checkbox" name="profession" value="Auxiliar de cocina" onChange={handleCheckbox} />
                  Auxiliar de cocina
                </label>
                <label>
                  <input type="checkbox" name="profession" value="Auxiliar de cocina" onChange={handleCheckbox} />
                  Auxiliar de cocina
                </label>
              </div>
            </label>
            <label>
              Habilidades:
              <div>
                <label>
                  <input type="checkbox" name="skills" value="Cocina rápida" onChange={handleCheckbox} />
                  Cocina rápida
                </label>
                <label>
                  <input type="checkbox" name="skills" value="Trabajo en equipo" onChange={handleCheckbox} />
                  Trabajo en equipo
                </label>
                <label>
                  <input type="checkbox" name="skills" value="Aprendizaje rápido" onChange={handleCheckbox} />
                  Aprendizaje rápido
                </label>
              </div>
            </label>
            <label htmlFor="aboutMe">
              Acerca de mí:
              <textarea className='inputForm' onChange={handleInput} name='aboutMe' id='aboutMe'></textarea>
            </label>
            <label htmlFor="cv">
              CV:
              <input className='inputForm' onChange={handleInput} type="text" name='cv' id='cv' />
            </label>
          </div>
          <div className='buttContainer'>
            <button className='btnNoCountry'>Guardar Cambios</button>
            <Btn to={`/app/userProfile/${id}`}  title={"Volver"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEditProfile;
