"use client";
import React from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-5xl font-bold text-white mb-4">
          Welcome to IRRS
        </h1>
        <p className="text-xl text-white mb-8">
          Your ultimate destination for booking train tickets in India.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      >
        <motion.button
          className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-purple-600 hover:text-white transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Book Tickets
        </motion.button>
        <motion.button
          className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-purple-600 hover:text-white transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          PNR Status
        </motion.button>
      </motion.div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
      >
        <div className="flex items-center justify-center mb-4">
          <div className="h-1 w-16 bg-white rounded"></div>
          <span className="text-white mx-4">Features</span>
          <div className="h-1 w-16 bg-white rounded"></div>
        </div>
        <ul className="text-white text-center">
          <li className="mb-2">✓ Easy booking process</li>
          <li className="mb-2">✓ Secure transactions</li>
          <li className="mb-2">✓ Real-time train tracking</li>
          <li className="mb-2">✓ Personalized recommendations</li>
        </ul>
      </motion.div>

      <motion.div
        className="mt-16 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
      >
        Brought to you by NoFilter LLC
      </motion.div>
    </div>
  );
};

export default LandingPage;