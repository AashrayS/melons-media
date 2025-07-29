import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Booking = () => {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-transparent to-yellow-300/10" />
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-yellow-300/15 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/3 right-10 w-48 h-48 bg-gradient-to-br from-yellow-300/15 to-orange-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      <Navigation />
      <div className="flex-1 pt-40 md:pt-36 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-poppins">
              Let's Talk Business
            </h1>
            <p className="text-xl text-orange-100/90 max-w-3xl mx-auto font-medium leading-relaxed font-poppins">
              Ready to turn your vision into reality? Book a free consultation and let's discuss how we can help your business grow.
            </p>
          </div>
          
          {/* Calendly inline widget */}
          <div className="calendly-inline-widget" data-url="https://calendly.com/water-melonsmedia" style={{minWidth: '320px', height: '700px'}}></div>

          {/* Contact Us Instead Button */}
          <div className="flex justify-center mt-8 mb-16">
            <Button 
              onClick={() => window.location.href = '/contact'}
              variant="outline"
              className="glassmorphic-button px-8 py-3 text-lg border-orange-400/30 text-orange-400 hover:bg-orange-400/10 hover:border-orange-400/50 font-poppins"
            >
              Prefer Email? Contact Us Instead
            </Button>
          </div>
          
          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glassmorphic-card p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-200 font-poppins">Results-Focused</h3>
              <p className="text-orange-100/80 text-sm font-medium font-poppins">We focus on actionable insights and practical solutions tailored to your business goals.</p>
            </div>
            
            <div className="glassmorphic-card p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-200 font-poppins">Free Consultation</h3>
              <p className="text-orange-100/80 text-sm font-medium font-poppins">No hidden costs or surprise charges. Just expert advice from experienced professionals.</p>
            </div>
            
            <div className="glassmorphic-card p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-200 font-poppins">Custom Solutions</h3>
              <p className="text-orange-100/80 text-sm font-medium font-poppins">Every solution is tailored specifically for your project requirements and business needs.</p>
            </div>
          </div>

          {/* What We'll Discuss Section */}
          <div className="mt-16 glassmorphic-card p-8 rounded-2xl">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center text-yellow-200 font-poppins">What We'll Discuss</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 melon-text font-poppins">Your Project Vision</h3>
                <ul className="space-y-3 text-orange-100/80 text-sm font-medium font-poppins">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-3 mt-2" />
                    Business goals and objectives
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-3 mt-2" />
                    Target audience and market
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-3 mt-2" />
                    Success metrics and KPIs
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-3 mt-2" />
                    Timeline and budget requirements
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 melon-text font-poppins">Technical Requirements</h3>
                <ul className="space-y-3 text-orange-100/80 text-sm font-medium font-poppins">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-3 mt-2" />
                    Technology stack and platform preferences
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-3 mt-2" />
                    Integration with existing systems
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-3 mt-2" />
                    Scalability and growth planning
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-3 mt-2" />
                    Performance and security requirements
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Preparation Tips */}
          <div className="mt-16 glassmorphic-card p-8 rounded-2xl">
            <h2 className="text-2xl font-light tracking-tight mb-6 text-center font-poppins">How to Prepare</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-light mb-4 text-orange-400 font-poppins">What to Bring</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm font-poppins">Reference websites or designs you like</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm font-poppins">Brand assets (logos, colors, guidelines)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm font-poppins">Content and media you want to include</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm font-poppins">List of required features and functionality</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-light mb-4 text-orange-400 font-poppins">Things to Consider</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm font-poppins">Project timeline and deadlines</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm font-poppins">Budget range and constraints</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm font-poppins">Decision-making process and stakeholders</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm font-poppins">Technical requirements or limitations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;