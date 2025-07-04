
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white relative overflow-hidden pt-16 md:pt-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-transparent to-yellow-300/15" />
      
      {/* Floating geometric shapes - more vibrant */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/40 to-yellow-300/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-yellow-300/35 to-orange-500/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-300/30 to-yellow-400/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-yellow-400/25 to-orange-400/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '3s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
        <div className="max-w-5xl mx-auto text-center z-10 relative animate-fade-in px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-tight">
          Brands grow faster when they go{' '}
          <span className="melon-text relative bounce-gentle">
            Melons 🍈
            <div className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-1 md:h-2 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 rounded-full" />
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-2xl text-orange-100/80 mb-8 md:mb-12 font-medium max-w-4xl mx-auto leading-relaxed px-2">
          We design <span className="text-yellow-300 font-semibold">juicy brands</span>, build <span className="text-orange-300 font-semibold">scroll-stopping sites</span>, and launch digital experiences that don't just work — they <span className="melon-text font-bold wiggle inline-block">slap! 💥</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
          <Button 
            onClick={() => window.location.href = '/booking'}
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg px-12 py-7 rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/40 transition-all duration-300 border-2 border-orange-400"
          >
            Let's Make Magic ✨
          </Button>
          <div className="flex items-center gap-3 text-orange-100/70">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 border-3 border-orange-200 shadow-lg" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 border-3 border-yellow-200 shadow-lg" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-300 to-yellow-400 border-3 border-orange-200 shadow-lg" />
            </div>
            <span className="text-sm font-medium">Trusted by brands that matter</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
