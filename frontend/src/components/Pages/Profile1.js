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
    <p><span className="label">ID:</span> {id}</p>
    <p><span className="label">Name:</span> {user.name}</p>
    <p><span className="label">Age:</span> {user.age}</p>
    <p><span className="label">Gender:</span> {user.gender}</p>
    <p><span className="label">Password:</span> {user.password}</p>
    
    <Link to={`/updateUser/${id}`}><button type="button" className="btn btn-primary">Update User</button></Link>
    <Link to={`/deleteUser/${id}`}><button type="button" className="btn btn-danger">Delete User</button></Link><br></br>
    <Link to={`/ImageUpload/${id}`}><button type="button" className="btn btn-secondary">Create Memory</button></Link>
</div></div>
  )
}

export default Profile1