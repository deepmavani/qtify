
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./Section.css";

const Section = ({ title, apiEndpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const gridRef = useRef(null); // Create a reference for the grid container

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        console.log(response.data); // Log the response to inspect it
        setAlbums(response.data); // Assuming the response is an array of albums
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, [apiEndpoint]);

  // Determine how many albums to show when collapsed (one line of cards)
  const visibleAlbums = collapsed ? albums.slice(0, 6) : albums; // Adjust '6' based on your grid size

  // Function to handle right scroll (smooth scroll)
  const scrollRight = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({
        left: 200, // Scroll by 200px to the right
        behavior: "smooth", // Smooth scroll effect
      });
    }
  };

  // Function to handle left scroll (smooth scroll)
  const scrollLeft = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({
        left: -200, // Scroll by 200px to the left
        behavior: "smooth", // Smooth scroll effect
      });
    }
  };

  // Handle the click event for a card
  const handleCardClick = (album) => {
    console.log("Card clicked:", album);
    // You can replace this with any other functionality like navigating to a detail page
  };

  return (
    <div className="section">
      <div className="section-header">
        <h2>{title}</h2>
        <button
          className="collapse-button"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {/* Add left and right scroll buttons */}
      {collapsed && (
        <div className="scroll-buttons">
          <button className="scroll-left" onClick={scrollLeft}>
            &#8592;
          </button>
          <button className="scroll-right" onClick={scrollRight}>
            &#8594;
          </button>
        </div>
      )}

      <div className="section-grid" ref={gridRef}>
        {visibleAlbums.map((album) => (
          <Card key={album.id} album={album} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};

export default Section;
