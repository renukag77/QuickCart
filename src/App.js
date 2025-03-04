import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FurnitureUI from "./components/FurnitureUI";
import CreamBackground from "./components/CreamBackground";
import Login from "./LoginPage";
import FeaturedCollections from "./components/FeaturedCollections";

function Home() {
  return (
    <>
      <HeroSection />
      <FurnitureUI />
      <FeaturedCollections />
    </>
  );
}

function App() {
  return (
    <Router>
      <CreamBackground>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </CreamBackground>
    </Router>
  );
}

export default App;
