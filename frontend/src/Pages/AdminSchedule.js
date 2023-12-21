import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import debounce from 'lodash/debounce';
import AdminDashboard from './AdminDashboard';
import '../Assets/AdminSchedule.css';

const AdminSchedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSchedules = async () => {
    try {
      const response = await Axios.get('http://localhost:1205/schedule/get-all-schedules');
      setSchedules(response.data);
    } catch (error) {
      console.error('Error fetching schedules:', error);
      setError('Error fetching schedules. Please try again.');
    }
  };

  const debouncedGenerateSchedules = debounce(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await Axios.post('http://localhost:1205/schedule/generate-schedule');
      console.log('Response from generate-schedule:', response);
      fetchSchedules();
    } catch (error) {
      console.error('Error generating schedules:', error);
      setError('Error generating schedules. Please try again.');
    } finally {
      setLoading(false);
    }
  }, 1000);

  const generateWeeklySchedules = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await Axios.post('http://localhost:1205/schedule/weekly-schedule/generate-weekly-schedule');
      console.log('Response from generate-weekly-schedule:', response);
      fetchSchedules();
    } catch (error) {
      console.error('Error generating weekly schedules:', error);
      setError('Error generating weekly schedules. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    debouncedGenerateSchedules();
    return () => debouncedGenerateSchedules.cancel();
  }, []);

  useEffect(() => {
    generateWeeklySchedules();
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

  return (
    <div className='allschedulebody'>
      <div className="container">
        <div className="table">
          <div>
            <AdminDashboard />
          </div>
          <div className="table-header">
            <div className="header__item">
              <span className="header__text">Emp ID</span>
            </div>
            <div className="header__item">
              <span className="header__text">Name</span>
            </div>
            <div className="header__item">
              <span className="header__text">Department</span>
            </div>
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
            <div className="header__item">
              <span className="header__text">Email</span>
            </div>
            <div className="header__item1">
              <span className="header__text">Contact Number</span>
            </div>
            <div className="header__item1">
              <span className="header__text">Actions</span>
            </div>
          </div>
          <div className="table-content">
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {!loading && !error && schedules.map((schedule) => (
              <div className="table-row" key={schedule.scheduleid}>
                <div className="table-data">{schedule.empId}</div>
                <div className="table-data">{schedule.empName}</div>
                <div className="table-data">{schedule.dep}</div>
                <div className="table-data">{schedule.date}</div>
                <div className="table-data">{schedule.shift}</div>
                <div className="table-data">{schedule.startTime}</div>
                <div className="table-data">{schedule.endTime}</div>
                <div className="table-data">{schedule.email}</div>
                <div className="table-data">{schedule.conatactnum}</div>
                <div>
                  <Link to={`/adminviewprofile/${schedule.empId}`}>
                    <button className='adminschedule-button'>View</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSchedule;
