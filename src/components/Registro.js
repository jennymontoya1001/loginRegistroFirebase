import { Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from '../hooks/useForm';
import '../styles/Registro.css'
import {registroEmailPasswordNombre} from '../actions/action'
import { useDispatch } from 'react-redux';



export const Registro = () => {

  const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        nombre: 'Jenny ',
        email: 'jenny@gmail.com',
        pass1: '123456',
        pass2: '123456'
    });

    const { nombre, email, pass1, pass2 } = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
        console.log(nombre,pass1,email);
        dispatch(registroEmailPasswordNombre(email,pass1,nombre))
    }

    return (
        <div>
            <Form onSubmit={handleRegistro}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass1"
                        value={pass1}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                    <Form.Label>Repita contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass2"
                        value={pass2}
                        onChange={handleInputChange}
                    />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Registrarse
                </Button>

               
            </Form>

        </div>
    )
}
