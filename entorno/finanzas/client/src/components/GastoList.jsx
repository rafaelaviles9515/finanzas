import { useEffect, useState } from "react"

import { GastoCard } from "./GastoCard";
import { getAllGasto } from "../api/gasto.api";
import { NavigationGasto } from "./NavigationGasto";
import Container from "./Container";
import { CSVLink } from "react-csv";

export function GastoList(){

    const [Gasto, setGasto] = useState([]);
    useEffect(()=>{
        async function loadGasto() {
            const res = await getAllGasto()
            console.log(res)
            setGasto(res.data)
        }
        loadGasto();
    },[]);
    
    return <div>
            <NavigationGasto/>
            <Container>
                <CSVLink data = {Gasto} filename="Gastos.csv"><button className="btn btn-success">Descargar Tabla</button></CSVLink>
                <br></br>
                <br></br>
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
                    {Gasto.map(tipo => (
                        <GastoCard key={tipo.id} tipo={tipo} />
                    ))}
                    </tbody>
                </table>
                </Container>
        </div>;
    
}