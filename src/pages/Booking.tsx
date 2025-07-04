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
            {/* Mascot */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/meons-mascot.jpeg" 
                alt="Melons Media Mascot" 
                className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 hover:rotate-12 hover:scale-110 transition-all duration-300 drop-shadow-2xl bounce-gentle"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Let's <span className="melon-text wiggle inline-block">Talk Business</span> 🚀
            </h1>
            <p className="text-xl text-orange-100/90 max-w-3xl mx-auto font-medium leading-relaxed">
              Ready to turn your <span className="text-yellow-300 font-semibold">"someday"</span> into <span className="text-orange-300 font-semibold">"right now"</span>? Book a free call and let's figure out how to make your competitors <span className="melon-text font-bold">nervous! 😎</span>
            </p>
          </div>
          
          {/* Calendly inline widget */}
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
          </div>
          
          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glassmorphic-card p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 wiggle">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-yellow-200">No BS, Just Results</h3>
              <p className="text-orange-100/80 text-sm font-medium">Pick a time, show up, get insights. We don't do lengthy sales pitches — just pure <span className="melon-text font-bold">value! 💎</span></p>
            </div>
            
            <div className="glassmorphic-card p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 bounce-gentle">💬</div>
              <h3 className="text-xl font-bold mb-3 text-yellow-200">Actually Free</h3>
              <p className="text-orange-100/80 text-sm font-medium">No hidden costs, no surprise charges. Just good advice from people who know their <span className="melon-text font-bold">stuff! 🎯</span></p>
            </div>
            
            <div className="glassmorphic-card p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 wiggle">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-yellow-200">Custom Solutions</h3>
              <p className="text-orange-100/80 text-sm font-medium">We'll talk about <span className="text-yellow-300 font-bold">YOUR</span> project, not some cookie-cutter template. <span className="melon-text font-bold">Tailored = Better! ✨</span></p>
            </div>
          </div>

          {/* What We'll Discuss Section */}
          <div className="mt-16 glassmorphic-card p-8 rounded-2xl">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center text-yellow-200">What We'll Actually Talk About 🗣️</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 melon-text">Your Big Picture 🎨</h3>
                <ul className="space-y-3 text-orange-100/80 text-sm font-medium">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-3 mt-2" />
                    What you're trying to achieve (and <span className="text-yellow-300 font-bold">why</span> it matters)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-3 mt-2" />
                    Who you're trying to reach (your <span className="melon-text font-bold">dream customers</span>)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-3 mt-2" />
                    How we'll measure <span className="text-yellow-300 font-bold">success</span> together
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-3 mt-2" />
                    Your timeline and budget <span className="melon-text font-bold">reality check</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 melon-text">The Nerdy Stuff 🤓</h3>
                <ul className="space-y-3 text-orange-100/80 text-sm font-medium">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-3 mt-2" />
                    What <span className="text-yellow-300 font-bold">tech</span> makes sense for your project
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-3 mt-2" />
                    What needs to connect to what (the <span className="melon-text font-bold">integration magic</span>)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-3 mt-2" />
                    How to handle <span className="text-yellow-300 font-bold">growth</span> (the good problem!)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mr-3 mt-2" />
                    Speed and performance expectations (<span className="melon-text font-bold">lightning fast!</span>)
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