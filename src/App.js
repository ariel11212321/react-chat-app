// src/App.js
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login/Login.tsx'
import HomePage from './components/HomePage/HomePage.tsx';
import Register from './components/Register/Register.tsx';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register/>} />

          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
