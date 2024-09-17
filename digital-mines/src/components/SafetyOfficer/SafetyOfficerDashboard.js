// src/pages/SafetyOfficerDashboard.js
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

const SafetyOfficerDashboard = () => {
  // Sample data for charts
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Incident Reports',
        data: [12, 18, 14, 20, 16],
        borderColor: '#ff6347',
        backgroundColor: 'rgba(255, 99, 71, 0.2)',
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: ['Hazard 1', 'Hazard 2', 'Hazard 3', 'Hazard 4'],
    datasets: [
      {
        label: 'Reported Hazards',
        data: [30, 25, 40, 35],
        backgroundColor: '#007bff',
      },
    ],
  };

  const pieChartData = {
    labels: ['High Risk', 'Medium Risk', 'Low Risk'],
    datasets: [
      {
        label: 'Risk Levels',
        data: [10, 25, 65],
        backgroundColor: ['#dc3545', '#ffc107', '#28a745'],
      },
    ],
  };

  return (
    <div style={styles.container}>
      <h2>Safety Officer Dashboard</h2>
      <div style={styles.chartContainer}>
        <div style={styles.chart}>
          <h3>Incident Reports Over Time</h3>
          <Line data={lineChartData} />
        </div>
        <div style={styles.chart}>
          <h3>Reported Hazards by Type</h3>
          <Bar data={barChartData} />
        </div>
        <div style={styles.smallChart}>
          <h3>Risk Levels</h3>
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

export default SafetyOfficerDashboard;
