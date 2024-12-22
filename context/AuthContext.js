import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Mock authentication logic
    if (email === 'test@example.com' && password === 'password') {
      setUser({ email });
      return true;
    }
    return false;
  };

  const register = (email, password) => {
    // Mock registration logic
    setUser({ email });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
