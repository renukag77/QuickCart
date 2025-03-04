import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FurnitureUI from "./components/FurnitureUI";
import CreamBackground from "./components/CreamBackground";
import Login from "./LoginPage";
import FeaturedCollections from "./components/FeaturedCollections";
import ProductDetailsPage from "./ProductDetailsPage";

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
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <CreamBackground>
        <div className="App">
          <Header 
            cartItems={cartItems} 
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/login" 
              element={<Login />} 
            />
            <Route 
              path="/product" 
              element={<ProductDetailsPage onAddToCart={addToCart} />} 
            />
          </Routes>
        </div>
      </CreamBackground>
    </Router>
  );
}

export default App;