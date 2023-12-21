import React, { useState } from 'react';
import '../Assets/Dropdown.css';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [selectedOption, setSelectedOption] = useState(''); // State to track the selected option

  const options = ['Admin', 'Staff', 'Student']; // Dropdown options

  // Function to handle option selection and navigation
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option

    // Handle navigation based on the selected option
    switch (option) {
      case 'Admin':
        window.location.href = '/AdminLogin';
        break;
      case 'Staff':
        window.location.href = '/StaffLogin';
        break;
      case 'Student':
        window.location.href = '/StudentLogin';
        break;
      default:
        // Handle default case
        break;
    }
  };

  // Function to toggle dropdown visibility when clicking "Login"
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div className="dropdown">
        <h3 onClick={toggleDropdown} className="Lo">LOGIN</h3>
        {isOpen && (
          <ul className="dropdown-options">
            {options.map((option, index) => (
              <li key={index} onClick={() => handleOptionSelect(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dropdown;