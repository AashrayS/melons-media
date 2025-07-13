import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Professional background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-melon-500/15 via-transparent to-melon-400/10" />
      
      {/* Subtle decorative shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-melon-400/20 to-melon-500/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-melon-300/15 to-melon-600/8 rounded-full blur-xl" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-melon-500/20 to-melon-400/15 rounded-full blur-md animate-pulse" style={{ animationDelay: '3s' }} />
      
      {/* Professional grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }} />

      <div className="max-w-5xl mx-auto text-center z-10 relative animate-fade-in px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-tight font-poppins">
          Brands grow faster when they go{' '}
          <span className="text-melon-400">
            Melons 🍈
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-2xl text-slate-200 mb-8 md:mb-12 font-medium max-w-4xl mx-auto leading-relaxed px-2 font-poppins">
          We design <span className="text-melon-300 font-semibold">powerful brands</span>, build <span className="text-melon-400 font-semibold">conversion-focused sites</span>, and launch digital experiences that don't just work — they <span className="melon-text font-bold text-melon-400 animate-pulse hover:animate-bounce hover:scale-110 transition-all duration-300">dominate! 🚀</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
          <Button 
            onClick={() => window.location.href = '/booking'}
            className="bg-melon-500 hover:bg-melon-400 text-slate-900 font-bold text-lg px-12 py-7 rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-melon-500/40 transition-all duration-300 border-2 border-melon-400 font-poppins"
          >
            Start Your Growth ⚡
          </Button>
          <div className="flex items-center gap-3 text-slate-300">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-melon-400 to-melon-500 border-3 border-slate-200 shadow-lg" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forest-400 to-forest-500 border-3 border-slate-200 shadow-lg" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-melon-300 to-forest-400 border-3 border-slate-200 shadow-lg" />
            </div>
            <span className="text-sm font-medium font-poppins">Trusted by industry leaders</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
