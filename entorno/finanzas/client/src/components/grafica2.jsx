import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar las escalas y elementos necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const YourChartComponent2 = ({ data , data2, data3}) => {
  const months = data.map(item => `Mes ${item.month}`);
  const totalAmounts = data.map(item => parseFloat(item.total_cantidad));
  const months2 = data2.map(item => `Mes ${item.month}`);
  const totalAmounts2 = data2.map(item => parseFloat(item.total_cantidad));
  const months3 = data3.map(item => `Mes ${item.month}`);
  const totalAmounts3 = data3.map(item => parseFloat(item.total_cantidad));

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Total Cantidad',
        data: totalAmounts,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        tension: 0.1, // Suavizar la línea
      },
      {
        label: 'Total Ingresos',
        data: totalAmounts2,
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)', // Color diferente para la segunda línea
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        tension: 0.1, // Suavizar la línea
      },
      {
        label: 'Meta',
        data: totalAmounts3,
        fill: false,
        borderColor: 'rgba(255, 255, 0, 1)', // Color diferente para la segunda línea
        backgroundColor: 'rgba(255, 255, 0, 0.6)',
        tension: 0.1, // Suavizar la línea
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Gráfico Ingresos vrs Gastos vrs Meta', // Aquí pones el título que quieras
        font: {
          size: 20, // Tamaño del título
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      legend: {
        display: true,
        position: 'top', // Cambia la posición de la leyenda si lo deseas
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Meses',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Cantidad Mensual',
        },
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default YourChartComponent2;