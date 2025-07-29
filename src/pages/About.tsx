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
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 font-poppins">
              Hi, I'm <span className="text-orange-400 relative">
                Aashray
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
              </span>
            </h1>
            <p className="text-2xl text-orange-100/80 font-medium font-poppins">
              I help small businesses and solo founders build content channels that actually drive business growth
            </p>
          </div>
          
          <div className="glassmorphic-card p-8 rounded-2xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-400/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8 text-center text-yellow-200 font-poppins">
                My Journey: From Marketing Enthusiast to Growth Catalyst
              </h2>
              
              <p className="text-xl text-orange-100/90 font-medium leading-relaxed mb-8 font-poppins">
                It started with a fascination for marketing, then evolved into an obsession with clean UI design. 
                But the real magic happened when I fell in love with what comes after launch — the data, the hypothesis, 
                <span className="text-melon-400 font-bold"> the real impact.</span>
              </p>
              
              <p className="text-lg text-orange-100/80 font-medium leading-relaxed mb-8 font-poppins">
                Now I run Melons Media, where we help brands and founders go from <span className="text-yellow-300 font-bold">"We post sometimes"</span> to 
                <span className="text-yellow-300 font-bold">"Whoa, this content is actually working and helping us grow."</span> 
                We also optimize websites to align perfectly with your business goals.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="glassmorphic-card p-6 rounded-xl hover:scale-105 transition-all duration-300 text-center">
                  <h3 className="text-4xl font-bold tracking-tight mb-2 text-melon-400">1.5K%</h3>
                  <p className="text-orange-100/80 font-medium">Organic reach jump in 20 days</p>
                </div>
                <div className="glassmorphic-card p-6 rounded-xl hover:scale-105 transition-all duration-300 text-center">
                  <h3 className="text-4xl font-bold tracking-tight mb-2 text-melon-400">4.5K%</h3>
                  <p className="text-orange-100/80 font-medium">Boost in interactions</p>
                </div>
                <div className="glassmorphic-card p-6 rounded-xl hover:scale-105 transition-all duration-300 text-center">
                  <h3 className="text-4xl font-bold tracking-tight mb-2 text-melon-400">1.5K%</h3>
                  <p className="text-orange-100/80 font-medium">Increase in website visits</p>
                </div>
              </div>
            </div>
          </div>
          {/* What I Do Section */}
          <div className="glassmorphic-card p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-center font-poppins">
              What I Do <span className="text-orange-400">(The Simple Version)</span>
            </h2>
            <div className="space-y-6 text-white/80">
              <p className="text-lg leading-relaxed font-poppins">
                <strong className="text-white">Content Strategy:</strong> Transform your sporadic posting into a strategic content machine that drives real business results.
              </p>
              <p className="text-lg leading-relaxed font-poppins">
                <strong className="text-white">Website Optimization:</strong> Align your web presence with your business goals to convert visitors into customers.
              </p>
              <p className="text-lg leading-relaxed font-poppins">
                <strong className="text-white">Growth Consulting:</strong> Share insights and strategies that help small businesses and solo founders scale effectively.
              </p>
            </div>
          </div>

          <div className="glassmorphic-card p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-center font-poppins">
              My <span className="text-orange-400">approach</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="mb-4 flex justify-center">
                  <Zap className="w-8 h-8 text-orange-400 animate-pulse hover:animate-bounce transition-all duration-300" />
                </div>
                <h3 className="text-lg font-light mb-2 text-white font-poppins">Data-Driven</h3>
                <p className="text-white/70 text-sm font-poppins">Every strategy is backed by real data and performance metrics</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="mb-4 flex justify-center">
                  <Palette className="w-8 h-8 text-orange-400 hover:rotate-12 hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-light mb-2 text-white font-poppins">Design Obsessed</h3>
                <p className="text-white/70 text-sm font-poppins">Clean, purposeful design that serves your business goals</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="mb-4 flex justify-center">
                  <Target className="w-8 h-8 text-orange-400 hover:animate-ping transition-all duration-300" />
                </div>
                <h3 className="text-lg font-light mb-2 text-white font-poppins">Results Focused</h3>
                <p className="text-white/70 text-sm font-poppins">I care about what happens after launch - real business impact</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="mb-4 flex justify-center">
                  <TrendingUp className="w-8 h-8 text-orange-400 hover:translate-y-1 hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-light mb-2 text-white font-poppins">Growth Mindset</h3>
                <p className="text-white/70 text-sm font-poppins">Always learning, sharing insights, and optimizing for better results</p>
              </div>
            </div>
          </div>

          <div className="glassmorphic-card p-8 rounded-2xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-light tracking-tight mb-8 text-center font-poppins">
                Why founders <span className="text-orange-400">choose to work</span> with me
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors">
                  <h3 className="text-xl font-light mb-4 text-white font-poppins">Proven Results</h3>
                  <p className="text-white/70 font-light font-poppins">Track record of delivering 1000%+ growth in reach, interactions, and website visits for real businesses.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors">
                  <h3 className="text-xl font-light mb-4 text-white font-poppins">Founder-to-Founder</h3>
                  <p className="text-white/70 font-light font-poppins">I understand the hustle, the challenges, and what it takes to grow from zero as a solo entrepreneur.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors">
                  <h3 className="text-xl font-light mb-4 text-white font-poppins">Always Learning</h3>
                  <p className="text-white/70 font-light font-poppins">I love sharing insights, learning from others, and constantly optimizing strategies for better performance.</p>
                </div>
              </div>
            </div>
          </div>          <div className="glassmorphic-card p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-light tracking-tight mb-8 text-center font-poppins">
              My <span className="text-orange-400">proven methodology</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-light mb-6 text-white font-poppins">The Content-Growth Framework</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-black font-bold text-sm mr-4 mt-1">1</div>
                    <div>
                      <h4 className="text-white/90 font-light mb-1 font-poppins">Analyze & Strategize</h4>
                      <p className="text-white/60 text-sm font-poppins">Deep dive into your current content performance and identify growth opportunities.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-black font-bold text-sm mr-4 mt-1">2</div>
                    <div>
                      <h4 className="text-white/90 font-light mb-1 font-poppins">Create & Optimize</h4>
                      <p className="text-white/60 text-sm font-poppins">Build systematic content channels that align with your business goals and audience needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-black font-bold text-sm mr-4 mt-1">3</div>
                    <div>
                      <h4 className="text-white/90 font-light mb-1 font-poppins">Measure & Scale</h4>
                      <p className="text-white/60 text-sm font-poppins">Track real impact through data and continuously optimize for exponential growth.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-400/10 to-white/5 p-8 rounded-2xl border border-white/20">
                <h3 className="text-xl font-light mb-4 text-white font-poppins">What Sets Me Apart</h3>
                <p className="text-white/70 font-light mb-4 font-poppins">
                  I don't just create content — I build content systems that drive measurable business growth. 
                </p>
                <p className="text-white/60 text-sm italic font-poppins">
                  My obsession with what happens after launch means every piece of content is designed for performance, not just aesthetics.
                </p>
              </div>
            </div>
          </div>          <div className="text-center glassmorphic-card p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 via-white/5 to-orange-400/5" />
            <div className="relative z-10">
              <h2 className="text-4xl font-light tracking-tight mb-4 font-poppins">
                Ready to transform your content strategy?
              </h2>
              <p className="text-white/70 font-light mb-8 max-w-2xl mx-auto text-lg font-poppins">
                I'm always happy to chat about what you're working on, share insights, and help you grow. 
                Let's connect and see how we can take your business to the next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = '/booking'}
                  className="bg-melon-500 hover:bg-melon-400 text-slate-900 font-semibold px-8 py-4 rounded-lg hover:scale-105 hover:shadow-2xl hover:shadow-melon-500/30 transition-all duration-300 font-poppins"
                >
                  Let's Talk Strategy
                </button>
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="glassmorphic-button px-8 py-4 text-lg border-white/20 text-white hover:bg-white/10 hover:border-orange-400/40 transition-all duration-300 font-poppins"
                >
                  Just Say Hi First
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
