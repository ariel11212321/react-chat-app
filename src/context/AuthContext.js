// src/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (username, password) => {
    setLoading(true);
    console.log(username, password)
    fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setCurrentUser(null);
        setLoading(false);
        console.error('Error:', error);
      });
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const signup = (username, email, password) => {
    setLoading(true);
    fetch("http://localhost:3001/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        
        setCurrentUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setCurrentUser(null);
        setLoading(false);
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    // Assuming you have an endpoint to check the current user's auth status
    fetch("http://localhost:3001/api/currentUser")
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setCurrentUser(null);
        setLoading(false);
        console.error('Error:', error);
      });
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
