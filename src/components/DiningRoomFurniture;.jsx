import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';

const diningImages = [
  "/diningtable1.jpg",
  "/diningtable2.jpg", 
  "/diningtable3.jpg",
  "/diningchair1.jpg",
  "/diningchair2.jpg",
  "/diningchair3.jpg"
];

const DiningRoomFurniture = () => {
  const [favorites, setFavorites] = useState([]);

  const furnitureItems = [
    {
      id: 1,
      name: "Modern Dining Table",
      description: "Elegant rectangular design with wooden finish",
      price: 1299.99,
      image: diningImages[0]
    },
    {
      id: 2,
      name: "Expandable Dining Table",
      description: "Versatile table with extension leaves",
      price: 1599.99,
      image: diningImages[1]
    },
    {
      id: 3,
      name: "Round Glass Dining Table",
      description: "Contemporary design with tempered glass top",
      price: 1099.99,
      image: diningImages[2]
    },
    {
      id: 4,
      name: "Minimalist Dining Chairs (Set of 4)",
      description: "Sleek design with comfortable seating",
      price: 799.99,
      image: diningImages[3]
    },
    {
      id: 5,
      name: "Upholstered Dining Chairs",
      description: "Luxurious fabric with elegant wooden legs",
      price: 1099.99,
      image: diningImages[4]
    },
    {
      id: 6,
      name: "Industrial Style Dining Chairs",
      description: "Metal and wood combination for modern look",
      price: 649.99,
      image: diningImages[5]
    }
  ];

  const toggleFavorite = (itemId) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
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
                    ${item.price.toFixed(2)}
                  </span>
                  <button 
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