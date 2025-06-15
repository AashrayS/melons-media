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

  return (    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col">
      <Navigation />
      <div className="flex-1 pt-32 md:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Book Your <span className="text-orange-400">Free Consultation</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ready to transform your digital presence? Schedule a free consultation with our team and let's discuss how we can bring your vision to life.
            </p>
          </div>          {/* Calendly inline widget */}
          <div className="calendly-inline-widget" data-url="https://calendly.com/water-melonsmedia" style={{minWidth: '320px', height: '700px'}}></div>

          {/* Contact Us Instead Button */}
          <div className="flex justify-center mt-8 mb-16">
            <Button 
              onClick={() => window.location.href = '/contact'}
              variant="outline"
              className="glassmorphic-button px-8 py-3 text-lg border-orange-400/30 text-orange-400 hover:bg-orange-400/10 hover:border-orange-400/50"
            >
              Contact Us Instead
            </Button>
          </div>          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glassmorphic-card p-6 rounded-xl">
              <div className="text-orange-400 text-2xl mb-4">⚡</div>
              <h3 className="text-lg font-light mb-2">Quick & Easy</h3>
              <p className="text-white/70 text-sm">Choose a time that works for you - no hassle, no long forms</p>
            </div>
            
            <div className="glassmorphic-card p-6 rounded-xl">
              <div className="text-orange-400 text-2xl mb-4">💬</div>
              <h3 className="text-lg font-light mb-2">Free Consultation</h3>
              <p className="text-white/70 text-sm">Get expert advice and insights about your project at no cost</p>
            </div>
            
            <div className="glassmorphic-card p-6 rounded-xl">
              <div className="text-orange-400 text-2xl mb-4">🎯</div>
              <h3 className="text-lg font-light mb-2">Tailored Solutions</h3>
              <p className="text-white/70 text-sm">We'll discuss your specific needs and create a custom strategy</p>
            </div>
          </div>

          {/* What We'll Discuss Section */}
          <div className="mt-16 glassmorphic-card p-8 rounded-2xl">
            <h2 className="text-2xl font-light tracking-tight mb-8 text-center">What We'll Discuss in Your Call</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-light mb-4 text-orange-400">Your Project Goals</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 mt-2" />
                    Understanding your business objectives
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 mt-2" />
                    Identifying your target audience
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 mt-2" />
                    Defining success metrics
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 mt-2" />
                    Timeline and budget considerations
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-light mb-4 text-orange-400">Technical Requirements</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 mt-2" />
                    Platform and technology preferences
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 mt-2" />
                    Integration needs
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 mt-2" />
                    Scalability requirements
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 mt-2" />
                    Performance expectations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Preparation Tips */}
          <div className="mt-16 glassmorphic-card p-8 rounded-2xl">
            <h2 className="text-2xl font-light tracking-tight mb-6 text-center">How to Prepare for Your Call</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-light mb-4 text-orange-400">Have Ready</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm">Examples of websites/apps you like</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm">Your brand guidelines (if available)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm">Content and images you want to include</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm">List of required features</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-light mb-4 text-orange-400">Think About</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm">Your ideal project timeline</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm">Budget range for the project</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm">Who will be involved in decisions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm">Any technical constraints</span>
                  </div>
                </div>              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;