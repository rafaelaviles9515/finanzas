

import { useEffect, useState } from "react";
import {useForm} from "react-hook-form"
import {useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import Container from "../components/Container";
import { NavigationIngreso } from "../components/NavigationIngreso";
import { getReporte } from "../api/reporte.api";

export function ReporteMensualFormPage(){
    const navigate = useNavigate()
    const {register, handleSubmit,  formState:{
        errors},
        setValue
     }= useForm();

     const onSubmit = handleSubmit(async data=>{
        const res = await getReporte(data.year, data.month, data.usuario);
        console.log()
        toast.success('mandado')
    })

    const params = useParams()
    // useEffect(() =>{
    //     async function loadReporte(){
    //         if(document.getElementById("year")){
    //             const res = await getReporte(document.getElementById("year").value,document.getElementById("month").value, document.getElementById("usuario").value)
    //             console.log(res)
    //         }
            
    //     }
    //     loadReporte()
    // },[])
    // const navigate = useNavigate();
    return(
    <Container>
        <NavigationIngreso/>
        <div className="container-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label  className="form-label">Mes</label>
                <select id = 'month'className="form-select"
                {...register("month",{required:true})}>
                <option  value=""></option>
                <option  value="1">Enero</option>
                <option  value="7">Junio</option>
                <option  value="8">Agosto</option>
                </select>
            </div>
            <div className="mb-3">
                <label  className="form-label">Año</label>
                <select id = 'year' className="form-select"
                {...register("year",{required:true})}>
                <option  value=""></option>
                <option  value="2023">2023</option>
                <option  value="2024">2024</option>
                </select>
            </div>
            <div className="mb-3">
                <label  className="form-label">Usuario</label>
                <select id = 'usuario' className="form-select"
                {...register("usuario",{required:true})}>
                <option  value="1">Administrador</option>
                </select>
            </div>
            <button className="btn btn-success" type="submit">Ver Reporte</button>
            </form>
        </div>
    </Container>
    )
}