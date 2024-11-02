import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

const App: React.FC = () => {
  const [token, setToken] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={setToken} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home token={token} />} />
        <Route path="/" element={<h1>ようこそ</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
