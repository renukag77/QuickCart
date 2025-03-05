import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FurnitureUI from "./components/FurnitureUI";
import CreamBackground from "./components/CreamBackground";
import Login from "./LoginPage";
import FeaturedCollections from "./components/FeaturedCollections";
import ProductDetailsPage from "./ProductDetailsPage";
import BedroomFurniture from "./components/BedroomFurniture";
import DiningRoomFurniture from "./components/DiningRoomFurniture";
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

  // Load cart from localStorage on first render
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCart && savedCart.length > 0) {
      setCartItems(savedCart);
    }
  }, []);

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to update cart quantity
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Function to remove item from cart
  const removeItem = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Function to handle quantity update from UI
  const handleUpdateQuantity = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  // Function to handle item removal from UI
  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  // Function to add items to cart
  const addToCart = (product) => {
    const productWithId = {
      ...product,
      id: product.id || `product-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      currentPrice: parseInt(product.currentPrice.replace(',', '')) || product.price || 0,
    };
  
    const existingItem = cartItems.find(
      (item) => item.id === productWithId.id && item.selectedColor === productWithId.selectedColor
    );
  
    let updatedCart;
    if (existingItem) {
      updatedCart = cartItems.map((item) =>
        item.id === productWithId.id && item.selectedColor === productWithId.selectedColor
          ? { ...item, quantity: item.quantity + (productWithId.quantity || 1) }
          : item
      );
    } else {
      updatedCart = [...cartItems, { ...productWithId, quantity: productWithId.quantity || 1 }];
    }
  
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Save instantly
  };
  

  return (
    <Router>
      <CreamBackground>
        <div className="App">
          <Header
            cartItems={cartItems}
            updateQuantity={handleUpdateQuantity}
            removeItem={handleRemoveItem}
          />
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<ProductDetailsPage onAddToCart={addToCart} />} />
            <Route path="/bedroom-furniture" element={<BedroomFurniture onAddToCart={addToCart} />} />
            <Route path="/dining-room-furniture" element={<DiningRoomFurniture onAddToCart={addToCart} />} />
            <Route path="/living-room-furniture" element={<LivingRoomFurniture onAddToCart={addToCart} />} />
          </Routes>
        </div>
      </CreamBackground>
    </Router>
  );
}

export default App;
