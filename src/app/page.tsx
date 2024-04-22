"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/vb.jpg')",
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto p-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Explore India by Rail
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Experience the thrill of train travel with IRRS.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        >
          <motion.button
            className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => router.push("/book")}
          >
            Book Tickets
          </motion.button>
          <motion.button
            className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => router.push("/pnr")}
          >
            Check PNR
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Why Choose IRRS?
          </h2>
          <ul className="text-gray-300 text-lg md:text-xl leading-relaxed">
            <li className="mb-2">✓ Seamless booking experience</li>
            <li className="mb-2">✓ Secure online payments</li>
            <li className="mb-2">✓ Real-time train tracking</li>
            <li className="mb-2">✓ Personalized recommendations</li>
          </ul>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
        >
          <p className="text-gray-400">Brought to you by NoFilter LLC</p>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;