import React, { useEffect } from 'react'
import HeroSection from '../components/hero'
import BuildersSection from '../components/builder-section'
import CareerPaths from '../components/career-path'
import LearningTracks from '../components/learning-track'
import OurCommunity from '../components/community'
import FounderSection from '../components/founder'
import LearningStrategy from '../components/learning-stragegy'
import FAQ from '../components/faqs'
import Empower from '../components/empower'
import Navbar from '../components/navbar'
import { motion } from 'framer-motion'

// Define animation variants for the bouncing effect
const bounceVariants = {
  animate: {
    y: [-20, 20, -20], // Move up and down for bounce
    transition: {
      y: {
        repeat: Infinity, // Keep bouncing
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  },
};

const HomePage = () => {
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div
          variants={bounceVariants}
          animate="animate"
          className="w-16 h-16 bg-blue-700 rounded-full"
        />
      </div>
    )
  }

  return (
    <div>
      <HeroSection />
      <BuildersSection />
      <CareerPaths />
      <LearningTracks />
      <OurCommunity />
      <FounderSection />
      <LearningStrategy />
      <FAQ />
      <Empower />
    </div>
  )
}

export default HomePage