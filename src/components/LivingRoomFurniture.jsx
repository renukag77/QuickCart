import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';

const livingRoomImages = [
  "/sofa1.jpg",
  "/sofa2.jpg", 
  "/sofa3.jpg",
  "/coffeetable1.jpg",
  "/coffeetable2.jpg",
  "/coffeetable3.jpg"
];

const LivingRoomFurniture = () => {
  const [favorites, setFavorites] = useState([]);

  const furnitureItems = [
    {
      id: 1,
      name: "Modern Sectional Sofa",
      description: "Spacious L-shaped design with premium fabric",
      price: 1999.99,
      image: livingRoomImages[0]
    },
    {
      id: 2,
      name: "Classic Leather Sofa",
      description: "Timeless design with genuine leather upholstery",
      price: 1799.99,
      image: livingRoomImages[1]
    },
    {
      id: 3,
      name: "Minimalist Loveseat",
      description: "Compact two-seater with clean lines",
      price: 1299.99,
      image: livingRoomImages[2]
    },
    {
      id: 4,
      name: "Marble Top Coffee Table",
      description: "Elegant table with luxurious marble surface",
      price: 599.99,
      image: livingRoomImages[3]
    },
    {
      id: 5,
      name: "Wooden Industrial Coffee Table",
      description: "Rustic design with metal accents",
      price: 449.99,
      image: livingRoomImages[4]
    },
    {
      id: 6,
      name: "Modern Glass Coffee Table",
      description: "Sleek design with tempered glass top",
      price: 699.99,
      image: livingRoomImages[5]
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
          Living Room Furniture Collection
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

export default LivingRoomFurniture;