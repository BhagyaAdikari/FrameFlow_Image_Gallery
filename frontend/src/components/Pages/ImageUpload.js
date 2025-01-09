import React, { useState } from "react";
import { useEffect } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import "./../Css/ImageUpload.css";

function ImageUpload() {

  const { id } = useParams();

  const [user,setUser]=useState([]);
  
  //Fetching user

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

  const [files, setFiles] = useState([]);
  const [memoryName, setMemoryName] = useState("");
  const [date, setDate] = useState("");

  // Handle file selection
  const handleFileChange = (event) => {
    console.log(event.target.files);
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  // Handle drag-and-drop functionality
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  // Remove a file from the list
  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // Render the file list
  const renderFileList = () => {
    return files.map((file, index) => (
      <div key={index} className="file-item">
        <span>{file.name}</span>
        <button onClick={() => removeFile(index)}>Remove</button>
      </div>
    ));
  };
  
  const submitFiles = () => {

    const formData = new FormData();
    files.forEach((file)=>{
      formData.append("files",file);
    });
  
    formData.append("memoryName", memoryName);
    formData.append("date", date);

    fetch("http://localhost:8070/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        alert("Files uploaded successfully");
        setFiles([]);
        setMemoryName("");
        setDate("");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error occurred");
      });



  }

  return (
    <div className="file-upload">
      <h2>Hello {user.name} <br></br>Upload Files</h2>
      <div className="input-group">
        <input
          type="text"
          value={memoryName}
          onChange={(e) => setMemoryName(e.target.value)}
          placeholder="Memory Name"
          className="memory-name-input"
        />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div
        className="upload-area"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <p>Drag and drop files here, or click to select files</p>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          style={{ display: "none" }}
          id="fileInput"
        />
        <label htmlFor="fileInput" className="upload-button">
          Select Files
        </label>
      </div>
      <div className="file-list">{renderFileList()}</div>

      <button onClick={submitFiles}>Submit</button>

    </div>
  );
}

export default ImageUpload;