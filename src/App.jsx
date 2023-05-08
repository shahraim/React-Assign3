import React from "react";
import Navbar from './components/Navbar'
import logo from '../src/img/logo.png'
import Home from "./components/nested components/Home";
import About from '../src/components/nested components/About'
import Contact from '../src/components/nested components/Contact'
import Deals from './components/nested components/Deals'
import { Routes, Route } from "react-router-dom";
import title from "../src/img/title.png"
import './App.css';
import Footer from "./components/Footer";
import User from "./components/User";
import WeeklyD from "./components/nested components/WeeklyD";
import MonthlyD from "./components/nested components/MonthlyD";


function App() {
  return (
    <>
      <Navbar logo={logo} home={"Home"} about={"About"} contact={"Contact"} Deals={"Deals"} />

      <Routes>
        <Route path="/" element={<Home title={title} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Deals" element={<Deals />} >
          <Route path="WeeklyD" element={<WeeklyD />} />
          <Route path="MonthlyD" element={<MonthlyD />} />
        </Route>
        <Route path="/user" element={<User />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
