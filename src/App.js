import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Section from "./Section/Section";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section
        title="Top Albums"
        apiEndpoint="https://qtify-backend-labs.crio.do/albums/top"
      />
      <Section
        title="New Albums"
        apiEndpoint="https://qtify-backend-labs.crio.do/albums/new"
      />
    </div>
  );
}

export default App;
