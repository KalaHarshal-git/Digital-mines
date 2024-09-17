// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Create an Auth context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Simulating login and storing user roles
  const [user, setUser] = useState(null); // Store the user object with a role

  const login = (role) => setUser({ role }); // login with a role
  const logout = () => setUser(null); // logout and clear user

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
