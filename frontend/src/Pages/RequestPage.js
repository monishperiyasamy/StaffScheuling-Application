import React, { Component, useState } from 'react';
import ShiftSwapForm from './ShiftSwapForm';
import TimeOffForm from './TimeOffForm';

import '../Assets/RequestPage.css';
import EmployeeDasboard from './EmployeeDasboard';

class RequestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeForm: 'shiftswap', // Default form is 'shiftswap'
    };
  }

  handleButtonClick = (formType) => {
    this.setState({ activeForm: formType });
  };

  render() {
    const { activeForm } = this.state;
    
//     const nav=useNavigate();
//   const token=localStorage.getItem("jwtToken")
//   if(token===null){
//     nav("/")
   
//   }
//   const [user, setuser] = useState([]);
//   useEffect(() => {
//     const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
//     setuser(storeduser);
// },[]);


    return (
      <div className="request-page">
        <div>
            <EmployeeDasboard/>
        </div>
        <div className="reqbutton-container">
          <button
            className={activeForm === 'shiftswap' ? 'active' : ''}
            onClick={() => this.handleButtonClick('shiftswap')}
          >
            Shift Swap
          </button>
          <button
            className={activeForm === 'timeoff' ? 'active' : ''}
            onClick={() => this.handleButtonClick('timeoff')}
          >
            Time Off
          </button>
          
        </div>
        {activeForm === 'shiftswap' && <ShiftSwapForm />}
        {activeForm === 'timeoff' && <TimeOffForm />}
       
      </div>
    );
  }
}

export default RequestPage;
