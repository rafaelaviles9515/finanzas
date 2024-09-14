import { Link } from "react-router-dom";

import Container from "./Container";
export function Navigation(){
    return (
        
        <Container>
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg ">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active h4">
                    <Link className="nav-link text-white" to="/" style={{ margin: '7px' }}>
                        Home
                    </Link>
                    </li>
                    <li className="nav-item active h4">
                    <Link className="nav-link text-white" to="/tipogasto" style={{ margin: '7px' }}>
                        Tipo Gasto
                    </Link>
                    </li>
                    <li className="nav-item active h4">
                    <Link className="nav-link text-white" to="/gasto" style={{ margin: '7px' }}>
                        Gasto
                    </Link>
                    </li>
                    <li className="nav-item active h4">
                    <Link className="nav-link text-white" to="/tipoingreso" style={{ margin: '7px' }}>
                        Tipo Ingreso
                    </Link>
                    </li>
                    <li className="nav-item active h4">
                    <Link className="nav-link text-white" to="/ingreso" style={{ margin: '7px' }}>
                        Ingreso
                    </Link>
                    </li>
                    <li className="nav-item active h4">
                    <Link className="nav-link text-white" to="/ingreso" style={{ margin: '7px' }}>
                        Ahorro/Meta
                    </Link>
                    </li>
                    <li className="nav-item active h4">
                    <Link className="nav-link text-white" to="/informe" style={{ margin: '7px' }}>
                        Informe
                    </Link>
                    </li>
                    <li className="nav-item active h4">
                    <Link className="nav-link text-white" to="/register" style={{ margin: '7px' }}>
                        Registar Usuario
                    </Link>
                    </li>
                    <li className="nav-item active h4">
                    <Link className="nav-link text-white" to="/login" style={{ margin: '7px' }}>
                        Login
                    </Link>
                    </li>
                    
                    </ul>
                </div>
            </nav>
        </Container>
        )
    }