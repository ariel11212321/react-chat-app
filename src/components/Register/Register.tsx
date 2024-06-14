// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.ts';
import './Register.css';


function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, signup, currentUser } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    signup(username, password);

    if(currentUser != null) {
        navigate('/login');
    }
    
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="login-container">
      <h1>Register Page</h1>
      {error && <p className="error">{error}</p>}
      <form>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" onClick={handleRegister}>register</button>
        <button type="button" onClick={handleLogin}>already have an account? login</button>
      </form>
    </div>
  );
}

export default Register;
