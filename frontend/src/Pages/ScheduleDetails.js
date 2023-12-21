import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../Assets/ScheduleDetails.css';
import AdminDashboard from './AdminDashboard';

function ScheduleDetails() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetchSchedules();
  }, []);
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

  const fetchSchedules = () => {
    axios
      .get('http://localhost:8080/schedules/all') // Replace with your back-end API endpoint
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => console.log(error));
  };

  const deleteSchedule = (employeeId) => {
    if (window.confirm('Sure to Delete?')) {
      axios
        .delete(`http://localhost:8080/schedules/delete/${employeeId}`)
        .then(() => {
          fetchSchedules(); // Refresh the data after deleting
        })
        .catch((error) => console.log(error));
    }
  };

  
  

  return (
    <>
    <div>
      <AdminDashboard/>
    </div>
    
        
         
            {/* <h1 className="heading">Schedule Details</h1> */}
            <table >
              <thead>
                <tr>
                  <th>Employee Id</th>
                  <th>Shift</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>UPDATE</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody className="detailsfont">
                {details.map((schedule) => (
                  <tr key={schedule.scheduleid}>
                    <td>{schedule.employeeId}</td>
                    <td>{schedule.shift}</td>
                    <td>{schedule.startTime}</td>
                    <td>{schedule.endTime}</td>
                    <td>{schedule.employeeEmail}</td>
                    <td>{schedule.date}</td>
                    <td>
                      <Link to={`/update/${schedule.scheduleid}`}>
                        <button className="sub">Update</button>
                      </Link>
                    </td>
                    <td>
                      <button className="del" onClick={() => deleteSchedule(schedule.employeeId)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          
       
      
    </>
  );
}

export default ScheduleDetails;
