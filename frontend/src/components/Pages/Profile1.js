import React from 'react'
import './../Css/Profile.css';
import { useParams } from 'react-router-dom';

function Profile1() {

  const { id } = useParams();

  return (
    <div><div className="profile-container">
    <h1>User Profile</h1>
    <p><span className="label">ID:</span> {id}</p>
    <p><span className="label">Name:</span> John Doe</p>
    <p><span className="label">Age:</span> 25</p>
    <p><span className="label">Gender:</span> Male</p>
    <p><span className="label">Password:</span> ********</p>
</div></div>
  )
}

export default Profile1