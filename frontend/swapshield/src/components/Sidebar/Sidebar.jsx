import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isVisible, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isVisible ? 'sidebar--visible' : ''}`}>
      <div className="sidebar__header">
   
        <FaTimes className="sidebar__closeIcon" onClick={toggleSidebar} />
      </div>
      <ul className="sidebar__menu">
        <li><Link to="/features" onClick={toggleSidebar}>Features</Link></li>
        <li><Link to="/pricing" onClick={toggleSidebar}>Pricing</Link></li>
        <li><Link to="/about" onClick={toggleSidebar}>About</Link></li>
        <li><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
        <li><Link to="/gallery" onClick={toggleSidebar}>Gallery</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
