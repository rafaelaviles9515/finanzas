import {useNavigate} from 'react-router-dom'
import Container from './Container';
export function TipoGastoCard({tipo}){
    const navigate = useNavigate()
    return (
        <Container>
        <div 
            onClick={()=>{
                navigate('/tipogasto/'+tipo.id)
                // navigate('/tipogasto/${tipo.id}')
            }}
            >
            <h1>{tipo.id}</h1>
            <h1>{tipo.nombre}</h1>
        </div>
        </Container>
    )
}