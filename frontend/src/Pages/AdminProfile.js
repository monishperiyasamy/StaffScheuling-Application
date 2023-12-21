import React, { Component, useState, useEffect } from 'react';
import '../Assets/AdminSchedule.css'
import AdminDashboard from './AdminDashboard'; // Replace with the correct path
import { useNavigate } from 'react-router-dom';
import '../Assets/AdminShiftSwap.css'

class AdminProfile extends Component {

 

  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
    };
  }

  componentDidMount() {
    this.fetchProfiles();
  }

  fetchProfiles = () => {
    fetch('http://localhost:8080/timeoff-requests/profiles/api/profiles')
      .then((response) => response.json())
      .then((data) => this.setState({ profiles: data }))
      .catch((error) => console.error('Error fetching profiles:', error));
  };
  

  render() {
  //   const nav=useNavigate();
  //   const token=localStorage.getItem("jwtToken")
  // if(token===null){
  //   nav("/")
   
  // }
  // const [user, setuser] = useState([]);
  // useEffect(() => {
  //   const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
  //   setuser(storeduser);
  // },[]);

    return (
      <div>
        <div className='allschedulebody'>
          <div className="container">
            <div className="table">
              <div>
                <AdminDashboard />
              </div>
              <div className="table-header">
                <div className="header__item">
                  <span className="header__text">Name</span>
                </div>
                <div className="header__item">
                  <span className="header__text">Department</span>
                </div>
                <div className="header__item">
                  <span className="header__text">Field</span>
                </div>
                <div className="header__item">
                  <span className="header__text">Change From</span>
                </div>
                <div className="header__item">
                  <span className="header__text">Change To</span>
                </div>
                <div className="header__item1">
                  <span className="header__text">Actions</span>
                </div>
              </div>
              <div className="table-content">
              {this.state.profiles.map((profile) => (
                <div key={profile.id} className="table-row">
                  <div className="table-data">{profile.empName}</div>
                  <div className="table-data">{profile.dep}</div>
                  <div className="table-data">{profile.field}</div>
                  <div className="table-data">{profile.changefrom}</div>
                  <div className="table-data">{profile.changeto}</div>
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
}

export default  AdminProfile ;
