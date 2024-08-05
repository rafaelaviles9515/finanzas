import { useEffect, useState } from "react"
// import { getAllTipoIngreso } from "../api/tipoingreso.api";
import { TipoIngresoCard } from "./TipoIngresoCard";

export function TipoIngresoList(){

    const [tipoIngreso, setTipoIngreso] = useState([]);
    // useEffect(()=>{
    //     async function loadTipoIngreso() {
    //         const res = await getAllTipoIngreso()
    //         console.log(res)
    //         setTipoIngreso(res.data)
    //     }
    //     loadTipoIngreso();
    // },[]);
    
    return <div>
            {tipoIngreso.map(tipo => (
                <TipoIngresoCard key ={tipo.id} tipo={tipo}/>
             ))}
        </div>;
    
}