import { useEffect, useState } from "react"

import { GastoCard } from "./GastoCard";
import { getAllGasto } from "../api/gasto.api";
import { NavigationGasto } from "./NavigationGasto";
import Container from "./Container";
import { getAllIngreso } from "../api/ingreso.api";
import { NavigationIngreso } from "./NavigationIngreso";
import { useNavigate } from "react-router-dom";

export function IngresoList(){

    const [Ingreso, setIngreso] = useState([]);
    useEffect(()=>{
        async function loadIngreso() {
            const res = await getAllIngreso()
            console.log(res)
            setIngreso(res.data)
        }
        loadIngreso();
    },[]);
    const navigate = useNavigate()
    return <div>
            <NavigationIngreso/>
            <Container>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">tipo gasto</th>
                        <th scope="col">cantidad</th>
                        <th scope="col">fecha</th>
                        <th scope="col">ir</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Ingreso.map(tipo => (
                        <tr key={tipo.id}>
                        <th scope="row">{tipo.id}</th>
                        <td>{tipo.nombre}</td>
                        <td>{tipo.cantidad}</td>
                        <td>{tipo.fecha}</td>
                        <td><a onClick={()=>{
                            navigate('/ingreso/'+tipo.id)
                        }} className="btn btn-primary">Ir</a></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </Container>
        </div>;
    
}