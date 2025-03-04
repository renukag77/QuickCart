import React, { useState } from 'react';
import CreamBackground from './components/CreamBackground';
import { motion } from 'framer-motion';
import loginImage from './img.png';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${isLogin ? 'Login' : 'Register'} attempt with:`, { name, email, password });
  };

  return (
    <CreamBackground>
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center min-h-screen px-4 py-10"
      >
        <motion.img 
          src={loginImage} 
          alt="Login Illustration" 
          className="mb-6 max-w-3xl w-full object-contain"
          animate={{ y: [0, -10, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} 
        />

        <div className={`relative flex max-w-4xl w-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 ${isLogin ? '' : 'flex-row-reverse'}`}>
          <motion.div 
            className={`w-1/2 flex flex-col items-center justify-center p-8 transition-all duration-500 ${isLogin ? 'bg-[#722F37]' : 'bg-[#722F37] text-white'}`}
          >
            <h2 className="text-3xl font-bold">{isLogin ? 'Welcome Back' : 'Hello Friend!'}</h2>
            <p className="text-center mt-2 mb-4">
              {isLogin ? 'To keep connected with us, please login with your personal info' : 'Enter your personal details and start your journey with us'}
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-transparent border-2 border-white text-white py-2 px-6 rounded-md cursor-pointer hover:bg-white hover:text-[#722F37] transition-colors"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </motion.button>
          </motion.div>

          <motion.div 
            className="w-1/2 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1 className="text-3xl font-bold text-center mb-2">{isLogin ? 'Log In' : 'Create Account'}</h1>
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#722F37]"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              )}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#722F37]"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#722F37]"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {!isLogin && (
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#722F37]"
                    placeholder="Confirm Your Password"
                    required
                  />
                </div>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#722F37] text-white py-2 px-4 rounded-md hover:bg-[#5a252c] transition-colors duration-300"
              >
                {isLogin ? 'LOG IN' : 'REGISTER'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </CreamBackground>
  );
};

export default LoginPage;
