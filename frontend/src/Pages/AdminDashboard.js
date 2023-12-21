import React from 'react'
import AdminNavbar from './AdminNavbar'
import AdminSideBar from './AdminSideBar'

function AdminDashboard() {
  return (
    <div>
           <div className='admin-navdash'>
            <AdminNavbar/>
            </div>  
         
          <div className='admin-side'>
        <AdminSideBar/>
        </div> 
       
        
    </div>
  )
}

export default AdminDashboard