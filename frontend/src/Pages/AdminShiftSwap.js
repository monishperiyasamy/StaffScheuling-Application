import React, { useState, useEffect } from 'react';
import AdminDashboard from './AdminDashboard';
import '../Assets/AdminShiftSwap.css'; // Updated CSS file import
import { useNavigate } from 'react-router-dom';

function AdminShiftSwap() {
  const [shiftSwaps, setShiftSwaps] = useState([]);

  useEffect(() => {
    fetchShiftSwaps();
  }, []);

  const fetchShiftSwaps = async () => {
    try {
      const response = await fetch('http://localhost:8080/timeoff-requests/shift-swaps/api/shift-swaps');
      const data = await response.json();
      setShiftSwaps(data);
    } catch (error) {
      console.error('Error fetching shift swaps:', error);
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
    <div className='swaallschedulebody'> {/* Updated class name */}
      <div className="swacontainer"> {/* Updated class name */}
        <div className="swatable"> {/* Updated class name */}
          <div>
            <AdminDashboard />
          </div>
          <div className="swatable-header"> {/* Updated class name */}
            <div className="swaheader__item"> {/* Updated class name */}
              <span className="swaheader__text">Name</span> {/* Updated class name */}
            </div>
            <div className="swaheader__item"> {/* Updated class name */}
              <span className="swaheader__text">Department</span> {/* Updated class name */}
            </div>
            <div className="swaheader__item"> {/* Updated class name */}
              <span className="swaheader__text">Request Date</span> {/* Updated class name */}
            </div>
            <div className="swaheader__item"> {/* Updated class name */}
              <span className="swaheader__text">Shift</span> {/* Updated class name */}
            </div>
            <div className="swaheader__item"> {/* Updated class name */}
              <span className="swaheader__text">Swap with</span> {/* Updated class name */}
            </div>
            <div className="swaheader__item"> {/* Updated class name */}
              <span className="swaheader__text">Reason</span> {/* Updated class name */}
            </div>
            <div className="swaheader__item1"> {/* Updated class name */}
              <span className="swaheader__text">Actions</span> {/* Updated class name */}
            </div>
          </div>
          <div className="swatable-content"> {/* Updated class name */}
            {shiftSwaps.map((swap) => (
              <div key={swap.id} className="swatable-row"> {/* Updated class name */}
                <div className="swatable-data">{swap.empName}</div> {/* Updated class name */}
                <div className="swatable-data">{swap.department}</div> {/* Updated class name */}
                <div className="swatable-data">{swap.requestDate}</div> {/* Updated class name */}
                <div className="swatable-data">{swap.shiftDetails}</div> {/* Updated class name */}
                <div className="swatable-data">{swap.swapWith}</div> {/* Updated class name */}
                <div className="swatable-data">{swap.reason}</div> {/* Updated class name */}
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
  );
}

export default AdminShiftSwap;
