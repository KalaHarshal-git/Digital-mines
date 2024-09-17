// src/pages/PlannerDashboard.js
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

const PlannerDashboard = () => {
  // Sample data for charts
  const lineChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Task Completion Rate',
        data: [80, 75, 90, 85],
        borderColor: '#007bff',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: ['Project A', 'Project B', 'Project C', 'Project D'],
    datasets: [
      {
        label: 'Task Hours Allocated',
        data: [150, 200, 180, 220],
        backgroundColor: '#28a745',
      },
    ],
  };

  const pieChartData = {
    labels: ['Completed', 'In Progress', 'Pending'],
    datasets: [
      {
        label: 'Task Status',
        data: [55, 30, 15],
        backgroundColor: ['#dc3545', '#ffc107', '#17a2b8'],
      },
    ],
  };

  return (
    <div style={styles.container}>
      <h2>Planner Dashboard</h2>
      <div style={styles.chartContainer}>
        <div style={styles.chart}>
          <h3>Task Completion Rate Over Time</h3>
          <Line data={lineChartData} />
        </div>
        <div style={styles.chart}>
          <h3>Task Hours Allocated by Project</h3>
          <Bar data={barChartData} />
        </div>
        <div style={styles.smallChart}>
          <h3>Task Status</h3>
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

export default PlannerDashboard;
