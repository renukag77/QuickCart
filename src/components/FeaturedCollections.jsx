import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    image: "/sofaset.png",
    name: "Luxury Sofa Set",
    currentPrice: "24,999",
    originalPrice: "32,999",
    description: "Elevate your living space with this luxurious sofa set. Crafted with premium materials and elegant design, this sofa offers both comfort and sophistication. Perfect for modern and classic interiors.",
    colors: [
      { name: 'beige', hex: '#F5E6D3' },
      { name: 'green', hex: '#2F4F4F' },
      { name: 'blue', hex: '#4169E1' }
    ],
    stock: 15,
    thumbnails: ["/sofaset.png", "/sofaset-alt1.png", "/sofaset-alt2.png"]
  },
  {
    id: 2,
    image: "/sofa2.png",
    name: "Modern Leather Sofa",
    currentPrice: "18,499",
    originalPrice: "25,999",
    description: "Experience modern comfort with this sleek leather sofa. Designed for contemporary spaces, it combines minimalist aesthetics with exceptional comfort and durability.",
    colors: [
      { name: 'brown', hex: '#8B4513' },
      { name: 'black', hex: '#000000' },
      { name: 'cream', hex: '#FFFDD0' }
    ],
    stock: 8,
    thumbnails: ["/sofa2.png", "/sofa2-alt1.png", "/sofa2-alt2.png"]
  },
  {
    id: 3,
    image: "/sofa3.png",
    name: "Classic Wooden Sofa",
    currentPrice: "15,999",
    originalPrice: "21,499",
    description: "A timeless wooden sofa that brings warmth and elegance to any living space. Handcrafted with attention to detail, this sofa combines traditional craftsmanship with modern comfort.",
    colors: [
      { name: 'walnut', hex: '#5D4037' },
      { name: 'oak', hex: '#C19A6B' },
      { name: 'mahogany', hex: '#8B4513' }
    ],
    stock: 12,
    thumbnails: ["/sofa3.png", "/sofa3-alt1.png", "/sofa3-alt2.png"]
  }
];

const ProductCard = ({ product }) => {
  const accentColor = "#722F37";
  const creamColor = "#EFDFBB";
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Navigate to product details page with complete product info
    navigate('/product', { 
      state: { product }
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
      
      {/* Product Details */}
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