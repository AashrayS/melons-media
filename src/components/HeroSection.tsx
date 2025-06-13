
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-300/15 to-transparent rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="max-w-5xl mx-auto text-center z-10 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8 leading-tight">
          Young, no-BS{' '}
          <span className="text-orange-400 relative">
            creative
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full" />
          </span>
          {' '}tech agency
        </h1>
        
        <p className="text-xl md:text-2xl text-white/70 mb-12 font-light max-w-4xl mx-auto leading-relaxed">
          We create digital experiences that don't suck. No corporate BS, just results that make your competitors jealous and your customers obsessed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button className="neumorphic-button text-lg px-10 py-6 text-white">
            Let's Build Something Epic
          </Button>
          <div className="flex items-center gap-3 text-white/60">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-orange-400 border-2 border-black" />
              <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-black" />
              <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-black" />
            </div>
            <span className="text-sm">Trusted by 50+ brands</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
