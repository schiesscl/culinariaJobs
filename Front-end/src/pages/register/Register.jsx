import Btn from '../../props/button/Btn';
import { Link } from 'react-router-dom';
import { Container, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './RegisterStyle.css';
import RegisterScript from './RegisterScript';

const Register = () => {
  const { handleInput, handleRegister } = RegisterScript();

  return (
    <Container className='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
      <Card style={{ maxWidth: '500px', width: '100%' }}>
        <Card.Body>
          <h1 className='text-center'>Registro</h1>
          <Form onSubmit={handleRegister}>
            <Form.Group className='mb-3'>
              <Form.Label>Nombre:</Form.Label>
              <Form.Control onChange={handleInput} type="text" name='name' placeholder='Nombre' />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Apellido:</Form.Label>
              <Form.Control onChange={handleInput} type="text" name='last_name' placeholder='Apellido' />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Correo electrónico:</Form.Label>
              <Form.Control onChange={handleInput} type="text" name='userName' placeholder='Correo electrónico' />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control onChange={handleInput} type="password" name='password' placeholder='Contraseña' />
            </Form.Group>
            <div className='d-flex justify-content-between'>
              <Button type='submit' className='btn-registrarse'>Registrarse</Button>
              <Link to='/'>
                <Button variant='outline-success' className='btn-volver'>Volver</Button>
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Register;