import Btn from '../../props/button/Btn';

import RegisterScript from './RegisterScript';
import './RegisterStyle.css'

const Register = () => {

  const { handleInput, handleRegister } = RegisterScript()

  return (
    <div className="formContainer">
      <div className='formCard'>
          <h1 className='formTitle'>
            Register
          </h1>
        <form onSubmit={handleRegister} className='formSection'>
          <div className='laberContainer'>
            <label htmlFor="">
              Nombre:
              <input className='inputForm' onChange={handleInput} type="text" name='name' />
            </label>
            <label htmlFor="">
              Apellido:
              <input className='inputForm' onChange={handleInput} type="text" name='last_name' />
            </label>
            <label htmlFor="">
              Correo electronico:
              <input className='inputForm' onChange={handleInput} type="text" name='userName' />
            </label>
            <label htmlFor="">
              Contraseña:
              <input className='inputForm' onChange={handleInput} type="password" name='password' />
            </label>
          </div>
          <div className='buttContainer'>
            <button className='btnNoCountry'>Registrarse</button>
            <Btn  to={"/"} title={"volver"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;