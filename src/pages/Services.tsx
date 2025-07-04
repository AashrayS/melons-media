
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Building, Settings, Award, Search, Bot, Megaphone, Globe2, Target, PenTool, Users, Palette, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'Setting Foundations',
      description: 'Establishing robust digital foundations for your business with strategic planning and technology infrastructure.',
      features: ['Digital Strategy Planning', 'Technology Stack Selection', 'Brand Architecture', 'Goal Setting & KPIs', 'Market Research']
    },
    {
      icon: Settings,
      title: 'Website Optimization',
      description: 'Enhance your website performance, user experience, and conversion rates through data-driven optimization.',
      features: ['Performance Optimization', 'UX/UI Improvements', 'Conversion Rate Optimization', 'Mobile Responsiveness', 'Speed Enhancement']
    },
    {
      icon: Award,
      title: 'Brand Presence',
      description: 'Build and strengthen your brand identity across all digital touchpoints for maximum recognition.',
      features: ['Brand Identity Design', 'Visual Consistency', 'Brand Guidelines', 'Logo & Asset Creation', 'Brand Positioning']
    },
    {
      icon: Search,
      title: 'SEO & Search Marketing',
      description: 'Improve your search engine visibility and drive organic traffic with comprehensive SEO strategies.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building', 'Local SEO']
    },
    {
      icon: Bot,
      title: 'AI Integration',
      description: 'Leverage artificial intelligence to automate processes and enhance customer experiences.',
      features: ['AI Chatbots', 'Process Automation', 'Predictive Analytics', 'Machine Learning', 'AI-Powered Content']
    },
    {
      icon: Megaphone,
      title: 'Paid Advertising',
      description: 'Strategic paid advertising campaigns across multiple platforms to maximize ROI and reach.',
      features: ['Google Ads', 'Facebook & Instagram Ads', 'LinkedIn Advertising', 'YouTube Marketing', 'PPC Management']
    },
    {
      icon: Globe2,
      title: 'GEO Targeting',
      description: 'Location-based marketing strategies to reach your audience in specific geographic regions.',
      features: ['Local Marketing', 'Geographic Targeting', 'Location-Based Ads', 'Regional SEO', 'Geo-Fencing']
    },
    {
      icon: Target,
      title: 'Brand Omnipresence',
      description: 'Ensure your brand is visible everywhere your customers are across all digital channels.',
      features: ['Multi-Channel Presence', 'Cross-Platform Strategy', 'Brand Consistency', 'Audience Touchpoints', 'Digital Ecosystem']
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Create compelling content that engages your audience and drives meaningful interactions.',
      features: ['Content Strategy', 'Blog Writing', 'Video Production', 'Social Media Content', 'Email Marketing']
    }
  ];

  return (    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/15 via-transparent to-yellow-300/10" />
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-gradient-to-br from-orange-400/25 to-yellow-300/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/3 right-10 w-56 h-56 bg-gradient-to-br from-yellow-300/20 to-orange-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      <Navigation />
      <div className="flex-1 pt-40 md:pt-36 pb-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
              Our <span className="melon-text relative wiggle inline-block">
                Services
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500"></div>
              </span> 🚀
            </h1>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
              We help businesses go from "meh" to "hell yeah!" with killer websites, content that actually converts, and marketing that doesn't suck.
            </p>
          </div>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="glassmorphic-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
              >
                <service.icon className="w-12 h-12 text-orange-400 mb-6" strokeWidth={1} />
                <h3 className="text-xl font-light tracking-tight mb-4">{service.title}</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-white/60 flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="glassmorphic-card p-12 rounded-2xl mb-16">
            <h2 className="text-3xl font-light tracking-tight mb-12 text-center">Our Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-orange-400" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-light mb-3 text-orange-400">Consultation</h3>
                <p className="text-white/70 text-sm leading-relaxed">We start with understanding your vision, goals, and requirements through detailed discussions.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full flex items-center justify-center">
                  <Palette className="w-8 h-8 text-orange-400" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-light mb-3 text-orange-400">Design</h3>
                <p className="text-white/70 text-sm leading-relaxed">Our designers create beautiful, user-centered designs that align with your brand identity.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full flex items-center justify-center">
                  <Code className="w-8 h-8 text-orange-400" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-light mb-3 text-orange-400">Development</h3>
                <p className="text-white/70 text-sm leading-relaxed">We build your solution using cutting-edge technologies and best practices.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-orange-400" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-light mb-3 text-orange-400">Launch</h3>
                <p className="text-white/70 text-sm leading-relaxed">We deploy your project and provide ongoing support to ensure optimal performance.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="glassmorphic-card p-12 rounded-2xl mb-16">
            <h2 className="text-3xl font-light tracking-tight mb-12 text-center">Why Businesses Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-light mb-6 text-orange-400">Technical Excellence</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 mt-2" />
                    <div>
                      <h4 className="text-white/90 font-light mb-1">Latest Technologies</h4>
                      <p className="text-white/60 text-sm">We use cutting-edge tools and frameworks to build future-proof solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 mt-2" />
                    <div>
                      <h4 className="text-white/90 font-light mb-1">Clean Code</h4>
                      <p className="text-white/60 text-sm">Maintainable, scalable code that grows with your business needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 mt-2" />
                    <div>
                      <h4 className="text-white/90 font-light mb-1">Performance Optimized</h4>
                      <p className="text-white/60 text-sm">Fast, responsive applications that provide exceptional user experiences.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-light mb-6 text-orange-400">Client-Focused Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 mt-2" />
                    <div>
                      <h4 className="text-white/90 font-light mb-1">Clear Communication</h4>
                      <p className="text-white/60 text-sm">Regular updates and transparent communication throughout the project.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 mt-2" />
                    <div>
                      <h4 className="text-white/90 font-light mb-1">On-Time Delivery</h4>
                      <p className="text-white/60 text-sm">We respect deadlines and deliver projects on schedule and within budget.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 mt-2" />
                    <div>
                      <h4 className="text-white/90 font-light mb-1">Ongoing Support</h4>
                      <p className="text-white/60 text-sm">Comprehensive support and maintenance to keep your solutions running smoothly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simple FAQ Section */}
          <div className="glassmorphic-card p-12 rounded-2xl mb-16">
            <h2 className="text-3xl font-light tracking-tight mb-12 text-center">The Real Talk FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">Q: What do you actually do?</h3>
                  <p className="text-white/80 leading-relaxed">We make your business look amazing online and actually get you customers. Websites, branding, social media, ads — the whole shebang.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">Q: How fast can you work?</h3>
                  <p className="text-white/80 leading-relaxed">Fast enough to make your competitors nervous. Most projects are done in 2-6 weeks, depending on how much magic you want.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">Q: Do you work with big companies too?</h3>
                  <p className="text-white/80 leading-relaxed">Absolutely! From solo founders to Fortune 500s — good vibes and great results don't discriminate.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">Q: What makes you different?</h3>
                  <p className="text-white/80 leading-relaxed">We're not here to waste your time with corporate BS. We create stuff that works, looks good, and actually grows your business.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories Section */}
          <div className="glassmorphic-card p-12 rounded-2xl mb-16">
            <h2 className="text-3xl font-light tracking-tight mb-12 text-center">We Make Magic Happen ✨</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">�</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">300% More Bookings</h3>
                <p className="text-white/70 text-sm leading-relaxed">Fashion boutique went from crickets to constant bookings in 30 days with our killer branding and content.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">�</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">5x ROI on Ads</h3>
                <p className="text-white/70 text-sm leading-relaxed">Local business turned their ad spend into profit machines with our targeted campaigns.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Premium Clients</h3>
                <p className="text-white/70 text-sm leading-relaxed">Solo founder started attracting high-paying clients after we fixed their digital presence.</p>
              </div>
            </div>
          </div>

          <div className="glassmorphic-card p-12 rounded-2xl text-center">
            {/* Mascot */}
            <div className="mb-6">
              <img 
                src="/lovable-uploads/meons-mascot.jpeg" 
                alt="Melons Media Mascot" 
                className="w-16 h-16 md:w-20 md:h-20 mx-auto hover:scale-110 hover:rotate-6 transition-all duration-300"
              />
            </div>
            
            <h2 className="text-3xl font-light tracking-tight mb-6">Ready to Stop Being Boring?</h2>
            <p className="text-xl text-white/70 font-light mb-8 max-w-2xl mx-auto">
              Let's turn your brand from wallflower to showstopper. No more "meh" websites or crickets on social media.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">              <Button 
                onClick={() => window.location.href = '/booking'}
                className="neumorphic-button px-8 py-3"
              >
                Schedule Consultation
              </Button>              <Button 
                onClick={() => window.location.href = '/contact'}
                variant="outline" 
                className="glassmorphic-button px-8 py-3 border-white/30 text-white font-bold hover:bg-white/20 shadow-lg backdrop-blur-md"
                style={{
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                  color: 'white',
                  fontWeight: '700'
                }}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
