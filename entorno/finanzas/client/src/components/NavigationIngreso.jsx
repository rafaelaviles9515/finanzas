import { Link } from "react-router-dom";
import Container from "./Container";


export function NavigationIngreso(){
    return (
        <Container>
            <div>
                <Link to='/ingreso'>
                    <h1>Ingreso App</h1>
                </Link>
                <Link to='/ingreso-create'>Crear Ingreso </Link>
                <Link to='/informe'>Informe </Link>
            </div>
        </Container>
    )
}