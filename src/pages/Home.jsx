// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import MotivationSection from '../components/MotivationSection';
import ProductGallery from './ProductGallery';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MotivationSection />
      <Gallery />
      <ProductGallery />
    </>
  );
}
