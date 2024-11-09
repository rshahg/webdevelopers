// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import HelpSection from '../components/HelpSection';
import StepsSection from '../components/StepsSection';
import CardSection from '../components/CardSection';
import HeroBanner from '../components/HeroBanner';
import ApproachSection from '../components/ApproachSection';
import TestimonialSection from '../components/TestimonialSection';
import BannerHero from '../components/BannerHero';
import ContactSection from '../components/ContactSection';






const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <HelpSection />
      <StepsSection />
      <CardSection/>
      <HeroBanner/>
      <ApproachSection/>
      <TestimonialSection/>
      <BannerHero/>
      <ContactSection/>

      {/* Add more sections here */}
    </div>
  );
};

export default HomePage;
