// src/components/NavigationBar.js

import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FaBell, FaUserCircle, FaHome, FaInfoCircle, FaRegLightbulb, FaQuestionCircle, FaUpload } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Import the CSS file

const NavigationBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
    setSearchQuery('');
  };

  return (
    <Navbar className="yellow-navbar" expand="lg">
      <Navbar.Brand href="/">Deepfake Detector</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/" className="nav-link">
            <FaHome /> Home
          </Nav.Link>
          <Nav.Link href="/about" className="nav-link">
            <FaInfoCircle /> About
          </Nav.Link>
          <Nav.Link href="/features" className="nav-link">
            <FaRegLightbulb /> Features
          </Nav.Link>
          <Nav.Link href="/faq" className="nav-link">
            <FaQuestionCircle /> FAQ
          </Nav.Link>
          <NavDropdown title="Analysis" id="basic-nav-dropdown" className="nav-link">
            <NavDropdown.Item href="/upload">
              <FaUpload /> Upload Video
            </NavDropdown.Item>
            <NavDropdown.Item href="/results">
              <FaRegLightbulb /> View Results
            </NavDropdown.Item>
            <NavDropdown.Item href="/history">
              <FaRegLightbulb /> History
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex" onSubmit={handleSearch}>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="outline-success" type="submit">Search</Button>
        </Form>
        <Nav className="ms-auto">
         
          <NavDropdown title={<FaUserCircle />} id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
