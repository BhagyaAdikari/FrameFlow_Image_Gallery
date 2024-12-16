import React, { useState } from 'react'
import axios from "axios";

function AddUser() {

    //create state
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [gender,setGender]=useState("");
    const [password,setPassword]=useState("");

    function sendData(e){
        e.preventDefault();

        const newUser={
            name,
            age,
            gender,
            password
        }

        axios.post("./http://localhost:8070/user/addUser",newUser).then(()=>{
            alert("New User is added")
        }).catch((err)=>{
            alert(err);
        })

        console.log(newUser);

    }

  return (
   <form className="container" onSubmit={sendData}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" onChange={(e)=>{
          setName(e.target.value);
        }}/>
      </div>

      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input type="text" className="form-control" id="age" placeholder="Age" onChange={(e)=>{
          setAge(e.target.value);
        }}/>
      </div>

      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <input type="text" className="form-control" id="gender" placeholder="Gender" onChange={(e)=>{
          setGender(e.target.value);
        }}/>
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="text" className="form-control" id="password" placeholder="Password" onChange={(e)=>{
          setPassword(e.target.value);
        }}/>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

  )
}

export default AddUser