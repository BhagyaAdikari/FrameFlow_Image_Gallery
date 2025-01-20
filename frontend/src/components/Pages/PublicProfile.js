import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import React,{useState,useEffect} from 'react'
import './../Css/Profile.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';

function PublicProfile() {

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

const editSubmit = () => {
  window.location.href = `/updateUser/${id}`;
}
  return (
   
    
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="9" xl="7">
          <MDBCard>
            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
              <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                <MDBBtn onClick={editSubmit} outline color="dark" style={{height: '40px', overflow: 'visible'}}>
                  Private profile
                </MDBBtn>
              </div>
              <div className="ms-3" style={{ marginTop: '130px' }}>
                <MDBTypography tag="h5">{user.name}</MDBTypography>
                <MDBCardText>New York</MDBCardText>
              </div>
            </div>
            <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="d-flex justify-content-end text-center py-1">
                <div>
                  <MDBCardText className="mb-1 h5">{user.age} year old </MDBCardText>
                  <MDBCardText className="mb-1 h5"> {user.gender}</MDBCardText>
                </div>
              </div>
            </div>
            <MDBCardBody className="text-black p-4">
             
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBCardText className="lead fw-normal mb-0">Recent photos</MDBCardText>
                <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
              </div>
              <MDBRow>
                <MDBCol className="mb-2">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                    alt="image 1" className="w-100 rounded-3" />
                </MDBCol>
                <MDBCol className="mb-2">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                    alt="image 1" className="w-100 rounded-3" />
                </MDBCol>
              </MDBRow>
              <MDBRow className="g-2">
                <MDBCol className="mb-2">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                    alt="image 1" className="w-100 rounded-3" />
                </MDBCol>
                <MDBCol className="mb-2">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                    alt="image 1" className="w-100 rounded-3" />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
  
  
  )
}

export default PublicProfile