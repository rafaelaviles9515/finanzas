import axios from 'axios'

const ReporteApi = axios.create({
    baseURL: 'http://localhost:8000/api/informe-mensual/'
    // withCredentials: true,
})
export const getReporte = (year, month, usuario) =>{
    return ReporteApi.get('/',{
        params: {
            year: year,
            month: month,
            usuario_id: usuario
        }})
}


export default ReporteApi;