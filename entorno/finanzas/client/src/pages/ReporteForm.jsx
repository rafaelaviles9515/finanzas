import React, { useState } from 'react';
import axios from 'axios';
import Container from '../components/Container';
import YourChartComponent from '../components/grafica';
import YourChartComponent2 from '../components/grafica2';

const YourComponent = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [usuario, setUsuario] = useState('');
  const [chartData, setChartData] = useState([]);
  const [chartData2, setChartData2] = useState([]);
  const [chartData3, setChartData3] = useState([]);
  const handleSubmit = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/informe-mensual/', {
        params: {
          year: year,
          month: month,
          usuario: usuario,
        },
      
      });
      setChartData(response.data);
      const response2 = await axios.get('http://localhost:8000/api/informe-ingreso/', {
        params: {
          year: year,
          usuario: usuario,
        }
    });
      setChartData2(response2.data);
      const response3 = await axios.get('http://localhost:8000/api/informe-meta/', {
        params: {
          year: year,
          usuario: usuario,
        }
    });
      setChartData3(response3.data);
      console.log('Response data:', response.data);
      // Aquí puedes manejar la respuesta y actualizar el estado en React si es necesario.
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Container>
        <div className="mb-3">
            <label  className="form-label">Año</label>
            <select value={year} onChange={(e) => setYear(e.target.value)} className="form-select">
            <option  value=""></option>
            <option  value="2023">2023</option>
            <option  value="2024">2024</option>
            </select>
        </div>
      <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Usuario" />
      <button  className="btn btn-success" onClick={handleSubmit}>Enviar</button>
      {chartData.length > 0 && <YourChartComponent data={chartData} />}
      {chartData.length > 0 && <YourChartComponent2 data={chartData} data2={chartData2} data3={chartData3} />}
      </Container>
  );
};

export default YourComponent;