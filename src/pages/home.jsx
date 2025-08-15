import React from 'react'
import HeroSection from '../components/hero'
import BuildersSection from '../components/builder-section'
import CareerPaths from '../components/career-path'
import LearningTracks from '../components/learning-track'
import OurCommunity from '../components/community'
import FounderSection from '../components/founder'
import LearningStrategy from '../components/learning-stragegy'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <BuildersSection />
      <CareerPaths />
      <LearningTracks />
      <OurCommunity />
      <FounderSection />
      <LearningStrategy />
    </div>
  )
}

export default HomePage