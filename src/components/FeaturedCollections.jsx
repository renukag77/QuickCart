import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const accentColor = "#722F37";
  const creamColor = "#EFDFBB";
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Navigate to product details page with product info
    navigate('/product', { 
      state: { 
        product: {
          id: product.id || Math.random().toString(36).substr(2, 9),
          name: product.name,
          price: parseInt(product.currentPrice.replace(',', '')),
          image: product.image,
          originalPrice: product.originalPrice
        }
      } 
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 100,
        duration: 0.5
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="relative bg-white rounded-lg shadow-lg overflow-hidden group"
      style={{ 
        border: `2px solid ${accentColor}`,
        backgroundColor: accentColor,
        color: creamColor
      }}
    >
      <div className="overflow-hidden relative">
        <motion.img 
          src={product.image} 
          alt={product.name} 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:opacity-80"
        />
        
        {/* Hover Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white p-3 rounded-full shadow-lg"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="text-black" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white p-3 rounded-full shadow-lg"
          >
            <Heart className="text-red-500" />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Rest of the product card remains the same */}
      <motion.div 
        className="p-6 text-center"
        style={{ backgroundColor: accentColor }}
      >
        <motion.h3 
          className="text-xl font-semibold mb-2 h-14 flex items-center justify-center"
          style={{ color: creamColor }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {product.name}
        </motion.h3>
        <motion.div 
          className="flex justify-center items-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span 
            className="text-lg font-semibold"
            style={{ color: creamColor }}
          >
            ₹{product.currentPrice}
          </span>
          {product.originalPrice && (
            <motion.span 
              className="text-gray-300 line-through text-sm ml-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              ₹{product.originalPrice}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Discount Badge */}
      {product.originalPrice && (
        <motion.div 
          className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          {Math.round(((product.originalPrice.replace(',', '') - product.currentPrice.replace(',', '')) / product.originalPrice.replace(',', '')) * 100)}% OFF
        </motion.div>
      )}
    </motion.div>
  );
};

const FeaturedCollections = () => {
  const products = [
    {
      id: 1,
      image: "/sofaset.png",
      name: "Luxury Sofa Set",
      currentPrice: "24,999",
      originalPrice: "32,999"
    },
    {
      id: 2,
      image: "/sofa2.png",
      name: "Modern Leather Sofa",
      currentPrice: "18,499",
      originalPrice: "25,999"
    },
    {
      id: 3,
      image: "/sofa3.png",
      name: "Classic Wooden Sofa",
      currentPrice: "15,999",
      originalPrice: "21,499"
    }
  ];

  const creamColor = "#EFDFBB";
  const accentColor = "#722F37";

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      style={{ backgroundColor: creamColor }}
    >
      <div className="container mx-auto">
        <motion.h2 
          className="text-center text-4xl font-bold mb-4"
          style={{ color: accentColor }}
        >
          Featured Sofa Collections
        </motion.h2>
        <motion.p 
          className="text-center text-lg mb-12 max-w-2xl mx-auto"
          style={{ color: `${accentColor}80` }}
        >
          Elegant and Comfortable Sofa Sets
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedCollections;