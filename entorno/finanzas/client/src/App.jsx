import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { TipoGastoPage } from './pages/TipoGastoPage';
import { GastoPage } from './pages/GastoPage';
import { IngresoPage } from './pages/IngresoPage';
import { IngresoFormPage } from './pages/IngresoForm';
import { TipoGastoFormPage } from './pages/TipoGastoForm';
import { Navigation } from './components/Navigation';
import {Toaster} from "react-hot-toast"
import { TipoIngresoPage } from './pages/TipoIngresoPage';
// import PrivateRoute from './components/PrivateRoute';
import {Login} from './pages/FormPage';
import { GastoFormPage } from './pages/GastoForm';
// import { ReporteMensualFormPage } from './pages/ReporteMensualForm';
import YourComponent from './pages/ReporteForm';
import RegisterForm from './pages/RegisterForm';
import { Home } from './pages/Home';

function App(){
  const getToken = () => localStorage.getItem('token');
  const isAuthenticated = !!getToken();
  // localStorage.removeItem('token');
  return(
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/tipogasto' element={<TipoGastoPage/>} />
      <Route path='/tipogasto-create' element={<TipoGastoFormPage/>} />
      <Route path='/tipogasto/:id' element={<TipoGastoFormPage/>} />
      <Route
          path="/gasto"
          element={isAuthenticated ? <GastoPage /> : <Navigate to="/login" />}
      />
      {/* <Route path='/gasto' element={<GastoPage/>} /> */}
      <Route path='/gasto-create' element={<GastoFormPage/>} />
      <Route path='/gasto/:id' element={<GastoFormPage/>} />
      <Route path='/ingreso' element={<IngresoPage/>} />
      <Route path='/ingreso-create' element={<IngresoFormPage/>} />
      <Route path='/ingreso/:id' element={<IngresoFormPage/>} />
      <Route path='/tipoingreso' element={<TipoIngresoPage/>} />
      {/* <Route path='/informe-mensual' element={<ReporteMensualFormPage/>} /> */}
      <Route path='/informe' element={<YourComponent/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
      {/* <PrivateRoute path="/" element={<Navigate to="/tipogasto"/>} /> */}
    <Toaster/>
    </BrowserRouter>
  );
}
export default App