import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Zap, Palette, Target, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />
      <div className="flex-1 pt-40 md:pt-36 pb-16 px-6">
        <div className="max-w-4xl mx-auto">          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              We're the <span className="bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent relative">
                rebels
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-orange-400"></div>
              </span> your brand needs
            </h1>
            <p className="text-2xl text-white/60 font-light">
              And your competitors will hate us for it
            </p>
          </div>
          
          <div className="glassmorphic-card p-8 rounded-2xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-400/10 rounded-full blur-2xl" />            <div className="relative z-10">
              <h2 className="text-3xl font-light mb-8 text-center">
                <span className="text-white">Plot twist:</span> We're not your typical agency
              </h2>
              
              <p className="text-xl text-white/80 font-light leading-relaxed mb-8">
                While other agencies are busy playing it safe with cookie-cutter websites, we're out here crafting 
                <span className="text-white font-semibold"> digital experiences that make people stop scrolling</span> and start buying.
              </p>
              
              <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
                We're the agency that says "screw boring" and builds brands that <span className="text-white">actually convert</span>. 
                Our secret? We treat every project like it's going to break the internet (in the best way possible).
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white/5 p-6 rounded-xl border border-white/20">
                  <h3 className="text-2xl font-light tracking-tight mb-4 text-white">Our Mission</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    To make boring brands interesting, slow websites lightning-fast, and turn your digital presence 
                    into a money-making machine.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/20">
                  <h3 className="text-2xl font-light tracking-tight mb-4 text-white">Our Vibe</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Young, hungry, and obsessed with results. We don't do corporate BS—we do whatever it takes
                    to make your brand the talk of the internet.
                  </p>
                </div>
              </div>
            </div>
          </div>          <div className="glassmorphic-card p-8 rounded-2xl mb-12">            <h2 className="text-3xl font-light tracking-tight mb-8 text-center">
              What makes us <span className="text-orange-400">dangerously good</span>
            </h2>            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="mb-4 flex justify-center">
                  <Zap className="w-8 h-8 text-orange-400 animate-pulse hover:animate-bounce transition-all duration-300" />
                </div>
                <h3 className="text-lg font-light mb-2 text-white">Lightning Fast</h3>
                <p className="text-white/70 text-sm">Websites so fast, your users won't know what hit them</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="mb-4 flex justify-center">
                  <Palette className="w-8 h-8 text-orange-400 hover:rotate-12 hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-light mb-2 text-white">Insanely Creative</h3>
                <p className="text-white/70 text-sm">Designs that make your competitors weep with envy</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="mb-4 flex justify-center">
                  <Target className="w-8 h-8 text-orange-400 hover:animate-ping transition-all duration-300" />
                </div>
                <h3 className="text-lg font-light mb-2 text-white">Conversion Obsessed</h3>
                <p className="text-white/70 text-sm">Every pixel engineered to turn visitors into customers</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="mb-4 flex justify-center">
                  <TrendingUp className="w-8 h-8 text-orange-400 hover:translate-y-1 hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-light mb-2 text-white">Results Driven</h3>
                <p className="text-white/70 text-sm">We measure success in ROI, not just pretty pictures</p>
              </div>
            </div>
          </div>

          <div className="glassmorphic-card p-8 rounded-2xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl" />            <div className="relative z-10">              <h2 className="text-3xl font-light tracking-tight mb-8 text-center">
                Why brands <span className="text-orange-400">choose us</span> over the "safe" option
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors">
                  <h3 className="text-xl font-light mb-4 text-white">Zero BS Policy</h3>
                  <p className="text-white/70 font-light">No corporate fluff, no endless meetings, no excuses. Just pure, unfiltered results that speak louder than promises.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors">
                  <h3 className="text-xl font-light mb-4 text-white">Speed Demons</h3>
                  <p className="text-white/70 font-light">While others take months, we deliver in weeks. We're fast, but we never compromise on quality—it's basically magic.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors">
                  <h3 className="text-xl font-light mb-4 text-white">ROI Obsessed</h3>
                  <p className="text-white/70 font-light">Every design choice, every line of code, every pixel placement—it all serves one master: your bottom line.</p>
                </div>
              </div>
            </div>
          </div>          <div className="glassmorphic-card p-8 rounded-2xl mb-12">            <h2 className="text-3xl font-light tracking-tight mb-8 text-center">
              Our <span className="text-orange-400">secret sauce</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-light mb-6 text-white">The Melons Method™</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-black font-bold text-sm mr-4 mt-1">1</div>
                    <div>
                      <h4 className="text-white/90 font-light mb-1">Stalk Your Competition</h4>
                      <p className="text-white/60 text-sm">We study what your competitors are doing, then do it 10x better (legally, of course).</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-black font-bold text-sm mr-4 mt-1">2</div>
                    <div>
                      <h4 className="text-white/90 font-light mb-1">Obsess Over Details</h4>
                      <p className="text-white/60 text-sm">Every button placement, color choice, and animation is tested until it converts like crazy.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-black font-bold text-sm mr-4 mt-1">3</div>
                    <div>
                      <h4 className="text-white/90 font-light mb-1">Launch & Dominate</h4>
                      <p className="text-white/60 text-sm">We don't just launch—we optimize, monitor, and keep improving until you're #1.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-400/10 to-white/5 p-8 rounded-2xl border border-white/20">
                <h3 className="text-xl font-light mb-4 text-white">Fun Fact</h3>
                <p className="text-white/70 font-light mb-4">
                  Our websites convert so well, clients often think we're using some kind of dark magic. 
                </p>
                <p className="text-white/60 text-sm italic">
                  (Plot twist: It's just really, really good design and psychology combined with zero compromises on performance.)
                </p>
              </div>
            </div>
          </div>          <div className="text-center glassmorphic-card p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 via-white/5 to-orange-400/5" />
            <div className="relative z-10">              <h2 className="text-4xl font-light tracking-tight mb-4">
                Ready to go from <span className="text-gray-400 line-through">boring</span> to <span className="text-orange-400">legendary</span>?
              </h2>
              <p className="text-white/70 font-light mb-8 max-w-2xl mx-auto text-lg">
                Let's create something that makes your competitors wonder "How the hell did they do that?"
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">                <button 
                  onClick={() => window.location.href = '/booking'}
                  className="bg-orange-400 hover:bg-orange-300 text-black font-semibold px-8 py-4 rounded-lg hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/30 transition-all duration-300"
                >
                  Let's Make Magic
                </button>
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="glassmorphic-button px-8 py-4 text-lg border-white/20 text-white hover:bg-white/10 hover:border-orange-400/40 transition-all duration-300"
                >
                  Just Ask Questions First
                </button>
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
