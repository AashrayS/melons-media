
import React from 'react';
import { Button } from '@/components/ui/button';

const MissionSection = () => {
  return (
    <section id="mission" className="py-32 px-8 lg:px-16 xl:px-24 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center animate-on-scroll">
        <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-12">Our Mission</h2>
        <p className="text-xl md:text-2xl text-white/80 font-light mb-16 leading-relaxed">
          We believe in cutting through the noise and delivering what actually matters. 
          Our mission is to create digital experiences that drive real impact, without the corporate fluff.
        </p>
        
        <div className="glassmorphic-card p-10 lg:p-12 rounded-3xl mb-12">
          <p className="text-lg text-white/70 font-light leading-relaxed mb-10">
            Ready to transform your brand and leave your competition in the dust? 
            Let's discuss how we can turn your vision into reality and achieve results that matter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="neumorphic-button px-10 py-4 text-lg">
              Schedule a Call
            </Button>
            <Button variant="outline" className="glassmorphic-button px-10 py-4 text-lg border-white/20 text-white hover:bg-white/10">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
