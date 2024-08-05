import { Link } from "react-router-dom";


export function Navigation(){
    return (
        <div>
            <Link to='/tipogasto'>
                <h1>Tipo de Gasto App</h1>
            </Link>
            <Link to='/tipogasto-create'>Crear Tipo de Gasto </Link>
        </div>
    )
}