import axios from 'axios'

const GastoApi = axios.create({
    baseURL: 'http://localhost:8000/api/gastos/'
    // withCredentials: true,
})
export const getAllGasto = () => GastoApi.get('/')

export const getGasto = (id) => GastoApi.get('/'+id+'/')


export const createGasto = (tipo) =>{
    return GastoApi.post('/',tipo)
}

export const deleteGasto = (id) => GastoApi.delete('/'+id)

export const updateGasto = (id, tipo) => GastoApi.put('/'+id+'/',tipo)
// GastoApi.interceptors.request.use(
//     config => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     error => Promise.reject(error)
// );

export default GastoApi;
