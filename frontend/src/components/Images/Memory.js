import React from "react";
import "./../Css/Memory.css"; // Add styles here or inline

const MemoryPage = ({ memory }) => {
  const { name, date, images } = memory;

  return (
    <div className="memory-page">
      <header className="memory-header">
        <h1>{name}</h1>
        <p>{new Date(date).toLocaleDateString()}</p>
      </header>

      <section className="image-gallery">
        {images && images.length > 0 ? (
          images.map((image, index) => (
            <div className="image-container" key={index}>
              <img src={image.url} alt={image.alt || `Image ${index + 1}`} />
              {image.caption && <p className="image-caption">{image.caption}</p>}
            </div>
          ))
        ) : (
          <p>No images to display</p>
        )}
      </section>
    </div>
  );
};

// Example usage
const App = () => {
  const mockMemory = {
    name: "Vacation to the Mountains",
    date: "2024-12-01",
    images: [
      { url: "https://via.placeholder.com/300", alt: "Mountain 1", caption: "A beautiful sunrise." },
      { url: "https://via.placeholder.com/300", alt: "Mountain 2", caption: "Snowy peaks." },
      { url: "https://via.placeholder.com/300", alt: "Mountain 3", caption: "A serene lake." },
    ],
  };

  return <MemoryPage memory={mockMemory} />;
};

export default App;
