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
      <div className="flex-1 pt-40 md:pt-36 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Mascot */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/melons-mascot.jpeg" 
                alt="Melons Media Mascot" 
                className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 hover:animate-pulse transition-all duration-300"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Let's <span className="text-orange-400">Talk Business</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ready to turn your "someday" into "right now"? Book a free call and let's figure out how to make your competitors nervous.
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
              Prefer to Type? Contact Us
            </Button>
          </div>          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glassmorphic-card p-6 rounded-xl">
              <div className="text-orange-400 text-2xl mb-4">⚡</div>
              <h3 className="text-lg font-light mb-2">No BS, Just Results</h3>
              <p className="text-white/70 text-sm">Pick a time, show up, get insights. We don't do lengthy sales pitches.</p>
            </div>
            
            <div className="glassmorphic-card p-6 rounded-xl">
              <div className="text-orange-400 text-2xl mb-4">💬</div>
              <h3 className="text-lg font-light mb-2">Actually Free</h3>
              <p className="text-white/70 text-sm">No hidden costs, no surprise charges. Just good advice from people who know their stuff.</p>
            </div>
            
            <div className="glassmorphic-card p-6 rounded-xl">
              <div className="text-orange-400 text-2xl mb-4">🎯</div>
              <h3 className="text-lg font-light mb-2">Custom Solutions</h3>
              <p className="text-white/70 text-sm">We'll talk about YOUR project, not some cookie-cutter template.</p>
            </div>
          </div>

          {/* What We'll Discuss Section */}
          <div className="mt-16 glassmorphic-card p-8 rounded-2xl">
            <h2 className="text-2xl font-light tracking-tight mb-8 text-center">What We'll Actually Talk About</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-light mb-4 text-orange-400">Your Big Picture</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 mt-2" />
                    What you're trying to achieve (and why)
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 mt-2" />
                    Who you're trying to reach
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 mt-2" />
                    How we'll measure success
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 mt-2" />
                    Your timeline and budget reality check
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-light mb-4 text-orange-400">The Nerdy Stuff</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 mt-2" />
                    What tech makes sense for your project
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 mt-2" />
                    What needs to connect to what
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 mt-2" />
                    How to handle growth (the good problem)
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 mt-2" />
                    Speed and performance expectations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Preparation Tips */}
          <div className="mt-16 glassmorphic-card p-8 rounded-2xl">
            <h2 className="text-2xl font-light tracking-tight mb-6 text-center">Come Prepared (Or Don't, We're Flexible)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-light mb-4 text-orange-400">Bring These If You Have Them</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm">Sites/apps you love (or hate)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm">Your brand stuff (logos, colors, etc.)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm">Content and photos you want to use</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm">Your "must-have" features list</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-light mb-4 text-orange-400">Think About This Stuff</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm">When you need this done by</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm">What you can realistically spend</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm">Who else needs to approve stuff</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-white/70 text-sm">Any weird technical requirements</span>
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