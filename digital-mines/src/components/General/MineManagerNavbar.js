// src/components/General/MineManagerNavbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MineManagerNavbar = () => {
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
        <li><Link to="/mine-dashboard" style={styles.link}>Dashboard</Link></li>
        <li><Link to="/production-reports" style={styles.link}>Production Reports</Link></li>
        <li><Link to="/safety-reports" style={styles.link}>Safety Reports</Link></li>
        <li><Link to="/team-management" style={styles.link}>Team Management</Link></li>
        <li><Link to="/equipment-management" style={styles.link}>Equipment Management</Link></li>
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

export default MineManagerNavbar;
