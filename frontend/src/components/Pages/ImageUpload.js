import React, { useState } from "react";

function ImageUpload() {
  const [files, setFiles] = useState([]);

  // Handle file selection
  const handleFileChange = (event) => {
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

  return (
    <div className="file-upload">
      <h2>Upload Files</h2>
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
    </div>
  );
}

export default ImageUpload;
