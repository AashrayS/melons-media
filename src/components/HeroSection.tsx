
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10" />
      
      <div className="max-w-4xl mx-auto text-center z-10 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 leading-tight">
          Where innovation meets{' '}
          <span className="text-orange-400">artistry!</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/70 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
          Our design agency is dedicated to crafting bespoke, unforgettable visual experiences for brands that dare to stand out.
        </p>
        
        <Button className="neumorphic-button text-lg px-8 py-6">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
