import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, Star, Info, X } from 'lucide-react';
import ProductDetailModal from './ProductDetailModal';

const livingRoomImages = [
  "/Living1.jpg",
  "/Living2.avif", 
  "/Living3.avif",
  "/Living4.avif",
  "/Living5.avif",
  "/Living6.avif"
];

const LivingRoomFurniture = ({ onAddToCart }) => {
  const [favorites, setFavorites] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const furnitureItems = [
    {
      id: 'living-1',
      name: "Modern Sectional Sofa",
      description: "Spacious L-shaped design with premium fabric",
      currentPrice: 1999.99,
      image: livingRoomImages[0],
      rating: 4.7,
      details: {
        material: "High-quality polyester blend fabric",
        dimensions: "275 x 190 x 90 cm",
        color: "Light Gray",
        seatingCapacity: "4-5 persons",
        features: [
          "Reversible chaise",
          "Deep seat cushions",
          "Removable covers",
          "Sturdy wooden frame"
        ],
        reviews: [
          { 
            user: "Sarah M.", 
            rating: 5, 
            comment: "Absolutely love this sofa! Comfortable and looks amazing in my living room." 
          },
          { 
            user: "John D.", 
            rating: 4, 
            comment: "Great quality, perfect for family gatherings." 
          }
        ]
      }
    },
    {
      id: 'living-2',
      name: "Classic Leather Sofa",
      description: "Timeless design with genuine leather upholstery",
      currentPrice: 1799.99,
      image: livingRoomImages[1],
      rating: 4.9,
      details: {
        material: "Full-grain genuine leather",
        dimensions: "230 x 95 x 85 cm",
        color: "Rich Brown",
        seatingCapacity: "3 persons",
        features: [
          "Hand-stitched leather",
          "Solid hardwood frame",
          "High-density foam cushions",
          "Elegant rolled arms"
        ],
        reviews: [
          { 
            user: "Michael T.", 
            rating: 5, 
            comment: "Exquisite craftsmanship! This leather sofa is a statement piece in my living room." 
          },
          { 
            user: "Emily R.", 
            rating: 5, 
            comment: "Luxurious and incredibly comfortable. Worth every penny!" 
          }
        ]
      }
    },
    {
      id: 'living-3',
      name: "Minimalist Loveseat",
      description: "Compact two-seater with clean lines",
      currentPrice: 1299.99,
      image: livingRoomImages[2],
      rating: 4.5,
      details: {
        material: "Velvet and engineered wood",
        dimensions: "160 x 80 x 75 cm",
        color: "Sage Green",
        seatingCapacity: "2 persons",
        features: [
          "Slim metal legs",
          "Soft velvet upholstery",
          "Compact design",
          "Easy to move and position"
        ],
        reviews: [
          { 
            user: "Rachel K.", 
            rating: 4, 
            comment: "Perfect for my small apartment. Looks modern and feels comfortable." 
          },
          { 
            user: "David L.", 
            rating: 5, 
            comment: "Great design, fits perfectly in my minimalist living space." 
          }
        ]
      }
    },
    {
      id: 'living-4',
      name: "Marble Top Coffee Table",
      description: "Elegant table with luxurious marble surface",
      currentPrice: 599.99,
      image: livingRoomImages[3],
      rating: 4.6,
      details: {
        material: "Genuine marble top with gold-plated metal base",
        dimensions: "120 x 60 x 45 cm",
        color: "White Marble with Gold Accents",
        weight: "45 kg",
        features: [
          "Genuine marble surface",
          "Gold-plated steel frame",
          "Polished finish",
          "Scratch-resistant surface"
        ],
        reviews: [
          { 
            user: "Sophie W.", 
            rating: 5, 
            comment: "Absolutely stunning! Adds a touch of luxury to my living room." 
          },
          { 
            user: "Alex P.", 
            rating: 4, 
            comment: "High-quality materials, looks even better in person." 
          }
        ]
      }
    },
    {
      id: 'living-5',
      name: "Wooden Industrial Coffee Table",
      description: "Rustic design with metal accents",
      currentPrice: 449.99,
      image: livingRoomImages[4],
      rating: 4.4,
      details: {
        material: "Reclaimed wood and wrought iron",
        dimensions: "110 x 55 x 40 cm",
        color: "Natural Wood with Black Metal",
        weight: "30 kg",
        features: [
          "Reclaimed wood top",
          "Industrial metal frame",
          "Unique distressed finish",
          "Storage shelf underneath"
        ],
        reviews: [
          { 
            user: "Mark T.", 
            rating: 4, 
            comment: "Perfect industrial chic look. Adds character to my living room." 
          },
          { 
            user: "Lisa H.", 
            rating: 5, 
            comment: "Love the rustic design and sturdy construction!" 
          }
        ]
      }
    },
    {
      id: 'living-6',
      name: "Modern Glass Coffee Table",
      description: "Sleek design with tempered glass top",
      currentPrice: 699.99,
      image: livingRoomImages[5],
      rating: 4.8,
      details: {
        material: "Tempered Glass and Stainless Steel",
        dimensions: "120 x 60 x 45 cm",
        color: "Clear Glass with Silver Frame",
        weight: "25 kg",
        features: [
          "Tempered glass top",
          "Rust-resistant frame",
          "Modern minimalist design",
          "Easy to clean"
        ],
        reviews: [
          { 
            user: "Emily R.", 
            rating: 5, 
            comment: "Absolutely stunning! Adds a touch of elegance to my living room." 
          },
          { 
            user: "Michael T.", 
            rating: 4, 
            comment: "Great quality, looks even better in person." 
          }
        ]
      }
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
      selectedColor: null
    };
    onAddToCart(productToAdd);
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
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
    <>
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
            Living Room Furniture Collection
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
                          onClick={() => openProductDetails(item)}
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
                      ₹{item.currentPrice.toFixed(2)}
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

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetailModal 
            product={selectedProduct} 
            onClose={closeProductDetails}
            onAddToCart={handleAddToCart}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default LivingRoomFurniture;