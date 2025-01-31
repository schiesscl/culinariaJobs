// importaciones de librerias
import { RouterProvider } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userPersistence } from './store/action/userAction';

// importacion de logicas
import router from './router/router';

// importacion de estilos
import './App.css'

function App() {

  const dispatch = useDispatch()

  useEffect(() =>{
    let token = localStorage.getItem('token')
    let user = localStorage.getItem("user")
    if(token)
    {
      dispatch(userPersistence(JSON.parse(user)))
    }
  })

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
