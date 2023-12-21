import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Login'
import AdminNavbar from './Pages/AdminNavbar';
import AdminSideBar from './Pages/AdminSideBar';
import AdminDashboard from './Pages/AdminDashboard';
import EmployeeDetails from './Pages/EmployeeDetails';
import AddEmployee from './Pages/AddEmployee';
import UpdateEmployee from './Pages/UpdateEmployee';
import ScheduleDetails from './Pages/ScheduleDetails';
import Terms from './Pages/Terms';
import Faq from './Pages/Frequently';
import Frequently from './Pages/Frequently';
import EmployeeDasboard from './Pages/EmployeeDasboard';
import ViewProfile from './Pages/ViewProfile';
import AdminSchedule from './Pages/AdminSchedule';
import EmployeeProfile from './Pages/EmployeeProfile';
import AdminViewProfile from './Pages/AdminViewProfile';
import WeeklySchedule from './Pages/WeeklySchedule';
import RequestPage from './Pages/RequestPage';
import ProfileForm from './Pages/ProfileForm';
import AdminTimeOff from './Pages/AdminTimeOff';
import AdminProfile from './Pages/AdminProfile';
import AdminShiftSwap from './Pages/AdminShiftSwap';
import PrivacyPolicy from './Pages/PrivacyPolicy';


function App() {
  return (
    <div>
   <BrowserRouter>

<Routes>
<Route path="/" element={<Home/>}/>
 <Route path="/admin" element={<AdminDashboard/>}/>
 <Route path='/login' element={<Login/>}/>
 <Route path='/employee' element={<EmployeeDetails/>}/>
 <Route path='/addemp' element={<AddEmployee/>}/>
 <Route path='/updateemp/:empId' element={<UpdateEmployee/>}/>
 <Route path='/scheduledetails' element={<ScheduleDetails/>}/>
 <Route path='/faq' element={<Frequently/>}/>
 <Route path='/terms' element={<Terms/>}/>
 <Route path='/users' element={<EmployeeDasboard/>}/>
 <Route path="/viewprofile/:email" element={<ViewProfile/>}/>
 <Route path="/adminviewprofile/:empId" element={<AdminViewProfile/>}/>
 <Route path='/allschedule' element={<AdminSchedule/>}/>
 <Route path='/weeklyschedule/:email' element={<WeeklySchedule/>}/>
 <Route path='/emprequest' element={<RequestPage/>}/>
 <Route path='/profilechange' element={<ProfileForm/>}/>
 <Route path='/admintimeoff' element={<AdminTimeOff/>}/>
 <Route path='/adminprofile' element={<AdminProfile/>}/>
 <Route path='/adminshiftswap' element={<AdminShiftSwap/>}/>
 <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
 
 
 
 




</Routes>

</BrowserRouter> 
    </div>
  )
}

export default App