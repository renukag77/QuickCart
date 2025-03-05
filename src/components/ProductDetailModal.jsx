import React from 'react';
import { motion } from 'framer-motion';
import { X, Star, ShoppingCart } from 'lucide-react';

const ProductDetailModal = ({ product, onClose, onAddToCart }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.div 
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div 
        variants={modalVariants}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          <X size={24} color="#722F37" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>

          {/* Product Details */}
          <div>
            <h2 
              className="text-3xl font-bold mb-4"
              style={{ color: "#722F37" }}
            >
              {product.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index} 
                    size={24} 
                    color={index < Math.floor(product.rating) ? "#FFD700" : "#E0E0E0"}
                    fill={index < Math.floor(product.rating) ? "#FFD700" : "none"}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                ({product.rating.toFixed(1)})
              </span>
            </div>

            {/* Price */}
            <div 
              className="text-3xl font-bold mb-4"
              style={{ color: "#722F37" }}
            >
              ₹{product.currentPrice.toFixed(2)}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Product Details */}
            <div className="mb-6">
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: "#722F37" }}
              >
                Product Details
              </h3>
              <ul className="space-y-2">
                {product.details?.material && (
                  <li>
                    <strong>Material:</strong> {product.details.material}
                  </li>
                )}
                {product.details?.dimensions && (
                  <li>
                    <strong>Dimensions:</strong> {product.details.dimensions}
                  </li>
                )}
                {product.details?.color && (
                  <li>
                    <strong>Color:</strong> {product.details.color}
                  </li>
                )}
              </ul>
            </div>

            {/* Features */}
            {product.details?.features && (
              <div className="mb-6">
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: "#722F37" }}
                >
                  Key Features
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {product.details.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Reviews */}
            {product.details?.reviews && (
              <div>
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: "#722F37" }}
                >
                  Customer Reviews
                </h3>
                {product.details.reviews.map((review, index) => (
                  <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            color={i < review.rating ? "#FFD700" : "#E0E0E0"}
                            fill={i < review.rating ? "#FFD700" : "none"}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm">
                        {review.user}
                      </span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Add to Cart Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onAddToCart(product)}
              className="w-full px-6 py-3 rounded-md flex items-center justify-center transition-all duration-300"
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
    </motion.div>
  );
};

export default ProductDetailModal;