import React, { useEffect, useState } from 'react';
import Axios from 'axios';
// import debounce from 'lodash/debounce';
import EmployeeDasboard from './EmployeeDasboard';
import '../Assets/AdminSchedule.css';
import { useNavigate, useParams } from 'react-router-dom';

const WeeklySchedule = () => {
  const [weeklySchedules, setWeeklySchedules] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const {emailid}=useParams();
  const email=localStorage.getItem("email");
  // const email = emailid;
  // const fetchWeeklySchedule = async () => {
  //   try {
  //     setLoading(true);

  //     if (emailid) {
  //       const response = await Axios.get(`http://localhost:8080/schedule/weekly-schedule/get-weekly-schedule-by-email/${emailid}`);
  //       setWeeklySchedules(response.data);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching weekly schedule:', error);
  //     setError('Error fetching weekly schedule. Please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchWeeklySchedule = async () => {
    try {
      setLoading(true);
  
      if (email) {
        console.log('Email:', email); // Add this line to check the value
        const response = await Axios.get(
          `http://localhost:1205/schedule/weekly-schedule/get-weekly-schedule-by-email/${email}`
        );
        setWeeklySchedules(response.data);
      }
    } catch (error) {
      console.error('Error fetching weekly schedule:', error);
      setError('Error fetching weekly schedule. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchWeeklySchedule();
  }, [email]);
  
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

  return (
    <div className='allschedulebody'>
      <div className="container">
        <div className="table">
          <div>
            <EmployeeDasboard />
          </div>
          <div className="table-header">
            <div className="header__item">
              <span className="header__text">Date</span>
            </div>
            <div className="header__item">
              <span className="header__text">Shift</span>
            </div>
            <div className="header__item">
              <span className="header__text">Start Time</span>
            </div>
            <div className="header__item">
              <span className="header__text">End Time</span>
            </div>
            {/* <div className="header__item1">
              <span className="header__text">Actions</span>
            </div> */}
          </div>
          <div className="table-content">
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {!loading && !error &&
              weeklySchedules.map(schedule => (
                <div className="table-row" key={schedule.scheduleid}>
                  <div className="table-data">{schedule.date}</div>
                  <div className="table-data">{schedule.shift}</div>
                  <div className="table-data">{schedule.startTime}</div>
                  <div className="table-data">{schedule.endTime}</div>
                  {/* <div>
                    <button className='adminschedule-button'>View</button>
                  </div> */}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklySchedule;
