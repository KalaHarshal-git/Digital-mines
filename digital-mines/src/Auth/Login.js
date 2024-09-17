// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import the AuthContext

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Destructure login from AuthContext

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Example authentication check - replace with your actual logic
    switch (username) {
      case 'supervisor':
        if (password === 'password') {
          login('Supervisor');
          navigate('/supervisor-dashboard');
        } else {
          setError('Invalid username or password');
        }
        break;
      case 'planner':
        if (password === 'password') {
          login('Planner');
          navigate('/planner-dashboard');
        } else {
          setError('Invalid username or password');
        }
        break;
      case 'manager':
        if (password === 'password') {
          login('Mine Manager');
          navigate('/mine-manager-dashboard');
        } else {
          setError('Invalid username or password');
        }
        break;
      case 'MedicalOfficer':
        if (password === 'password') {
          login('Medical Officer');
          navigate('/medical-officer-dashboard');
        } else {
          setError('Invalid username or password');
        }
        break;
      case 'SafetyOfficer':
        if (password === 'password') {
          login('Safety Officer');
          navigate('/safety-officer-dashboard');
        } else {
          setError('Invalid username or password');
        }
        break;
      default:
        setError('Invalid username or password');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="username" style={styles.label}>Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #e0f7fa, #b3e5fc)', // Light blue gradient
    margin: 0,
  },
  container: {
    maxWidth: '400px',
    width: '100%',
    padding: '20px',
    backgroundColor: '#ffffff', // White background for the login box
    borderRadius: '12px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Softer shadow
  },
  title: {
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333', // Darker text color
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '20px', // Increased spacing between fields
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#333', // Darker text color
  },
  input: {
    width: '100%',
    padding: '12px', // Increased padding
    borderRadius: '8px', // Rounded corners
    border: '1px solid #ccc',
    boxSizing: 'border-box', // Ensures padding is included in width
  },
  button: {
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', // Smooth transition for hover effect
  },
  buttonHover: {
    backgroundColor: '#0056b3', // Darker blue on hover
  },
  error: {
    color: 'red',
    fontSize: '14px',
    textAlign: 'center', // Centered error message
  },
};

export default Login;
