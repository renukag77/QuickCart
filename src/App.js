import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CreamBackground from "./components/CreamBackground"; // Import Background Component

function App() {
  return (
    <CreamBackground> {/* Wrap everything inside CreamBackground */}
      <div className="App">
        <Header />
        <HeroSection />
      </div>
    </CreamBackground>
  );
}

export default App;
