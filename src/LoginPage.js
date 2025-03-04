import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!isLogin && password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    // Simulate successful login/signup
    if (isLogin) {
      // Navigate to home page on successful login
      navigate('/');
    } else {
      // For signup, you might want to add user registration logic
      navigate('/');
    }
  };

  const handleSocialLogin = (provider) => {
    // Placeholder for social login logic
    console.log(`Logging in with ${provider}`);
    navigate('/');
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const elementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 120 
      }
    }
  };

  const socialButtonVariants = {
    hover: { 
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      transition: { 
        duration: 0.3 
      }
    },
    tap: { scale: 0.95 }
  };

  const socialLogins = [
    {
      provider: 'Google',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#DB4437">
          <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
        </svg>
      )
    },
    {
      provider: 'Facebook',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#3b5998">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
        </svg>
      )
    },
    {
      provider: 'Apple',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000">
          <path d="M22.56 12.25c0-.78-.07-1.48-.2-2.12h-9.91v4.45h6.35a5.07 5.07 0 0 1-2.36 3.42v2.45h3.52c2.26-1.96 3.6-4.85 3.6-8.2z" fill="#4285F4"/>
          <path d="M12.45 22.75c3.65 0 6.68-1.13 8.9-2.45l-3.52-2.45c-1.13.75-2.55 1.2-5.38 1.2-4.13 0-7.61-2.61-8.86-6.44H0v2.45C2.22 20.45 6.98 22.75 12.45 22.75z" fill="#34A853"/>
          <path d="M3.57 14.56c-.25-.75-.38-1.54-.38-2.36s.14-1.61.38-2.36V7.39H0C-.98 9.18-1.55 11.22-1.55 13.2s.57 4.02 1.55 5.81l3.57-2.45z" fill="#FBBC05"/>
          <path d="M12.45 3.04c2.83 0 5.24 1.11 7.18 3.05l-5.35 5.35a9.15 9.15 0 0 0-1.83-1.83l-3.52-2.45c-1.13.75-2.55 1.2-5.38 1.2C3.42 5.7 6.98 3.04 12.45 3.04z" fill="#EA4335"/>
        </svg>
      )
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#FFF5E1] to-[#FFE4B5] p-4 relative overflow-hidden"
    >
      <motion.div 
        variants={elementVariants}
        className="relative z-10 w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex"
      >
        {/* Left Panel */}
        <motion.div 
          variants={elementVariants}
          className="w-1/2 bg-[#722F37] text-white flex flex-col justify-center p-12 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 80, 
              delay: 0.5 
            }}
            className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full"
          />
          <motion.div 
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 80, 
              delay: 0.7 
            }}
            className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full"
          />

          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold mb-6"
          >
            {isLogin ? 'Welcome Back' : 'Hello, Friend!'}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg mb-8"
          >
            {isLogin 
              ? 'Connect with us and continue your journey' 
              : 'Create an account and start exploring'}
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsLogin(!isLogin)}
            className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-[#722F37] transition-colors"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </motion.button>
        </motion.div>

        {/* Right Panel */}
        <motion.div 
          variants={elementVariants}
          className="w-1/2 p-12"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-[#722F37] text-center mb-8"
          >
            {isLogin ? 'Log In' : 'Create Account'}
          </motion.h1>

          {/* Social Login */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-4 mb-6"
          >
            {socialLogins.map((social) => (
              <motion.button
                key={social.provider}
                variants={socialButtonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => handleSocialLogin(social.provider)}
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                {social.icon}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-gray-500 mb-4"
          >
            <span>or use your email account</span>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence>
              {!isLogin && (
                <motion.div
                  key="name-input"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#722F37]"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.input
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#722F37]"
            />

            <motion.input
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#722F37]"
            />

            <AnimatePresence>
              {!isLogin && (
                <motion.div
                  key="confirm-password"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 
                      ${passwordError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#722F37]'}`}
                  />
                  {passwordError && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {passwordError}
                    </motion.p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#722F37] text-white py-3 rounded-lg hover:bg-[#5a252c] transition-colors"
            >
              {isLogin ? 'LOG IN' : 'REGISTER'}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;