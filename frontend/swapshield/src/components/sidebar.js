import React, { useState } from 'react';
import { FaBars, FaHome, FaUpload, FaListAlt, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './sidebar.css'; // Add custom CSS styling

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggles the sidebar state between open and closed
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Closes the sidebar after a menu item is clicked
    const handleMenuClick = () => {
        setIsOpen(false);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="top-section">
                <FaBars onClick={toggleSidebar} className="menu-icon" />
                <h1 className="logo">{isOpen && 'FaceSwap Detection'}</h1>
            </div>
            <ul className="nav-menu">
                <li onClick={handleMenuClick}>
                    <FaHome className="menu-item-icon" />
                    {isOpen && <span>Home</span>}
                </li>
                <li onClick={handleMenuClick}>
                    <FaUpload className="menu-item-icon" />
                    {isOpen && <span>Upload Video</span>}
                </li>
                <li onClick={handleMenuClick}>
                    <FaListAlt className="menu-item-icon" />
                    {isOpen && <span>Detection Results</span>}
                </li>
                <li onClick={handleMenuClick}>
                    <FaUser className="menu-item-icon" />
                    {isOpen && <span>User Profile</span>}
                </li>
                <li onClick={handleMenuClick}>
                    <FaCog className="menu-item-icon" />
                    {isOpen && <span>Settings</span>}
                </li>
                <li onClick={handleMenuClick}>
                    <FaSignOutAlt className="menu-item-icon" />
                    {isOpen && <span>Logout</span>}
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
