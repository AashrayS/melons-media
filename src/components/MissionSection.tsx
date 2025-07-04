
import React from 'react';
import { Button } from '@/components/ui/button';

const MissionSection = () => {
  return (
    <section id="mission" className="py-32 px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-green-900 via-black to-green-900 text-white relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-br from-orange-400/25 to-yellow-400/15 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-yellow-300/20 to-orange-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-5xl mx-auto text-center animate-on-scroll relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-12 melon-text">Our Mission 🎯</h2>
        <p className="text-xl md:text-2xl text-orange-100/90 font-medium mb-16 leading-relaxed">
          We help businesses build their <span className="text-yellow-300 font-semibold">online presence</span> through websites, social media content, and digital marketing. 
          From startups to enterprises — we create digital solutions that actually <span className="text-orange-300 font-semibold">convert and grow</span> your business! 🚀
        </p>
        
        <div className="glassmorphic-card p-10 lg:p-12 rounded-3xl mb-12 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-400/20">
          <p className="text-lg text-orange-100/80 font-medium leading-relaxed mb-10">
            Whether you need professional <span className="text-yellow-300 font-semibold">branding</span>, a conversion-optimized <span className="text-orange-300 font-semibold">website</span>, or comprehensive <span className="text-yellow-300 font-semibold">digital marketing</span> — 
            let's create a strategy that makes you <span className="melon-text font-bold">stand out, search well, and sell better!</span> ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-black font-bold px-10 py-4 text-lg rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/40 transition-all duration-300"
              onClick={() => window.location.href = '/booking'}
            >
              Schedule a Call 📞
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-orange-400/60 text-orange-100 font-bold px-10 py-4 text-lg rounded-xl hover:bg-orange-400/20 hover:text-white hover:border-orange-300 hover:scale-105 transition-all duration-300 backdrop-blur-md"
              onClick={() => window.location.href = '/contact'}
            >
              Get in Touch 💬
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
