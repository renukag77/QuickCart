import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingCart, Truck, Shield, Tag } from 'lucide-react';

const FurnitureProductDetailsModal = ({ 
  item, 
  isOpen, 
  onClose, 
  onAddToCart 
}) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const colors = [
    { name: 'Natural Wood', hex: '#D2B48C' },
    { name: 'Dark Walnut', hex: '#5C4033' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Black', hex: '#000000' }
  ];

  const reviews = [
    {
      name: "John D.",
      rating: 5,
      date: "2 weeks ago",
      comment: "Absolutely love the modern design and quality of this dining table. Looks even better in person!"
    },
    {
      name: "Sarah M.",
      rating: 4,
      date: "1 month ago",
      comment: "Great value for money. Comfortable and stylish chairs that complement our dining room perfectly."
    }
  ];

  const handleAddToCart = () => {
    const productToAdd = {
      ...item,
      quantity,
      selectedColor: selectedColor || colors[0]
    };
    onAddToCart(productToAdd);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="grid md:grid-cols-2 gap-8 p-8 relative">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
          >
            <X size={24} />
          </button>

          {/* Product Image */}
          <div>
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full rounded-2xl shadow-lg object-cover h-96"
            />
          </div>

          {/* Product Details */}
          <div>
            <h2 
              className="text-3xl font-bold mb-4"
              style={{ color: "#722F37" }}
            >
              {item.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex mr-4">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index} 
                    size={24} 
                    color={index < Math.floor(item.rating) ? "#FFD700" : "#E0E0E0"}
                    fill={index < Math.floor(item.rating) ? "#FFD700" : "none"}
                  />
                ))}
              </div>
              <span className="text-gray-600">({item.rating}) • {reviews.length} Reviews</span>
            </div>

            {/* Price */}
            <div 
              className="text-4xl font-bold mb-6"
              style={{ color: "#722F37" }}
            >
              ₹{item.currentPrice.toFixed(2)}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">{item.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Select Color</h3>
              <div className="flex space-x-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color 
                        ? 'border-[#722F37]' 
                        : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span className="text-xl">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="w-full py-3 rounded-md flex items-center justify-center"
              style={{ 
                backgroundColor: "#722F37", 
                color: "#EFDFBB" 
              }}
            >
              <ShoppingCart className="mr-2" />
              Add to Cart
            </motion.button>

            {/* Product Features */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Truck size={32} className="mb-2 text-[#722F37]" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield size={32} className="mb-2 text-[#722F37]" />
                <span className="text-sm">1-Year Warranty</span>
              </div>
              <div className="flex flex-col items-center">
                <Tag size={32} className="mb-2 text-[#722F37]" />
                <span className="text-sm">Easy Returns</span>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-8">
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: "#722F37" }}
              >
                Customer Reviews
              </h3>
              {reviews.map((review, index) => (
                <div key={index} className="border-b pb-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star 
                          key={starIndex} 
                          size={16} 
                          color={starIndex < review.rating ? "#FFD700" : "#E0E0E0"}
                          fill={starIndex < review.rating ? "#FFD700" : "none"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FurnitureProductDetailsModal;