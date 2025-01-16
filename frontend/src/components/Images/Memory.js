import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./../Css/Memory.css";

const MemoryPage = () => {
  const { id } = useParams();
  const [memory, setMemory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("Params:", useParams());
  console.log("Params:", id);

  useEffect(() => {
    if (!id) {
      setError("Memory ID is missing.");
      setLoading(false);
      return;
    }

    async function fetchMemory() {
      try {
        const res = await axios.get(`http://localhost:8070/image/getMemory/${id}`);
        setMemory(res.data); // Set memory data from API response
        setLoading(false);
        console.log("Memory data:", res.data);
      } catch (err) {
        setError("Failed to fetch memory data.");
        setLoading(false);
      }
    }
    fetchMemory();
  }, [id]);

  if (loading) {
    return <p>Loading memory...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!memory) {
    return <p>Memory not found.</p>;
  }

  // Destructure response data
  const { memory: memoryName, files } = memory;

  return (
    <div className="memory-page">
      <header className="memory-header">
        <h1>{memoryName}</h1>
        <img src={`http://localhost:8070/uploads/BackEnd/uploads/1736755031253download (13).jpg`} className="memory-image" />
        {/* Format the date */}
        <p>{/* Add a formatted date if available in the response */}</p>
      </header>

      <section className="image-gallery">
        {files && files.length > 0 ? (
          files.map((file, index) => (
            
            <div className="image-container" key={index}>
              {/* Display image */}
              
              <img src={`http://localhost:8070/uploads/BackEnd/uploads/1736755031253download (13).jpg`} alt={`Memory Image ${index + 1}`} className="memory-image" />
            </div>
          ))
        ) : (
          <p>No images to display</p>
        )}
      </section>
    </div>
  );
};

export default MemoryPage;
