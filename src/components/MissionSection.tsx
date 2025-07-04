
import React from 'react';
import { Button } from '@/components/ui/button';

const MissionSection = () => {
  return (
    <section id="mission" className="py-32 px-8 lg:px-16 xl:px-24 bg-black text-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/3 via-transparent to-orange-400/3" />
      
      <div className="max-w-5xl mx-auto text-center animate-on-scroll relative z-10">
        <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-12">Our Mission</h2>
        <p className="text-xl md:text-2xl text-white/80 font-light mb-16 leading-relaxed">
          We help businesses build their online presence through websites, social media content, and digital marketing. 
          From startups to enterprises — we create digital solutions that actually convert and grow your business.
        </p>
        
        <div className="glassmorphic-card p-10 lg:p-12 rounded-3xl mb-12 hover:scale-105 transition-all duration-300">
          <p className="text-lg text-white/70 font-light leading-relaxed mb-10">
            Whether you need professional branding, a conversion-optimized website, or comprehensive digital marketing — 
            let's create a strategy that makes you stand out, search well, and sell better.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300"
              onClick={() => window.location.href = '/booking'}
            >
              Schedule a Call
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-orange-400/60 text-white font-medium px-8 py-4 text-lg rounded-lg hover:bg-orange-400/20 hover:border-orange-300 transition-all duration-300"
              onClick={() => window.location.href = '/contact'}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
