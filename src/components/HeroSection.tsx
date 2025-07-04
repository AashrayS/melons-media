
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white relative overflow-hidden pt-16 md:pt-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-transparent to-yellow-300/15" />
      
      {/* Subtle background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/15 to-yellow-300/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-orange-500/10 to-yellow-300/8 rounded-full blur-xl" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
        <div className="max-w-5xl mx-auto text-center z-10 relative animate-fade-in px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 md:mb-8 leading-tight">
          Brands grow faster when they go{' '}
          <span className="text-orange-400 relative">
            Melons
            <div className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-1 md:h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" />
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-2xl text-white/70 mb-8 md:mb-12 font-light max-w-4xl mx-auto leading-relaxed px-2">
          We design <span className="text-orange-300 font-medium">juicy brands</span>, build <span className="text-orange-300 font-medium">scroll-stopping sites</span>, and launch digital experiences that don't just work — they <span className="text-orange-400 font-medium">deliver results</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
          <Button 
            onClick={() => window.location.href = '/booking'}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-10 py-6 rounded-lg hover:scale-105 transition-all duration-300"
          >
            Let's Talk
          </Button>
          <div className="flex items-center gap-3 text-white/60">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 border-2 border-white/20" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 border-2 border-white/20" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 border-2 border-white/20" />
            </div>
            <span className="text-sm font-light">Trusted by growing brands</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
