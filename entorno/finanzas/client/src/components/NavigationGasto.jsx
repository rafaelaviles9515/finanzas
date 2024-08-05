import { Link } from "react-router-dom";
import Container from "./Container";


export function NavigationGasto(){
    return (
        <Container>
            <div>
                <Link to='/gasto'>
                    <h1>Gasto App</h1>
                </Link>
                <Link to='/gasto-create'>Crear Gasto </Link>
            </div>
        </Container>
    )
}