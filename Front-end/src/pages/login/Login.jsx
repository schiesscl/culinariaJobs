import Btn from '../../props/button/Btn';

import './LoginStyle.css'

const Login = () => {
  return (
    <div className='loginContainer'>
      <div className='loginCard'>
        <div className='loginTopContainer'>
          <h1>
            Login
          </h1>
        </div>
        <div className='loginBotContainer'>
          <label htmlFor="">
            Correo electronico:
            <input type="mail" />
          </label>
          <label htmlFor="">
            Contraseña:
            <input type="password" />
          </label>
        </div>
        <div className='loginBtnContinaer'>
          <Btn to={""} title={"Ingresar"} />
          <Btn to={"/"} title={"volver"}/>
        </div>
      </div>
    </div>
  );
}

export default Login;