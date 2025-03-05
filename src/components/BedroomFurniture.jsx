import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';

const bedroomImages = [
  "/bed1.jpg",
  "/bed2.jpg", 
  "/bed3.jpg",
  "/bed4.jpg",
  "/bed5.jpg",
  "/bed6.jpg"
];

const BedroomFurniture = () => {
  const [favorites, setFavorites] = useState([]);

  const furnitureItems = [
    {
      id: 1,
      name: "Minimalist Bed Frame",
      description: "Sleek design with wooden accents",
      price: 899.99,
      image: bedroomImages[0]
    },
    {
      id: 2,
      name: "Modern Nightstand",
      description: "Compact storage with clean lines",
      price: 249.99,
      image: bedroomImages[1]
    },
    {
      id: 3,
      name: "Plush Bedroom Armchair",
      description: "Comfortable reading corner piece",
      price: 599.99,
      image: bedroomImages[2]
    },
    {
      id: 4,
      name: "Elegant Dresser",
      description: "Spacious storage with smooth drawers",
      price: 749.99,
      image: bedroomImages[3]
    },
    {
      id: 5,
      name: "Minimalist Wardrobe",
      description: "Spacious and stylish clothing storage",
      price: 1299.99,
      image: bedroomImages[4]
    },
    {
      id: 6,
      name: "Comfort Bed Bench",
      description: "Perfect end-of-bed seating",
      price: 399.99,
      image: bedroomImages[5]
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
          Bedroom Furniture Collection
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

export default BedroomFurniture;