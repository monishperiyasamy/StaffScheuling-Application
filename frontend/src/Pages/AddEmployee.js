import React, { useEffect, useState } from 'react';
import '../Assets/AddEmployee.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AddEmployee() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    empName: '',
    email: '',
    gender: '',
    contactnum: '',
    address: '',
    age: '',
    dob: '',
    dep: '',
    skills:''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to create a new employee in the employee database
      const employeeResponse = await axios.post("http://localhost:8080/employee/addemployee", formData);
      console.log('Employee details added:', employeeResponse.data);

      // Now, send a request to register the employee in the authentication database
      const authData = {
        email: formData.email,
        password: 'password',
        role: 'EMPLOYEE',
      };

      const authResponse = await axios.post("http://localhost:8080/auth/register/admin", authData);
      console.log('Employee registered in authentication database:', authResponse);

      alert('Employee details added successfully');
      nav("/employee"); // Redirect to the employee list page
    } catch (error) {
      console.error('Failed to add employee:', error);
      alert('Failed to add employee');
    }
  };

  
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
    <div className="whole">
      <div className="fees-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="empName">Employee Name</label>
            <input
              type="text"
              name="empName"
              id="empName"
              value={formData.empName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="skills">Skills</label>
            <input
              type="text"
              name="skills"
              id="skills"
              value={formData.skills}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dep">Department</label>
            <input
              type="text"
              name="dep"
              id="dep"
              value={formData.dep}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactnum">Contact number</label>
            <input
              type="text"
              name="contactnum"
              id="contactnum"
              value={formData.contactnum}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              id="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dob">DOB (yyy-mm-dd)</label>
            <input
              type="text"
              name="dob"
              id="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
