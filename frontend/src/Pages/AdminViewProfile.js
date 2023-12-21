import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Assets/ViewProfile.css'

import AdminDashboard from './AdminDashboard';

const AdminViewProfile = () => {
    const { empId } = useParams();
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/employee/getempbyid/${empId}`);
        setEmployeeData(response.data);
      } catch (error) {
        console.error('Failed to fetch employee details:', error);
      }
    };
    fetchData();
  }, [empId]);

  if (employeeData === null) {
    return <div>Loading...</div>;
  }

  

  return (
   <div>
     <div>
      <AdminDashboard/>
    </div>
    <section className="services" id="services">
      
 
      <ul className="cards">
       
        <li className="card">
        <img
          className="profile-photo"
          src={employeeData.gender === 'Female' ? 'https://cdn3.iconfinder.com/data/icons/dashboard-ui-vol-3-flat/48/Dashboard_-_Vol._3-03-512.png' : 'https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png'}
          alt="profile-img"
        />
          <div className='empcomtent'>
          <h3 className='empname'> NAME:{employeeData.empName}</h3>
          <br></br>
          <h3  className='empcontent13'>DEPARTMENT:{employeeData.dep}</h3>
          <br></br>
          <p className='empcontent1'>EMAIL:{employeeData.email}</p>
            <br></br>
            <p className='empcontent1'>D.O.B:{new Date(employeeData.dob).toLocaleDateString()}</p>
            <br></br>
            
            <p className='empcontent1'>GENDER:{employeeData.gender}</p>
            <br></br>
            <p className='empcontent1'>SKILLS:{employeeData.skills}</p>
            <br></br>
            <p className='empcontent1'>MOBILE: {employeeData.contactnum}</p>
            <br></br>
            <p className='empcontent1'>AGE:{employeeData.age}</p>
            <br></br>
            
          </div>
       
        </li>
       
        
      </ul>
    </section>
    </div>
  );
};

export default AdminViewProfile;
