import React from 'react'
import { Link } from 'react-router-dom';

import '../Assets/AdminSidebar.css'

function AdminSideBar() {
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
            <div id="sidebar">
              <div className="container-fluid tmargin">
                
              </div>
              <ul className="nav navbar-nav side-bar">
                <li className="side-bar tmargin"><span className="glyphicon glyphicon-list">&nbsp;</span><Link>Dashboard</Link></li>
                <br></br>
                <br></br>
                <li className="side-bar"><span className="glyphicon glyphicon-flag">&nbsp;</span><Link to ="/employee">Employee</Link></li>
                <br></br>
                <br></br>
                <li className="side-bar"><span className="glyphicon glyphicon-star">&nbsp;</span><Link to="/allschedule">Staff Schedules</Link></li>
                <br></br>
                <br></br>
                <li className="side-bar"><span className="glyphicon glyphicon-certificate">&nbsp;</span><Link to ="/admintimeoff">Time-Off Approval</Link></li>
                <br></br>
                <br></br>
                <li className="side-bar"><span className="glyphicon glyphicon-signal">&nbsp;</span><Link to ="/adminshiftswap">Shifts Approval</Link></li>
                <br></br>
                <br></br>
                <li className="side-bar"><span className="glyphicon glyphicon-cog">&nbsp;</span><Link to ="/adminprofile">Profile Change Approval</Link></li>
                <br></br>
                <br></br>
                <li className="side-bar"><span className="glyphicon glyphicon-cog">&nbsp;</span><Link to ="/">Logout</Link></li>
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



export default AdminSideBar