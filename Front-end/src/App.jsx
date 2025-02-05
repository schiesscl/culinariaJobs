import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userPersistence } from './store/action/userAction';
import router from './router/router';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem("user");

    if (token && user) {
      dispatch(userPersistence(JSON.parse(user)));
      console.log(JSON.parse(user));
    }
  }, [dispatch]); // Asegúrate de tener el dispatch en la lista de dependencias

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
