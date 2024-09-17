// src/components/General/SafetyOfficerNavbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SafetyOfficerNavbar = () => {
  // Initialize navigate hook for programmatic navigation
  const navigate = useNavigate();

  // Handle logout logic
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      // Perform logout actions here (e.g., clear tokens)
      // Redirect to login page
      navigate('/login');
    }
  };

  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li><Link to="/safety-dashboard" style={styles.link}>Dashboard</Link></li>
        <li><Link to="/incident-reports" style={styles.link}>Incident Reports</Link></li>
        <li><Link to="/safety-audits" style={styles.link}>Safety Audits</Link></li>
        <li><Link to="/training-records" style={styles.link}>Training Records</Link></li>
        <li><Link to="/regulations" style={styles.link}>Regulations</Link></li>
        <li style={styles.logoutItem}>
          <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#444',
    padding: '10px 20px',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
  },
  logoutItem: {
    marginLeft: 'auto', // Push logout button to the right
  },
  logoutButton: {
    backgroundColor: '#f00',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default SafetyOfficerNavbar;
