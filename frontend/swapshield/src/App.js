import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Detect from './components/Detect/Detect';
import User from './components/user/user';
import Price from './components/Pricing/Price';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Features from './components/Features/Feature';
// Import other components for additional routes as needed

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Detect" element={<Detect />} />
          <Route path="/User" element={<User/>} />
          <Route path='/pricing' element={<Price/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/features' element={<Features/>} />
          
          
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
