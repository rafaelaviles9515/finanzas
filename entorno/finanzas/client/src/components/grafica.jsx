import React from 'react';
import { Bar } from 'react-chartjs-2';
// import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  // Registrar las escalas
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const YourChartComponent = ({ data }) => {
  // Transforma los datos para obtener los meses y las cantidades
  const months = data.map(item => `Mes ${item.month}`);
  const totalAmounts = data.map(item => parseFloat(item.total_cantidad));

  // Configura los datos para Chart.js
  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Total Cantidad',
        data: totalAmounts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

//   const chartData2 = {
//     labels: months,
//     datasets: [
//       {
//         label: 'Total Cantidad',
//         data: totalAmounts,
//         fill: false,
//         borderColor: 'rgba(75, 192, 192, 1)',
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//         tension: 0.3, // Curvatura moderada
//         pointStyle: 'circle',
//         pointRadius: 5,
//         pointHoverRadius: 7,
//       },
//     ],
//   };

  return (
    <div>
      {/* <Bar data={chartData} /> */}
      <Bar data={chartData} />
    </div>
  );
};

export default YourChartComponent;