

import { useEffect, useState } from "react";
import {useForm} from "react-hook-form"
// import {  getAllTipoIngreso } from "../api/tipoingreso.api";
import {useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import Container from "../components/Container";
import { createIngreso, deleteIngreso, getIngreso, updateIngreso } from "../api/ingreso.api";
import { NavigationIngreso } from "../components/NavigationIngreso";

export function IngresoFormPage(){
    const {register, handleSubmit, formState:{
        errors},
        setValue
     }= useForm();
    useNavigate()

    const onSubmit = handleSubmit(async data=>{
        if(params.id){
            await updateIngreso(params.id, data)
            toast.success('Tipo de Ingreso actualizado')
        }
        else {
            await createIngreso(data);
            toast.success('Creado')
        }
        navigate("/Ingreso");
    })

    useEffect(() =>{
        async function loadIngreso(){
            if(params.id){
                const res = await getIngreso(params.id);
                setValue('id', res.data.id)
                setValue('tipo_ingreso', res.data.tipo_ingreso)
                setValue('cantidad', res.data.cantidad)
                setValue('fecha', res.data.fecha)
                setValue('usuario', res.data.usuario)
            }
        }
        loadIngreso()
    },[])
    const [tipoIngreso, setTipoIngreso] = useState([]);
    // useEffect(()=>{
    //     async function loadTipoIngreso() {
    //         const res = await getAllTipoIngreso()
    //         console.log(res)
    //         setTipoIngreso(res.data)
    //     }
    //     loadTipoIngreso();
    // },[]);
    const navigate = useNavigate();
    const params = useParams()
    return(
    <Container>
        <NavigationIngreso/>
        <div className="container-sm">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label  className="form-label">Tipo de Ingreso</label>
                <select className="form-select"
                {...register("tipo_ingreso",{required:true})}>
                <option  value=""></option>
                    {tipoIngreso.map(tipo => (
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
                        deleteIngreso(params.id)
                        toast.success('Tipo de Ingreso eliminado')
                        navigate("/ingreso");
                    }
                }}>delete</button>}
            
            </form>
        </div>
    </Container>
    )
}