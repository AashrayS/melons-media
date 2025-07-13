import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Zap, Palette, Target, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-green-800 text-white flex flex-col relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 via-transparent to-orange-400/6" />
      <Navigation />
      <div className="flex-1 pt-40 md:pt-36 pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              We're the <span className="text-orange-400 relative">
                Anti-Boring Agency
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
              </span> you need
            </h1>
            <p className="text-2xl text-orange-100/80 font-medium font-poppins">
              We make brands that don't suck (and actually make money! 💰)
            </p>
          </div>
          
          <div className="glassmorphic-card p-8 rounded-2xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-400/10 rounded-full blur-2xl" />            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8 text-center text-yellow-200">
                Plot twist: We actually know what we're doing! 🎭
              </h2>
              
              <p className="text-xl text-orange-100/90 font-medium leading-relaxed mb-8">
                While other agencies are busy making pretty things that don't work, we're out here creating 
                <span className="melon-text font-bold"> digital experiences that actually make you money! 💰</span>
              </p>
              
              <p className="text-lg text-orange-100/80 font-medium leading-relaxed mb-8">
                We've helped brands go from <span className="text-yellow-300 font-bold">"who are these guys?"</span> to 
                <span className="text-yellow-300 font-bold">"shut up and take my money!"</span> And we can do the same for you. <span className="wiggle inline-block">✨</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="glassmorphic-card p-8 rounded-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold tracking-tight mb-4 text-yellow-200">Our Mission 🎯</h3>
                  <p className="text-orange-100/80 font-medium leading-relaxed">
                    To establish digital foundations, optimize performance, and create brand omnipresence 
                    that drives <span className="melon-text font-bold">sustainable growth</span> across all channels! 🚀
                  </p>
                </div>
                <div className="glassmorphic-card p-8 rounded-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold tracking-tight mb-4 text-yellow-200">Our Approach 💪</h3>
                  <p className="text-orange-100/80 font-medium leading-relaxed mb-4">
                    Strategic, data-driven, and tech-forward. We combine cutting-edge technology with 
                    proven media strategies to deliver <span className="melon-text font-bold">measurable results! 📊</span>
                  </p>
                  <p className="text-orange-100/80 font-medium leading-relaxed">
                    Young, hungry, and obsessed with results. We don't do corporate BS—we do whatever it takes
                    to make your brand the <span className="text-yellow-300 font-bold">talk of the internet! 🌟</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What We Actually Do Section */}
          <div className="glassmorphic-card p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-center">
              What We Actually Do <span className="text-orange-400">(The Simple Version)</span>
            </h2>
            <div className="space-y-6 text-white/80">
              <p className="text-lg leading-relaxed">
                <strong className="text-white">Websites:</strong> We build them fast, make them pretty, and ensure they actually get you customers.
              </p>
              <p className="text-lg leading-relaxed">
                <strong className="text-white">Branding:</strong> We make you look like the professional badass you are (even if you feel like you're winging it).
              </p>
              <p className="text-lg leading-relaxed">
                <strong className="text-white">Marketing:</strong> We put you in front of people who actually want to buy your stuff. Novel concept, right?
              </p>
            </div>
          </div>

          <div className="glassmorphic-card p-8 rounded-2xl mb-12">            <h2 className="text-3xl font-light tracking-tight mb-8 text-center">
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
            <div className="relative z-10">              <h2 className="text-4xl font-light tracking-tight mb-4 font-poppins">
                Ready to go from boring to legendary?
              </h2>
              <p className="text-white/70 font-light mb-8 max-w-2xl mx-auto text-lg font-poppins">
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
