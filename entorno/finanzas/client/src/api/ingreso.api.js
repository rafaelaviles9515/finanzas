import axios from 'axios'

const IngresoApi = axios.create({
    baseURL: 'http://localhost:8000/api/ingresos/'
    // withCredentials: true,
})
export const getAllIngreso = () => IngresoApi.get('/')

export const getIngreso = (id) => IngresoApi.get('/'+id+'/')


export const createIngreso = (tipo) =>{
    return IngresoApi.post('/',tipo)
}

export const deleteIngreso = (id) => IngresoApi.delete('/'+id)

export const updateIngreso = (id, tipo) => IngresoApi.put('/'+id+'/',tipo)
// IngresoApi.interceptors.request.use(
//     config => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     error => Promise.reject(error)
// );

export default IngresoApi;
