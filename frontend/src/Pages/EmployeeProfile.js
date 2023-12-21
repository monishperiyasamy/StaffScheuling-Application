// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import '../Assets/ViewProfile.css';

// import EmployeeDasboard from './EmployeeDasboard';
// function EmployeeProfile() {
//   const { empId } = useParams();
//   const [employeeData, setEmployeeData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/employee/getempbyid/${empId}`);
//         setEmployeeData(response.data);
//       } catch (error) {
//         console.error('Failed to fetch employee details:', error);
//       }
//     };
//     fetchData();
//   }, [empId]);

//   if (employeeData === null) {
//     return <div>Loading...</div>;
//   }

//   const nav=useNavigate();
//   const token=localStorage.getItem("jwtToken")
//   if(token===null){
//     nav("/")
   
//   }
//   const [user, setuser] = useState([]);
//   useEffect(() => {
//     const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
//     setuser(storeduser);
// },[]);

//   return (
//     <div className="profile-container">
//       <div>
//          <EmployeeDasboard/>
//         </div>
//       <h1>Employee Profile</h1>

//       <div className="profile-card">
//         <img
//           className="profile-photo"
//           src={employeeData.gender === 'Female' ? 'https://cdn3.iconfinder.com/data/icons/dashboard-ui-vol-3-flat/48/Dashboard_-_Vol._3-03-512.png' : 'https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png'}
//           alt="profile-img"
//         />
//         <div className="profile-details">
//           <p className="bold-heading">Name  :  {employeeData.empName}</p>
//           <p className="bold-heading">Email : {employeeData.email}</p>
//           <p className="bold-heading">Gender: {employeeData.gender}</p>
//           <p className="bold-heading">Contact Number: {employeeData.contactnum}</p>
//           <p className="bold-heading">Department :{employeeData.dep}</p>
//           <p className="bold-heading">Address: {employeeData.address}</p>
//           <p className="bold-heading">Age: {employeeData.age}</p>
//           <p className="bold-heading">Date of Birth: {new Date(employeeData.dob).toLocaleDateString()}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EmployeeProfile;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import '../Assets/ViewProfile.css';

import EmployeeDasboard from './EmployeeDasboard'; // Correct the import statement

function EmployeeProfile() {
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

  const navigate = useNavigate(); // Correct the variable name
  const token = localStorage.getItem("jwtToken");

  if (token === null) {
    navigate("/");
  }

  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
  }, []);

  if (employeeData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div>
        <EmployeeDasboard/>
      </div>
      <h1>Employee Profile</h1>

      <div className="profile-card">
        <img
          className="profile-photo"
          src={employeeData.gender === 'Female' ? 'https://cdn3.iconfinder.com/data/icons/dashboard-ui-vol-3-flat/48/Dashboard_-_Vol._3-03-512.png' : 'https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png'}
          alt="profile-img"
        />
        <div className="profile-details">
        <p className="bold-heading">Name  :  {employeeData.empName}</p>
           <p className="bold-heading">Email : {employeeData.email}</p>
           <p className="bold-heading">Gender: {employeeData.gender}</p>
           <p className="bold-heading">Contact Number: {employeeData.contactnum}</p>
           <p className="bold-heading">Department :{employeeData.dep}</p>
           <p className="bold-heading">Address: {employeeData.address}</p>
           <p className="bold-heading">Age: {employeeData.age}</p>
           <p className="bold-heading">Date of Birth: {new Date(employeeData.dob).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfile;
