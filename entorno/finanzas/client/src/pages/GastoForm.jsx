

import { useEffect, useState } from "react";
import {useForm} from "react-hook-form"
import { deleteTipoGasto, getAllTipoGasto, updateTipoGasto } from "../api/tipogasto.api";
import {useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import Container from "../components/Container";
import { createGasto, deleteGasto, getGasto, updateGasto } from "../api/gasto.api";
import { NavigationGasto } from "../components/NavigationGasto";

export function GastoFormPage(){
    const {register, handleSubmit, formState:{
        errors},
        setValue
     }= useForm();
    useNavigate()

    const onSubmit = handleSubmit(async data=>{
        if(params.id){
            await updateGasto(params.id, data)
            toast.success('Tipo de gasto actualizado')
        }
        else {
            await createGasto(data);
            toast.success('Creado')
        }
        navigate("/gasto");
    })

    useEffect(() =>{
        async function loadGasto(){
            if(params.id){
                const res = await getGasto(params.id);
                setValue('id', res.data.id)
                setValue('tipo_gasto', res.data.tipo_gasto)
                setValue('cantidad', res.data.cantidad)
                setValue('fecha', res.data.fecha)
                setValue('usuario', res.data.usuario)
            }
        }
        loadGasto()
    },[])
    const [tipoGasto, setTipoGasto] = useState([]);
    useEffect(()=>{
        async function loadTipoGasto() {
            const res = await getAllTipoGasto()
            console.log(res)
            setTipoGasto(res.data)
        }
        loadTipoGasto();
    },[]);
    const navigate = useNavigate();
    const params = useParams()
    return(
    <Container>
        <NavigationGasto/>
        <div className="container-sm">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label  className="form-label">Tipo de Gasto</label>
                <select className="form-select"
                {...register("tipo_gasto",{required:true})}>
                <option  value=""></option>
                    {tipoGasto.map(tipo => (
                        <option key ={tipo.id} value={tipo.id}>{tipo.nombre}</option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label  className="form-label">Cantidad</label>
                <input type="number" className="form-control"
                {...register("cantidad",{required:true})}/>
                {errors.cantidad && <span>this field is required </span>}
            </div>
            <div className="mb-3">
                <label  className="form-label">Fecha</label>
                <input type="date" className="form-control"
                {...register("fecha",{required:true})}/>
                {errors.fecha && <span>this field is required </span>}
            </div>
            <div className="mb-3">
                <label className="form-label">usuario</label>
                <input type="number" className="form-control"
                {...register("usuario",{required:true})}/>
                {errors.usuario && <span>this field is required </span>}
            </div>
                
                
                <button className="btn btn-primary" type="submit">save</button>
                {params.id && <button  className="btn btn-danger" onClick={()=> {
                    const accepted = window.confirm('Esta seguro de eliminar?')
                    if(accepted){
                        deleteGasto(params.id)
                        toast.success('Tipo de gasto eliminado')
                        navigate("/gasto");
                    }
                }}>delete</button>}
            
            </form>
        </div>
    </Container>
    )
}