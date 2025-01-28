// importaciones de librerias
import { RouterProvider } from 'react-router-dom'

// importacion de logicas
import router from './router/router';

// importacion de estilos
import './App.css'

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
