import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
import Checkout from "./Checkout";

// Reusable scroll animation wrapper component
const ScrollAnimationWrapper = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          delay: delay,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

function Home({ onAddToCart }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <ScrollAnimationWrapper>
          <FurnitureUI onAddToCart={onAddToCart} />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper delay={0.2}>
          <FeaturedCollections onAddToCart={onAddToCart} />
        </ScrollAnimationWrapper>
      </motion.div>
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

  // Function to add items to cart
  const addToCart = (product) => {
    const productWithId = {
      ...product,
      id: product.id || `product-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      currentPrice:
        typeof product.currentPrice === "string"
          ? parseInt(product.currentPrice.replace(',', ''), 10)
          : product.currentPrice || product.price || 0,
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
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <Router>
      <CreamBackground>
        <motion.div 
          className="App"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Home onAddToCart={addToCart} />
                  </motion.div>
                } 
              />
              <Route 
                path="/login" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Login />
                  </motion.div>
                } 
              />
              <Route 
                path="/product" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductDetailsPage onAddToCart={addToCart} />
                  </motion.div>
                } 
              />
              <Route 
                path="/bedroom-furniture" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BedroomFurniture onAddToCart={addToCart} />
                  </motion.div>
                } 
              />
              <Route 
                path="/dining-room-furniture" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DiningRoomFurniture onAddToCart={addToCart} />
                  </motion.div>
                } 
              />
              <Route 
                path="/living-room-furniture" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <LivingRoomFurniture onAddToCart={addToCart} />
                  </motion.div>
                } 
              />
              <Route
                path="/checkout"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Checkout
                      cartItems={cartItems}
                      updateQuantity={updateQuantity}
                      removeItem={removeItem}
                    />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </motion.div>
      </CreamBackground>
    </Router>
  );
}

export default App;