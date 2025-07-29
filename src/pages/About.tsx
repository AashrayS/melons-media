import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-green-800 text-white flex flex-col relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 via-transparent to-orange-400/6" />
      <Navigation />
      <div className="flex-1 pt-40 md:pt-36 pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 font-poppins">
              About <span className="text-orange-400 relative">
                Melons Media
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
              </span>
            </h1>
            <p className="text-2xl text-orange-100/80 font-medium font-poppins">
              We help small businesses and solo founders build content channels that drive real business growth
            </p>
          </div>

          {/* What We Do Section */}
          <div className="glassmorphic-card p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-center font-poppins">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-orange-400 font-poppins">Content Strategy</h3>
                <p className="text-white/80 font-poppins">Transform sporadic posting into strategic content that drives business results</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-orange-400 font-poppins">Website Optimization</h3>
                <p className="text-white/80 font-poppins">Align your web presence with business goals to convert visitors into customers</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-orange-400 font-poppins">Growth Consulting</h3>
                <p className="text-white/80 font-poppins">Strategic insights that help small businesses and solo founders scale effectively</p>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="glassmorphic-card p-8 rounded-2xl mb-12 text-center">
            <h2 className="text-3xl font-light tracking-tight mb-8 font-poppins">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-4xl font-bold text-melon-400 mb-2">1.5K%</h3>
                <p className="text-white/80 font-poppins">Organic reach increase in 20 days</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-melon-400 mb-2">4.5K%</h3>
                <p className="text-white/80 font-poppins">Boost in interactions</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-melon-400 mb-2">1.5K%</h3>
                <p className="text-white/80 font-poppins">Increase in website visits</p>
              </div>
            </div>
          </div>

          {/* Meet the Founder Section - About Aashray */}
          <div className="glassmorphic-card p-8 rounded-2xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-400/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-light tracking-tight mb-8 text-center font-poppins">
                Meet the <span className="text-orange-400">Founder</span>
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-white font-poppins">Aashray</h3>
                  <p className="text-lg text-orange-100/90 font-medium leading-relaxed mb-6 font-poppins">
                    Started as a marketing enthusiast, then became a UI designer obsessed with clean design. 
                    But I fell in love with what happens after launch — the data, the hypothesis, the real impact.
                  </p>
                  
                  <p className="text-white/80 leading-relaxed mb-6 font-poppins">
                    Now I help brands and founders go from "We post sometimes" to "This content is working and helping us grow." 
                    I also optimize websites to align with your business goals.
                  </p>

                  <p className="text-white/70 leading-relaxed font-poppins">
                    I'm always happy to chat about what you're working on, share insights, and learn from fellow entrepreneurs.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/20">
                    <h4 className="text-white font-semibold mb-2 font-poppins">Background</h4>
                    <p className="text-white/70 text-sm font-poppins">Marketing enthusiast → UI designer → Growth catalyst</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/20">
                    <h4 className="text-white font-semibold mb-2 font-poppins">Passion</h4>
                    <p className="text-white/70 text-sm font-poppins">Data-driven strategies and post-launch optimization</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/20">
                    <h4 className="text-white font-semibold mb-2 font-poppins">Mission</h4>
                    <p className="text-white/70 text-sm font-poppins">Help small businesses build content channels that drive growth</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/20">
                    <h4 className="text-white font-semibold mb-2 font-poppins">Approach</h4>
                    <p className="text-white/70 text-sm font-poppins">Always learning, sharing insights, and optimizing for results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center glassmorphic-card p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 via-white/5 to-orange-400/5" />
            <div className="relative z-10">
              <h2 className="text-4xl font-light tracking-tight mb-4 font-poppins">
                Ready to grow your business?
              </h2>
              <p className="text-white/70 font-light mb-8 max-w-2xl mx-auto text-lg font-poppins">
                Let's discuss how we can help you build content channels that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = '/booking'}
                  className="bg-melon-500 hover:bg-melon-400 text-slate-900 font-semibold px-8 py-4 rounded-lg hover:scale-105 hover:shadow-2xl hover:shadow-melon-500/30 transition-all duration-300 font-poppins"
                >
                  Book a Free Call
                </button>
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="glassmorphic-button px-8 py-4 text-lg border-white/20 text-white hover:bg-white/10 hover:border-orange-400/40 transition-all duration-300 font-poppins"
                >
                  Send a Message
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
