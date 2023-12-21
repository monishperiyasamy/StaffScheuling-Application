import React, { useState } from 'react';
import '../Assets/Login.css';
import { setToken, setRole } from './LocalStorage'; // Corrected import name
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
   
  });

  const nav = useNavigate();

  const validateForm = () => {
    if (!formData.username || !formData.email ) {
      setAllFieldsError('All fields are required');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // You can perform your form submission logic here.
      console.log('Form data is valid:', formData);
      
      const userCredentials = {
        email: formData.email,
        password: formData.password
      };
      

      axios.post("http://localhost:8080/employee", userCredentials)
      .then(response => {
        // Handle the successful response
        const token = response.data.token;
          if (token) {
            setToken(token);
            const userType = response.data.role;
            setRole(userType);
            if (userType === "EMPLOYEE") { // Use === for strict equality comparison
              nav("/employeeprofile/:empId");
            } else if (userType === "ADMIN") {
              nav('/employee');
            } else {
              alert("Invalid user");
            }
          } else {
            alert("Invalid token. Please try again.");
          }
        })
      .catch(error => {
        console.error("Axios POST request failed:", error);
      });

    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setAllFieldsError('');
  };

  const [allFieldsError, setAllFieldsError] = useState('');

  
  const token=localStorage.getItem("jwtToken")
  if(token===null){
    nav("/")
   
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
},[]);

  return (
    <div className="loginbody">
      <div className="form-wrapper">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="form-item">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="form-item">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {allFieldsError && <div className="error-message">{allFieldsError}</div>}
          <div className="button-panel">
            <input type="submit" className="button" title="Sign In" value="Sign In" />
          </div>
        </form>
        <div className="form-footer">
          <p>
         
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
