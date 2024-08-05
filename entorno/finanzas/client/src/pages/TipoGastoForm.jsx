

import { useEffect } from "react";
import {useForm} from "react-hook-form"
import { createTipoGasto, deleteTipoGasto, updateTipoGasto, getTipoGasto } from "../api/tipogasto.api";
import {useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import Container from "../components/Container";

export function TipoGastoFormPage(){
    const {register, handleSubmit, formState:{
        errors},
        setValue
     }= useForm();
    useNavigate()

    const onSubmit = handleSubmit(async data=>{
        if(params.id){
            await updateTipoGasto(params.id, data)
            toast.success('Tipo de gasto actualizado')
        }
        else {
            await createTipoGasto(data);
            toast.success('Creado')
        }
        navigate("/tipogasto");
    })

    useEffect(() =>{
        async function loadTipoGasto(){
            if(params.id){
                const res = await getTipoGasto(params.id);
                setValue('nombre', res.data.nombre)
            }
        }
        loadTipoGasto()
    },[])
    const navigate = useNavigate();
    const params = useParams()
    return(
    <Container>
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className="form-control" placeholder="Nombre"
                {...register("nombre",{required:true})}/>
                {errors.nombre && <span>this field is required </span>}
            <button type="button" className="btn btn-primary">save</button>
            {params.id && <button  onClick={()=> {
                const accepted = window.confirm('Esta seguro de eliminar?')
                if(accepted){
                    deleteTipoGasto(params.id)
                    toast.success('Tipo de gasto eliminado')
                    navigate("/tipogasto");
                }
            }}>delete</button>}
            
            </form>
        </div>
    </Container>
    )
}