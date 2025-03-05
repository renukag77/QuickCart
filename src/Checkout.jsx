import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  PaypalIcon, 
  landmark, 
  TrashIcon, 
  PlusIcon, 
  MinusIcon, 
  CheckCircle2 
} from 'lucide-react';

const PaymentMethod = ({ 
  icon, 
  name, 
  isSelected, 
  onSelect 
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onSelect}
    className={`
      flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300
      ${isSelected 
        ? 'bg-[#722F37] text-[#EFDFBB]' 
        : 'bg-white text-[#722F37] border border-[#722F37]/20 hover:bg-[#722F37]/10'
      }
    `}
  >
    {icon}
    <span className="ml-4 font-semibold">{name}</span>
    {isSelected && <CheckCircle2 className="ml-auto" />}
  </motion.div>
);

const Checkout = ({ 
  cartItems, 
  updateQuantity, 
  removeItem, 
  onCheckout 
}) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: ''
  });

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + (item.currentPrice * item.quantity), 
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const shipping = subtotal > 5000 ? 0 : 500; // Free shipping over 5000
  const total = subtotal + tax + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const paymentMethods = [
    { 
      id: 'credit', 
      name: 'Credit Card', 
      icon: <CreditCard size={24} /> 
    },
    { 
      id: 'paypal', 
      name: 'PayPal', 
      icon: <CreditCard size={24} /> 
    },
    { 
      id: 'bank', 
      name: 'Bank Transfer', 
      icon: <landmark size={24} /> 
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#EFDFBB] min-h-screen py-12 px-4"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Order Summary */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ color: "#722F37" }}
          >
            Order Summary
          </h2>

          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center border-b py-4"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-24 h-24 object-cover rounded-lg mr-6" 
              />
              
              <div className="flex-grow">
                <h3 
                  className="text-xl font-semibold"
                  style={{ color: "#722F37" }}
                >
                  {item.name}
                </h3>
                <p className="text-gray-600">₹{item.currentPrice.toFixed(2)}</p>
              </div>
              
              <div className="flex items-center">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  className="p-2 bg-[#722F37] text-white rounded-l-md"
                >
                  <MinusIcon size={20} />
                </motion.button>
                <span 
                  className="px-4 py-2 bg-[#EFDFBB] text-[#722F37]"
                >
                  {item.quantity}
                </span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-2 bg-[#722F37] text-white rounded-r-md"
                >
                  <PlusIcon size={20} />
                </motion.button>
                
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => removeItem(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  <TrashIcon size={24} />
                </motion.button>
              </div>
            </motion.div>
          ))}

          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax (10%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between font-bold text-xl mt-4">
              <span style={{ color: "#722F37" }}>Total</span>
              <span style={{ color: "#722F37" }}>₹{total.toFixed(2)}</span>
            </div>
          </div>
        </motion.div>

        {/* Payment & Shipping */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ color: "#722F37" }}
          >
            Payment Details
          </h2>

          <div className="space-y-4 mb-6">
            {paymentMethods.map(method => (
              <PaymentMethod
                key={method.id}
                {...method}
                isSelected={selectedPaymentMethod === method.id}
                onSelect={() => setSelectedPaymentMethod(method.id)}
              />
            ))}
          </div>

          <h3 
            className="text-xl font-semibold mb-4"
            style={{ color: "#722F37" }}
          >
            Shipping Information
          </h3>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#722F37]/50"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#722F37]/50"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#722F37]/50"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#722F37]/50"
              />
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                placeholder="Zip Code"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#722F37]/50"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCheckout}
            disabled={cartItems.length === 0 || !selectedPaymentMethod}
            className={`
              w-full mt-6 p-4 rounded-lg text-lg font-bold transition-all duration-300
              ${cartItems.length === 0 || !selectedPaymentMethod
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#722F37] text-[#EFDFBB] hover:bg-[#5A2630]'
              }
            `}
          >
            Complete Order
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Checkout;