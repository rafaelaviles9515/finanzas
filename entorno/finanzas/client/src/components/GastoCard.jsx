import {useNavigate} from 'react-router-dom'

export function GastoCard({tipo}){
    const navigate = useNavigate()
    return (
            <tr>
            <th scope="row">{tipo.id}</th>
            <td>{tipo.nombre}</td>
            <td>{tipo.cantidad}</td>
            <td>{tipo.fecha}</td>
            <td><a onClick={()=>{
                navigate('/gasto/'+tipo.id)
            }} className="btn btn-primary">Ir</a></td>
            </tr>
    )
}