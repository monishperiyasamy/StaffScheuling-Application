import React, { useState, useEffect } from 'react';
import AdminDashboard from './AdminDashboard';
import '../Assets/AdminTimeOff.css'
import { useNavigate } from 'react-router-dom';

function AdminTimeOff() {
  const [timeoffs, setTimeoffs] = useState([]);

  useEffect(() => {
    // Fetch time-off data when the component mounts
    fetchTimeoffs();
  }, []);

  const fetchTimeoffs = async () => {
    try {
      const response = await fetch('http://localhost:8080/timeoff-requests/api/timeoffs');
      const data = await response.json();
      setTimeoffs(data);
    } catch (error) {
      console.error('Error fetching time-offs:', error);
    }
  };

  const nav = useNavigate();
  const token = localStorage.getItem("jwtToken")
  if (token === null) {
    nav("/")
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
  }, []);

  return (
    <div>
      <div className='timallschedulebody'>
        <div className="container">
          <div className="table">
            <div>
              <AdminDashboard />
            </div>

            <div className="timtable-header">
              <div className="timheader__item">
                <span className="timheader__text">Name</span>
              </div>
              <div className="timheader__item">
                <span className="timheader__text">Department</span>
              </div>
              <div className="timheader__item">
                <span className="timheader__text">Request Date</span>
              </div>
              <div className="timheader__item">
                <span className="timheader__text">Reason</span>
              </div>
              <div className="timheader__item">
                <span className="timheader__text">Actions</span>
              </div>
            </div>

            <div className="timtable-content">
              {timeoffs.map((timeoff) => (
                <div key={timeoff.id} className="timtable-row">
                  <div className="timtable-data">{timeoff.empName}</div>
                  <div className="timtable-data">{timeoff.dep}</div>
                  <div className="timtable-data">{timeoff.requestDate}</div>
                  <div className="timtable-data">{timeoff.reason}</div>
                  <div className="timtable-data">
                  </div>
                  <br></br>
                  <div> 
                  <button >Accept</button>
                  </div>
                  <br></br>
                  <div>
                  <button>Deny</button>
                  </div>
                  </div>
              
               
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminTimeOff;
