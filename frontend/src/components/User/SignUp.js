import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');

  function sendData(e) {
    e.preventDefault();

    const newUser = {
      name,
      age,
      gender,
      password,
    };

    axios
      .post('http://localhost:8070/user/addUser', newUser)
      .then(() => {
        alert('New User is added');
        window.location.href = '/PublicProfile';
      })
      .catch((err) => {
        alert(err);
      });

    console.log(newUser);
  }

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={sendData}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="signup-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
