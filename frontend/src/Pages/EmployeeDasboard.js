import React, { useEffect, useState } from 'react'
import EmployeeNavbar from './EmployeeNavbar'
import EmployeeSidebar from './EmployeeSidebar'
import { useNavigate } from 'react-router-dom';

function EmployeeDasboard() {
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
               <div >
                <EmployeeNavbar/>
                </div>  
             
              <div >
            <EmployeeSidebar/>
            </div> 
           
            
        </div>
      )
    }

export default EmployeeDasboard