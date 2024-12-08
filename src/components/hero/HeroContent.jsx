import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const HeroContent = () => (
  <div className={`text-center max-w-4xl px-4 ${styles.content}`}>
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-5xl md:text-7xl font-bold text-white mb-6 ${styles.title}`}
    >
      JOKER
    </motion.h1>
    
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className={`text-lg md:text-xl text-gray-300 mb-8 ${styles.subtitle}`}
    >
      Put on a happy face.
    </motion.p>

    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className={`bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full 
                 transition-colors duration-300 transform hover:scale-105 ${styles.button}`}
      onClick={() => window.open('https://www.youtube.com/watch?v=zAGVQLHvwOY', '_blank')}
    >
      Watch Trailer
    </motion.button>
  </div>
);

export default HeroContent;