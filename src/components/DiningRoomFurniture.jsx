import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';

const diningImages = [
  "/Dining1.avif",
  "/Dining2.avif", 
  "/Dining3.avif",
  "/Dining4.avif",
  "/Dining5.avif",
  "/Dining6.avif"
];

const DiningRoomFurniture = ({ onAddToCart }) => {
  const [favorites, setFavorites] = useState([]);

  const furnitureItems = [
    {
      id: 'dining-1',
      name: "Modern Dining Table",
      description: "Elegant rectangular design with wooden finish",
      currentPrice: 1299.99,
      image: diningImages[0],
      category: "Dining Room"
    },
    {
      id: 'dining-2',
      name: "Expandable Dining Table",
      description: "Versatile table with extension leaves",
      currentPrice: 1599.99,
      image: diningImages[1],
      category: "Dining Room"
    },
    {
      id: 'dining-3',
      name: "Round Glass Dining Table",
      description: "Contemporary design with tempered glass top",
      currentPrice: 1099.99,
      image: diningImages[2],
      category: "Dining Room"
    },
    {
      id: 'dining-4',
      name: "Minimalist Dining Chairs (Set of 4)",
      description: "Sleek design with comfortable seating",
      currentPrice: 799.99,
      image: diningImages[3],
      category: "Dining Room"
    },
    {
      id: 'dining-5',
      name: "Upholstered Dining Chairs",
      description: "Luxurious fabric with elegant wooden legs",
      currentPrice: 1099.99,
      image: diningImages[4],
      category: "Dining Room"
    },
    {
      id: 'dining-6',
      name: "Industrial Style Dining Chairs",
      description: "Metal and wood combination for modern look",
      currentPrice: 649.99,
      image: diningImages[5],
      category: "Dining Room"
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
    // Prepare the product object for adding to cart
    const productToAdd = {
      ...item,
      quantity: 1,
      selectedColor: null // Add color if applicable
    };

    // Call the onAddToCart function passed from parent
    onAddToCart(productToAdd);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#EFDFBB] min-h-screen p-8"
    >
      <div className="max-w-7xl mx-auto">
        <h1 
          className="text-5xl font-bold text-center mb-12"
          style={{ color: "#722F37" }}
        >
          Dining Room Furniture Collection
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {furnitureItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <button 
                  onClick={() => toggleFavorite(item.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full ${
                    favorites.includes(item.id) 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white text-gray-500'
                  }`}
                >
                  <Heart size={24} />
                </button>
              </div>
              <div className="p-6">
                <h3 
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#722F37" }}
                >
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span 
                    className="text-2xl font-bold"
                    style={{ color: "#722F37" }}
                  >
                    ${item.currentPrice.toFixed(2)}
                  </span>
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className="px-4 py-2 rounded-md flex items-center"
                    style={{ 
                      backgroundColor: "#722F37", 
                      color: "#EFDFBB" 
                    }}
                  >
                    <ShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DiningRoomFurniture;