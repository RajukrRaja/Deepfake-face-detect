import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import user from './components/user/user'
import Detect from './components/Detect/Detect';
import User from './components/user/user';
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
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
