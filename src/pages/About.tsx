
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8 text-center">About Melons Media</h1>
          
          <div className="glassmorphic-card p-8 rounded-2xl mb-12">
            <p className="text-xl text-white/80 font-light leading-relaxed mb-8">
              At Melons Media, we are passionate about creating digital experiences that make a lasting impact. 
              Founded with the vision of bridging the gap between innovative technology and exceptional design, 
              we specialize in crafting bespoke solutions that help businesses thrive in the digital landscape.
            </p>
            
            <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
              Our team of experts combines years of experience in web development, app development, UX/UI design, 
              and digital marketing to deliver comprehensive solutions that drive real results. We believe that 
              great design is not just about aesthetics—it's about creating meaningful connections between brands and their audiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-light tracking-tight mb-4 text-orange-400">Our Vision</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  To be the leading creative agency that transforms businesses through innovative digital solutions 
                  and exceptional design thinking.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light tracking-tight mb-4 text-orange-400">Our Values</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Innovation, collaboration, excellence, and client success drive everything we do. 
                  We're committed to delivering results that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
