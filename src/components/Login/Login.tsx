// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.ts';
import './Login.css';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, signup, currentUser } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);

    if(currentUser != null) {
        navigate('/');
    }
    
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
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
        <button type="submit" onClick={handleLogin}>Sign In</button>
        <button type="button" onClick={handleSignup}>Register</button>
      </form>
    </div>
  );
}

export default Login;
