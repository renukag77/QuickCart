import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, Star, Info, X } from 'lucide-react';
import ProductDetailModal from './ProductDetailModal';

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
  const [selectedProduct, setSelectedProduct] = useState(null);

  const furnitureItems = [
    {
      id: 'bedroom-1',
      name: "Minimalist Bed Frame",
      description: "Sleek design with wooden accents",
      currentPrice: 89999,
      image: bedroomImages[0],
      category: "Bedroom",
      rating: 4.7,
      details: {
        material: "Solid oak wood with brushed metal accents",
        dimensions: "210 x 180 x 110 cm",
        color: "Natural Oak with Matte Black Frame",
        weight: "85 kg",
        features: [
          "Minimalist Scandinavian design",
          "Sturdy wooden construction",
          "Integrated headboard",
          "Compatible with standard mattress sizes"
        ],
        reviews: [
          { 
            user: "Sarah K.", 
            rating: 5, 
            comment: "Beautiful bed frame that perfectly complements my modern bedroom!" 
          },
          { 
            user: "Michael R.", 
            rating: 4, 
            comment: "Sleek design and very stable. Easy to assemble." 
          }
        ]
      }
    },
    {
      id: 'bedroom-2',
      name: "Modern Nightstand",
      description: "Compact storage with clean lines",
      currentPrice: 24999,
      image: bedroomImages[1],
      category: "Bedroom",
      rating: 4.5,
      details: {
        material: "Engineered wood with ceramic top",
        dimensions: "50 x 40 x 55 cm",
        color: "White with Gray Ceramic Top",
        weight: "15 kg",
        features: [
          "Single drawer with soft-close mechanism",
          "Ceramic top surface",
          "Minimalist design",
          "Compact size perfect for small spaces"
        ],
        reviews: [
          { 
            user: "Emma L.", 
            rating: 5, 
            comment: "Looks elegant and provides just the right amount of storage!" 
          },
          { 
            user: "David T.", 
            rating: 4, 
            comment: "Great quality and fits perfectly next to my bed." 
          }
        ]
      }
    },
    {
      id: 'bedroom-3',
      name: "Plush Bedroom Armchair",
      description: "Comfortable reading corner piece",
      currentPrice: 59999,
      image: bedroomImages[2],
      category: "Bedroom",
      rating: 4.8,
      details: {
        material: "Velvet upholstery with wooden legs",
        dimensions: "85 x 90 x 100 cm",
        color: "Deep Emerald Green",
        weight: "35 kg",
        features: [
          "Premium velvet fabric",
          "Ergonomic design",
          "Solid oak wood legs",
          "High-density foam cushioning"
        ],
        reviews: [
          { 
            user: "Rachel P.", 
            rating: 5, 
            comment: "The most comfortable reading chair I've ever owned!" 
          },
          { 
            user: "James M.", 
            rating: 4, 
            comment: "Beautiful color and incredibly comfortable." 
          }
        ]
      }
    },
    {
      id: 'bedroom-4',
      name: "Elegant Dresser",
      description: "Spacious storage with smooth drawers",
      currentPrice: 74999,
      image: bedroomImages[3],
      category: "Bedroom",
      rating: 4.6,
      details: {
        material: "Solid walnut wood with soft-close drawers",
        dimensions: "140 x 45 x 90 cm",
        color: "Rich Walnut Brown",
        weight: "70 kg",
        features: [
          "6 spacious drawers",
          "Soft-close drawer mechanism",
          "Dovetail drawer construction",
          "Anti-tip safety brackets"
        ],
        reviews: [
          { 
            user: "Lisa W.", 
            rating: 5, 
            comment: "Beautiful dresser with ample storage. Looks stunning in my bedroom!" 
          },
          { 
            user: "Robert K.", 
            rating: 4, 
            comment: "Excellent quality and smooth-running drawers." 
          }
        ]
      }
    },
    {
      id: 'bedroom-5',
      name: "Minimalist Wardrobe",
      description: "Spacious and stylish clothing storage",
      currentPrice: 129999,
      image: bedroomImages[4],
      category: "Bedroom",
      rating: 4.9,
      details: {
        material: "Metal frame with sliding glass doors",
        dimensions: "200 x 60 x 220 cm",
        color: "Matte White with Clear Glass",
        weight: "120 kg",
        features: [
          "Sliding glass doors",
          "Multiple internal compartments",
          "LED interior lighting",
          "Soft-close mechanism"
        ],
        reviews: [
          { 
            user: "Sophia M.", 
            rating: 5, 
            comment: "Absolutely love the modern design and incredible storage capacity!" 
          },
          { 
            user: "Alex T.", 
            rating: 5, 
            comment: "Perfect combination of style and functionality." 
          }
        ]
      }
    },
    {
      id: 'bedroom-6',
      name: "Comfort Bed Bench",
      description: "Perfect end-of-bed seating",
      currentPrice: 39999,
      image: bedroomImages[5],
      category: "Bedroom",
      rating: 4.4,
      details: {
        material: "Linen upholstery with wooden frame",
        dimensions: "120 x 40 x 50 cm",
        color: "Light Gray",
        weight: "25 kg",
        features: [
          "Padded linen upholstery",
          "Sturdy wooden frame",
          "Perfect for end-of-bed storage",
          "Easy to clean fabric"
        ],
        reviews: [
          { 
            user: "Emily R.", 
            rating: 4, 
            comment: "Great additional seating and storage for my bedroom." 
          },
          { 
            user: "Michael D.", 
            rating: 5, 
            comment: "Looks elegant and is very comfortable!" 
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
                      ₹ {item.currentPrice.toLocaleString()}
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

export default BedroomFurniture;