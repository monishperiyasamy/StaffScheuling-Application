import React from 'react'
import { Link } from 'react-router-dom';

import '../Assets/EmployeeSidebar.css'
 

function EmployeeSidebar() {
  const email=localStorage.getItem("email");
  
  
  return (
    <div className='adminsidebarbody'>
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        {/* <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">Admin Panel</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><span className="glyphicon glyphicon-user">&nbsp;</span>Hello Admin</a></li>
              <li className="active"><a title="View Website" href="#"><span className="glyphicon glyphicon-globe"></span></a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </div>
        </div> */}
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div id="employeesidebar">
              <div className="container-fluid tmargin">
                
              </div>
              <ul className="nav navbar-nav side-bar">
                <li className="side-bar tmargin"><span className="glyphicon glyphicon-list">&nbsp;</span><Link>Dashboard</Link></li>
                <br></br>
                <br></br>
                <li className="side-bar"><span className="glyphicon glyphicon-flag">&nbsp;</span><Link to={`/viewprofile/${email}`}>Profile</Link></li>
                <br></br>
                <br></br>
                <li className="side-bar"><span className="glyphicon glyphicon-star">&nbsp;</span><Link to={`/weeklyschedule/${email}`}>Schedules</Link></li>

                <br></br>
                <br></br>
                <li className="side-bar"><span className="glyphicon glyphicon-certificate">&nbsp;</span><Link to ="/emprequest">Schedule Request</Link></li>
                <br></br>
                <br></br>
                <li className="side-bar"><span className="glyphicon glyphicon-signal">&nbsp;</span><Link to ="/profilechange">Profile Change</Link></li>
                <br></br>
                <br></br>
                <li className="side-bar"><span className="glyphicon glyphicon-cog">&nbsp;</span><Link to ="/">Logout</Link>L</li>
                <br></br>
                <br></br>
              </ul>
            </div>
          </div>
          <div className="col-md-9 animated bounce">
          
            
          </div>
        </div>
      </div>
    </div>
</div>

  );
}



export default EmployeeSidebar