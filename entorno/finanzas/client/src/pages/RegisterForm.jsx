import  {useState} from 'react';
// import {Redirect} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import toast from 'react-hot-toast';
const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();
    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        });
        const content = await response.json();
        console.log(content)
        if (response.ok) { 
            toast.success('Creando')
            setRedirect(true);
        } 
        else {
            // Maneja los errores de estado HTTP
            if(content.email){
                toast.error(content.email[0])
            }
          }
    }

    if (redirect) {
        toast.success('Creado')
        navigate('/login');  // Redirige al usuario a la página de login
    }

    return (
        <Container>
        <br></br>
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Registro Usuario</h1>

            <input className="form-control" placeholder="Usuario" required
                   onChange={e => setName(e.target.value)}
            />
            <br></br>
            <input type="email" className="form-control" placeholder="Correo" required
                   onChange={e => setEmail(e.target.value)}
            />
            <br></br>
            <input type="password" className="form-control" placeholder="Password" required
                   onChange={e => setPassword(e.target.value)}
            />
            <br></br>
            
                <button className="btn btn-success" type="submit" >Ingresar</button>
            
        </form>
        </Container>
    );
};

export default RegisterForm;