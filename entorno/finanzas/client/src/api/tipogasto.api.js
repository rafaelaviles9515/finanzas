import axios from 'axios'

const tipoGastoApi = axios.create({
    baseURL: 'http://localhost:8000/api/tipos-gasto/'
})
export const getAllTipoGasto = () => tipoGastoApi.get('/')
export const getTipoGasto = (id) => tipoGastoApi.get('/'+id+'/')


export const createTipoGasto = (tipo) =>{
    return tipoGastoApi.post('/',tipo)
}

export const deleteTipoGasto = (id) => tipoGastoApi.delete('/'+id)

export const updateTipoGasto = (id, tipo) => tipoGastoApi.put('/'+id+'/',tipo)