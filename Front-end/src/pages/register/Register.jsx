import Btn from '../../props/button/Btn';

import './RegisterStyle.css'

const Register = () => {
  return (
    <div className="registerContainer">
      <div className='registerCard'>
        <div className='registerTopContainer'>
          <h1>
            Register
          </h1>
        </div>
        <div className='registerBotContainer'>
        <label htmlFor="">
            Nombre:
            <input type="mail" />
          </label>
          <label htmlFor="">
            Apellido:
            <input type="mail" />
          </label>
          <label htmlFor="">
            Correo electronico:
            <input type="mail" />
          </label>
          <label htmlFor="">
            Contraseña:
            <input type="password" />
          </label>
          <label htmlFor="">
            Contraseña:
            <input type="password" />
          </label>
        </div>
        <div className='registerBtnContinaer'>
          <Btn to={""} title={"Registarse"} />
          <Btn to={"/"} title={"volver"} />
        </div>
      </div>
    </div>
  );
}

export default Register;