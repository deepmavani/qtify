import React, { useState, useEffect, useRef } from "react"; 
import axios from "axios";
import Card from "../Card/Card";
import "./Section.css";

const Section = ({ title, apiEndpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const gridRef = useRef(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        console.log("Fetched albums:", response.data);
        setAlbums(response.data || []);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, [apiEndpoint]);

  const visibleAlbums = collapsed ? albums.slice(0, 7) : albums;

  const scrollRight = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({
        left: gridRef.current.offsetWidth, // Scroll by the container's width
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({
        left: -gridRef.current.offsetWidth, // Scroll back by the container's width
        behavior: "smooth",
      });
    }
  };

  const handleCardClick = (album) => {
    console.log("Card clicked:", album);
  };

  return (
    <div className="section" data-testid="albums-section">
      <div className="section-header">
        <h2>{title}</h2>
        <button
          className="collapse-button"
          data-testid="toggle-collapse-button"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {albums.length > 7 && collapsed && (
        <div className="scroll-buttons">
          <button
            className="scroll-left"
            data-testid="scroll-left-button"
            onClick={scrollLeft}
          >
            &#8592;
          </button>
          <button
            className="scroll-right"
            data-testid="scroll-right-button"
            onClick={scrollRight}
          >
            &#8594;
          </button>
        </div>
      )}

      <div className="section-grid" ref={gridRef}>
        {visibleAlbums.map((album) => (
          <Card
            key={album.id}
            album={album}
            onClick={() => handleCardClick(album)}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
