import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./../Css/Memory.css";

const MemoryPage = () => {
  const { memoryId } = useParams();
  const [memory, setMemory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMemory() {
      try {
        const res = await axios.get(`http://localhost:8070/image/getMemory/${memoryId}`);
        setMemory(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch memory data.");
        setLoading(false);
      }
    }
    fetchMemory();
  }, [memoryId]);

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
  const { memory: name, files } = memory;

  return (
    <div className="memory-page">
      <header className="memory-header">
        <h1>{name}</h1>
        {/* Placeholder for date, as it wasn't part of the backend response */}
        <p>{new Date().toLocaleDateString()}</p>
      </header>

      <section className="image-gallery">
        {files && files.length > 0 ? (
          files.map((file, index) => (
            <div className="image-container" key={index}>
              <img
                src={`http://localhost:8070/uploads/${file}`} // Construct image URL
                alt={`Image ${index + 1}`}
              />
            </div>
          ))
        ) : (
          <p>No images to display</p>
        )}
      </section>
    </div>
  );
};

const App = () => {
  return <MemoryPage />;
};

export default App;
