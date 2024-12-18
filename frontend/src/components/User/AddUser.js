import React, { useState } from 'react'
import axios from "axios";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


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

        axios.post("http://localhost:8070/user/addUser",newUser).then(()=>{
            alert("New User is added")
        }).catch((err)=>{
            alert(err);
        })

        console.log(newUser);

    }

  return (
  <div className='container p-5'>
   <form className="container p-5" onSubmit={sendData}>
     
<MDBInput className='mb-4' type='name' id='form1Example1' label='Enter Name' 

onChange={(e)=>{
  setName(e.target.value);
}}/>

<MDBInput className='mb-4' type='age' id='form1Example2' label='Enter Age' 
onChange={(e)=>{
  setAge(e.target.value);
}}/>
<MDBInput className='mb-4' type='gender' id='form1Example1' label='Enter gender' 

onChange={(e)=>{
  setGender(e.target.value);
}}
/>
<MDBInput className='mb-4' type='password' id='form1Example2' label='Enter password' onChange={(e)=>{
          setPassword(e.target.value);}}/>

<MDBRow className='mb-4'>
  <MDBCol className='d-flex justify-content-center'>
    <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
  </MDBCol>
  <MDBCol>
    <a href='#!'>Forgot password?</a>
  </MDBCol>
</MDBRow>

<MDBBtn type='submit' block>
  Sign up
</MDBBtn>
</form>
</div>
  )
}

export default AddUser