import Btn from '../../props/button/Btn';

import './LoginStyle.css'
import LoginScript from './LoginScript';

const Login = () => {

  const { handleInput, handleLogin } = LoginScript();

  return (
    <div className='formContainer'>
      <div className='formCard'>
          <h1 className='formTitle'>
            Login
          </h1>
        <form onSubmit={handleLogin} className='formSection'>

          <div className='laberContainer'>
            <label className='labelForm'>
              Correo electronico:
              <input className='inputForm' onChange={handleInput} name='userName' type="text" placeholder='Correo electronico' />
            </label>
            <label className='labelForm'>
              Contraseña:
              <input className='inputForm' onChange={handleInput} name='password' type="password" placeholder='Contraseña' />
            </label>
          </div>

          <div className='buttContainer'>
            <button className='btnNoCountry'>Ingresar</button>
            <Btn title='Volver' to='/' />
          </div>

        </form>
      </div>
    </div>
  );
}

export default Login;