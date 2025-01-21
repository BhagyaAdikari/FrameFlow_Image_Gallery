import React,{useState,useEffect} from 'react'
import './../Css/Profile.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Profile1() {

  const { id } = useParams();

  const [user,setUser]=useState([]);

  useEffect(()=>{
    function getUser(){
      axios.get(`http://localhost:8070/user/get/${id}`).then((res)=>{
        setUser(res.data);
      }).catch((err)=>{
        alert(err);
      })
    }
    getUser();
  },[])

  return (
    <div><div className="profile-container">
    <h1>User Profile</h1>
    
    <p>
          <span className="label">Name:</span> 
          <span className="value name">{user.name}</span>
        </p>
        <p>
          <span className="label">Age:</span> 
          <span className="value age">{user.age}</span>
        </p>
        <p>
          <span className="label">Gender:</span> 
          <span className="value gender">{user.gender}</span>
        </p>
        <p>
          <span className="label">Password:</span> 
          <span className="value password">{user.password}</span>
        </p>
    
    <div className="button-container">
        <Link to={`/updateUser/${id}`}>
          <button type="button" className="btn custom-btn btn-primary">
            Update User
          </button>
        </Link>
        <Link to={`/deleteUser/${id}`}>
          <button type="button" className="btn custom-btn btn-danger">
            Delete User
          </button>
        </Link>
        <Link to={`/PProfile/${id}`}>
          <button type="button" className="btn custom-btn btn-secondary">
            View my Memories
          </button>
        </Link>
        <Link to={`/ImageUpload/${id}`}>
          <button type="button" className="btn custom-btn btn-secondary">
            Create Memory
          </button>
        </Link>
      </div>
</div></div>

  )
}

export default Profile1