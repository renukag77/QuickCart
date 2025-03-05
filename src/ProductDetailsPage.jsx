import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductDetailsPage = ({ onAddToCart })=> {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract product details from route state
  const { product } = location.state || {};

  // Default product in case no product is passed
  const defaultProduct = {
    name: "Product Not Found",
    image: "/api/placeholder/500/500",
    currentPrice: "0",
    originalPrice: "0",
    description: "No product details available.",
    colors: [{ name: 'default', hex: '#CCCCCC' }],
    stock: 0,
    thumbnails: ["/api/placeholder/500/500"]
  };

  // Use the passed product or default product
  const selectedProduct = product || defaultProduct;

  // Initialize state hooks
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(selectedProduct.colors[0].name);
  const [mainImage, setMainImage] = useState(selectedProduct.image);
  const [searchQuery, setSearchQuery] = useState('');

  // Redirect to home if no product found and using default product
  useMemo(() => {
    if (!product) {
      navigate('/');
    }
  }, [product, navigate]);

  const handleAddToCart = () => {
    // Create a cart item with selected details
    const cartItem = {
      ...selectedProduct,
      quantity: quantity,
      selectedColor: selectedColor
    };

    // Call the onAddToCart function passed from App
    onAddToCart(cartItem);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-[#EFDFBB] py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden relative">
        {/* Top Banner Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#722F37] text-white py-6 px-8 flex justify-between items-center"
        >
          <div>
            <h1 className="text-3xl font-bold">{selectedProduct.name}</h1>
            <p className="text-sm text-gray-200 mt-2">
              Discover the perfect blend of style, comfort, and quality
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="relative w-80">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#722F37]"
            />
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#722F37]"
            >
              <Search size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 p-12">
          {/* Product Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <motion.div 
              className="w-full max-w-md mb-6 relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img 
                src={mainImage} 
                alt={selectedProduct.name} 
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              {/* Wishlist Button */}
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg"
              >
                <Heart className="text-red-500" />
              </motion.button>
            </motion.div>

            {/* Thumbnail Navigation */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex space-x-4 items-center"
            >
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-[#722F37]"
              >
                <ChevronLeft size={24} />
              </motion.button>
              
              {selectedProduct.thumbnails.map((thumbnail, index) => (
                <motion.img 
                  key={index}
                  src={thumbnail} 
                  alt={`${selectedProduct.name} Thumbnail ${index + 1}`} 
                  className="w-20 h-20 object-cover rounded-md cursor-pointer hover:opacity-75 transition"
                  onClick={() => setMainImage(thumbnail)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
              
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-[#722F37]"
              >
                <ChevronRight size={24} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Product Details Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-[#722F37] mb-6">{selectedProduct.name}</h2>
            
            {/* Price */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6 flex items-center space-x-4"
            >
              <span className="text-3xl font-semibold text-[#722F37]">₹ {selectedProduct.currentPrice}</span>
              <span className="line-through text-gray-500 text-xl">₹ {selectedProduct.originalPrice}</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                {Math.round(((selectedProduct.originalPrice.replace(',', '') - selectedProduct.currentPrice.replace(',', '')) / selectedProduct.originalPrice.replace(',', '')) * 100)}% OFF
              </span>
            </motion.div>

            {/* Description */}
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 mb-6 text-lg leading-relaxed"
            >
              {selectedProduct.description}
            </motion.p>

            {/* Delivery & Stock Info */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mb-6 space-y-2"
            >
              <p className="font-medium flex items-center">
                <span className="mr-2 text-green-600">●</span>
                Delivery: Free delivery (over ₹50)
              </p>
              <p className="font-medium flex items-center">
                <span className="mr-2 text-[#722F37]">●</span>
                Stock: {selectedProduct.stock} Available
              </p>
            </motion.div>

            {/* Color Selection */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-6"
            >
              <h3 className="font-medium mb-3 text-lg">Color</h3>
              <div className="flex space-x-4">
                {selectedProduct.colors.map((color) => (
                  <motion.button
                    key={color.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                      selectedColor === color.name 
                        ? 'border-[#722F37] scale-110 shadow-lg' 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Quantity Selector */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mb-8"
            >
              <h3 className="font-medium mb-3 text-lg">Quantity</h3>
              <div className="flex items-center space-x-4">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-[#722F37] text-white px-4 py-2 rounded-l-lg"
                >
                  -
                </motion.button>
                <input 
                  type="number" 
                  value={quantity} 
                  readOnly
                  className="w-20 text-center border-y py-2"
                />
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-[#722F37] text-white px-4 py-2 rounded-r-lg"
                >
                  +
                </motion.button>
              </div>
            </motion.div>

            {/* Add to Cart Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="w-full bg-[#722F37] text-white py-4 rounded-lg hover:bg-[#5a252d] transition-colors flex items-center justify-center text-lg space-x-3"
            >
              <ShoppingCart size={24} /> 
              <span>Add to Cart</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetailsPage;