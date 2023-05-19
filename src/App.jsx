import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import logo from '../src/img/logo.png';
import Home from './components/nested components/Home';
import About from '../src/components/nested components/About';
import Contact from '../src/components/nested components/Contact';
import Deals from './components/nested components/Deals';
import { Routes, Route } from 'react-router-dom';
import title from '../src/img/title.png';
import './App.css';
import Footer from './components/Footer';
import User from './components/User';
import WeeklyD from './components/nested components/WeeklyD';
import MonthlyD from './components/nested components/MonthlyD';
import Register from './components/nested components/Register';
import Login from './components/nested components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/deals', label: 'Deals' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div>
      <Navbar logo={logo} navLinks={navLinks} isLoggedIn={isLoggedIn} userName={userName} onLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<Home title={title} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/deals" element={<Deals />}>
          <Route path="weeklyD" element={<WeeklyD />} />
          <Route path="monthlyD" element={<MonthlyD />} />
        </Route>
        <Route path="/user" element={<User userName={userName} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
