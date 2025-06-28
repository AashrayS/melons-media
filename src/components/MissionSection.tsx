
import React from 'react';
import { Button } from '@/components/ui/button';

const MissionSection = () => {
  return (
    <section id="mission" className="py-32 px-8 lg:px-16 xl:px-24 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center animate-on-scroll">
        <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-12">Our Mission</h2>
        <p className="text-xl md:text-2xl text-white/80 font-light mb-16 leading-relaxed">
          We help local businesses build their online presence through websites, social media content, and digital marketing. 
          From boutique brands to solo founders — we create digital solutions that actually convert and grow your business.
        </p>
        
        <div className="glassmorphic-card p-10 lg:p-12 rounded-3xl mb-12">
          <p className="text-lg text-white/70 font-light leading-relaxed mb-10">
            Whether you need a boutique website with reels, Instagram marketing for your salon, or complete digital branding for your business — 
            let's create a strategy that makes you stand out, search well, and sell better.
          </p>          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="neumorphic-button px-10 py-4 text-lg text-white font-semibold"
              onClick={() => window.location.href = '/booking'}
            >
              Schedule a Call
            </Button>            <Button 
              variant="outline" 
              className="glassmorphic-button px-10 py-4 text-lg border-white/30 text-white font-bold hover:bg-white/20 hover:text-white shadow-lg backdrop-blur-md"
              style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                color: 'white',
                fontWeight: '700'
              }}
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
