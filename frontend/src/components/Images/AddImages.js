import React,{useState} from 'react'
import axios from "axios";

function AddImages() {

    const [fileName,setFileName]=useState("");
    const [category,setCategory]=useState("");
    const [date,setDate]=useState("");
    const [userId,setUserId]=useState("");
    
    function sendData(e){
        e.preventDefault();

        const newImage={
            fileName,
            category,
            date,
            userId
        }

        axios.post("http://localhost:8070/image/addImage",newImage).then(()=>{
            alert("New Image is added")
        }).catch((err)=>{
            alert(err);
        })

        console.log(newImage)
    }
  return (
    <form className="container" onSubmit={sendData}>
      <div className="form-group">
        <label htmlFor="fileName">Filename</label>
        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Filename" onChange={(e)=>{
          setFileName(e.target.value);
        }}/>
      </div>

      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input type="text" className="form-control" id="age" placeholder="Age" onChange={(e)=>{
          setCategory(e.target.value);
        }}/>
      </div>

      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <input type="text" className="form-control" id="gender" placeholder="Date" onChange={(e)=>{
          setDate(e.target.value);
        }}/>
      </div>

      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <input type="text" className="form-control" id="User Id" placeholder="User Id" onChange={(e)=>{
          setUserId(e.target.value);
        }}/>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default AddImages