import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('images/joker.jpg')",
          filter: "brightness(0.6)",
        }}
      />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center max-w-4xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6">
            JOKER
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-8">
            Put on a happy face.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full 
                     transition-colors duration-300 transform hover:scale-105"
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=zAGVQLHvwOY",
                "_blank"
              )
            }>
            Watch Trailer
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
