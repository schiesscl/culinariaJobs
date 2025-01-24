import Btn from '../../props/button/Btn';

import RegisterScript from './RegisterScript';
import './RegisterStyle.css'

const Register = () => {

  const { handleInput, handleRegister } = RegisterScript()

  return (
    <div className="registerContainer">
      <div className='registerCard'>
        <div className='registerTopContainer'>
          <h1>
            Register
          </h1>
        </div>
        <form onSubmit={handleRegister} className='registerBotContainer'>
          <div>
            <label htmlFor="">
              Nombre:
              <input onChange={handleInput} type="mail" name='userName' />
            </label>
            <label htmlFor="">
              Apellido:
              <input onChange={handleInput} type="mail" name='userLastName' />
            </label>
            <label htmlFor="">
              Correo electronico:
              <input onChange={handleInput} type="mail" name='email' />
            </label>
            <label htmlFor="">
              Contraseña:
              <input onChange={handleInput} type="password" name='password' />
            </label>
            <label htmlFor="">
              Confirmar contraseña:
              <input onChange={handleInput} type="password" name='confirmpassword' />
            </label>
          </div>
          <div className='registerBtnContinaer'>
            <button>Registrarse</button>
            <Btn to={"/"} title={"volver"} />
          </div>
        </form>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Register;