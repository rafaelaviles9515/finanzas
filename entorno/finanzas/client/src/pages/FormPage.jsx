import  { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import GastoApi from '../api/gasto.api.js';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();


    const submit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        // const content = await response.json();
        const content = await response.json();
        console.log(content)
        if (response.ok) {
            localStorage.setItem('token', content.jwt); // Guardar el token en el localStorage
            toast.success('Loggeado')
            setRedirect(true);
            // Redirigir o actualizar estado según sea necesario
          } else {
            toast.error('Error')
            // Manejar error de autenticación
          }
        
    };

    if (redirect) {
        navigate('/');  // Redirige al usuario a la página de login
    }

    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <input type="email" className="form-control" placeholder="Email address" required
                   onChange={e => setEmail(e.target.value)}
            />

            <input type="password" className="form-control" placeholder="Password" required
                   onChange={e => setPassword(e.target.value)}
            />

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
        
    );
};