import React, { useState } from 'react'
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function App() {

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
          window.location.href = "/PublicProfile";

      }).catch((err)=>{
          alert(err);
      })

      console.log(newUser);

  }

  return (
    <MDBContainer fluid>
<form className="container p-5" onSubmit={sendData}>
      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100' 
                onChange={(e)=>{
                    setName(e.target.value);
                  }}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Age' id='form2' type='age'
                onChange={(e)=>{
                    setAge(e.target.value);
                  }}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Gender' id='form2' type='gender'
                onChange={(e)=>{
                    setGender(e.target.value);
                  }}
                  />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password'
                onChange={(e)=>{
                    setPassword(e.target.value);}}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password'/>
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='mb-4' size='lg' type='submit'>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      </form>
    </MDBContainer>
  );
}

export default App;