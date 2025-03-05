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
import BedroomFurniture from './components/BedroomFurniture';
import DiningRoomFurniture from './components/DiningRoomFurniture';
import LivingRoomFurniture from "./components/LivingRoomFurniture";

function Home({ onAddToCart }) {
  return (
    <>
      <HeroSection />
      <FurnitureUI onAddToCart={onAddToCart} />
      <FeaturedCollections onAddToCart={onAddToCart} />
    </>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Ensure product has an id and currentPrice, create one if not exists
    const productWithId = {
      ...product,
      id: product.id || `product-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      currentPrice: product.currentPrice || product.price || 0
    };

    const existingItem = cartItems.find(item => 
      item.id === productWithId.id && 
      item.selectedColor === productWithId.selectedColor
    );
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === productWithId.id && item.selectedColor === productWithId.selectedColor
          ? { ...item, quantity: item.quantity + (productWithId.quantity || 1) }
          : item
      ));
    } else {
      setCartItems([...cartItems, { 
        ...productWithId, 
        quantity: productWithId.quantity || 1 
      }]);
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
              element={<Home onAddToCart={addToCart} />} 
            />
            <Route 
              path="/login" 
              element={<Login />} 
            />
            <Route 
              path="/product" 
              element={<ProductDetailsPage onAddToCart={addToCart} />} 
            />
            <Route 
              path="/bedroom-furniture" 
              element={<BedroomFurniture onAddToCart={addToCart} />} 
            />
            <Route 
              path="/dining-room-furniture" 
              element={<DiningRoomFurniture onAddToCart={addToCart} />} 
            />
            <Route 
              path="/living-room-furniture" 
              element={<LivingRoomFurniture onAddToCart={addToCart} />} 
            />
          </Routes>
        </div>
      </CreamBackground>
    </Router>
  );
}

export default App;