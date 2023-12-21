import React, { Component } from 'react';
import '../Assets/ProfileForm.css';
import EmployeeDasboard from './EmployeeDasboard';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empName: '',
      dep: '',
      field: '',
      changefrom: '',
      changeto: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const profileData = {
     empName: this.state.name,
      dep: this.state.department,
      field: this.state.field,
      changefrom: this.state.from,
      changeto: this.state.to,
    };

    fetch('http://localhost:8080/timeoff-requests/profiles/api/profiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Request Sent')
        // You can perform additional actions here, such as updating state or navigating to another page
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  render() {
    return (
      <div className="profile-form">
        <div>
          <EmployeeDasboard />
        </div>
        <h2>PROFILE UPDATE REQUEST</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className="pform-input"
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
          />
          <input
            className="pform-input"
            type="text"
            name="department"
            placeholder="Department"
            onChange={this.handleChange}
          />
          <input
            className="pform-input"
            type="text"
            name="field"
            placeholder="Field"
            onChange={this.handleChange}
          />
          <input
            className="pform-input"
            type="text"
            name="from"
            placeholder="From"
            onChange={this.handleChange}
          />
          <input
            className="pform-input"
            type="text"
            name="to"
            placeholder="To"
            onChange={this.handleChange}
          />
          <button className="prosubmit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ProfileForm;
