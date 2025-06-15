
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 bg-black text-white relative overflow-hidden pt-20 md:pt-24">
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
        <div className="max-w-5xl mx-auto text-center z-10 relative animate-fade-in px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-tight mb-6 md:mb-8 leading-tight">
          Brands grow faster when they go{' '}
          <span className="text-orange-400 relative">
            Melons
            <div className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full" />
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 md:mb-12 font-light max-w-4xl mx-auto leading-relaxed px-2">
          We design juicy brands, build scroll-stopping sites, and launch digital experiences that don't just work — they slap.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
          <Button 
            onClick={() => window.location.href = '/booking'}
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-lg px-10 py-6 rounded-lg hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300"
          >
            Let's Make Magic
          </Button>
          <div className="flex items-center gap-3 text-white/60">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-orange-400 border-2 border-black" />
              <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-black" />
              <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-black" />
            </div>
            <span className="text-sm">Trusted by brands</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
