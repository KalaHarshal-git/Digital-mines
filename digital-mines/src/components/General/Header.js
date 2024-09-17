// src/components/General/Header.js
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000); // Update time every second
    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h1>Mine Management System</h1>
      </div>
      <div style={styles.timeContainer}>
        <span>{currentTime.toLocaleDateString()}</span>
        <span>{currentTime.toLocaleTimeString()}</span>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50px', // Reduced header height
  },
  logo: {
    fontSize: '20px', // Adjusted font size for a smaller header
  },
  timeContainer: {
    display: 'flex',
    flexDirection: 'column', // Makes date and time display vertically
    fontSize: '14px', // Adjusted font size for date and time
    textAlign: 'right', // Aligns the text to the right
  },
};

export default Header;
