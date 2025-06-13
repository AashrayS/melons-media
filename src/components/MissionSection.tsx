
import React from 'react';
import { Button } from '@/components/ui/button';

const MissionSection = () => {
  return (
    <section id="mission" className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center animate-on-scroll">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">Our Mission</h2>
        <p className="text-xl md:text-2xl text-white/80 font-light mb-12 leading-relaxed">
          We believe in the power of exceptional design to transform businesses and create meaningful connections. 
          Our mission is to craft digital experiences that not only look stunning but drive real results for our clients.
        </p>
        
        <div className="glassmorphic-card p-8 rounded-2xl mb-12">
          <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
            Transform your ideas into reality and get impactful, unforgettable branding solutions. 
            Let's discuss how we can elevate your brand and achieve your business goals together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="neumorphic-button px-8 py-3">
              Schedule a Call
            </Button>
            <Button variant="outline" className="glassmorphic-button px-8 py-3 border-white/20 text-white hover:bg-white/10">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
