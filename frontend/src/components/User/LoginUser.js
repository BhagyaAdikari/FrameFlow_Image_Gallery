import React, { useState } from "react";
import "./LoginUser.css";
import axios from "axios";

function LoginForm() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }
    // Example API call
    console.log("Username:",username, "Password:",password);
    
    sendData(e);
  };

  function sendData(e) {
    e.preventDefault();

    axios.post('http://localhost:8070/user/login', { username, password })

    .then((result) => {
      if(result.data.message==="Success"){
        alert("Login Success");
        window.location.href = `/Profile1/${result.data.userId}`;
      }
      else{
        alert(result.data.message);
  }})
  .catch(err => console.log(err));
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
