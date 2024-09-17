// src/pages/MedicalOfficerDashboard.js
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

const MedicalOfficerDashboard = () => {
  // Sample data for charts
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Patient Visits',
        data: [30, 45, 50, 60, 70, 85, 90],
        borderColor: '#007bff',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: ['General Checkup', 'Emergency', 'Follow-up', 'Consultation', 'Others'],
    datasets: [
      {
        label: 'Number of Cases',
        data: [120, 90, 60, 40, 30],
        backgroundColor: '#28a745',
      },
    ],
  };

  const pieChartData = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [
      {
        label: 'Patient Demographics',
        data: [50, 40, 10],
        backgroundColor: ['#dc3545', '#ffc107', '#17a2b8'],
      },
    ],
  };

  return (
    <div style={styles.container}>
      <h2>Medical Officer Dashboard</h2>
      <div style={styles.chartContainer}>
        <div style={styles.chart}>
          <h3>Patient Visits Over Time</h3>
          <Line data={lineChartData} />
        </div>
        <div style={styles.chart}>
          <h3>Cases by Type</h3>
          <Bar data={barChartData} />
        </div>
        <div style={styles.smallChart}>
          <h3>Patient Demographics</h3>
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
    width: '50%',  // Make the Pie chart smaller
    margin: '0 auto',  // Center it
  },
};

export default MedicalOfficerDashboard;
