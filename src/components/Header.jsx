import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, Minus, Plus, Trash2 } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";

// Cart Item Component
const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex justify-between items-center border-b py-4">
      <div className="flex items-center space-x-4">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-16 h-16 object-cover rounded-md"
        />
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <div className="flex items-center mt-2 space-x-2">
            <div className="flex items-center border rounded">
              <button 
                onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                className="px-2 py-1 hover:bg-gray-100"
              >
                <Minus size={16} />
              </button>
              <span className="px-3">{item.quantity}</span>
              <button 
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 hover:bg-gray-100"
              >
                <Plus size={16} />
              </button>
            </div>
            <span className="font-semibold">₹ {(item.currentPrice * item.quantity).toLocaleString()}</span>
          </div>
        </div>
      </div>
      <button 
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};
// Main Header Component
const Header = ({ cartItems, updateQuantity, removeItem }) => {
    const navigate = useNavigate();
  // State Management
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Banner Auto-Close
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  // Cart Functionality
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + ((item.currentPrice || 0) * (item.quantity || 1));
    }, 0);
  };

  const safeCartItems = Array.isArray(cartItems) ? cartItems : [];
  const handleUpdateQuantity = (id, newQuantity) => {
    if (updateQuantity) updateQuantity(id, newQuantity);
  };

  const handleCheckout = () => {
    navigate('/checkout', { state: { cartItems } });
  };
  
  const handleRemoveItem = (id) => {
    if (removeItem) removeItem(id);
  };
  


  return (
    <div className="w-full">
      {/* Notification Banner */}
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
      
      {/* Main Header */}
      <header 
        className={`w-full py-2 bg-[#722F37] text-white transition-all duration-300 ${isScrolled ? 'shadow-lg py-1' : ''}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
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
                  {['F','a','r','n','i','c'].map((letter, index) => (
                    <span 
                      key={index} 
                      className="inline-block hover:animate-pulse transition-transform duration-300 hover:scale-105"
                    >
                      {letter}
                    </span>
                  ))}
                </h1>
                <p className="text-xs text-gray-200 opacity-80">Furniture</p>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {['Home', 'Pages', 'About', 'Contact'].map((item, index) => (
                <a 
                  key={index} 
                  href="/" 
                  className="font-medium hover:text-gray-200 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                >
                  {item}
                </a>
              ))}
            </nav>
            
            {/* Right Icons */}
            <div className="flex items-center space-x-1 md:space-x-3">
              {/* Search */}
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
              
              {/* User */}
              <Link to="/login" className="p-1.5 hover:bg-white/10 rounded-full transition-all duration-300 transform hover:scale-110">
                <User size={18} className="transition-transform duration-300 hover:rotate-12" />
              </Link>
              
              {/* Cart */}
              <div className="relative">
                <button 
                  className="p-1.5 hover:bg-white/10 rounded-full transition-all duration-300 transform hover:scale-110"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingCart size={18} className="transition-transform duration-300 hover:rotate-12" />
                </button>
                <span className="absolute -top-1 -right-1 bg-[#EFDFBB] text-[#722F37] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transition-all duration-500 transform hover:scale-110 animate-fadeIn">
                  {cartItems.length}
                </span>
              </div>
              
              {/* Mobile Menu Toggle */}
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
      
      {/* Mobile Menu */}
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
            {['Home', 'Pages', 'About', 'Contact'].map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-white text-xl font-medium hover:text-gray-200 transition-colors"
              >
                {item}
              </a>
            ))}
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
            className="bg-white rounded-lg shadow-xl w-[500px] max-h-[80vh] overflow-y-auto p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4" onClick={() => setIsCartOpen(false)}>
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            
            {cartItems.length === 0 ? (
              <div className="text-center py-10 text-gray-500">
                Your cart is empty
              </div>
            ) : (
              <>
                {cartItems.map(item => (
  <CartItem 
    key={item.id}
    item={item}
    onUpdateQuantity={handleUpdateQuantity}
    onRemove={handleRemoveItem}
  />
))}
                
                <div className="mt-4 flex justify-between">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-lg">₹ {calculateTotal().toLocaleString()}</span>
                </div>
                <button onClick={handleCheckout} className="w-full bg-[#722F37] text-white py-3 rounded-lg mt-4">
                  Proceed to Checkout
                </button>
              </>
            )}
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