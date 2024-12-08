import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import styles from './Hero.module.css';

const Hero = () => (
  <div className={`relative h-screen ${styles.heroContainer}`}>
    <HeroBackground />
    <div className="relative h-full flex items-center justify-center">
      <HeroContent />
    </div>
  </div>
);

export default Hero;