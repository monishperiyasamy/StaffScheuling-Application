import React, { useState } from 'react';
import '../Assets/AdminNavbar.css'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import the AccountCircleIcon
function EmployeeNavbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const name=localStorage.getItem("username");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };
  
    return (
        <div>
          <header>
            <nav className="admin-navbar">
              <h6 className="admin-logo">
              WELCOME &nbsp;&nbsp;&nbsp; {name} 
              </h6>
              <input type="checkbox" id="admin-menu-toggler" />
             
              <div className='admin-navda'>
                <ul className="admin-links">
                  <li>
                    <Link to="/">Home</Link>
    
                  </li>
                  
                  <li>
                    <Link to="/admin-about">About Us</Link>
                  </li>
                  <li className="admin-login-drop">
                <a onClick={toggleDropdown}>
                  <AccountCircleIcon fontSize="large" /> {/* Use the AccountCircleIcon */}
                </a>
                {showDropdown && (
                  <div className="admin-dropdown" onClick={hideDropdown}>
                    <Link to="/admin" className='admin-dsh'>{name}</Link>
                    <br />
                    <Link to="/" className='emp-dsh'>Logout</Link>
                  </div>
                )}
              </li>
                  <li>
                    <Link to="/admin-contact">Contact Us</Link>
                  </li>
                 
                  
                </ul>
              </div>
            </nav>
          </header>
        </div>
      )
    }
    

export default EmployeeNavbar