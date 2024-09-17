// RoleProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const RoleProtectedRoute = ({ element, allowedRoles }) => {
  const { user } = useAuth();

  // If user is logged in and their role is allowed, render the component
  if (user && allowedRoles.includes(user.role)) {
    return element;
  }

  // Otherwise, redirect to a "not authorized" page or login page
  return <Navigate to="/not-authorized" />;
};

export default RoleProtectedRoute;
