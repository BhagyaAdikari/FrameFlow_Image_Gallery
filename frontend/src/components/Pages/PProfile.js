import React,{useState,useEffect} from 'react'
import './../Css/Profile.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';

function PProfile() {
    const { id } = useParams();

    const [user,setUser]=useState([]);
    const [memories,setMemories]=useState([]);
  
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

    useEffect(()=>{
        function getMemories(){
            axios.get(`http://localhost:8070/image/get/${id}`).then((res)=>{
                console.log(res.data);
                 setMemories(res.data);
            }).catch((err)=>{
                alert(err);
            })}
        getMemories();
        },[])
  
    return (
      <div><div className="profile-container">
      <h1>User Profile</h1>
      <p><span className="label">ID:</span> {id}</p>
      <p><span className="label">Name:</span> {user.name}</p>
      <p><span className="label">Age:</span> {user.age}</p>
      <p><span className="label">Gender:</span> {user.gender}</p>
      <p><span className="label">Password:</span> {user.password}</p>
      <p>
          <span className="label">Memories:</span>
        </p>
        <ul>
          {memories.map((memory, index) => (
            <li key={index}>
              <strong>Memory:</strong> {memory.memory} <br />
              {/*<strong>Files:</strong>{" "}
              {memory.files.map((file, fileIndex) => (
                <span key={fileIndex}>{file}</span>
              ))}*/}
              <div className='container p-3 my-3 bg-dark text-white'>
      <Link to={`/Memory/${memory.id}`}><button type="button" className="btn btn-primary">View Memory</button></Link><br></br>
      </div>
            </li>
          ))}
        </ul>
      
      
     
  </div></div>
  )
};

export default PProfile;