// EmployeeDetails.js

import React, { useEffect, useState } from 'react';
import '../Assets/EmployeeDetails.css';
import AdminDashboard from './AdminDashboard';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EmployeeDetails() {
  // State to store employee data
  const [employeeData, setEmployeeData] = useState([]);

  // Fetch employee data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/employee/getAll");
        setEmployeeData(response.data);
      } catch (error) {
        console.error('Failed to fetch employee details:', error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteEmployee = async (empId) => {
    try {
      await axios.delete(`http://localhost:8080/employee/delete/${empId}`);
      setEmployeeData((prevEmployeeData) =>
        prevEmployeeData.filter((employee) => employee.empId !== empId)
      );
      alert('Employee deleted successfully');
    } catch (error) {
      console.error('Failed to delete employee:', error);
      alert('Failed to delete employee');
    }
  };
  
  const nav=useNavigate();
  const token=localStorage.getItem("jwtToken")
  if(token===null){
    nav("/")
   
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
},[]);

  // Render employee details
  return (
    <div className='emp-body'>
      <div className="whole">
        <div>
          <AdminDashboard />
        </div>
        <Link to="/addemp">
          <button className='add-button'>Add Employee</button>
        </Link>
        <div className="card-row">
          {employeeData.map((employee) => (
            <div className="card" key={employee.empId}>
              <div className="top">
                <Link to={`/adminviewprofile/${employee.empId}`}>
                  <img
                    className="profile-photo"
                    src={employee.gender === 'Female' ? 'https://cdn3.iconfinder.com/data/icons/dashboard-ui-vol-3-flat/48/Dashboard_-_Vol._3-03-512.png' : 'https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png'}
                    alt="profile-img"
                  />
                  <h3 className="name">{employee.empName}</h3>
                  <p className="title">{employee.email}</p>
                  <div className="time">{employee.dep}</div>
                </Link>
              </div>
              <div className="bottom">
                <Link to={`/updateemp/${employee.empId}`}>
                  <button className="profile-action-edit">Edit profile</button>
                </Link>
                <br />
                <button
                  className="profile-action-delete"
                  onClick={(e) => {
                    e.preventDefault(); // Prevents the default link behavior
                    handleDeleteEmployee(employee.empId);
                  }}
                >
                  Delete profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
