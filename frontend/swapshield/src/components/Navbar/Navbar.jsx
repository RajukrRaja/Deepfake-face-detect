import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      toggleNavbar(); // Close the menu when a link is clicked
    }
  };

  return (
    <nav className="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="logo flex-shrink-0 flex items-center">
            <Link to="/" onClick={handleLinkClick}>Deepfake Detection</Link>
          </div>

          {/* Desktop Navbar links */}
          <div className="navbar-links hidden md:flex space-x-8 items-center">
            <NavLink to="/" exact className="link" activeClassName="active-link" onClick={handleLinkClick}>Home</NavLink>
            <NavLink to="/about" className="link" activeClassName="active-link" onClick={handleLinkClick}>About</NavLink>
            <NavLink to="/features" className="link" activeClassName="active-link" onClick={handleLinkClick}>Features</NavLink>
            <NavLink to="/contact" className="link" activeClassName="active-link" onClick={handleLinkClick}>Contact</NavLink>
          </div>

          {/* Hamburger Menu for mobile */}
          <div className="hamburger md:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`} id="mobile-menu">
        <Link to="/" className="block" onClick={handleLinkClick}>Home</Link>
        <Link to="/about" className="block" onClick={handleLinkClick}>About</Link>
        <Link to="/features" className="block" onClick={handleLinkClick}>Features</Link>
        <Link to="/contact" className="block" onClick={handleLinkClick}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
