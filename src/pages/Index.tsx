
import React from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Header />
        <HeroSection />
        <ServicesSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
