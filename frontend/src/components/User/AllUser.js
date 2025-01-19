import React,{useState,useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import './AllUser.css';

function AllUser() {
    //usage of useEffect

    const [users,setUsers]= useState([]);

    useEffect(()=>{
      function getUsers(){
        axios.get("http://localhost:8070/user/users").then((res)=>{
          setUsers(res.data);
        }).catch((err)=>{
          alert(err);
        })
      }
      getUsers();
    },[])

    //Delete user from DB
    const deleteUser=(id,name)=>{
      axios.delete(`http://localhost:8070/user/deleteUser/${id}`).then((res)=>{
        console.log(res.data);
        alert(`User Deleted : ${name}`);
        window.location.href="/User";
      }).catch((err)=>{
        alert(err);
      });
    }

  return (
  
    <div>
      


      <div className="container"><h1><b><br></br><center>Frame Flow Users</center></b></h1><br></br>
<table class="table">
<thead class="thead-dark">
  <tr>
    <th scope="col">Student ID</th>
    <th scope="col">Student Name</th>
    <th scope="col">Student Age</th>
    <th scope="col">Gender</th>
    <th scope="col">Password</th>
    <th scope="col">Actions</th>
    <th scope="col"></th>
  </tr>
</thead>
<tbody>
  {users.map((users)=>(
    <tr key={users.id}>
      <th scope="row">{users._id}</th>
      <td>{users.name}</td>
      <td>{users.age}</td>
      <td>{users.gender}</td>
      <td>{users.password}</td>
      <td><button type="button" className="btn btn-danger" onClick={() => deleteUser(users._id,users.name)}>Delete User</button></td>
      <td><Link to={`/updateUser/${users._id}`} className="nav-link"><button type="button" className="btn btn-success">Edit</button></Link></td>
    </tr>
  ))}
</tbody>
</table>

</div>

    </div>
  )
}

export default AllUser