import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, Star, Info } from 'lucide-react';

const bedroomImages = [
  "/Bedroom1.avif",
  "/Bedroom2.avif", 
  "/Bedroom3.avif",
  "/Bedroom4.avif",
  "/Bedroom5.avif",
  "/Bedroom6.avif"
];

const BedroomFurniture = ({ onAddToCart }) => {
  const [favorites, setFavorites] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);

  const furnitureItems = [
    {
      id: 'bedroom-1',
      name: "Minimalist Bed Frame",
      description: "Sleek design with wooden accents",
      price: 89999, // Price in INR
      image: bedroomImages[0],
      category: "Bedroom",
      rating: 4.7
    },
    {
      id: 'bedroom-2',
      name: "Modern Nightstand",
      description: "Compact storage with clean lines",
      price: 24999, // Price in INR
      image: bedroomImages[1],
      category: "Bedroom",
      rating: 4.5
    },
    {
      id: 'bedroom-3',
      name: "Plush Bedroom Armchair",
      description: "Comfortable reading corner piece",
      price: 59999, // Price in INR
      image: bedroomImages[2],
      category: "Bedroom",
      rating: 4.8
    },
    {
      id: 'bedroom-4',
      name: "Elegant Dresser",
      description: "Spacious storage with smooth drawers",
      price: 74999, // Price in INR
      image: bedroomImages[3],
      category: "Bedroom",
      rating: 4.6
    },
    {
      id: 'bedroom-5',
      name: "Minimalist Wardrobe",
      description: "Spacious and stylish clothing storage",
      price: 129999, // Price in INR
      image: bedroomImages[4],
      category: "Bedroom",
      rating: 4.9
    },
    {
      id: 'bedroom-6',
      name: "Comfort Bed Bench",
      description: "Perfect end-of-bed seating",
      price: 39999, // Price in INR
      image: bedroomImages[5],
      category: "Bedroom",
      rating: 4.4
    }
  ];

  const toggleFavorite = (itemId) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleAddToCart = (item) => {
    const productToAdd = {
      ...item,
      quantity: 1,
      currentPrice: item.price,
      selectedColor: null
    };
    onAddToCart(productToAdd);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#EFDFBB] min-h-screen p-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-5xl font-bold text-center mb-12"
          style={{ color: "#722F37" }}
        >
          Bedroom Furniture Collection
        </motion.h1>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {furnitureItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(114, 47, 55, 0.2)"
              }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden relative"
            >
              <div className="relative">
                <motion.img 
                  src={item.image} 
                  alt={item.name}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-64 object-cover"
                />
                <AnimatePresence>
                  {hoveredItem === item.id && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                    >
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        className="bg-white p-3 rounded-full mx-2 shadow-lg"
                        title="Product Details"
                      >
                        <Info size={24} color="#722F37" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button 
                  onClick={() => toggleFavorite(item.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
                    favorites.includes(item.id) 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  <Heart size={24} />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 
                    className="text-xl font-semibold"
                    style={{ color: "#722F37" }}
                  >
                    {item.name}
                  </h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <Star 
                        key={index} 
                        size={20} 
                        color={index < Math.floor(item.rating) ? "#FFD700" : "#E0E0E0"}
                        fill={index < Math.floor(item.rating) ? "#FFD700" : "none"}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span 
                    className="text-2xl font-bold"
                    style={{ color: "#722F37" }}
                  >
                    ₹ {item.price.toLocaleString()}
                  </span>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(item)}
                    className="px-4 py-2 rounded-md flex items-center transition-all duration-300"
                    style={{ 
                      backgroundColor: "#722F37", 
                      color: "#EFDFBB" 
                    }}
                  >
                    <ShoppingCart className="mr-2" />
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BedroomFurniture;