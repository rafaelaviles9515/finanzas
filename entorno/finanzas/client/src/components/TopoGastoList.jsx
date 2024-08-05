import { useEffect, useState } from "react"
import { getAllTipoGasto } from "../api/tipogasto.api";
import { TipoGastoCard } from "./TipoGastoCard";

export function TipoGastoList(){

    const [tipoGasto, setTipoGasto] = useState([]);
    useEffect(()=>{
        async function loadTipoGasto() {
            const res = await getAllTipoGasto()
            console.log(res)
            setTipoGasto(res.data)
        }
        loadTipoGasto();
    },[]);
    
    return <div>
            {tipoGasto.map(tipo => (
                <TipoGastoCard key ={tipo.id} tipo={tipo}/>
             ))}
        </div>;
    
}