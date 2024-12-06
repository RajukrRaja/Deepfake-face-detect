import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Price from './components/pricing/price'; // Fixed this import to match the correct component name
import Detect from './components/Detect/Detect';
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
          <Route path="/Price" element={<Price/>} /> {/* Updated the component name here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
