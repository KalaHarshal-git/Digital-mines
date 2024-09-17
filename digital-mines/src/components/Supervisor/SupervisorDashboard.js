// src/pages/SupervisorDashboard.js
import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const SupervisorDashboard = () => {
  // Sample data for charts
  const lineChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Production Output',
        data: [200, 220, 210, 230],
        borderColor: '#007bff',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: ['Site A', 'Site B', 'Site C', 'Site D'],
    datasets: [
      {
        label: 'Work Hours',
        data: [1200, 1100, 950, 1400],
        backgroundColor: '#28a745',
      },
    ],
  };

  const pieChartData = {
    labels: ['Operational', 'Maintenance', 'Idle'],
    datasets: [
      {
        label: 'Operational Status',
        data: [60, 25, 15],
        backgroundColor: ['#dc3545', '#ffc107', '#17a2b8'],
      },
    ],
  };

  return (
    <div style={styles.container}>
      <h2>Supervisor Dashboard</h2>
      <div style={styles.chartContainer}>
        <div style={styles.chart}>
          <h3>Production Output Over Time</h3>
          <Line data={lineChartData} />
        </div>
        <div style={styles.chart}>
          <h3>Work Hours by Site</h3>
          <Bar data={barChartData} />
        </div>
        <div style={styles.smallChart}>
          <h3>Operational Status</h3>
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  chartContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  chart: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  smallChart: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '50%',  // Adjust the width for the Pie chart
    margin: '0 auto',  // Center the Pie chart
  },
};

export default SupervisorDashboard;
