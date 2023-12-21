// ShiftSwapForm.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShiftSwapForm = () => {
  const [formData, setFormData] = useState({
    empName: '',
    dep: '',
    requestDate: '',
    shiftDetails: '',
    swapWith: '',
    reason: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/timeoff-requests/shift-swaps/api/shift-swaps', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Shift swap request successfully submitted!');
        alert('Request Sent')
        
      } else {
        console.error('Failed to submit shift swap request');
      }
    } catch (error) {
      console.error('Error submitting shift swap request:', error);
     
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

  return (
    <div>
      <h2>Shift Swap Request</h2>
      <form onSubmit={handleSubmit} >
        <input className='ssinput' type="text" name="empName" placeholder="Employee Name" onChange={handleChange} />
        <input  className='ssinput' type="text" name="department" placeholder="Department" onChange={handleChange} />
        <input className='ssinput'  type="text" name="requestDate" placeholder="Request Date" onChange={handleChange} />
        <input className='ssinput'  type="text" name="shiftDetails" placeholder="Shift Details" onChange={handleChange} />
        <input className='ssinput'  type="text" name="swapWith" placeholder="Swap With" onChange={handleChange} />
        <input  className='ssinput' type="text" name="reason" placeholder="Reason" onChange={handleChange} />
        <button type="submit" className='ssbutton'>Submit</button>
      </form>
    </div>
  );
};

export default ShiftSwapForm;
