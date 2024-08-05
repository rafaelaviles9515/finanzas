import axios from 'axios'

const tipoIngresoApi = axios.create({
    baseURL: 'http://localhost:8000/api/tipos-ingreso/'
})
export const getAllTipoIngreso = () => tipoIngresoApi.get('/')
export const getTipoIngreso = (id) => tipoIngresoApi.get('/'+id+'/')


export const createTipoIngreso = (tipo) =>{
    return tipoIngresoApi.post('/',tipo)
}

export const deleteTipoIngreso = (id) => tipoIngresoApi.delete('/'+id)

export const updateTipoIngreso = (id, tipo) => tipoIngresoApi.put('/'+id+'/',tipo)