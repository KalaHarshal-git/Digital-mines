import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Header from './components/General/Header';
import Footer from './components/General/Footer';
import SupervisorNavbar from './components/General/SupervisorNavbar';
import PlannerNavbar from './components/General/PlannerNavbar';
import MineManagerNavbar from './components/General/MineManagerNavbar';
import Analytics from './Analytics';
import OverallDashboard from './OverallDashboard';
import SupervisorDashboard from './components/Supervisor/SupervisorDashboard';
import PlannerDashboard from './components/Planner/PlannerDashboard';
import MineManagerDashboard from './components/MineManager/MineManagerDashboard';
import MedicalOfficerDashboard from './components/MedicalOfficer/MedicalOfficerDashboard'
import SafetyOfficerDashboard from './components/SafetyOfficer/SafetyOfficerDashboard';
import Login from './Auth/Login';
import RoleProtectedRoute from './RoleProtectedRoute'; // Role-based route protection
import { AuthProvider, useAuth } from './AuthContext';
import './App.css';
import MedicalOfficerNavbar from './components/General/MedicalOfficerNavbar';
import SafetyOfficerNavbar from './components/General/SafetyOfficerNavbar';

function App() {
  const auth = useAuth();
  const user = auth?.user;

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route 
            path="/supervisor-dashboard" 
            element={
              <RoleProtectedRoute 
                element={
                  <>
                    <Header />
                    <SupervisorNavbar />
                    <SupervisorDashboard />
                    <Footer />
                  </>
                } 
                allowedRoles={['Supervisor']} 
              />} 
          />
          <Route 
            path="/planner-dashboard" 
            element={
              <RoleProtectedRoute 
                element={
                  <>
                    <Header />
                    <PlannerNavbar />
                    <PlannerDashboard />
                    <Footer />
                  </>
                } 
                allowedRoles={['Planner']} 
              />} 
          />
          <Route 
            path="/mine-manager-dashboard" 
            element={
              <RoleProtectedRoute 
                element={
                  <>
                    <Header />
                    <MineManagerNavbar />
                    <MineManagerDashboard />
                    <Footer />
                  </>
                } 
                allowedRoles={['Mine Manager']} 
              />} 
          />
          <Route 
            path="/medical-officer-dashboard" 
            element={
              <RoleProtectedRoute 
                element={
                  <>
                    <Header />
                    <MedicalOfficerNavbar />
                    <MedicalOfficerDashboard />
                    <Footer />
                  </>
                } 
                allowedRoles={['Medical Officer']} 
              />} 
          />
            <Route 
            path="/safety-officer-dashboard" 
            element={
              <RoleProtectedRoute 
                element={
                  <>
                    <Header />
                    <SafetyOfficerNavbar />
                    <SafetyOfficerDashboard />
                    <Footer />
                  </>
                } 
                allowedRoles={['Safety Officer']} 
              />} 
          />
          <Route path="/analytics" element={<RoleProtectedRoute element={<><Header /><Analytics /><Footer /></>} allowedRoles={['Supervisor', 'Planner', 'Mine Manager', 'Medical Officer']} />} />
          <Route path="/dashboard" element={<RoleProtectedRoute element={<><Header /><OverallDashboard /><Footer /></>} allowedRoles={['Supervisor', 'Planner', 'Mine Manager', 'Medical Officer']} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
