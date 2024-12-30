import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch("https://qtify-backend-labs.crio.do/songs");
        const data = await response.json();
        setSongs(data);
        setFilteredSongs(data); // Initially show all songs
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);

    // Filter songs based on the selected genre
    if (newValue === "All") {
      setFilteredSongs(songs);
    } else {
      const genreFilteredSongs = songs.filter((song) => song.genre === newValue);
      setFilteredSongs(genreFilteredSongs);
    }
  };

  return (
    <div className="songs-section">
      {/* Title for Songs Section */}
      <h2 className="section-title">Songs</h2>

      {/* Render the Tabs for Genre Filtering */}
      <Tabs
        value={selectedGenre}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        style={{ marginBottom: "20px" }} // Add spacing between tabs and cards
      >
        <Tab label="All" value="All" />
        <Tab label="Rock" value="Rock" />
        <Tab label="Pop" value="Pop" />
        <Tab label="Jazz" value="Jazz" />
        <Tab label="Blues" value="Blues" />
      </Tabs>

      {/* Render the cards directly */}
      <div className="cards-container">
        {filteredSongs.map((song) => (
          <div className="card" key={song.id}>
            <img
              src={song.image}
              alt={song.title}
              className="card-image"
            />
            <div className="card-title">{song.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Songs;
