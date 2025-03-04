import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from "react-router-dom"; // Import Link

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animated cart count demo
  useEffect(() => {
    const interval = setInterval(() => {
      setCartCount(prev => (prev + 1) % 6);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // For banner animation and auto-close
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Notification banner with animation */}
      {showBanner && (
        <div 
          className="bg-[#EFDFBB]/70 py-2 flex justify-center items-center transition-all duration-500 relative overflow-hidden"
          style={{ 
            animation: "pulse 2s infinite",
          }}
        >
          <div className="flex items-center space-x-2 relative z-10">
            <span className="inline-block animate-bounce">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </span>
            <p className="text-sm font-medium">Flash sale is going on upto 75%</p>
          </div>
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-black transition-colors"
            onClick={() => setShowBanner(false)}
          >
            <X size={16} />
          </button>
          
          {/* Animated background sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" 
            style={{ 
              animation: "sweep 3s linear infinite",
              backgroundSize: "200% 100%"
            }}
          />
        </div>
      )}
      
      {/* Main header */}
      <header 
        className={`w-full py-2 bg-[#722F37] text-white transition-all duration-300 ${isScrolled ? 'shadow-lg py-1' : ''}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo with animation */}
            <div className="flex items-center group">
              <div className="mr-2 transition-transform duration-500 transform group-hover:rotate-12">
                <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
                  <rect 
                    x="5" y="5" 
                    width="30" height="20" 
                    stroke="white" 
                    strokeWidth="2" 
                    fill="none" 
                    className="transition-all duration-300"
                  />
                  <rect 
                    x="5" y="15" 
                    width="30" height="20" 
                    stroke="white" 
                    strokeWidth="2" 
                    fill="none"
                    className="transition-all duration-300" 
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-wide">
                  <span className="inline-block hover:animate-pulse transition-transform duration-300 hover:scale-105">F</span>
                  <span className="inline-block hover:animate-pulse transition-transform duration-300 hover:scale-105">a</span>
                  <span className="inline-block hover:animate-pulse transition-transform duration-300 hover:scale-105">r</span>
                  <span className="inline-block hover:animate-pulse transition-transform duration-300 hover:scale-105">n</span>
                  <span className="inline-block hover:animate-pulse transition-transform duration-300 hover:scale-105">i</span>
                  <span className="inline-block hover:animate-pulse transition-transform duration-300 hover:scale-105">c</span>
                </h1>
                <p className="text-xs text-gray-200 opacity-80">Furniture</p>
              </div>
            </div>
            
            {/* Navigation - visible on desktop */}
            <nav className="hidden md:flex items-center space-x-6">
              <div className="relative group">
                <a href="#" className="font-medium hover:text-gray-200 flex items-center transition-colors duration-300">
                  Home
                  <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100 z-50">
                </div>
              </div>
              <div className="relative group">
                <a href="#" className="font-medium hover:text-gray-200 flex items-center transition-colors duration-300">
                  Pages
                  <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
              </div>
              <a href="#" className="font-medium hover:text-gray-200 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">About</a>
              <a href="#" className="font-medium hover:text-gray-200 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Contact</a>
            </nav>
            
            {/* Right section with search, account, cart */}
            <div className="flex items-center space-x-1 md:space-x-3">
              <div className="relative overflow-hidden group">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-white/10 rounded-full px-8 py-1 text-sm w-0 opacity-0 group-hover:w-40 group-hover:opacity-100 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-white/30 placeholder-white/50"
                />
                <button className="absolute left-0 top-0 p-1 group-hover:bg-white/10 rounded-full transition-colors duration-300">
                  <Search size={18} className="group-hover:text-white text-white/80 transition-colors duration-300" />
                </button>
              </div>
              <Link to="/login" className="p-1.5 hover:bg-white/10 rounded-full transition-all duration-300 transform hover:scale-110">
                <User size={18} className="transition-transform duration-300 hover:rotate-12" />
            </Link>
              <div className="relative">
                <button 
                  className="p-1.5 hover:bg-white/10 rounded-full transition-all duration-300 transform hover:scale-110"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingCart size={18} className="transition-transform duration-300 hover:rotate-12" />
                </button>
                <span className="absolute -top-1 -right-1 bg-[#EFDFBB] text-[#722F37] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transition-all duration-500 transform hover:scale-110 animate-fadeIn">
                  {cartCount}
                </span>
              </div>
              <button 
                className="md:hidden p-1.5 hover:bg-white/10 rounded-full transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-[#722F37] z-50 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <div className="mr-2">
                <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
                  <rect x="5" y="5" width="30" height="20" stroke="white" strokeWidth="2" fill="none" />
                  <rect x="5" y="15" width="30" height="20" stroke="white" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Farnic</h1>
                <p className="text-xs text-gray-200">Furniture</p>
              </div>
            </div>
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={24} className="text-white" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            <a href="#" className="text-white text-xl font-medium hover:text-gray-200 transition-colors">Home</a>
            <a href="#" className="text-white text-xl font-medium hover:text-gray-200 transition-colors">Pages</a>
            <a href="#" className="text-white text-xl font-medium hover:text-gray-200 transition-colors">About</a>
            <a href="#" className="text-white text-xl font-medium hover:text-gray-200 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
      
      {/* Cart Popup */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-xl w-96 p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsCartOpen(false)}
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            
            <div className="flex justify-between items-center border-b py-4">
              <div>
                <h3 className="font-medium">Accent Leisure Chairs</h3>
                <div className="flex items-center mt-2">
                  <input 
                    type="number" 
                    defaultValue="1" 
                    min="1" 
                    className="w-16 border rounded text-center mr-2"
                  />
                  <span className="font-semibold">$ 65.35 USD</span>
                </div>
              </div>
              <button className="text-red-500 hover:text-red-700">
                Remove
              </button>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <span className="font-bold text-lg">Subtotal</span>
              <span className="font-bold text-lg">$ 65.35 USD</span>
            </div>
            
            <button 
              className="w-full bg-blue-500 text-white py-3 rounded-lg mt-4 hover:bg-blue-600 transition-colors"
            >
              Continue to Checkout
            </button>
          </div>
        </div>
      )}
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes sweep {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Header;