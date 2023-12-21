import React, { Component } from 'react';

class TimeOffForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empName: '',
     dep: '',
      requestDate: '',
      reason: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const timeOffData = {
      empName: this.state.employeeName,
     dep: this.state.position,
      requestDate: this.state.requestDate,
      reason: this.state.reason,
    };

    fetch('http://localhost:8080/timeoff-requests/api/timeoffs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(timeOffData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', timeOffData);
        alert('Request Sent');
        
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  render() {
  //   const nav=useNavigate();
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
      <div>
        <h2>Time Off Request</h2>
        <form onSubmit={this.handleSubmit} >
          <input className='ssinput'  type="text" name="employeeName" placeholder="Employee Name" onChange={this.handleChange} />
          <input className='ssinput'  type="text" name="position" placeholder="Department" onChange={this.handleChange} />
          <input  className='ssinput' type="text" name="requestDate" placeholder="Request Date" onChange={this.handleChange} />
          <input  className='ssinput' type="text" name="reason" placeholder="Reason" onChange={this.handleChange} />
          <button type="submit" className='ssutton'>Submit</button>
        </form>
      </div>
    );
  }
}

export default TimeOffForm;
