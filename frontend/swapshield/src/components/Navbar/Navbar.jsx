import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Navbar.css';
import { FaUserCircle, FaSearch, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Handle Progress Bar Animation
  useEffect(() => {
    setProgress(isSearching ? 100 : 0);
  }, [isSearching]);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  // Toggle Dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Toggle Sidebar
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <nav className={`navbar ${darkMode ? 'navbar--dark' : ''}`}>
      {/* Logo */}
<img 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJ1dZdRv2Yy7QH5YaFW3rXOv_OWE71eHbRw&s" 
  alt="Logo"
  style={{ width: '50px', height: '50px', objectFit: 'contain' }}
/>


      {/* Desktop Menu */}
      <ul className="navbar__menu">
        <li>
          <NavLink to="/features" activeClassName="active">
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" activeClassName="active">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Search Bar */}
      <div className="navbar__search">
        <input
          type="text"
          className={`navbar__searchInput ${isSearching ? 'active' : ''}`}
          placeholder="Search AI tools, articles..."
          onFocus={() => setIsSearching(true)}
          onBlur={() => setIsSearching(false)}
          aria-label="Search"
        />
        <FaSearch className="navbar__searchIcon" />
      </div>

      {/* Progress Bar */}
      <ProgressBar progress={progress} />

      {/* Dark Mode Toggle */}
      <div className="navbar__darkModeToggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
        {darkMode ? <FaSun /> : <FaMoon />}
      </div>

      {/* Profile / Login / Sign-Up */}
      <div className="navbar__auth">
        <Link to="/login" className="navbar__loginBtn">Login</Link>
        <Link to="/Register" className="navbar__signupBtn">Sign Up</Link>
        <div className="navbar__profileIcon" onClick={toggleDropdown} aria-label="Toggle profile dropdown">
          <FaUserCircle />
          {dropdownOpen && <ProfileDropdown />}
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="navbar__mobileMenuIcon" onClick={toggleSidebar} aria-label="Toggle sidebar">
        {sidebarVisible ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar Component */}
      <Sidebar isVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
    </nav>
  );
};

const ProgressBar = ({ progress }) => (
  <div className="navbar__progressContainer">
    <div className="navbar__progressBar" style={{ width: `${progress}%`, transition: 'width 0.3s ease' }} />
  </div>
);

const ProfileDropdown = () => (
  <div className="navbar__profileDropdown">
    <ul>
      <li><Link to="/profile">My Profile</Link></li>
      <li><Link to="/settings">Settings</Link></li>
      <li><Link to="/logout">Logout</Link></li>
    </ul>
  </div>
);

export default Navbar;
