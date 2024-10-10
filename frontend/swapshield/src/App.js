import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Adjust the path as needed based on where Navbar is located

function App() {
  return (
    <Router>
      <Navbar />
      {/* other components can be added here */}
    </Router>
  );
}

export default App;
